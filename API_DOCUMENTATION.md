# API Documentation

This document provides comprehensive documentation for the Helmets and Gears API endpoints.

## Base URL
```
http://localhost:5000/api
```

## Authentication

Most admin endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## User Management

### Get All Users (Admin)
- **URL**: `/admin/users`
- **Method**: `GET`
- **Auth Required**: Yes (Admin)
- **Response**: List of all users with their details

### Update User Status (Admin)
- **URL**: `/admin/users/:userId/status`
- **Method**: `PUT`
- **Auth Required**: Yes (Admin)
- **Body**:
```json
{
  "isActive": true
}
```
- **Response**: Success message with updated user status

### Delete User (Admin)
- **URL**: `/admin/users/:userId`
- **Method**: `DELETE`
- **Auth Required**: Yes (Admin)
- **Response**: Success message

## Product Management

### Get All Products
- **URL**: `/products`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: List of all active products

### Get Product by ID
- **URL**: `/products/:id`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: Single product details

### Create Product (Admin)
- **URL**: `/products`
- **Method**: `POST`
- **Auth Required**: Yes (Admin)
- **Content-Type**: `multipart/form-data`
- **Body**: Form data with product details and image file

### Update Product (Admin)
- **URL**: `/products/:id`
- **Method**: `PUT`
- **Auth Required**: Yes (Admin)
- **Content-Type**: `multipart/form-data`
- **Body**: Form data with updated product details

### Delete Product (Admin)
- **URL**: `/products/:id`
- **Method**: `DELETE`
- **Auth Required**: Yes (Admin)
- **Response**: Success message

## Order Management

### Create Order
- **URL**: `/orders`
- **Method**: `POST`
- **Auth Required**: No
- **Body**:
```json
{
  "userId": 1,
  "items": [...],
  "totalAmount": 299.99,
  "shippingAddress": {...}
}
```

### Get Orders by User
- **URL**: `/orders/user/:userId`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: List of orders for the specified user

### Get All Orders (Admin)
- **URL**: `/admin/orders`
- **Method**: `GET`
- **Auth Required**: Yes (Admin)
- **Response**: List of all orders with user details

### Update Order Status (Admin)
- **URL**: `/admin/orders/:orderId/status`
- **Method**: `PUT`
- **Auth Required**: Yes (Admin)
- **Body**:
```json
{
  "status": "shipped"
}
```

## Authentication

### User Login
- **URL**: `/auth/login`
- **Method**: `POST`
- **Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Admin Login
- **URL**: `/auth/admin/login`
- **Method**: `POST`
- **Body**:
```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

## Contact

### Submit Contact Form
- **URL**: `/contacts`
- **Method**: `POST`
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

### Get All Contacts (Admin)
- **URL**: `/contacts`
- **Method**: `GET`
- **Auth Required**: Yes (Admin)
- **Response**: List of all contact form submissions

## File Upload

### Upload File
- **URL**: `/uploads`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Body**: File data
- **Response**: File URL

## Admin Dashboard

### Get Dashboard Data
- **URL**: `/admin/dashboard`
- **Method**: `GET`
- **Auth Required**: Yes (Admin)
- **Response**: Dashboard statistics and data

## Error Responses

All endpoints return appropriate HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

Error responses include a message field:
```json
{
  "message": "Error description"
}
```
