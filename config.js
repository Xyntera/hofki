window.HOFKI_CONFIG = {
  // Replace with your script base URL (WITHOUT any ?query)
  SCRIPT_BASE: 'https://script.google.com/macros/s/AKfycbwh0SJU28gdRTpERDEEg8BCuo8V2X6--lqi3R2EE3Ce-Pd6P9RGfPpID1QZi1ujG9ZJ1g/exec',

  PRODUCTS_API() {
    return this.SCRIPT_BASE + '?type=products';
  },

  ORDER_API() {
    return this.SCRIPT_BASE + '?type=order';
  },

  // WhatsApp number (no + sign, include country code)
  // Example: +91 9876543210 → '919876543210'
  WHATSAPP_NUMBER: '91XXXXXXXXXX'
};
