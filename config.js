window.HOFKI_CONFIG = {
  SCRIPT_BASE: "https://script.googleusercontent.com/macros/echo?user_content_key=AAAAAA&lib=BBBBBB",

  PRODUCTS_API() {
    return this.SCRIPT_BASE + "&type=products";
  },

  ORDER_API() {
    return this.SCRIPT_BASE + "&type=order";
  },

  WHATSAPP_NUMBER: "91XXXXXXXXXX"
};
