import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

interface Product {
  name: string;
  price: string;
  details: string;
  packaging: string;
  discount?: string;
}

export default function PharmaWebsite() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const products: Product[] = [
    {
      name: "CYMBOBRAVE - Trypsin Bromelain Rutoside Trihydrate Tablets",
      price: "₹1,490/Box",
      details:
        "Trypsin 48 mg + Bromelain 90 mg + Rutoside 100 mg + Diclofenac 50 mg",
      packaging: "10×10 Tablets (Box)",
      discount: "30%–40%",
    },
    {
      name: "SIFETOR-MR - Etoricoxib Thiocolchicoside Tablets",
      price: "₹1,990/Box",
      details: "Etoricoxib 60 mg + Thiocolchicoside 4 mg",
      packaging: "10×10 Tablets (Box)",
      discount: "30%–40%",
    },
    {
      name: "SIFETOR-P - Etoricoxib Paracetamol Tablets",
      price: "₹850/Box",
      details: "Etoricoxib + Paracetamol",
      packaging: "10×10 Tablets",
    },
    {
      name:
        "CALUVIUM-CQ - Cissus Quadrangularis + Vit K2-7 + Calcium Citrate Maleate",
      price: "₹2,410/Box",
      details: "Supports bone health & digestion",
      packaging: "100 Capsules (Box)",
    },
    {
      name: "SIFETOR-SP - Aceclofenac + PCM + Serratiopeptidase",
      price: "₹990/Box",
      details: "Pain relief with anti-inflammatory benefits",
      packaging: "10×10 Tablets",
    },
    {
      name:
        "ZUBLICOMB-MAX - Collagen Type II + Boswellia + Curcumin + Glucosamine",
      price: "₹2,890/Box",
      details: "Supports joint mobility & pain reduction",
      packaging: "10×10 Tablets",
      discount: "30%–40%",
    },
    {
      name: "TOFASHIV - Tofacitinib 5 mg Tablets",
      price: "₹2,790/Box",
      details: "Used in autoimmune diseases like RA",
      packaging: "10×10 Tablets",
    },
    {
      name: "SIFETOR-1GM-SR - Paracetamol 1000mg SR Tablets",
      price: "₹980/Box",
      details: "Sustained release pain management",
      packaging: "10×15 Tablets",
    },
    {
      name: "ZUBLICOMB-FORTE - Calcium + Vit D3 + Methylcobalamin",
      price: "₹2,710/Box",
      details: "For nutritional deficiencies",
      packaging: "10×10 Tablets",
    },
    {
      name: "MUCICLEAR-A - Acebrophylline + Acetylcysteine",
      price: "₹2,290/Box",
      details: "Used in asthma & respiratory disorders",
      packaging: "10×10 Tablets",
    },
    {
      name: "ALFIRAST GOLD 20 - Rosuvastatin + Aspirin + Clopidogrel",
      price: "₹2,190/Box",
      details: "Reduces risk of heart attack & stroke",
      packaging: "10×10 Capsules",
    },
    {
      name: "LIZAPRIDE PLUS - Rabeprazole + Levosulpiride SR",
      price: "₹1,750/Box",
      details: "Used in GERD & acidity",
      packaging: "10×10 Capsules",
    },
    {
      name: "LIZAPRIDE-DSR - Pantoprazole + Domperidone",
      price: "₹1,190/Box",
      details: "Treats gastric reflux issues",
      packaging: "10×10 Capsules",
    },
    {
      name: "CALLUVIUM-D3 - Cholecalciferol 60000 IU Softgel",
      price: "₹1,200/Box",
      details: "Vitamin D3 deficiency",
      packaging: "1×4 Softgels",
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-10">
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search medicines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border rounded-xl shadow"
        />
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
          Logo
        </div>
      </div>

      {/* Title (animated wrapper, plain h1 inside) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Alluvium Health Care Pvt. Ltd.
        </h1>
      </motion.div>

      {/* Subtext (animated wrapper, plain p inside) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-center max-w-3xl text-lg mx-auto mb-16 text-gray-700">
          Trusted pharmaceutical manufacturer committed to health, safety &
          innovation.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProducts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
          >
            <Card
              className="shadow-lg rounded-2xl hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelectedProduct(p)}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {p.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{p.details}</p>
                <p className="font-semibold text-blue-600">{p.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // className="fixed inset-0 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            // className="relative bg-white rounded-3xl p-8 shadow-xl max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-3">
              {selectedProduct.name}
            </h2>

            <p className="mb-1">
              <strong>Packaging:</strong> {selectedProduct.packaging}
            </p>
            {selectedProduct.discount && (
              <p className="mb-1">
                <strong>Discount:</strong> {selectedProduct.discount}
              </p>
            )}
            <p className="mb-1">
              <strong>Details:</strong> {selectedProduct.details}
            </p>
            <p className="mt-2 font-bold text-blue-700">
              {selectedProduct.price}
            </p>

            <Button onClick={() => setSelectedProduct(null)} className="mt-6 w-full">
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="text-center mt-20 text-gray-600 border-t pt-10">
        <p>Registered Office: Faridabad, Haryana, India — 121002</p>
        <p className="mt-3 font-medium">
          © 2025 Alluvium Health Care Pvt. Ltd. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
