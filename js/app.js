/* ==========================================================================
   CRUSH COSMETICS — Client-Side E-Commerce & Interactive Logic
   ========================================================================== */

// Product Catalog
const PRODUCTS = [
  {
    id: 1,
    name: "Matte As Hell Crayon Lipstick",
    category: "lips",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviews: 1420,
    badge: "Bestseller",
    badgeType: "pink",
    finish: "Ultra-Matte • 16H Stay",
    description: "Our cult-favorite crayon lipstick delivers intense, full-coverage opaque pigment with zero transfer. Infused with Vitamin E to keep your lips conditioned all day.",
    ingredients: "Vitamin E, Candelilla Wax, Carnauba, Kaolin Clay, Castor Seed Oil.",
    shades: [
      { name: "01 Scarlett Fury", hex: "#B91C1C", svgShade: "#B91C1C" },
      { name: "02 Plum Velvet", hex: "#6B21A8", svgShade: "#6B21A8" },
      { name: "03 Mauve Crush", hex: "#9D174D", svgShade: "#9D174D" },
      { name: "04 Cinnamon Nude", hex: "#9A3412", svgShade: "#9A3412" }
    ],
    selectedShadeIndex: 0,
    type: "lipstick"
  },
  {
    id: 2,
    name: "Kohl Of Honour Intense Kajal",
    category: "eyes",
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    reviews: 2180,
    badge: "Smudge-Proof",
    badgeType: "gold",
    finish: "Waterproof • 24H Longstay",
    description: "Glide on pure carbon-black drama. Opthalmologically tested, safe for waterlines, with a single-stroke opaque payoff that will not budge through tears, sweat, or rain.",
    ingredients: "Carbon Black, Rice Bran Wax, Jojoba Oil, Carnauba Wax.",
    shades: [
      { name: "01 Jet Black", hex: "#111827", svgShade: "#111827" },
      { name: "02 Deep Sapphire", hex: "#1E3A8A", svgShade: "#1E3A8A" },
      { name: "03 Forest Emerald", hex: "#065F46", svgShade: "#065F46" }
    ],
    selectedShadeIndex: 0,
    type: "kajal"
  },
  {
    id: 3,
    name: "Ace Of Face Foundation Stick",
    category: "face",
    price: 999,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 940,
    badge: "Trending",
    badgeType: "pink",
    finish: "Poreless Airbrush Matte",
    description: "Cream-to-powder foundation in a travel-friendly stick with an integrated blending brush. Seamlessly conceals dark circles, blemishes, and uneven skin tone.",
    ingredients: "Hyaluronic Acid, Silica, Vitamin E, Squalane, Titanium Dioxide.",
    shades: [
      { name: "05 Warm Caramel", hex: "#C68B59", svgShade: "#C68B59" },
      { name: "10 Golden Honey", hex: "#D8A47F", svgShade: "#D8A47F" },
      { name: "15 Sand Dune", hex: "#E4B896", svgShade: "#E4B896" },
      { name: "20 Rich Toffee", hex: "#8D532E", svgShade: "#8D532E" }
    ],
    selectedShadeIndex: 1,
    type: "foundation"
  },
  {
    id: 4,
    name: "Bling Leader Baked Highlighter",
    category: "face",
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviews: 810,
    badge: "High Glow",
    badgeType: "gold",
    finish: "Micro-Fine Pearl Radiance",
    description: "Baked powder formula packed with ultra-fine multi-reflective pearls. No chunky glitter—just a glass-skin, lit-from-within glow.",
    ingredients: "Mica, Synthetic Fluorphlogopite, Jojoba Esters, Squalane.",
    shades: [
      { name: "01 Champagne Spark", hex: "#FDE68A", svgShade: "#FDE68A" },
      { name: "02 Rose Gold Gleam", hex: "#F472B6", svgShade: "#F472B6" }
    ],
    selectedShadeIndex: 0,
    type: "highlighter"
  },
  {
    id: 5,
    name: "Arch Arrival Micro Brow Definer",
    category: "eyes",
    price: 499,
    originalPrice: 599,
    rating: 4.8,
    reviews: 620,
    badge: "Waterproof",
    badgeType: "pink",
    finish: "1.5mm Ultra-Precision Tip",
    description: "Mimics real brow hairs effortlessly with a smear-free wax formula and built-in spoolie brush for seamless blending.",
    ingredients: "Hydrogenated Soybean Oil, Carnauba Wax, Iron Oxides.",
    shades: [
      { name: "01 Dark Ash Brown", hex: "#451A03", svgShade: "#451A03" },
      { name: "02 Soft Espresso", hex: "#292524", svgShade: "#292524" }
    ],
    selectedShadeIndex: 0,
    type: "brow"
  },
  {
    id: 6,
    name: "Vinyl Lip Lacquer Glass Gloss",
    category: "lips",
    price: 599,
    originalPrice: 749,
    rating: 4.8,
    reviews: 730,
    badge: "Non-Sticky",
    badgeType: "pink",
    finish: "Mirror Shine + Plumping",
    description: "High-shine wet look without any stickiness. Enriched with peppermint oil for an invigorating, gentle plumping sensation.",
    ingredients: "Peppermint Extract, Jojoba Oil, Polybutene, Vitamin E.",
    shades: [
      { name: "01 Crystal Clear", hex: "#F3F4F6", svgShade: "#F3F4F6" },
      { name: "02 Glazed Berry", hex: "#DB2777", svgShade: "#DB2777" },
      { name: "03 Shimmer Toffee", hex: "#B45309", svgShade: "#B45309" }
    ],
    selectedShadeIndex: 1,
    type: "lipstick"
  },
  {
    id: 7,
    name: "Sunset Seduction 16-Pan Palette",
    category: "eyes",
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 1150,
    badge: "Limited Edition",
    badgeType: "gold",
    finish: "Velvet Mattes & Chromes",
    description: "16 buttery, one-swipe pigment pans inspired by golden hour in Mumbai. Transition seamlessly from daytime neutral glam to midnight sultry smokey looks.",
    ingredients: "Talc-Free Mica, Kaolin, Zinc Stearate, Caprylic Triglyceride.",
    shades: [
      { name: "Multi-Finish Palette", hex: "#F97316", svgShade: "#F97316" }
    ],
    selectedShadeIndex: 0,
    type: "palette"
  },
  {
    id: 8,
    name: "The Runway Glam All-Star Trio",
    category: "combos",
    price: 1699,
    originalPrice: 2499,
    rating: 5.0,
    reviews: 580,
    badge: "Best Value",
    badgeType: "gold",
    finish: "Lipstick + Kajal + Pouch",
    description: "Complete signature look bundle containing 1 Full-Size Matte Crayon, 1 Intense Kohl Kajal, and a Limited Edition Velvet Zipper Makeup Bag.",
    ingredients: "Includes full formulations of Matte Crayon, Kohl Kajal and Vegan Leather Bag.",
    shades: [
      { name: "Iconic Festive Set", hex: "#FF007A", svgShade: "#FF007A" }
    ],
    selectedShadeIndex: 0,
    type: "combo"
  }
];

