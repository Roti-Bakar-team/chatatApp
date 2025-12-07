import React from "react";
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

import { AddProductDialog } from "@/components/dashboard/products/add-product-dialog";
import { productService } from "@/services/product-service";
import { ProductActions } from "@/components/dashboard/products/product-actions";

export default async function Page() {
  const products = await productService.getAll();

  return (
    <div className=" @container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="px-4 lg:px-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Daftar Products ({products.length})</CardTitle>
                <CardDescription className="mt-2">
                  Daftar produk yang akan dipelajari oleh AI.
                </CardDescription>
              </div>
              <AddProductDialog />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Harga</TableHead>
                    <TableHead>Deskripsi</TableHead>
                    <TableHead>
                      <span>Aksi</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  ) : (
                    products.map((product) => (
                      <React.Fragment key={product.id}>
                        <TableRow>
                          <TableCell className="font-medium">
                            {product.name}
                          </TableCell>
                          <TableCell>${product.price.toString()}</TableCell>
                          <TableCell>{product.description}</TableCell>
                          <TableCell>
                            <ProductActions
                              product={{
                                id: product.id,
                                name: product.name,
                                price: product.price.toString(),
                                description: product.description ?? "",
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
