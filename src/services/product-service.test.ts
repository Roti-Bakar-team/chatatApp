
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getTotalProducts,
} from './product-service';
import prisma from '@/lib/prisma';

vi.mock('@/lib/prisma');

describe('Product Service', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getProducts', () => {
    it('should return a list of products', async () => {
      const mockProducts = [
        { id: 1, name: 'Product 1', price: 100, description: 'Desc 1' },
        { id: 2, name: 'Product 2', price: 200, description: 'Desc 2' },
      ];
      (prisma.product.findMany as vi.Mock).mockResolvedValue(mockProducts);

      const products = await getProducts();

      expect(prisma.product.findMany).toHaveBeenCalledTimes(1);
      expect(products).toEqual(mockProducts);
    });
  });

  describe('getProductById', () => {
    it('should return a single product when found', async () => {
      const mockProduct = { id: 1, name: 'Product 1', price: 100, description: 'Desc 1' };
      (prisma.product.findUnique as vi.Mock).mockResolvedValue(mockProduct);

      const product = await getProductById(1);

      expect(prisma.product.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(product).toEqual(mockProduct);
    });

    it('should return null if product is not found', async () => {
      (prisma.product.findUnique as vi.Mock).mockResolvedValue(null);

      const product = await getProductById(99);

      expect(prisma.product.findUnique).toHaveBeenCalledWith({ where: { id: 99 } });
      expect(product).toBeNull();
    });
  });

  describe('createProduct', () => {
    it('should create a new product', async () => {
      const newProductData = { name: 'New Product', price: 150, description: 'New Desc' };
      const createdProduct = { id: 3, ...newProductData };
      (prisma.product.create as vi.Mock).mockResolvedValue(createdProduct);

      const product = await createProduct(newProductData);

      expect(prisma.product.create).toHaveBeenCalledWith({ data: newProductData });
      expect(product).toEqual(createdProduct);
    });
  });

  describe('updateProduct', () => {
    it('should update an existing product', async () => {
      const updateData = { name: 'Updated Product Name' };
      const updatedProduct = { id: 1, name: 'Updated Product Name', price: 100, description: 'Desc 1' };
      (prisma.product.update as vi.Mock).mockResolvedValue(updatedProduct);

      const product = await updateProduct(1, updateData);

      expect(prisma.product.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateData,
      });
      expect(product).toEqual(updatedProduct);
    });
  });

  describe('deleteProduct', () => {
    it('should delete a product', async () => {
      const deletedProduct = { id: 1, name: 'Product 1', price: 100, description: 'Desc 1' };
      (prisma.product.delete as vi.Mock).mockResolvedValue(deletedProduct);

      const result = await deleteProduct(1);

      expect(prisma.product.delete).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(result).toEqual(deletedProduct);
    });
  });

  describe('getTotalProducts', () => {
    it('should return the total count of products', async () => {
      (prisma.product.count as vi.Mock).mockResolvedValue(42);

      const total = await getTotalProducts();

      expect(prisma.product.count).toHaveBeenCalledTimes(1);
      expect(total).toBe(42);
    });
  });
});
