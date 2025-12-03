"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const socket_1 = require("./socket");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Endpoint to get QR Code if available
app.get('/', (req, res) => {
    const qr = (0, socket_1.getQRCode)();
    if (qr) {
        res.json({ success: true, qrCode: qr });
    }
    else {
        res.json({
            success: false,
            message: 'No QR Code available at the moment or already connected.',
        });
    }
});
// Endpoint to send a message
app.post('/send-message', async (req, res) => {
    const { number, message } = req.body;
    const sock = (0, socket_1.getSocket)();
    if (!sock) {
        return res.status(503).send('WhatsApp client is not ready.');
    }
    if (!number || !message) {
        return res.status(400).send('Number and message are required.');
    }
    try {
        const waNumber = number.includes('@s.whatsapp.net')
            ? number
            : `${number}@s.whatsapp.net`;
        await sock.sendMessage(waNumber, { text: message });
        res.send('Message sent successfully.');
    }
    catch (error) {
        console.error('Failed to send message:', error);
        res.status(500).send('Failed to send message: ' + error.message);
    }
});
// Initialize the app
const startServer = async () => {
    // Delete old session and start a new connection
    (0, socket_1.deleteSession)();
    await (0, socket_1.connectToWhatsApp)();
    app.listen(Number(config_1.PORT), '0.0.0.0', () => {
        console.log(`Server is running on http://localhost:${config_1.PORT}`);
    });
};
startServer();
