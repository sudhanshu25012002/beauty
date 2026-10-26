// Central Product Database for CRUSH Cosmetics
const PRODUCTS = [
  {
    id: "crush-matte-lipstick",
    name: "Smudge-Me-Not Matte Lipstick",
    tagline: "Ultra Matte • 16-Hour Zero Transfer",
    category: "lips",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 1420,
    badge: "BESTSELLER",
    image: "assets/images/product_matte_lipstick.jpg",
    images: [
      "assets/images/product_matte_lipstick.jpg",
      "assets/images/cat_lips.jpg",
      "assets/images/hero_model.jpg"
    ],
    shades: [
      { name: "01 Brazen Berry", color: "#800020" },
      { name: "02 Scarlet Siren", color: "#c41e3a" },
      { name: "03 Plum Punch", color: "#4a0e2e" },
      { name: "04 Rose Rust", color: "#b76e79" },
      { name: "05 Nude Temptation", color: "#a5694f" }
    ],
    finish: "Ultra Matte",
    description: "An unapologetically bold, highly pigmented matte lipstick that glides on silky smooth and sets into a transfer-proof, waterproof matte finish that lasts 16 hours without drying your lips.",
    benefits: [
      "Enriched with Vitamin E & Jojoba Oil for nourishing comfort",
      "100% Transfer-proof and kiss-proof formula",
      "Zero feathering or bleeding into fine lines",
      "Cruelty-free, 100% Vegan & Paraben-free"
    ],
    ingredients: "Isododecane, Dimethicone, Trimethylsiloxysilicate, Jojoba Seed Oil, Vitamin E Acetate, Silica Dimethyl Silylate, Approved Cosmetic Pigments.",
    howToApply: "Exfoliate lips gently. Define lip contours using the precision tip of the lipstick bullet, then fill in your lips with a single swipe of rich color. Allow 60 seconds to set."
  },
  {
    id: "crush-liquid-lipstick",
    name: "Air-Matte Liquid Lipstick",
    tagline: "Weightless Velvet • Intense Pigment",
    category: "lips",
    price: 749,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 980,
    badge: "TRENDING",
    image: "assets/images/product_liquid_lipstick.jpg",
    images: [
      "assets/images/product_liquid_lipstick.jpg",
      "assets/images/cat_lips.jpg"
    ],
    shades: [
      { name: "11 Wine Diva", color: "#581845" },
      { name: "12 Crimson Crush", color: "#900c3f" },
      { name: "13 Rust Royalty", color: "#c70039" },
      { name: "14 Mauve Muse", color: "#8e44ad" }
    ],
    finish: "Liquid Matte",
    description: "Featherlight liquid formula that delivers intensely pigmented matte payoff in a single stroke with a cloud-like comfortable feel.",
    benefits: [
      "Zero stickiness, feather-light air-whipped texture",
      "Doe-foot applicator designed for pinpoint precision",
      "Enriched with Sweet Almond Oil and Hyaluronic Acid"
    ],
    ingredients: "Cyclopentasiloxane, Polybutene, Hyaluronic Spheres, Sweet Almond Oil, Mica, Red 7 Lake, Iron Oxides.",
    howToApply: "Swipe starting from Cupid's bow outwards. One coat is all you need for opaque coverage."
  },
  {
    id: "crush-kohl-kajal",
    name: "Stroke of Genius Kohl Kajal",
    tagline: "Jet Black 24H • Smudgeproof & Waterproof",
    category: "eyes",
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    reviewsCount: 3150,
    badge: "ICONIC",
    image: "assets/images/product_kohl_kajal.jpg",
    images: [
      "assets/images/product_kohl_kajal.jpg",
      "assets/images/cat_eyes.jpg"
    ],
    shades: [
      { name: "01 Black Velvet", color: "#000000" },
      { name: "02 Smokin' Emerald", color: "#004b23" },
      { name: "03 Sapphire Bold", color: "#03045e" }
    ],
    finish: "Intense Gel Matte",
    description: "The deepest carbon black gel kajal pencil crafted to glide effortlessly on your waterline and lash line with zero tugging.",
    benefits: [
      "Ophthalmologically tested and safe for contact lens wearers",
      "24-hour waterproof, sweatproof, and tear-proof hold",
      "Wax-based formula with conditioning Carnauba wax"
    ],
    ingredients: "Cyclopentasiloxane, Carnauba Wax, Ozokerite, Carbon Black, Vitamin E.",
    howToApply: "Glide across the waterline or upper lashline. Smudge within 30 seconds for a smokey eye effect, or let set for 24-hour smudgeproof drama."
  },
  {
    id: "crush-eyeshadow-palette",
    name: "Born to Glow 16-Pan Eyeshadow Palette",
    tagline: "Velvet Mattes & Ultra-Reflective Metallics",
    category: "eyes",
    price: 1199,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 860,
    badge: "LIMITED EDITION",
    image: "assets/images/product_eyeshadow_palette.jpg",
    images: [
      "assets/images/product_eyeshadow_palette.jpg",
      "assets/images/cat_eyes.jpg"
    ],
    shades: [
      { name: "Rose Gold Luxe", color: "#b76e79" },
      { name: "Sunset Terracotta", color: "#d35400" },
      { name: "Champagne Shimmer", color: "#f7dc6f" },
      { name: "Espresso Matte", color: "#3e2723" }
    ],
    finish: "Multi-Finish",
    description: "Curated with 16 buttery smooth shades—from warm everyday neutrals and deep berry mattes to duo-chrome foiled metallics.",
    benefits: [
      "Ultra-pigmented, blendable formula with zero fallout",
      "Long-wearing and crease-resistant for 12 hours",
      "Includes wide HD mirror for on-the-go glam"
    ],
    ingredients: "Talc, Mica, Magnesium Stearate, Dimethicone, Ethylhexyl Palmitate, Polyisobutene, Synthetic Fluorphlogopite.",
    howToApply: "Sweep transition matte shades into the crease. Press metallic shades onto the center of the lid using fingertips or a flat brush for maximum shine."
  },
  {
    id: "crush-foundation-stick",
    name: "Ace of Face Full-Coverage Foundation Stick",
    tagline: "Pore-Blurring • Flawless HD Satin Matte",
    category: "face",
    price: 999,
    originalPrice: 1299,
    rating: 4.7,
    reviewsCount: 1670,
    badge: "BESTSELLER",
    image: "assets/images/product_foundation_stick.jpg",
    images: [
      "assets/images/product_foundation_stick.jpg",
      "assets/images/cat_face.jpg"
    ],
    shades: [
      { name: "10 Latte (Fair Neutral)", color: "#f5d0a9" },
      { name: "25 Macchiato (Medium Warm)", color: "#e0ac69" },
      { name: "35 Cinnamon (Medium Olive)", color: "#c68642" },
      { name: "50 Espresso (Deep Rich)", color: "#8d5524" }
    ],
    finish: "HD Satin Matte",
    description: "A multi-tasking foundation and concealer stick that delivers weightless medium-to-full buildable coverage with a built-in kabuki blending brush.",
    benefits: [
      "Built-in ultra-soft micro-fiber kabuki brush for seamless blending",
      "Sweat-resistant, oil-controlling formula stays fresh for 16 hours",
      "Formulated specifically for warm, golden, and olive undertones"
    ],
    ingredients: "Octyldodecanol, Silica, Beeswax, Microcrystalline Wax, Meadowfoam Seed Oil, Tocopherol, Iron Oxides.",
    howToApply: "Dot stick directly onto forehead, cheeks, nose, and chin. Buff outwards in circular motions using the built-in kabuki brush."
  },
  {
    id: "crush-liquid-highlighter",
    name: "Own the Light Liquid Illuminator",
    tagline: "Strobe Glow Drops • Pearl Sheen",
    category: "face",
    price: 649,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 740,
    badge: "MUST-HAVE",
    image: "assets/images/product_liquid_highlighter.jpg",
    images: [
      "assets/images/product_liquid_highlighter.jpg",
      "assets/images/cat_face.jpg"
    ],
    shades: [
      { name: "01 Rosy Glow", color: "#f8c8dc" },
      { name: "02 Goddess Gold", color: "#ffd700" },
      { name: "03 Bronze Sunset", color: "#cd7f32" }
    ],
    finish: "Radiant Dewy Glow",
    description: "Concentrated liquid shimmer drops that grant your skin an ethereal, glass-skin luminosity without chunky glitter particles.",
    benefits: [
      "Mix with foundation for an all-over luminous finish",
      "Dries down non-sticky and transfer-resistant",
      "Infused with Niacinamide and Rosehip Seed Oil"
    ],
    ingredients: "Hydrogenated Polyisobutene, Isododecane, Niacinamide, Rosehip Oil, Synthetic Fluorphlogopite, Mica.",
    howToApply: "Dispense 1-2 drops onto high points of cheekbones, bridge of nose, and collarbones. Tap gently with fingertips."
  },
  {
    id: "crush-contour-bronzer",
    name: "Contour De Force Bronzer & Blush Duo",
    tagline: "Sculpt & Pop • Seamless Mineral Pigments",
    category: "face",
    price: 799,
    originalPrice: 999,
    rating: 4.7,
    reviewsCount: 520,
    badge: "FAVORITE",
    image: "assets/images/product_contour_bronzer.jpg",
    images: [
      "assets/images/product_contour_bronzer.jpg",
      "assets/images/product_blush_palette.jpg"
    ],
    shades: [
      { name: "01 Caramel Peach", color: "#d98880" },
      { name: "02 Mocha Terracotta", color: "#a04000" }
    ],
    finish: "Soft Matte",
    description: "A travel-friendly compact pairing a natural sculpting matte contour with a radiant mineral blush.",
    benefits: [
      "Ultra-fine micronized powder blends effortlessly without harsh lines",
      "Controls excess shine while delivering sun-kissed warmth"
    ],
    ingredients: "Talc, Mica, Dimethicone, Zinc Stearate, Caprylic/Capric Triglyceride, Phenoxyethanol.",
    howToApply: "Apply bronzer under cheekbones, jawline, and temples. Dust blush onto apples of the cheeks sweeping upward."
  },
  {
    id: "crush-setting-mist",
    name: "Grand Finale Matte Setting Mist",
    tagline: "Lock-in 18-Hour Makeup • Anti-Shine",
    category: "skincare",
    price: 599,
    originalPrice: 749,
    rating: 4.9,
    reviewsCount: 1120,
    badge: "ESSENTIAL",
    image: "assets/images/product_setting_mist.jpg",
    images: [
      "assets/images/product_setting_mist.jpg"
    ],
    shades: [
      { name: "Clear Matte Mist", color: "#ffffff" }
    ],
    finish: "Micro-Fine Matte",
    description: "An ultra-fine weightless mist that locks makeup in place for 18 hours, absorbs midday oils, and prevents creasing or melting.",
    benefits: [
      "Micro-diffused pump creates an imperceptible cloud mist",
      "Infused with Witch Hazel and Green Tea extract to calm skin",
      "Zero alcohol dryness or tightness"
    ],
    ingredients: "Aqua, Hamamelis Virginiana (Witch Hazel) Water, Camellia Sinensis (Green Tea) Leaf Extract, PVP, Niacinamide.",
    howToApply: "Shake well. Hold 8-10 inches from face with eyes closed, and spray 3-4 times in an 'X' and 'T' motion after makeup."
  },
  {
    id: "crush-lip-gloss",
    name: "Time to Shine Plumping Lip Gloss",
    tagline: "High-Shine Glass Finish • Non-Sticky",
    category: "lips",
    price: 499,
    originalPrice: 649,
    rating: 4.8,
    reviewsCount: 890,
    badge: "NEW",
    image: "assets/images/product_lip_gloss.jpg",
    images: [
      "assets/images/product_lip_gloss.jpg",
      "assets/images/cat_lips.jpg"
    ],
    shades: [
      { name: "01 Glass Diamond", color: "#f8f9fa" },
      { name: "02 Cherry Sparkle", color: "#d90429" },
      { name: "03 Peach Glaze", color: "#f4a261" }
    ],
    finish: "Mirror Shine",
    description: "Infused with peptide plumping spheres and hyaluronic acid, this gloss douses lips in a 3D mirror shine with comfortable tingling fullness.",
    benefits: [
      "Visible plumping effect without burning irritation",
      "Hydrates lips for up to 8 hours with organic Shea Butter"
    ],
    ingredients: "Polybutene, Hydrogenated Polydecene, Shea Butter, Palmitoyl Tripeptide-38, Menthol, Mica.",
    howToApply: "Wear alone for sheer juicy shine or layer over any CRUSH Matte Lipstick for a dimensional lacquered finish."
  }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
}
