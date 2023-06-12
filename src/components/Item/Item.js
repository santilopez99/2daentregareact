import "./Item.css"

const Item = ({ product }) => {
  return (
    <div className="productItem">
        <div className="tittleItem">{product.title}</div>
        <img className="imageItem" alt={product.title} src={product.image} />
        <div className="priceItem">Precio ${product.precio}</div>
        {/* <div className="detailItem">{product.detail}</div>         */}
    </div>
  );
};

export default Item