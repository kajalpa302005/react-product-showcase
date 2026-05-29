import Product from "./Product";

import mouse from "./assets/mouse.jpg";
import pencil from "./assets/Pencil.jpg";
import keyboard from "./assets/Keyboard.jpg";
import wirelessmouse from "./assets/wirelessmouse.jpg";

function ProductTab() {
  return (
    <div className="products-container">
      <Product
        title="Logitech MX Master 3S"
        image={mouse}
        features={["8000 DPI", "5 Programmable Buttons"]}
        oldPrice={12495}
        newPrice={8999}
      />

      <Product
        title="Apple Pencil (2nd Gen)"
        image={pencil}
        features={["Intuitive Touch Surface", "Designed for iPad Pro"]}
        oldPrice={11900}
        newPrice={9199}
      />

      <Product
        title="Zebronics Zeb-Transformer"
        image={keyboard}
        features={["Gaming Keyboard", "RGB Lighting"]}
        oldPrice={1599}
        newPrice={899}
      />

      <Product
        title="Portronics Toad 23"
        image={wirelessmouse}
        features={["2.4GHz Wireless", "Smooth Navigation"]}
        oldPrice={599}
        newPrice={278}
      />
    </div>
  );
}

export default ProductTab;