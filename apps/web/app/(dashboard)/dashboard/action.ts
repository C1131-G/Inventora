import {productService} from "../../service/product.service";

export async function dashboard(){
    const {totalProducts,lowStockProducts,productList} = await productService.dashboardStats();

    const totalValue =
        productList.reduce((sum,product) => {
            return sum + Number(product.price) * product.quantity;
        },0);

    return {
        totalProducts,
        lowStockProducts,
        totalValue,
        productList,
    };
}