"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { processChatAction } from "@/actions/order-actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input"; // Import Input
import { Label } from "@/components/ui/label"; // Import Label
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { ActionState } from "@/types";

const initialState: ActionState = {
  success: false,
  message: "",
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full bg-indigo-600 hover:bg-indigo-700"
      disabled={pending}
    >
      {pending ? "🤖 AI Sedang Membaca..." : "Proses Chat"}
    </Button>
  );
}

export function ChatInput() {
  const [state, formAction] = useActionState(processChatAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        // Check if data is present (meaning a final order was created)
        if (state.data) {
          formRef.current?.reset();
          toast.success("Pesanan berhasil dibuat: " + state.message);
        } else {
          // For conversational replies, don't reset the form, just show the message
          toast.info("Respon AI: " + state.message);
        }
      } else {
        toast.error("Gagal: " + state.message);
      }
    }
  }, [state]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📝 Input Manual
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <form ref={formRef} action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="userId">User ID (Nomor HP)</Label>
            <Input
              id="userId"
              name="userId"
              placeholder="Contoh: 628123456789"
              defaultValue="628123456789" // Default value for testing
              required
            />
          </div>
          <div>
            <Label htmlFor="chatRaw">Chat dari Customer</Label>
            <Textarea
              id="chatRaw"
              name="chatRaw"
              placeholder="Paste chat pembeli di sini..."
              className="min-h-[150px] text-base resize-none"
              required
            />
          </div>
        </form> */}
          <SubmitButton />
      </CardContent>
    </Card>
  );
}
