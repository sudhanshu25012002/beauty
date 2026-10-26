// Cart Management System for CRUSH Cosmetics
const CART_STORAGE_KEY = 'crush_cosmetics_cart';
const COUPON_STORAGE_KEY = 'crush_cosmetics_coupon';

const Cart = {
  getItems() {
    try {
      return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    this.updateBadges();
  },

  addItem(productId, shadeName, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;

    const items = this.getItems();
    const existingIndex = items.findIndex(
      item => item.id === productId && item.shade === (shadeName || (product.shades && product.shades[0].name))
    );

    const shade = shadeName || (product.shades && product.shades[0].name) || 'Default';
    const shadeObj = product.shades ? product.shades.find(s => s.name === shade) : null;
    const shadeColor = shadeObj ? shadeObj.color : '#ff2d75';

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        shade: shade,
        shadeColor: shadeColor,
        quantity: quantity
      });
    }

    this.saveItems(items);
    this.showToast(`Added ${quantity}x "${product.name}" to Bag! ✨`);
    this.renderMiniCart();
    this.openMiniCart();
  },

  removeItem(index) {
    const items = this.getItems();
    items.splice(index, 1);
    this.saveItems(items);
    this.renderMiniCart();
    if (typeof renderCartPage === 'function') renderCartPage();
    if (typeof renderCheckoutPage === 'function') renderCheckoutPage();
  },

  updateQuantity(index, newQty) {
    const items = this.getItems();
    if (newQty <= 0) {
      this.removeItem(index);
      return;
    }
    items[index].quantity = newQty;
    this.saveItems(items);
    this.renderMiniCart();
    if (typeof renderCartPage === 'function') renderCartPage();
    if (typeof renderCheckoutPage === 'function') renderCheckoutPage();
  },

  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal() {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCoupon() {
    try {
      return JSON.parse(localStorage.getItem(COUPON_STORAGE_KEY));
    } catch (e) {
      return null;
    }
  },

  applyCoupon(code) {
    code = (code || '').trim().toUpperCase();
    if (code === 'CRUSH20') {
      localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify({ code: 'CRUSH20', discountPercent: 20, description: '20% Off Festive Glam' }));
      return { success: true, message: '🎉 Promo code CRUSH20 applied! 20% Discount unlocked.' };
    } else if (code === 'SUGARLOVE') {
      localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify({ code: 'SUGARLOVE', flatDiscount: 300, description: '₹300 Off Iconic Beauty' }));
      return { success: true, message: '💖 SUGARLOVE applied! ₹300 Instant savings.' };
    } else if (code === 'WELCOME10') {
      localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify({ code: 'WELCOME10', discountPercent: 10, description: '10% Off First Crush' }));
      return { success: true, message: '✨ WELCOME10 applied! 10% Discount unlocked.' };
    }
    return { success: false, message: '❌ Invalid promo code. Try "CRUSH20" or "SUGARLOVE".' };
  },

  removeCoupon() {
    localStorage.removeItem(COUPON_STORAGE_KEY);
  },

  getCalculations() {
    const subtotal = this.getSubtotal();
    const coupon = this.getCoupon();
    let discount = 0;

    if (coupon) {
      if (coupon.discountPercent) {
        discount = Math.round((subtotal * coupon.discountPercent) / 100);
      } else if (coupon.flatDiscount) {
        discount = Math.min(coupon.flatDiscount, subtotal);
      }
    }

    const freeShippingThreshold = 499;
    const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 70;
    const total = Math.max(0, subtotal - discount + shipping);

    return {
      subtotal,
      discount,
      shipping,
      total,
      freeShippingThreshold,
      freeShippingProgress: Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100)),
      amountNeededForFreeShipping: Math.max(0, freeShippingThreshold - subtotal),
      coupon
    };
  },

  clear() {
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(COUPON_STORAGE_KEY);
    this.updateBadges();
  },

  updateBadges() {
    const count = this.getCount();
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  showToast(message) {
    let toast = document.getElementById('crush-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'crush-toast';
      toast.className = 'crush-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="toast-icon">💄</span> <span>${message}</span>`;
    toast.classList.add('visible');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  },

  openMiniCart() {
    const drawer = document.getElementById('mini-cart-drawer');
    const overlay = document.getElementById('mini-cart-overlay');
    if (drawer && overlay) {
      this.renderMiniCart();
      drawer.classList.add('open');
      overlay.classList.add('open');
    }
  },

  closeMiniCart() {
    const drawer = document.getElementById('mini-cart-drawer');
    const overlay = document.getElementById('mini-cart-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    }
  },

  renderMiniCart() {
    const itemsContainer = document.getElementById('mini-cart-items');
    const footerContainer = document.getElementById('mini-cart-footer');
    if (!itemsContainer || !footerContainer) return;

    const items = this.getItems();
    const calc = this.getCalculations();

    if (items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <div class="empty-icon">🛍️</div>
          <h3>Your Bag is Empty!</h3>
          <p>Don't leave your lips and eyes waiting. Explore bestselling glam now.</p>
          <a href="shop.html" class="btn btn-primary" onclick="Cart.closeMiniCart()">Start Shopping</a>
        </div>
      `;
      footerContainer.style.display = 'none';
      return;
    }

    footerContainer.style.display = 'block';
    itemsContainer.innerHTML = items.map((item, index) => `
      <div class="mini-cart-item">
        <img src="${item.image}" alt="${item.name}" class="mini-item-img">
        <div class="mini-item-info">
          <div class="mini-item-header">
            <h4>${item.name}</h4>
            <button class="remove-btn" onclick="Cart.removeItem(${index})" title="Remove item">×</button>
          </div>
          <div class="mini-item-shade">
            <span class="shade-dot" style="background-color: ${item.shadeColor};"></span>
            <span>${item.shade}</span>
          </div>
          <div class="mini-item-bottom">
            <div class="qty-stepper">
              <button onclick="Cart.updateQuantity(${index}, ${item.quantity - 1})">-</button>
              <span>${item.quantity}</span>
              <button onclick="Cart.updateQuantity(${index}, ${item.quantity + 1})">+</button>
            </div>
            <div class="mini-item-price">₹${item.price * item.quantity}</div>
          </div>
        </div>
      </div>
    `).join('');

    footerContainer.innerHTML = `
      <div class="free-shipping-bar">
        ${calc.shipping === 0 
          ? '<span class="free-ship-tag">🎉 Congratulations! You unlocked FREE Express Shipping</span>'
          : `<span>Add ₹${calc.amountNeededForFreeShipping} more for <strong>FREE Express Shipping</strong></span>`
        }
        <div class="progress-track"><div class="progress-fill" style="width: ${calc.freeShippingProgress}%"></div></div>
      </div>
      <div class="mini-cart-summary">
        <div class="mini-row">
          <span>Subtotal</span>
          <span>₹${calc.subtotal}</span>
        </div>
        ${calc.discount > 0 ? `
          <div class="mini-row discount-row">
            <span>Coupon Discount (${calc.coupon.code})</span>
            <span>-₹${calc.discount}</span>
          </div>
        ` : ''}
        <div class="mini-row total-row">
          <span>Estimated Total</span>
          <span>₹${calc.total}</span>
        </div>
      </div>
      <div class="mini-cart-actions">
        <a href="cart.html" class="btn btn-secondary">View Bag (${calc.subtotal ? Cart.getCount() : 0})</a>
        <a href="checkout.html" class="btn btn-primary btn-glow">Checkout • ₹${calc.total}</a>
      </div>
    `;
  }
};

// Global init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadges();

  // Attach overlay and close button listeners
  const overlay = document.getElementById('mini-cart-overlay');
  const closeBtn = document.getElementById('mini-cart-close');
  if (overlay) overlay.addEventListener('click', () => Cart.closeMiniCart());
  if (closeBtn) closeBtn.addEventListener('click', () => Cart.closeMiniCart());

  // Attach all trigger buttons
  document.querySelectorAll('.open-mini-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      Cart.openMiniCart();
    });
  });
});
