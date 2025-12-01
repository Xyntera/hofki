window.HOFKI_CONFIG = {
  // USE THE GOOGLEUSERCONTENT.COM ECHO URL HERE
  // (no &type=... at the end, just as you copied it)
  SCRIPT_BASE: 'https://script.googleusercontent.com/macros/echo?user_content_key=XXXX&lib=YYYY',

  PRODUCTS_API() {
    // base already has query params, so append with &type=
    return this.SCRIPT_BASE + '&type=products';
  },

  ORDER_API() {
    return this.SCRIPT_BASE + '&type=order';
  },

  // Your WhatsApp number (no + sign, with country code)
  WHATSAPP_NUMBER: '917510660614'
};
