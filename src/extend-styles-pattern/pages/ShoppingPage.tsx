import { ProductButtons, ProductImg, ProductTitle } from "../components";
import { ProductCard } from "../components"; 
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Delicious Cafe",
  img: "./coffee-mug.png",
};
const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* A:  Component Based Components */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImg
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"}}/>
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
export default ShoppingPage;
