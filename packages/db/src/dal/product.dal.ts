import { prisma } from "../client";

export const productDal = {
  dashboardStats: async (userId: string) => {
    const [totalProducts, lowStockProducts, productList] =
      await prisma.$transaction([
        prisma.product.count({
          where: { userId },
        }),

        prisma.product.count({
          where: {
            userId,
            lowStockAt: { not: null },
            quantity: { lte: 5 },
          },
        }),

        prisma.product.findMany({
          where: { userId },
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);
    return {
      totalProducts,
      lowStockProducts,
      productList,
    };
  },

  recentlyAddedProducts: async (userId: string) => {
    return prisma.product.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 5,
    });
  },

  deleteProduct: async (id: string, userId: string) => {
    return prisma.product.delete({
      where: { id, userId },
    });
  },

  searchProduct: async (userId: string, q: string) => {
    return prisma.product.findMany({
      where: {
        userId,
        ...(q ? { name: { contains: q, mode: "insensitive" } } : {}),
      },
      orderBy: { createdAt: "desc" },
    });
  },
};
