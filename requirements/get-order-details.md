# Get Order Details

> ## Success cases

1. ✅ User sends a **GET** request to route **/orders/{order_id}**
2. ✅ Server gets all the order info (including customer and products) from the database
3. ✅ Returns **200** with the order details

> ## Exceptions

1. ❌ In case of order not found

    Returns **404** "Not Found"
  
2. ❌ In case of server error

    Returns **500** "Internal Server Error"