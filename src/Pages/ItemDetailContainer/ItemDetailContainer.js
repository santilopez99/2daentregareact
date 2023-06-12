import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const getProduct = new Promise((res, rej) => {
    setTimeout(() => {
      const findProduct = products.find ( item => item.id === id);
      res(findProduct);
    }, 1000);
  });

  useEffect(() => {
    getProduct
    .then((response)=>{
      setProduct(response)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);

  return <div className="box">
    <ItemDetail product={product}/>
    </div>;
};

export default ItemDetailContainer;