// App State
const state = {
  activeCategory: 'all',
  searchQuery: '',
  wishlist: new Set(),
  cart: [],
  discountCode: '',
  discountPercent: 0,
  quickViewProduct: null
};

// SVG Product Renderer
function renderProductSVG(type, shadeHex) {
  if (type === 'lipstick') {
    return `
      <svg width="120" height="190" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Bullet Base -->
        <rect x="34" y="65" width="32" height="85" rx="4" fill="#1C1C24" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <rect x="34" y="90" width="32" height="4" fill="#FF007A"/>
        <text x="50" y="125" fill="#6B7280" font-size="6" font-weight="bold" font-family="sans-serif" text-anchor="middle" letter-spacing="1">CRUSH</text>
        <!-- Gold Collar -->
        <rect x="37" y="48" width="26" height="17" fill="url(#goldGradient)" rx="2"/>
        <!-- Lipstick Bullet -->
        <path d="M40 50 L40 25 C40 16 52 10 58 10 C62 10 60 25 60 50 Z" fill="${shadeHex}"/>
        <path d="M42 48 L42 26 C42 20 48 16 52 14" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round"/>
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#FCD34D"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  } else if (type === 'kajal') {
    return `
      <svg width="130" height="190" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Pencil Body -->
        <polygon points="55,10 65,10 63,140 57,140" fill="#181822" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
        <rect x="56" y="80" width="8" height="20" fill="#FF007A"/>
        <!-- Tip -->
        <polygon points="58,140 62,140 60,154" fill="${shadeHex}"/>
        <!-- Cap -->
        <rect x="53" y="15" width="14" height="55" rx="3" fill="#252535" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="60" y="45" fill="#F59E0B" font-size="5" font-family="sans-serif" text-anchor="middle" font-weight="bold">KOHL</text>
      </svg>
    `;
  } else if (type === 'foundation') {
    return `
      <svg width="130" height="190" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Foundation Stick Base -->
        <rect x="35" y="40" width="50" height="100" rx="8" fill="#1C1C26" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <rect x="42" y="65" width="36" height="35" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
        <text x="60" y="85" fill="#9CA3AF" font-size="7" font-weight="bold" font-family="sans-serif" text-anchor="middle">ACE MATTE</text>
        <!-- Foundation Core -->
        <rect x="40" y="16" width="40" height="24" rx="4" fill="${shadeHex}"/>
        <!-- Ring -->
        <rect x="35" y="38" width="50" height="6" fill="#F59E0B"/>
      </svg>
    `;
  } else if (type === 'highlighter') {
    return `
      <svg width="140" height="190" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Compact Case -->
        <circle cx="70" cy="80" r="55" fill="#181822" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <circle cx="70" cy="80" r="45" fill="${shadeHex}" opacity="0.9"/>
        <circle cx="70" cy="80" r="38" fill="url(#pearlGlow)"/>
        <!-- Star Shimmer -->
        <path d="M70 55 L73 73 L91 76 L73 80 L70 98 L67 80 L49 76 L67 73 Z" fill="#FFF" opacity="0.75"/>
        <defs>
          <radialGradient id="pearlGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="${shadeHex}" stop-opacity="0.3"/>
          </radialGradient>
        </defs>
      </svg>
    `;
  } else if (type === 'palette') {
    return `
      <svg width="160" height="190" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="25" width="130" height="110" rx="8" fill="#14141E" stroke="#FF007A" stroke-width="2"/>
        <rect x="25" y="35" width="110" height="90" rx="4" fill="#0A0A10"/>
        <!-- 4x2 Color Pans -->
        <rect x="32" y="42" width="20" height="20" rx="3" fill="#BE185D"/>
        <rect x="58" y="42" width="20" height="20" rx="3" fill="#B45309"/>
        <rect x="84" y="42" width="20" height="20" rx="3" fill="#F59E0B"/>
        <rect x="110" y="42" width="20" height="20" rx="3" fill="#7C2D12"/>
        <rect x="32" y="70" width="20" height="20" rx="3" fill="#F43F5E"/>
        <rect x="58" y="70" width="20" height="20" rx="3" fill="#E11D48"/>
        <rect x="84" y="70" width="20" height="20" rx="3" fill="#FB923C"/>
        <rect x="110" y="70" width="20" height="20" rx="3" fill="#431407"/>
        <text x="80" y="112" fill="#F59E0B" font-size="7" font-weight="bold" font-family="sans-serif" text-anchor="middle">SUNSET 16-PAN</text>
      </svg>
    `;
  } else {
    // Default / Combo
    return `
      <svg width="150" height="190" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="30" width="90" height="100" rx="12" fill="url(#comboGradient)" stroke="#FF007A" stroke-width="2"/>
        <path d="M40 30 Q70 10 100 30" stroke="#F59E0B" stroke-width="4" fill="none"/>
        <text x="70" y="85" fill="#FFF" font-size="12" font-weight="900" font-family="sans-serif" text-anchor="middle">GLAM</text>
        <text x="70" y="100" fill="#F59E0B" font-size="8" font-weight="bold" font-family="sans-serif" text-anchor="middle">TRIO SET</text>
        <defs>
          <linearGradient id="comboGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#4C0519"/>
            <stop offset="100%" stop-color="#1E1E2E"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  }
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = state.activeCategory === 'all' || p.category === state.activeCategory;
    const matchesSearch = !state.searchQuery || p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || p.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No cosmetics found matching "${state.searchQuery}"</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try clearing your search or switching categories.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const activeShade = p.shades[p.selectedShadeIndex];
    const isWishlisted = state.wishlist.has(p.id);

    return `
      <article class="product-card" data-product-id="${p.id}">
        <div class="card-top">
          <div class="card-badges">
            <span class="badge ${p.badgeType === 'pink' ? 'badge-pink' : 'badge-gold'}">${p.badge}</span>
            <span class="badge badge-sale">SAVE ${Math.round((1 - p.price / p.originalPrice) * 100)}%</span>
          </div>

          <button type="button" class="card-wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="Add to Wishlist" aria-label="Add to Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <div class="product-illustration" id="illu-${p.id}">
            ${renderProductSVG(p.type, activeShade.svgShade)}
          </div>

          <div class="quick-view-overlay-btn">
            <button class="btn btn-secondary btn-sm" onclick="openQuickView(${p.id})">
              Quick View
            </button>
          </div>
        </div>

        <div class="card-body">
          <div class="card-rating">
            <span>★★★★★</span>
            <span>${p.rating}</span>
            <span class="review-count">(${p.reviews})</span>
          </div>

          <h3 class="product-name">${p.name}</h3>
          <p class="product-subtitle">${p.finish}</p>

          <!-- Swatches -->
          <div class="card-swatches">
            ${p.shades.map((s, idx) => `
              <span 
                class="card-swatch-dot ${idx === p.selectedShadeIndex ? 'active' : ''}" 
                style="background-color: ${s.hex};" 
                title="${s.name}" 
                onclick="selectProductShade(${p.id}, ${idx})">
              </span>
            `).join('')}
          </div>
          <div class="card-shade-name" id="shade-name-${p.id}">Shade: ${activeShade.name}</div>

          <div class="card-footer">
            <div class="price-wrap">
              <span class="current-price">₹${p.price}</span>
              <span class="original-price">₹${p.originalPrice}</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">
              + Add
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Shade Selection
function selectProductShade(productId, shadeIndex) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  p.selectedShadeIndex = shadeIndex;

  // Update card UI
  const nameEl = document.getElementById(`shade-name-${productId}`);
  if (nameEl) nameEl.textContent = `Shade: ${p.shades[shadeIndex].name}`;

  const illuEl = document.getElementById(`illu-${productId}`);
  if (illuEl) illuEl.innerHTML = renderProductSVG(p.type, p.shades[shadeIndex].svgShade);

  // Update dots
  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (card) {
    const dots = card.querySelectorAll('.card-swatch-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === shadeIndex);
    });
  }
}

// Wishlist
function toggleWishlist(productId) {
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast('Removed from Wishlist');
  } else {
    state.wishlist.add(productId);
    showToast('Added to Wishlist ❤️');
  }
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-count-badge');
  if (badge) {
    badge.textContent = state.wishlist.size;
    badge.style.display = state.wishlist.size > 0 ? 'flex' : 'none';
  }
}

// Filter Tabs
function setCategory(category) {
  state.activeCategory = category;
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  renderProducts();
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('global-search');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  renderProducts();
}

// Cart System
function addToCart(productId, customShadeIndex = null) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const shadeIdx = customShadeIndex !== null ? customShadeIndex : p.selectedShadeIndex;
  const chosenShade = p.shades[shadeIdx];

  const existing = state.cart.find(item => item.id === productId && item.shade.name === chosenShade.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      shade: chosenShade,
      type: p.type,
      quantity: 1
    });
  }

  updateCartUI();
  showToast(`Added ${p.name} to Bag ✨`);
  openCartDrawer();
}

function updateCartQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartUI();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  updateCartUI();
  showToast('Item removed from Bag');
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-badge');
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countBadge) {
    countBadge.textContent = totalCount;
    countBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  const itemsContainer = document.getElementById('cart-items-container');
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🛍️</div>
        <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 0.5rem;">Your Bag is Empty</h4>
        <p style="font-size: 0.85rem; margin-bottom: 1.5rem;">Discover transfer-proof lipsticks and intense kajal formulas.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Explore Bestsellers</button>
      </div>
    `;
    document.getElementById('cart-subtotal').textContent = '₹0';
    document.getElementById('cart-total').textContent = '₹0';
    document.getElementById('free-ship-bar').style.width = '0%';
    document.getElementById('free-ship-text').textContent = 'Add ₹499 for FREE Delivery';
    return;
  }

  itemsContainer.innerHTML = state.cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${renderProductSVG(item.type, item.shade.svgShade)}
      </div>
      <div style="flex-grow: 1;">
        <h5 style="font-size: 0.9rem; font-weight: 700; color: #fff;">${item.name}</h5>
        <div style="font-size: 0.75rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem; margin: 0.2rem 0 0.5rem;">
          <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${item.shade.hex};"></span>
          <span>${item.shade.name}</span>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.06); padding: 0.15rem 0.5rem; border-radius: var(--radius-full);">
            <button style="background:none; border:none; color:#fff; cursor:pointer; font-weight:bold; font-size:1rem;" onclick="updateCartQuantity(${idx}, -1)">−</button>
            <span style="font-size: 0.85rem; font-weight: bold; min-width: 14px; text-align:center;">${item.quantity}</span>
            <button style="background:none; border:none; color:#fff; cursor:pointer; font-weight:bold; font-size:1rem;" onclick="updateCartQuantity(${idx}, 1)">+</button>
          </div>
          <span style="font-weight: 800; font-size: 0.95rem; color:#fff;">₹${item.price * item.quantity}</span>
        </div>
      </div>
      <button style="background:none; border:none; color:var(--text-dim); cursor:pointer; align-self: flex-start;" onclick="removeCartItem(${idx})">✕</button>
    </div>
  `).join('');

  // Calculations
  const rawSubtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round(rawSubtotal * (state.discountPercent / 100));
  const finalSubtotal = rawSubtotal - discountAmount;
  const isFreeShip = finalSubtotal >= 499;
  const shippingFee = (isFreeShip || finalSubtotal === 0) ? 0 : 49;
  const grandTotal = finalSubtotal + shippingFee;

  document.getElementById('cart-subtotal').textContent = `₹${rawSubtotal}`;
  if (discountAmount > 0) {
    document.getElementById('cart-discount-row').style.display = 'flex';
    document.getElementById('cart-discount-val').textContent = `-₹${discountAmount}`;
  } else {
    document.getElementById('cart-discount-row').style.display = 'none';
  }

  document.getElementById('cart-shipping').textContent = isFreeShip ? 'FREE' : `₹${shippingFee}`;
  document.getElementById('cart-total').textContent = `₹${grandTotal}`;

  // Free shipping bar (target 499)
  const pct = Math.min(100, Math.round((rawSubtotal / 499) * 100));
  document.getElementById('free-ship-bar').style.width = `${pct}%`;
  if (isFreeShip) {
    document.getElementById('free-ship-text').innerHTML = `🎉 You unlocked <strong>FREE Express Shipping</strong>!`;
  } else {
    document.getElementById('free-ship-text').innerHTML = `Add <strong>₹${499 - rawSubtotal}</strong> more for FREE Shipping`;
  }
}

// Drawer Visibility
function openCartDrawer() {
  document.getElementById('cart-overlay').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cart-overlay').classList.remove('open');
}

// Coupon Code Logic
function applyCoupon() {
  const code = document.getElementById('coupon-input').value.trim().toUpperCase();
  if (code === 'CRUSH20' || code === 'GLAM20') {
    state.discountCode = code;
    state.discountPercent = 20;
    showToast('Coupon CRUSH20 applied: 20% OFF! 🎉');
    updateCartUI();
  } else {
    showToast('Invalid Coupon. Use CRUSH20');
  }
}

function copyCoupon(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Code ${code} copied! Paste in Bag.`);
    const input = document.getElementById('coupon-input');
    if (input) input.value = code;
  }).catch(() => {
    showToast(`Code: ${code}`);
  });
}

