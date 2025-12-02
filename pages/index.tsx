import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
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
    { name: "CYMBOBRAVE - Trypsin Bromelain Rutoside Trihydrate Tablets", price: "₹1,490/Box", details: "Trypsin 48 mg + Bromelain 90 mg + Rutoside 100 mg + Diclofenac 50 mg", packaging: "10×10 Tablets (Box)", discount: "30%–40%" },
    { name: "SIFETOR-MR - Etoricoxib Thiocolchicoside Tablets", price: "₹1,990/Box", details: "Etoricoxib 60 mg + Thiocolchicoside 4 mg", packaging: "10×10 Tablets (Box)", discount: "30%–40%" },
    { name: "SIFETOR-P - Etoricoxib Paracetamol Tablets", price: "₹850/Box", details: "Etoricoxib + Paracetamol", packaging: "10×10 Tablets" },
    { name: "CALUVIUM-CQ - Cissus Quadrangularis + Vit K2-7 + Calcium Citrate Maleate", price: "₹2,410/Box", details: "Supports bone health & digestion", packaging: "100 Capsules (Box)" },
    { name: "SIFETOR-SP - Aceclofenac + PCM + Serratiopeptidase", price: "₹990/Box", details: "Pain relief + Anti-inflammatory", packaging: "10×10 Tablets" },
    { name: "ZUBLICOMB-MAX - Collagen Type II + Boswellia + Curcumin + Glucosamine", price: "₹2,890/Box", details: "Joint pain & mobility support", packaging: "10×10 Tablets", discount: "30%–40%" },
    { name: "TOFASHIV - Tofacitinib 5 mg Tablets", price: "₹2,790/Box", details: "Autoimmune treatment", packaging: "10×10 Tablets" },
  ];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Search */}
      <div className="max-w-2xl mx-auto mb-10">
        <input
          className="w-full p-3 border rounded-xl shadow-sm"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 bg-gray-300 rounded-full flex justify-center items-center">Logo</div>
      </div>

      {/* Title */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
          Alluvium Health Care Pvt. Ltd.
        </h1>
        <p className="text-center text-lg mb-12">
          Trusted pharmaceutical manufacturer committed to health, safety & innovation.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((p, i) => (
          <Card key={i} className="shadow cursor-pointer" onClick={() => setSelectedProduct(p)}>
            <CardHeader>
              <CardTitle className="text-lg">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{p.details}</p>
              <p className="font-semibold mt-2">{p.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
            <p className="mt-2"><strong>Packaging:</strong> {selectedProduct.packaging}</p>
            {selectedProduct.discount && <p><strong>Discount:</strong> {selectedProduct.discount}</p>}
            <p className="mt-2"><strong>Details:</strong> {selectedProduct.details}</p>
            <p className="mt-2"><strong>Price:</strong> {selectedProduct.price}</p>
            <Button className="mt-6 w-full" onClick={() => setSelectedProduct(null)}>Close</Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-20 text-gray-600">
        <p>Registered Office: Faridabad, Haryana — 121002</p>
        <p className="mt-4">© 2025 Alluvium Health Care Pvt. Ltd.</p>
      </footer>
    </div>
  );
}
