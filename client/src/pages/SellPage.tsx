import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";

function SellPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <Navbar setSelectedCategory={setSelectedCategory} />
      {/* Page content */}
    </div>
  );
}

export default SellPage;

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