import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PharmaWebsite() {
  // State for selected product modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Updated full product list
  const products = [
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
        "CALUVIUM-CQ - Cissus Quadrangularis Extract Vitamins K2‑7 Calcium Citrate Maleate",
      price: "₹2,410/Box",
      details: "For indigestion and bone strengthening",
      packaging: "100 Capsules (Box)",
    },
    {
      name: "SIFETOR-SP - Aceclofenac Paracetamol & Serratiopeptidase Tablets",
      price: "₹990/Box",
      details: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
      packaging: "10×10 Tablets",
    },
    {
      name:
        "ZUBLICOMB-MAX - Collagen Peptide II Boswellia Nano Curcumin Glucosamine Tablets",
      price: "₹2,890/Box",
      details: "Joint health, mobility & anti‑inflammatory support",
      packaging: "10×10 Tablets",
      discount: "30%–40%",
    },
    {
      name: "TOFASHIV - Tofacitinib 5 mg Tablets",
      price: "₹2,790/Box",
      details: "Tofacitinib 5 mg",
      packaging: "10×10 Tablets",
    },
    {
      name: "SIFETOR-1GM-SR - Paracetamol Sustained Release Tablets",
      price: "₹980/Box",
      details: "1000 mg strength",
      packaging: "10×15 Tablets",
    },
    {
      name:
        "ZUBLICOMB-FORTE - Calcium Carbonate Vitamin D3 Methylcobalamin etc.",
      price: "₹2,710/Box",
      details: "For nutritional deficiencies",
      packaging: "10×10 Tablets",
    },
    {
      name: "MUCICLEAR-A - Acebrophylline Acetylcysteine Tablets",
      price: "₹2,290/Box",
      details: "100 mg + 600 mg | Asthma prevention",
      packaging: "10×10 Tablets",
    },
    {
      name: "ALFIRAST GOLD 20 - Rosuvastatin Aspirin Clopidogrel Capsules",
      price: "₹2,190/Box",
      details: "For reducing risk of heart attacks & strokes",
      packaging: "10×10 Capsules",
    },
    {
      name:
        "LIZAPRIDE PLUS - Rabeprazole Sodium EC & Levosulpiride SR Capsules",
      price: "₹1,750/Box",
      details: "Rabeprazole Sodium 20 mg + Levosulpiride 75 mg",
      packaging: "10×10 Capsules",
    },
    {
      name:
        "LIZAPRIDE-DSR - Pantoprazole Gastro‑Resistant Domperidone Capsules",
      price: "₹1,190/Box",
      details: "Pantoprazole 40 mg + Domperidone 30 mg",
      packaging: "10×10 Capsules",
    },
    {
      name: "CALLUVIUM-D3 - Cholecalciferol Soft Gelatin Capsules 60000 IU",
      price: "₹1,200/Box",
      details: "Vitamin D3 deficiency treatment",
      packaging: "1×4 Tablets",
    },
    {
      name:
        "LIZAPRIDE PLUS (Variant) - Rabeprazole Sodium (EC) & Levosulpiride (SR)",
      price: "₹1,790/Box",
      details: "Rabeprazole Sodium 20 mg + Levosulpiride 75 mg",
      packaging: "10×10 Capsules",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10">
      {/* Logo placeholder */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
          Company Logo
        </div>
      </div>

      {/* Company Name */}
      <motion.h1
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Alluvium Health Care Pvt. Ltd.
      </motion.h1>

      {/* Company Description */}
      <motion.p
        className="text-center text-lg max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A trusted pharmaceutical manufacturer delivering high‑quality healthcare products with a
        commitment to innovation, safety, and excellence.
      </motion.p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              className="shadow-lg rounded-2xl hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelectedProduct(p)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">{p.details}</p>
                <p className="font-medium">Price: {p.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="mb-2"><strong>Packaging:</strong> {selectedProduct.packaging}</p>
            {selectedProduct.discount && (
              <p className="mb-2"><strong>Discount:</strong> {selectedProduct.discount}</p>
            )}
            <p className="mb-2"><strong>Details:</strong> {selectedProduct.details}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedProduct.price}</p>
            <Button onClick={() => setSelectedProduct(null)}>Close</Button>
          </motion.div>
        </motion.div>
      )}

      {/* Company Footer */}
      <div className="text-center mt-20 text-gray-600 border-t pt-10 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">Alluvium Health Care Pvt. Ltd.</h3>
        <p>Pharmaceutical Manufacturer | Quality • Trust • Innovation</p>      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PharmaWebsite() {
  // State for selected product modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Updated full product list
  const products = [
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
        "CALUVIUM-CQ - Cissus Quadrangularis Extract Vitamins K2‑7 Calcium Citrate Maleate",
      price: "₹2,410/Box",
      details: "For indigestion and bone strengthening",
      packaging: "100 Capsules (Box)",
    },
    {
      name: "SIFETOR-SP - Aceclofenac Paracetamol & Serratiopeptidase Tablets",
      price: "₹990/Box",
      details: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
      packaging: "10×10 Tablets",
    },
    {
      name:
        "ZUBLICOMB-MAX - Collagen Peptide II Boswellia Nano Curcumin Glucosamine Tablets",
      price: "₹2,890/Box",
      details: "Joint health, mobility & anti‑inflammatory support",
      packaging: "10×10 Tablets",
      discount: "30%–40%",
    },
    {
      name: "TOFASHIV - Tofacitinib 5 mg Tablets",
      price: "₹2,790/Box",
      details: "Tofacitinib 5 mg",
      packaging: "10×10 Tablets",
    },
    {
      name: "SIFETOR-1GM-SR - Paracetamol Sustained Release Tablets",
      price: "₹980/Box",
      details: "1000 mg strength",
      packaging: "10×15 Tablets",
    },
    {
      name:
        "ZUBLICOMB-FORTE - Calcium Carbonate Vitamin D3 Methylcobalamin etc.",
      price: "₹2,710/Box",
      details: "For nutritional deficiencies",
      packaging: "10×10 Tablets",
    },
    {
      name: "MUCICLEAR-A - Acebrophylline Acetylcysteine Tablets",
      price: "₹2,290/Box",
      details: "100 mg + 600 mg | Asthma prevention",
      packaging: "10×10 Tablets",
    },
    {
      name: "ALFIRAST GOLD 20 - Rosuvastatin Aspirin Clopidogrel Capsules",
      price: "₹2,190/Box",
      details: "For reducing risk of heart attacks & strokes",
      packaging: "10×10 Capsules",
    },
    {
      name:
        "LIZAPRIDE PLUS - Rabeprazole Sodium EC & Levosulpiride SR Capsules",
      price: "₹1,750/Box",
      details: "Rabeprazole Sodium 20 mg + Levosulpiride 75 mg",
      packaging: "10×10 Capsules",
    },
    {
      name:
        "LIZAPRIDE-DSR - Pantoprazole Gastro‑Resistant Domperidone Capsules",
      price: "₹1,190/Box",
      details: "Pantoprazole 40 mg + Domperidone 30 mg",
      packaging: "10×10 Capsules",
    },
    {
      name: "CALLUVIUM-D3 - Cholecalciferol Soft Gelatin Capsules 60000 IU",
      price: "₹1,200/Box",
      details: "Vitamin D3 deficiency treatment",
      packaging: "1×4 Tablets",
    },
    {
      name:
        "LIZAPRIDE PLUS (Variant) - Rabeprazole Sodium (EC) & Levosulpiride (SR)",
      price: "₹1,790/Box",
      details: "Rabeprazole Sodium 20 mg + Levosulpiride 75 mg",
      packaging: "10×10 Capsules",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10">
      {/* Logo placeholder */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
          Company Logo
        </div>
      </div>

      {/* Company Name */}
      <motion.h1
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Alluvium Health Care Pvt. Ltd.
      </motion.h1>

      {/* Company Description */}
      <motion.p
        className="text-center text-lg max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A trusted pharmaceutical manufacturer delivering high‑quality healthcare products with a
        commitment to innovation, safety, and excellence.
      </motion.p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              className="shadow-lg rounded-2xl hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelectedProduct(p)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">{p.details}</p>
                <p className="font-medium">Price: {p.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="mb-2"><strong>Packaging:</strong> {selectedProduct.packaging}</p>
            {selectedProduct.discount && (
              <p className="mb-2"><strong>Discount:</strong> {selectedProduct.discount}</p>
            )}
            <p className="mb-2"><strong>Details:</strong> {selectedProduct.details}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedProduct.price}</p>
            <Button onClick={() => setSelectedProduct(null)}>Close</Button>
          </motion.div>
        </motion.div>
      )}

      {/* Company Footer */}
      <div className="text-center mt-20 text-gray-600 border-t pt-10 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">Alluvium Health Care Pvt. Ltd.</h3>
        <p>Pharmaceutical Manufacturer | Quality • Trust • Innovation</p>      </div>
    </div>
  );
}
