import "./Product.css";
import Price from "./Price";

function Product({
  title,
  image,
  features,
  oldPrice,
  newPrice,
}) {
  return (
    <div className="Product">
      <h3>{title}</h3>

      <img
        src={image}
        alt={title}
        className="product-image"
      />

      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <Price
        oldPrice={oldPrice}
        newPrice={newPrice}
      />
    </div>
  );
}

export default Product;