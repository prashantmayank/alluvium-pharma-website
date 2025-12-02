import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

type Product = {
  name: string;
  price: string;
  details: string;
  packaging: string;
  discount?: string;
  imageSrc?: string; // placeholder for product image in /public
  tag?: string;
};

const heroConfig = {
  title: "Alluvium Health Care Pvt. Ltd.",
  subtitle: "Delivering safe, affordable, and effective medicines.",
  ctaLabel: "Explore Products",
  ctaHref: "#products",
  backgroundImage: "/assets/hero/hero-bg.jpg", // put your hero banner image here (public/assets/hero/hero-bg.jpg)
};

const seoConfig = {
  title: "Alluvium Health Care | Pharmaceutical Manufacturer in India",
  description:
    "Alluvium Health Care Pvt. Ltd. is a trusted pharmaceutical manufacturer delivering safe, affordable and effective medicines across India.",
  keywords:
    "Alluvium Health Care, pharmaceutical manufacturer, pain management, generic medicines, India pharma",
  url: "https://your-netlify-site-url.netlify.app", // <-- replace with your real URL later
};

const contactConfig = {
  heading: "Get in Touch",
  subheading:
    "For government tenders, hospital supply, and distribution partnerships, reach out to our team.",
  email: "info@alluviumhealthcare.com", // placeholder
  phone: "+91-99999-99999", // placeholder
  address: "Registered Office: Faridabad, Haryana, India — 121002",
};

const products: Product[] = [
  {
    name: "CYMBOBRAVE - Trypsin Bromelain Rutoside Trihydrate Tablets",
    price: "₹1,490/Box",
    details:
      "Trypsin 48 mg + Bromelain 90 mg + Rutoside 100 mg + Diclofenac 50 mg",
    packaging: "10×10 Tablets (Box)",
    discount: "30%–40%",
    imageSrc: "/assets/products/cymbobrave.png", // placeholder
    tag: "Anti-inflammatory",
  },
  {
    name: "SIFETOR-MR - Etoricoxib Thiocolchicoside Tablets",
    price: "₹1,990/Box",
    details: "Etoricoxib 60 mg + Thiocolchicoside 4 mg",
    packaging: "10×10 Tablets (Box)",
    discount: "30%–40%",
    imageSrc: "/assets/products/sifetor-mr.png",
    tag: "Pain & Spasm",
  },
  {
    name: "SIFETOR-P - Etoricoxib Paracetamol Tablets",
    price: "₹850/Box",
    details: "Etoricoxib + Paracetamol",
    packaging: "10×10 Tablets",
    imageSrc: "/assets/products/sifetor-p.png",
    tag: "Pain Management",
  },
  {
    name:
      "CALUVIUM-CQ - Cissus Quadrangularis + Vit K2-7 + Calcium Citrate Maleate",
    price: "₹2,410/Box",
    details: "Supports bone health & digestion",
    packaging: "100 Capsules (Box)",
    imageSrc: "/assets/products/caluviumm-cq.png",
    tag: "Bone Health",
  },
  {
    name: "SIFETOR-SP - Aceclofenac + PCM + Serratiopeptidase",
    price: "₹990/Box",
    details: "Pain relief with anti-inflammatory benefits",
    packaging: "10×10 Tablets",
    imageSrc: "/assets/products/sifetor-sp.png",
    tag: "Pain & Inflammation",
  },
  {
    name:
      "ZUBLICOMB-MAX - Collagen Type II + Boswellia + Curcumin + Glucosamine",
    price: "₹2,890/Box",
    details: "Supports joint mobility & reduces stiffness",
    packaging: "10×10 Tablets",
    discount: "30%–40%",
    imageSrc: "/assets/products/zublicomb-max.png",
    tag: "Joint Care",
  },
  {
    name: "TOFASHIV - Tofacitinib 5 mg Tablets",
    price: "₹2,790/Box",
    details: "Used in autoimmune diseases like rheumatoid arthritis",
    packaging: "10×10 Tablets",
    imageSrc: "/assets/products/tofashiv.png",
    tag: "Autoimmune",
  },
  {
    name: "SIFETOR-1GM-SR - Paracetamol 1000mg SR Tablets",
    price: "₹980/Box",
    details: "Sustained release pain management",
    packaging: "10×15 Tablets",
    imageSrc: "/assets/products/sifetor-1gm-sr.png",
    tag: "Analgesic",
  },
  {
    name: "ZUBLICOMB-FORTE - Calcium + Vit D3 + Methylcobalamin",
    price: "₹2,710/Box",
    details: "For nutritional deficiencies and bone health",
    packaging: "10×10 Tablets",
    imageSrc: "/assets/products/zublicomb-forte.png",
    tag: "Nutrition",
  },
  {
    name: "MUCICLEAR-A - Acebrophylline + Acetylcysteine",
    price: "₹2,290/Box",
    details: "Used in asthma & respiratory disorders",
    packaging: "10×10 Tablets",
    imageSrc: "/assets/products/muciclear-a.png",
    tag: "Respiratory",
  },
  {
    name: "ALFIRAST GOLD 20 - Rosuvastatin + Aspirin + Clopidogrel",
    price: "₹2,190/Box",
    details: "Reduces risk of heart attack & stroke",
    packaging: "10×10 Capsules",
    imageSrc: "/assets/products/alfirast-gold-20.png",
    tag: "Cardiac Care",
  },
  {
    name: "LIZAPRIDE PLUS - Rabeprazole + Levosulpiride SR",
    price: "₹1,750/Box",
    details: "Used in GERD & acidity",
    packaging: "10×10 Capsules",
    imageSrc: "/assets/products/lizapride-plus.png",
    tag: "Gastro",
  },
  {
    name: "LIZAPRIDE-DSR - Pantoprazole + Domperidone",
    price: "₹1,190/Box",
    details: "Treats gastric reflux issues",
    packaging: "10×10 Capsules",
    imageSrc: "/assets/products/lizapride-dsr.png",
    tag: "Gastro",
  },
  {
    name: "CALLUVIUM-D3 - Cholecalciferol 60000 IU Softgel",
    price: "₹1,200/Box",
    details: "Vitamin D3 deficiency treatment",
    packaging: "1×4 Softgels",
    imageSrc: "/assets/products/calluviumm-d3.png",
    tag: "Supplements",
  },
];

