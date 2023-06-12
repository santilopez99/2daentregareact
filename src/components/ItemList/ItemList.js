import Item from "../Item/Item";
import "./ItemList.css"
import { Link } from "react-router-dom";

const ItemList = ({ productList }) => {

  return (
  <div className="card">
    {productList.map((product) => (
      <div key={product.id}>
        <Link to={`/item/${product.id}`}>
        <Item product={product}/>
        </Link>
      </div>
     ))
    }
  </div>
  );
};

export default ItemList;
