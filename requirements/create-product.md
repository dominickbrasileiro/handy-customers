# Create Product

> ## Success cases

1. ✅ User sends a **POST** request to route **/products**
2. ✅ User sends in the **Body**: { name, price }
3. ✅ Server creates an active product in the database
4. ✅ Returns **200** with the product info

> ## Exceptions

1. ❌ In case of invalid body format

    Returns **400** "Bad Request"

2. ❌ In case of server error

    Returns **500** "Internal Server Error"