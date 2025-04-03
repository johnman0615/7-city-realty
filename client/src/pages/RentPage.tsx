import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";

const RentPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <Navbar setSelectedCategory={setSelectedCategory} />
      <h1>Rent a Property</h1>
      <div>
        <h2>Properties</h2>
        {/* Add property listing or other content here */}
      </div>
    </div>
  );
};

export default RentPage;

import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";

function BuyPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <Navbar setSelectedCategory={setSelectedCategory} />
      {/* Page content */}
    </div>
  );
}

export default BuyPage;