export default function PharmaWebsite() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* SEO / Head */}
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                AHC
              </div>
              <div className="text-sm font-semibold">
                Alluvium Health Care Pvt. Ltd.
              </div>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#hero" className="hover:text-sky-600">
                Home
              </a>
              <a href="#products" className="hover:text-sky-600">
                Products
              </a>
              <a href="#about" className="hover:text-sky-600">
                About
              </a>
              <a href="#contact" className="hover:text-sky-600">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42,0.85), rgba(15,23,42,0.7)), url('${heroConfig.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {heroConfig.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 text-slate-200">
                {heroConfig.subtitle}
              </p>
              <p className="text-sm md:text-base mb-8 text-slate-300">
                Specialised in pain management, gastrointestinal care, bone
                health, cardiac support and nutritional supplements tailored for
                hospitals, government supply and distributors.
              </p>
              <Button
                className="px-6 py-3 rounded-full font-semibold shadow-lg"
                onClick={() => {
                  const el = document.querySelector(heroConfig.ctaHref);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {heroConfig.ctaLabel}
              </Button>
            </motion.div>

            {/* Hero Side Panel / Placeholder Image */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur shadow-2xl">
                <p className="text-sm uppercase tracking-wide text-sky-200 mb-3">
                  Product Portfolio Snapshot
                </p>
                <ul className="space-y-2 text-sm text-slate-100">
                  <li>• Pain & Inflammation Management</li>
                  <li>• Gastro & Liver Care</li>
                  <li>• Bone & Joint Support</li>
                  <li>• Cardiac & Cholesterol Control</li>
                  <li>• Vitamin & Nutritional Supplements</li>
                </ul>
                <p className="mt-4 text-xs text-slate-300">
                  👉 You can replace this block with a real image (e.g., product
                  collage) by placing an image at{" "}
                  <code>/assets/hero/hero-bg.jpg</code> in <code>/public</code>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search + Featured Strip */}
        <section className="max-w-6xl mx-auto px-4 mt-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Search by brand name or composition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 rounded-2xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-2xl px-4 py-3 text-xs md:text-sm text-sky-900">
              <span className="font-semibold">Govt & Institutional Supply:</span>{" "}
              Ready for large volume orders with assured quality & compliance.
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="max-w-6xl mx-auto px-4 mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Product Portfolio</h2>
            <span className="text-xs md:text-sm text-slate-500">
              Showing {filteredProducts.length} of {products.length} brands
            </span>
          </div>

          {/* Horizontal Featured Carousel (top 4 products) */}
          <div className="mb-10 overflow-x-auto whitespace-nowrap pb-2">
            {products.slice(0, 4).map((p, index) => (
              <div
                key={index}
                className="inline-block align-top mr-4 w-64"
                onClick={() => setSelectedProduct(p)}
              >
                <Card className="shadow-md hover:shadow-lg transition cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-sm font-semibold line-clamp-2">
                      {p.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-500 mb-1">
                      {p.tag || "Pharmaceutical Tablet"}
                    </p>
                    <p className="text-sm font-semibold text-sky-700">
                      {p.price}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
              >
                <Card
                  className="h-full flex flex-col hover:shadow-xl transition cursor-pointer"
                  onClick={() => setSelectedProduct(p)}
                >
                  {p.imageSrc && (
                    <div className="w-full h-40 overflow-hidden rounded-t-2xl">
                      {/* Placeholder image block – replace image paths in config */}
                      <img
                        src={p.imageSrc}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold line-clamp-2">
                      {p.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col gap-2 text-sm">
                    <p className="text-slate-600 line-clamp-2">{p.details}</p>
                    <p className="font-semibold text-sky-700">{p.price}</p>
                    <p className="text-xs text-slate-500">
                      Packaging: {p.packaging}
                    </p>
                    {p.discount && (
                      <p className="text-xs text-emerald-600 font-medium">
                        Discount: {p.discount}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-4 mt-20 grid md:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">About Alluvium</h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              Alluvium Health Care Pvt. Ltd. is a pharmaceutical company
              focused on delivering high quality formulations for pain
              management, gastro care, bone health, respiratory care and cardiac
              support.
            </p>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              Our portfolio is designed for government hospitals, corporate
              hospitals, clinics and distributors looking for reliable and
              affordable medicines with consistent quality.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              With a focus on compliance, ethical marketing and patient-centric
              outcomes, we aim to support healthcare providers in improving
              quality of life across India.
            </p>
          </div>
          <div className="bg-white border rounded-3xl p-6 shadow-sm text-sm text-slate-700">
            <h3 className="font-semibold mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              <li>• Wide range of pain, gastro, bone & cardiac products</li>
              <li>• Attractive trade margins and schemes</li>
              <li>• Strong focus on government and institutional supply</li>
              <li>• Consistent quality with patient-focused formulations</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-6xl mx-auto px-4 mt-20 mb-16 grid md:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-2xl font-bold mb-3">
              {contactConfig.heading}
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-4">
              {contactConfig.subheading}
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <strong>Email:</strong> {contactConfig.email}
              </p>
              <p>
                <strong>Phone:</strong> {contactConfig.phone}
              </p>
              <p>
                <strong>Address:</strong> {contactConfig.address}
              </p>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              You can update these details directly in{" "}
              <code>contactConfig</code> at the top of{" "}
              <code>pages/index.tsx</code>.
            </p>
          </div>

          {/* Netlify contact form */}
          <div className="bg-white border rounded-3xl p-6 shadow-sm">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="text-sm font-medium block mb-1">
                  Name
                </label>
                <input
                  name="name"
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Subject
                </label>
                <input
                  name="subject"
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                  required
                />
              </div>
              <Button className="w-full mt-2">Submit Enquiry</Button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-6 text-center text-xs md:text-sm text-slate-500">
          <p>{contactConfig.address}</p>
          <p className="mt-2">
            © 2025 Alluvium Health Care Pvt. Ltd. All Rights Reserved.
          </p>
        </footer>
      </div>

      {/* Optional: Floating WhatsApp button placeholder */}
      {/* You can later link this to your real WhatsApp number */}
      {/* <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full px-4 py-2 shadow-lg text-xs md:text-sm"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Us
      </a> */}
    </>
  );
}
