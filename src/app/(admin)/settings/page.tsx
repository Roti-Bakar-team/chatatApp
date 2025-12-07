"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { WhatsAppQR } from "@/components/dashboard/wa-qr";

export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>UMKM Information</CardTitle>
                <CardDescription>
                  Manage your business name and description.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input
                    id="business-name"
                    type="text"
                    defaultValue="Your UMKM Name"
                    placeholder="Enter your business name"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="business-description">Description</Label>
                  <Textarea
                    id="business-description"
                    defaultValue="A brief description of your UMKM."
                    placeholder="Describe your business"
                    rows={4}
                  />
                </div>
                <Button className="w-fit">Save Changes</Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div>
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
      </div>
    </div>
  );
}