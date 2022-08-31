import react from "react";
import "../assets/scss/Products.scss";
const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="container">
      <div className="row ">
        <div className=" border border-info ">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button
            type="button"
            onClick={handleAddToCart(product)}
            className="btn btn-success "
          >
            Agregar &nbsp;
            <i className="fas fa-shopping-basket" />
          </button>
        </div>
      </div>
    </div>
  );
};
export { Product };