// WhatsApp Fast Checkout
function checkoutViaWhatsApp() {
  if (state.cart.length === 0) {
    showToast('Your Bag is empty!');
    return;
  }

  const rawSubtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemsText = state.cart.map((item, i) => `${i + 1}. ${item.name} (${item.shade.name}) x ${item.quantity} = ₹${item.price * item.quantity}`).join('\n');
  
  const msg = `Hi CRUSH Cosmetics! 💄✨\n\nI want to order from your official store:\n\n${itemsText}\n\nTotal Amount: ₹${rawSubtotal}\nApplied Coupon: ${state.discountCode || 'None'}\n\nPlease share delivery details!`;
  
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/919845012345?text=${encoded}`, '_blank');
}

// Accessible Native Dialog Modal for Quick View
function openQuickView(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  state.quickViewProduct = p;

  const modal = document.getElementById('quick-view-dialog');
  if (!modal) return;

  const activeShade = p.shades[p.selectedShadeIndex];

  document.getElementById('qv-title').textContent = p.name;
  document.getElementById('qv-finish').textContent = p.finish;
  document.getElementById('qv-desc').textContent = p.description;
  document.getElementById('qv-price').textContent = `₹${p.price}`;
  document.getElementById('qv-orig-price').textContent = `₹${p.originalPrice}`;
  document.getElementById('qv-ingredients').textContent = p.ingredients;
  document.getElementById('qv-svg-container').innerHTML = renderProductSVG(p.type, activeShade.svgShade);

  // Render swatches in modal
  const shadesContainer = document.getElementById('qv-shades');
  shadesContainer.innerHTML = p.shades.map((s, idx) => `
    <button 
      type="button"
      class="btn btn-secondary btn-sm ${idx === p.selectedShadeIndex ? 'active' : ''}" 
      style="border-color:${idx === p.selectedShadeIndex ? '#FF007A' : 'var(--border-glass)'}; display:flex; align-items:center; gap:0.4rem; padding: 0.35rem 0.75rem;" 
      onclick="updateQuickViewShade(${idx})">
      <span style="width:12px; height:12px; border-radius:50%; background:${s.hex}; display:inline-block;"></span>
      <span>${s.name}</span>
    </button>
  `).join('');

  modal.showModal();
}

function updateQuickViewShade(shadeIndex) {
  const p = state.quickViewProduct;
  if (!p) return;
  p.selectedShadeIndex = shadeIndex;

  const activeShade = p.shades[shadeIndex];
  document.getElementById('qv-svg-container').innerHTML = renderProductSVG(p.type, activeShade.svgShade);
  
  const shadesContainer = document.getElementById('qv-shades');
  const buttons = shadesContainer.querySelectorAll('button');
  buttons.forEach((b, i) => {
    b.style.borderColor = (i === shadeIndex) ? '#FF007A' : 'var(--border-glass)';
  });
}

function addQuickViewToCart() {
  if (state.quickViewProduct) {
    addToCart(state.quickViewProduct.id, state.quickViewProduct.selectedShadeIndex);
    closeQuickView();
  }
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-dialog');
  if (modal) modal.close();
}

// Toast Alert
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Flash Sale Countdown Timer
function initCountdown() {
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');
  if (!hoursEl || !minsEl || !secsEl) return;

  let totalSeconds = 4 * 3600 + 42 * 60 + 19;

  setInterval(() => {
    if (totalSeconds <= 0) totalSeconds = 24 * 3600;
    totalSeconds--;

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

// Virtual Shade Finder Quiz
function startQuiz() {
  const dialog = document.getElementById('quiz-dialog');
  if (dialog) dialog.showModal();
}

function closeQuiz() {
  const dialog = document.getElementById('quiz-dialog');
  if (dialog) dialog.close();
}

function selectQuizAnswer(step, choice) {
  if (step === 1) {
    document.getElementById('quiz-step-1').style.display = 'none';
    document.getElementById('quiz-step-2').style.display = 'block';
  } else if (step === 2) {
    document.getElementById('quiz-step-2').style.display = 'none';
    document.getElementById('quiz-step-3').style.display = 'block';
  } else if (step === 3) {
    document.getElementById('quiz-step-3').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
  }
}

function resetQuiz() {
  document.getElementById('quiz-step-1').style.display = 'block';
  document.getElementById('quiz-step-2').style.display = 'none';
  document.getElementById('quiz-step-3').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
}

// Instant Checkout Mock Modal
function openInstantCheckout() {
  if (state.cart.length === 0) {
    showToast('Please add items to Bag first!');
    return;
  }
  const modal = document.getElementById('checkout-dialog');
  if (modal) modal.showModal();
}

function closeInstantCheckout() {
  const modal = document.getElementById('checkout-dialog');
  if (modal) modal.close();
}

function handleMockOrder(e) {
  e.preventDefault();
  closeInstantCheckout();
  closeCartDrawer();
  state.cart = [];
  updateCartUI();
  showToast('Order Placed Successfully! Ref: #CRUSH-9841 🎉');
}

// Initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initCountdown();

  // Global search input
  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Close modal when clicking on backdrop (native dialog feature)
  const qvModal = document.getElementById('quick-view-dialog');
  if (qvModal) {
    qvModal.addEventListener('click', (e) => {
      const rect = qvModal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) qvModal.close();
    });
  }
});
