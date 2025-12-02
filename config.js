window.HOFKI_CONFIG = {
  // Use your googleusercontent echo URL as-is (no extra params)
  SCRIPT_BASE: "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh-ioxSNimj6EXqQ8U-peI8iRQ5IaVVMVW9s8EVvhELDMdoyN7MZiQyMqS_kqbH_A2GcnHQ05VonNWUguwRY0EE9hm8W1vUGH-6-vjeU6WNp_YMamc_oXltzZfmbvQYSQHZaaKVKOMyMZB3SSfkUso0DhM9d5ZxHvYaOPlF3fZtgRYDTebVQjacGhcYQmddEI5N1dMvTBNMhCb0S_EfXjSDoexxiDqbjCsJnLgbSsjrMAZ0jiWLmgusrIU7_R6QflaxU8ZL-XHp0q8UnOQI5CLYWNbvtt6i-ZaZ4_QwrnPdyQAbuYI&lib=M6SpIB0tRoB9oJ6-GdKDVxeu0tDxyzix0",

  PRODUCTS_API() {
    // GET to echo URL => products JSON
    return this.SCRIPT_BASE;
  },

  ORDER_API() {
    // POST to same echo URL => create order
    return this.SCRIPT_BASE;
  },

  // Your WhatsApp number (no +, include country code)
  WHATSAPP_NUMBER: "91XXXXXXXXXX"
};
