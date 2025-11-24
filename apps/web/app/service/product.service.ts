import { productDal } from "@repo/db";
import {authGuard} from "../utils/auth/auth-guard";

export const productService = {
    dashboardStats: () => {
        return authGuard((userId) => productDal.dashboardStats(userId));
    },

    recentlyAddedProducts :  () => {
        return authGuard((userId) => productDal.recentlyAddedProducts(userId));
    }
};
