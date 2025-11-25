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
          select: {
            price: true,
            quantity: true,
            createdAt: true,
          },
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
};
