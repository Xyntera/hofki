window.HOFKI_CONFIG = {
  // 👇 PASTE YOUR googleusercontent echo URL here (no &type=... added)
  SCRIPT_BASE: "https://script.googleusercontent.com/macros/echo?user_content_key=XXXXXXX&lib=YYYYYYY",

  PRODUCTS_API() {
    // echo URL already has query params, so we add &type=
    return this.SCRIPT_BASE + "&type=products";
  },

  ORDER_API() {
    return this.SCRIPT_BASE + "&type=order";
  },

  // WhatsApp number (no + sign, include country code)
  // e.g. +91 7510660614 → "917510660614"
  WHATSAPP_NUMBER: "91XXXXXXXXXX"
};
