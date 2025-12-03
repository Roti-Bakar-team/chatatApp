"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQRCode = exports.getSocket = void 0;
exports.deleteSession = deleteSession;
exports.connectToWhatsApp = connectToWhatsApp;
const axios_1 = __importDefault(require("axios"));
const baileys_1 = require("@whiskeysockets/baileys");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const config_2 = require("./config");
let sock;
let qrCode = null;
const sessionDir = path_1.default.resolve(config_1.SESSION_DIR);
// Function to delete the session directory
function deleteSession() {
    if (fs_1.default.existsSync(sessionDir)) {
        fs_1.default.rmSync(sessionDir, { recursive: true, force: true });
        console.log("Session directory deleted.");
    }
    else {
        console.log("Session directory does not exist.");
    }
}
// Function to connect to WhatsApp
async function connectToWhatsApp() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { state, saveCreds } = await (0, baileys_1.useMultiFileAuthState)(config_1.SESSION_DIR);
    sock = (0, baileys_1.makeWASocket)({
        printQRInTerminal: true,
        auth: state,
    });
    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect, qr } = update;
        if (qr) {
            console.log("New QR code received.");
            qrCode = qr;
        }
        if (connection === "close") {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !==
                baileys_1.DisconnectReason.loggedOut;
            console.log("Connection closed due to", lastDisconnect?.error, ", reconnecting:", shouldReconnect);
            if (shouldReconnect) {
                setTimeout(() => connectToWhatsApp(), config_1.DEFAULT_RECONNECT_INTERVAL);
            }
            else {
                qrCode = null;
                deleteSession();
                console.log("Connection logged out, starting a new session...");
                connectToWhatsApp();
            }
        }
        else if (connection === "open") {
            console.log("Connection opened");
            qrCode = null; // Clear QR code after successful login
        }
    });
    sock.ev.on("creds.update", saveCreds);
    // Listen for incoming messages
    sock.ev.on("messages.upsert", async (m) => {
        const msg = m.messages[0];
        if (!msg.key.fromMe && m.type === "notify") {
            // Log the entire message object for debugging
            console.log("Received new message:", JSON.stringify(msg, undefined, 2));
            // The sender's number is in msg.key.remoteJid
            // const senderNumber = msg.key.remoteJid;
            const senderNumber = msg.key.remoteJid?.split("@")[0] || "unknown";
            console.log("Sender Number:", senderNumber);
            // The message content depends on the message type.
            // For a simple text message, it's in msg.message.conversation.
            const messageContent = msg.message?.conversation ||
                msg.message?.extendedTextMessage?.text ||
                "No text content";
            console.log("Message Content:", messageContent);
            try {
                await axios_1.default.post(`${config_2.API_URL_ChatatID}/api/messages`, {
                    number: senderNumber,
                    message: messageContent,
                });
                console.log("Message sent to Next.js API");
            }
            catch (error) {
                console.error("Error sending message to Next.js API:", error);
            }
        }
    });
}
const getSocket = () => sock;
exports.getSocket = getSocket;
const getQRCode = () => qrCode;
exports.getQRCode = getQRCode;
