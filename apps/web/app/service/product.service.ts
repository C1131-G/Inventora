import { productDal } from "@repo/db";
import { requireAuth } from "../utils/auth/require-auth";

export const productService = {
    dashboardStats: async () => {
        const payload = await requireAuth();
        return productDal.dashboardStats(payload.id);
    }
};
