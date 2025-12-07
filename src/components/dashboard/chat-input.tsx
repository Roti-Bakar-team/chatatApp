"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { processChatAction } from "@/actions/order-actions";
import { Button } from "@/components/ui/button";
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
  const [state] = useActionState(processChatAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        if (state.data) {
          formRef.current?.reset();
          toast.success("Pesanan berhasil dibuat: " + state.message);
        } else {
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
          <SubmitButton />
      </CardContent>
    </Card>
  );
}
