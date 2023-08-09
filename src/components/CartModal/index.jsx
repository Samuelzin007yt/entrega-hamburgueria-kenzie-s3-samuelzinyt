import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./modal.module.scss";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const CartModal = ({ cartList, setIsVisible, setCartList }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  useEffect(() => {
    const savedCartList = JSON.parse(localStorage.getItem("@cartList"));
    if (savedCartList) {
      setCartList(savedCartList);
    }
  }, [setCartList]);

  useEffect(() => {
    localStorage.setItem("@cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.modalBox}>
        <div className={styles.div__cart}>
          <h2>Carrinho de compras</h2>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div>
          <ul className={styles.ul__cart}>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                product={product}
                cartList={cartList}
                setCartList={setCartList}
              />
            ))}
          </ul>
        </div>
        <div className={styles.div__desc}>
          <div>
            <span>Total</span>
            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button
            onClick={() => {
              setCartList([]);
              toast("Todos os itens foram removidos!")
              localStorage.clear()
              setIsVisible(false)
            }}
          >
            Remover todos
          </button>
        </div>
      </div>
    </div>
  );
};
