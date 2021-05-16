# Update Product

> ## Success cases

1. ✅ User sends a **PATCH** request to route **/products/{product_id}**
2. ✅ User sends in the **Body**: { name?, price?, active? }
3. ✅ Server updates a product in the database
4. ✅ Returns **200** with the product info

> ## Exceptions

1. ❌ In case of invalid body format

    Returns **400** "Bad Request"

2. ❌ In case of server error

    Returns **500** "Internal Server Error"