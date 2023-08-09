import { toast } from "react-toastify";
import styles from "./products.module.scss";
import { useEffect } from "react";

export const ProductCard = ({
  product,
  setIsVisible,
  cartList,
  setCartList,
}) => {
  const addProduct = () => {
    let includes = false;

    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === product.id) {
        includes = true;
      }
    }
    if (includes) {
      toast("O item já está no carrinho")
      // alert("O item já está no carrinho");
    } else {
      setCartList([...cartList, {...product }]);
      toast("Item adicionado com sucesso")
    }

  };

  return (
    <li className={styles.list__products}>
      <div className={styles.div__img}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.div__description}>
        <h3>{product.name}</h3>
        <span className={styles.span__category}>{product.category}</span>
        <span className={styles.span__value}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          onClick={() => {
            addProduct()
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
