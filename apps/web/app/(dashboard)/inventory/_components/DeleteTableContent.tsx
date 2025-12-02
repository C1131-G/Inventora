import { deleteProductAction } from "../_actions/delete-product";
import { DeleteTableContentProps } from "../_types/ProductProps";

export function DeleteTableContent({ product }: DeleteTableContentProps) {
  return (
    <form action={deleteProductAction}>
      <input type="hidden" name="id" value={product.id} />

      <button
        className={"bg-white text-red-500 hover:text-red-700 cursor-pointer"}
      >
        Delete
      </button>
    </form>
  );
}
