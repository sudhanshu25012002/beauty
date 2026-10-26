// Payment Gateway Engine for CRUSH Cosmetics (Razorpay / Cashfree style)
const PaymentGateway = {
  activeOrder: null,

  initGatewayModal() {
    if (document.getElementById('gateway-modal-dialog')) return;

    const dialog = document.createElement('dialog');
    dialog.id = 'gateway-modal-dialog';
    dialog.className = 'gateway-dialog';
    dialog.innerHTML = `
      <div class="gateway-container">
        <div class="gateway-header">
          <div class="gateway-brand">
            <span class="gateway-logo-icon">⚡</span>
            <div>
              <h3>CRUSH SECURE PAY</h3>
              <p>Powered by Razorpay Verified Gateway</p>
            </div>
          </div>
          <button class="gateway-close-btn" id="gateway-close-btn" aria-label="Cancel Payment">&times;</button>
        </div>

        <div class="gateway-amount-bar">
          <div class="amount-label">Amount Payable</div>
          <div class="amount-value" id="gateway-display-amount">₹0</div>
        </div>

        <div class="gateway-body" id="gateway-body">
          <!-- Dynamic Content rendered by state -->
        </div>

        <div class="gateway-footer">
          <div class="security-badges">
            <span>🔒 256-bit Bank Grade SSL</span>
            <span>🛡️ RBI Compliant</span>
            <span>⚡ Instant Refund Protection</span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);

    document.getElementById('gateway-close-btn').addEventListener('click', () => {
      this.closeModal();
    });
  },

  openModal() {
    this.initGatewayModal();
    const dialog = document.getElementById('gateway-modal-dialog');
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  },

  closeModal() {
    const dialog = document.getElementById('gateway-modal-dialog');
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
    }
  },

  processPayment(orderData, paymentMethod, paymentDetails) {
    this.activeOrder = orderData;
    this.openModal();

    const displayAmount = document.getElementById('gateway-display-amount');
    if (displayAmount) displayAmount.textContent = `₹${orderData.total}`;

    const body = document.getElementById('gateway-body');
    if (!body) return;

    if (paymentMethod === 'upi') {
      this.renderUPIGateway(body, orderData, paymentDetails);
    } else if (paymentMethod === 'card') {
      this.renderCardGateway(body, orderData, paymentDetails);
    } else if (paymentMethod === 'netbanking') {
      this.renderNetBankingGateway(body, orderData, paymentDetails);
    } else if (paymentMethod === 'cod') {
      this.renderCODConfirmation(body, orderData);
    }
  },

  renderUPIGateway(container, orderData, details) {
    const upiId = details.upiId || 'customer@upi';
    container.innerHTML = `
      <div class="gateway-step gateway-upi-step">
        <div class="upi-phone-alert">
          <div class="pulse-ring"></div>
          <div class="upi-alert-content">
            <h4>Payment Request Sent!</h4>
            <p>Please open <strong>${details.appName || 'your UPI App'}</strong> (${upiId}) and approve the request for <strong>₹${orderData.total}</strong> within 5 minutes.</p>
          </div>
        </div>

        <div class="upi-timer-box">
          <span>Time Remaining:</span>
          <span class="timer-countdown" id="upi-countdown">04:59</span>
        </div>

        <div class="simulated-approval-card">
          <div class="sim-header">
            <span>📲 SIMULATED UPI NOTIFICATION</span>
            <span class="badge-test">DEMO MODE</span>
          </div>
          <div class="sim-body">
            <p><strong>CRUSH COSMETICS</strong> is requesting <strong>₹${orderData.total}</strong></p>
            <button class="btn btn-primary btn-block" id="simulate-upi-approve-btn">
              Simulate Instant UPI Approval
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('simulate-upi-approve-btn').addEventListener('click', () => {
      this.triggerAuthorizingAnimation(container, orderData, 'UPI', `TXN_UPI_${Date.now()}`);
    });
  },

  renderCardGateway(container, orderData, details) {
    const last4 = (details.cardNumber || '4111').slice(-4);
    const mockOtp = Math.floor(100000 + Math.random() * 900000);

    container.innerHTML = `
      <div class="gateway-step gateway-otp-step">
        <div class="bank-auth-header">
          <div class="bank-logo-text">VERIFIED BY VISA / MASTERCARD 3D SECURE</div>
          <p>An OTP has been sent to your registered mobile number ending with <strong>•••••${(orderData.phone || '98765').slice(-4)}</strong></p>
        </div>

        <div class="otp-input-card">
          <label for="gateway-otp-input">Enter 6-Digit One Time Password (OTP)</label>
          <div class="otp-hint-banner">
            <span>Demo Test OTP: <strong>${mockOtp}</strong></span>
            <button type="button" class="btn-copy-otp" id="auto-fill-otp">Auto-Fill</button>
          </div>
          <input type="text" id="gateway-otp-input" maxlength="6" placeholder="• • • • • •" class="gateway-input otp-large-input" value="">
          <button class="btn btn-primary btn-block btn-pay-now" id="submit-card-otp-btn">
            Submit OTP & Pay ₹${orderData.total}
          </button>
        </div>
      </div>
    `;

    document.getElementById('auto-fill-otp').addEventListener('click', () => {
      document.getElementById('gateway-otp-input').value = mockOtp;
    });

    document.getElementById('submit-card-otp-btn').addEventListener('click', () => {
      const enteredOtp = document.getElementById('gateway-otp-input').value.trim();
      if (enteredOtp.length < 4) {
        alert('Please enter the 6-digit OTP');
        return;
      }
      this.triggerAuthorizingAnimation(container, orderData, `Card ending in ${last4}`, `TXN_CARD_${Date.now()}`);
    });
  },

  renderNetBankingGateway(container, orderData, details) {
    container.innerHTML = `
      <div class="gateway-step">
        <div class="bank-auth-header">
          <h4>Connecting to ${details.bankName || 'Selected Bank'} Gateway</h4>
          <p>Authenticating your secure Net Banking session...</p>
        </div>
        <div class="simulated-approval-card">
          <p>Login to <strong>${details.bankName || 'Net Banking'}</strong> Portal</p>
          <button class="btn btn-primary btn-block" id="simulate-nb-approve-btn">
            Simulate Bank Authorization & Pay ₹${orderData.total}
          </button>
        </div>
      </div>
    `;

    document.getElementById('simulate-nb-approve-btn').addEventListener('click', () => {
      this.triggerAuthorizingAnimation(container, orderData, `Net Banking (${details.bankName})`, `TXN_NB_${Date.now()}`);
    });
  },

  renderCODConfirmation(container, orderData) {
    container.innerHTML = `
      <div class="gateway-step">
        <div class="bank-auth-header">
          <h4>Cash on Delivery Verification</h4>
          <p>Your order of <strong>₹${orderData.total}</strong> will be collected via cash or UPI QR at your doorstep.</p>
        </div>
        <div class="simulated-approval-card">
          <button class="btn btn-primary btn-block" id="simulate-cod-confirm-btn">
            Confirm COD Order
          </button>
        </div>
      </div>
    `;

    document.getElementById('simulate-cod-confirm-btn').addEventListener('click', () => {
      this.triggerAuthorizingAnimation(container, orderData, 'Cash on Delivery', `COD_${Date.now()}`);
    });
  },

  triggerAuthorizingAnimation(container, orderData, paymentMethodName, txnId) {
    container.innerHTML = `
      <div class="gateway-processing-step">
        <div class="gateway-spinner"></div>
        <h4>Securing Transaction...</h4>
        <p>Contacting bank servers and confirming settlement.</p>
        <span class="gateway-warning-text">⚠️ Do not close or refresh this window</span>
      </div>
    `;

    setTimeout(() => {
      this.renderSuccess(container, orderData, paymentMethodName, txnId);
    }, 1800);
  },

  renderSuccess(container, orderData, paymentMethodName, txnId) {
    const orderNumber = `CRUSH-${Math.floor(100000 + Math.random() * 900000)}`;
    const finalOrder = {
      orderNumber,
      transactionId: txnId,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      paymentMethod: paymentMethodName,
      items: orderData.items,
      subtotal: orderData.subtotal,
      discount: orderData.discount,
      shipping: orderData.shipping,
      total: orderData.total,
      shippingDetails: orderData.shippingDetails
    };

    localStorage.setItem('crush_latest_order', JSON.stringify(finalOrder));
    Cart.clear();

    container.innerHTML = `
      <div class="gateway-success-step">
        <div class="success-checkmark-circle">
          <span class="checkmark">✓</span>
        </div>
        <h3 class="success-title">Payment Successful!</h3>
        <p class="success-sub">Transaction Reference: <strong>${txnId}</strong></p>
        <p class="order-id-highlight">Order ID: <strong>#${orderNumber}</strong></p>
        <div class="success-actions">
          <button class="btn btn-primary btn-block" id="gateway-goto-receipt">
            View Order Receipt & Invoice
          </button>
        </div>
      </div>
    `;

    document.getElementById('gateway-goto-receipt').addEventListener('click', () => {
      this.closeModal();
      window.location.href = `checkout.html?status=confirmed&order=${orderNumber}`;
    });
  }
};
