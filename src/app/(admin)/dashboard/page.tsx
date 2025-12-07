import {
  getDashboardStats,
  getRecentOrders,
  getTopProducts,
} from "@/services/order-service";
import { getTotalProducts } from "@/services/product-service";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const recentOrders = await getRecentOrders();
  const totalProducts = await getTotalProducts();
  const topProducts = await getTopProducts();

  const kpiData = {
    totalRevenue: stats.totalRevenue.toNumber(),
    totalOrders: stats.totalOrders,
    totalProducts: totalProducts,
    totalCustomers: stats.totalCustomers,
  };

  return (
    <div className="flex-1 space-y-6 p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Total income from all sales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              Rp {kpiData.totalRevenue.toLocaleString("id-ID")}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
            <CardDescription>Total orders received</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalOrders}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
            <CardDescription>Number of products available</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalProducts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>
            <CardDescription>Total unique customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalCustomers}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              An overview of the most recent orders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.customerPhone}
                      </div>
                    </TableCell>
                    <TableCell>
                      {order.items
                        .map((item) => `${item.quantity}x ${item.tempName}`)
                        .join(", ")}
                    </TableCell>
                    <TableCell>
                      Rp {order.totalAmount.toNumber().toLocaleString("id-ID")}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "PAID" || order.status === "DONE"
                            ? "default"
                            : order.status === "PENDING"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>
              Your most popular products this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{product.name}</p>
                  </div>
                  <div className="text-sm font-semibold">
                    {product.sales} sales
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}