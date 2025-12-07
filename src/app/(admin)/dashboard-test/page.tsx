import { getRecentOrders } from "@/services/order-service";
import { ChatInput } from "@/components/dashboard/chat-input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppQR } from "@/components/dashboard/wa-qr";


export const dynamic = "force-dynamic";

// Component Async (Server Component)
export default async function DashboardPage() {
  const recentOrders = await getRecentOrders();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Dashboard Chatat
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kolom Kiri: Input Chat */}
        <div className="md:col-span-1">
          <ChatInput />
        </div>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Scan QR WhatsApp</CardTitle>
          </CardHeader>
          <CardContent>
            <WhatsAppQR />
          </CardContent>
        </Card>

        {/* Kolom Kanan: Daftar Order */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Pesanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentOrders.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Omzet (Est)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-600">
                  Rp{" "}
                  {recentOrders
                    .reduce((a, b) => a + Number(b.totalAmount), 0)
                    .toLocaleString("id-ID")}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Pesanan Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 border-b">
                    <tr>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Item</th>
                      <th className="p-3">Total</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="p-4 text-center text-slate-500"
                        >
                          Belum ada pesanan
                        </td>
                      </tr>
                    ) : (
                      recentOrders.map((order) => (
                        <tr
                          key={order.id}
                          className="border-b hover:bg-slate-50"
                        >
                          <td className="p-3 font-medium">
                            {order.customerName}
                            <div className="text-xs text-slate-500">
                              {order.customerPhone}
                            </div>
                          </td>
                          <td className="p-3">
                            {order.items.map((i, idx) => (
                              <div key={idx}>
                                {i.quantity}x {i.tempName}
                              </div>
                            ))}
                          </td>
                          <td className="p-3 font-bold text-emerald-600">
                            Rp{" "}
                            {Number(order.totalAmount).toLocaleString("id-ID")}
                          </td>
                          <td className="p-3">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
