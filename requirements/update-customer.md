# Create Customer

> ## Success cases

1. ✅ User sends a **PATCH** request to route **/customers/{customer_id}**
2. ✅ User sends in the **Body**: { name?, phone_number?, birth_date?, active? }
3. ✅ Server updates an active customer in the database
4. ✅ Returns **200** with the customer info

> ## Exceptions

1. ❌ In case of invalid body format

    Returns **400** "Bad Request"

2. ❌ In case of server error

    Returns **500** "Internal Server Error"