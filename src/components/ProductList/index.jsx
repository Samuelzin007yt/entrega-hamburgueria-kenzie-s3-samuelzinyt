import { ProductCard } from "./ProductCard";
import styles from "./containerproducts.module.scss";

export const ProductList = ({ setIsVisible, renderListSearch, cartList, setCartList}) => {
   return (
      <ul className={styles.container}>
         {renderListSearch.map((product) => (
            <ProductCard key={product.id} product={product}
            cartList={cartList}
            setCartList={setCartList}
            setIsVisible={setIsVisible} 
            renderListSearch={renderListSearch}/>
         ))}
      </ul>
   );
};
