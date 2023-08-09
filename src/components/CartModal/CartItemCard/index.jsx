import { MdDelete } from "react-icons/md";
import styles from "./list.module.scss";
import { toast } from "react-toastify";

export const CartItemCard = ({ product, cartList, setCartList }) => {
  const removeItem = () => {
    const newItemList = cartList.filter((elem) => {
      return elem.id !== product.id;
    });
    setCartList(newItemList);
  };

  return (
    <li className={styles.list__main}>
      <div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <button
          onClick={() => {
            removeItem();
            toast("O produto foi excluido com sucesso")
          }}
          aria-label="delete"
          title="Remover item"
        >
          <MdDelete size={21} />
        </button>
      </div>
    </li>
  );
};

// evento de click para deletar que não funcionou
// onClick={() => removeItem(product.id)}
