"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WhatsAppQR } from "@/components/dashboard/wa-qr";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-2 p-4 md:gap-4 md:p-6">
      <div className="mx-auto w-full max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>WhatsApp QR Code</CardTitle>
            <CardDescription>
              Scan this QR to connect with WhatsApp.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center">
              <WhatsAppQR />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}