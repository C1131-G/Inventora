import { productDal } from "@repo/db";
import { authGuard } from "../../_utils/auth/auth-guard";

export const productService = {
  dashboardStats: () => {
    return authGuard((userId: string) => productDal.dashboardStats(userId));
  },

  recentlyAddedProducts: () => {
    return authGuard((userId: string) =>
      productDal.recentlyAddedProducts(userId),
    );
  },

  deleteProduct: (id: string) =>
    authGuard((userId: string) => {
      return productDal.deleteProduct(id, userId);
    }),
};
