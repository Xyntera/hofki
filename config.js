window.HOFKI_CONFIG = {
  // use the normal web app URL (no ?type here)
  SCRIPT_BASE: "https://script.google.com/macros/s/AKfycbwh0SJU28gdRTpERDEEg8BCuo8V2X6--lqi3R2EE3Ce-Pd6P9RGfPpID1QZi1ujG9ZJ1g/exec",

  PRODUCTS_API() {
    return this.SCRIPT_BASE + "?type=products";
  },

  ORDER_API() {
    return this.SCRIPT_BASE + "?type=order";
  },

  // your WhatsApp number (no +, include country code)
  WHATSAPP_NUMBER: "91XXXXXXXXXX"
};
