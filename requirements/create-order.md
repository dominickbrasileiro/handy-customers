# Create Order

> ## Success cases

1. ✅ User sends a **POST** request to route **/orders**
2. ✅ User sends in the **Body**: { customer_id, product_ids }
3. ✅ Server creates an order with datetime in the database
4. ✅ Returns **201** with the order info

> ## Exceptions

1. ❌ In case of invalid body format

    Returns **400** "Bad Request"

2. ❌ In case of customer or products not found

    Returns **404** "Not Found"

3. ❌ In case of server error

    Returns **500** "Internal Server Error"