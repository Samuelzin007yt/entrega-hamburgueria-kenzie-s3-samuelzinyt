import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/header.module.scss";

export const Header = ({  value, setValue, setSearch, cartList, setIsVisible }) => {

   const submit = (e) => {
      e.preventDefault();
      setSearch(value);
      setValue("");
   }

   return (
      <header className={styles.header__componet}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.div__main}>
            <button onClick={() => {
            setIsVisible(true);
          }}>
                <MdShoppingCart size={21} />
                <span>{cartList.length}</span>
            </button>
            <form className={styles.form} onSubmit={submit}>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Digite sua pesquisa"
                  required
               />

               <div className={styles.div__button}>
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </div>
            </form>
         </div>
      </header>
   );
};
