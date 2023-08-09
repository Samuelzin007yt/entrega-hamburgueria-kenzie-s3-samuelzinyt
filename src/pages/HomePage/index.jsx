import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import listProducts from "../../services/api";
import { useEffect } from "react";
import styles from "./homepages.module.scss";

export const HomePage = () => {
  const allProductsLocal = localStorage.getItem("@cartList");
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(allProductsLocal ? JSON.parse(allProductsLocal) : []);
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const { data } = await listProducts.get("/products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsList();
  }, []);

  useEffect(() => {
    localStorage.setItem("@cartList", JSON.stringify(cartList));
  }, [cartList])

  // filtro de pesquisa
  const productsResults = productList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderListSearch = search ? productsResults : productList;

  return (
    <>
      <Header
        productList={productList}
        value={value}
        setSearch={setSearch}
        setValue={setValue}
        cartList={cartList}
        setIsVisible={setIsVisible}
      />
      <main className={styles.main}>
        <ProductList
          productList={productList}
          setIsVisible={setIsVisible}
          cartList={cartList}
          setCartList={setCartList}
          renderListSearch={renderListSearch}
        />
        {isVisible ? (
          <CartModal cartList={cartList} 
          setIsVisible={setIsVisible}
          setCartList={setCartList}
          allProductsLocal={allProductsLocal}
           />
        ) : null}
      </main>
    </>
  );
};
