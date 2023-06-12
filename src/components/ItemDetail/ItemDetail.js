import "./ItemDetail.css";
import Counter from "../../components/Counter/Counter";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(0);

  const agregarAlCarrito = (event) => {
    event.preventDefault();
    console.log({ ...product, quantity: counter})
  };


  return (
    <div className="container">
      <div className="product">
        <div className="tittle">{product.title}</div>
        <div className="stock"> Stock: {product.stock} unidad/es</div>
        <img className="image" alt={product.title} src={product.image} />
        <div className="totalProducts">
          <div className="price">Precio ${product.precio}</div>
          <div><Counter counter={counter} setCounter={setCounter}/> </div>
        </div>
        <button onClick={agregarAlCarrito} className="button"> Agregar al carrito </button>
      </div>
      
      <div className="productDetail">
        <div className="titleDetail">{product.titleDetail}</div>
        <div className="detail">{product.detail}</div>
      </div>
    </div>
  );
};

export default ItemDetail;
