// Product API service

const API_URL = 'http://localhost:3000/api/products';

export async function getProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export async function createProduct(product) {
  let body, headers;
  if (product.image) {
    body = new FormData();
    body.append('name', product.name);
    body.append('description', product.description || '');
    body.append('price', product.price);
    body.append('category', product.category || '');
    body.append('stock', product.stock || 0);
    body.append('image', product.image);
    headers = undefined; // Let browser set multipart/form-data
  } else {
    body = JSON.stringify(product);
    headers = { 'Content-Type': 'application/json' };
  }
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body,
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
}

export async function updateProduct(id, product) {
  let body, headers;
  if (product.image) {
    body = new FormData();
    body.append('name', product.name);
    body.append('description', product.description || '');
    body.append('price', product.price);
    body.append('category', product.category || '');
    body.append('stock', product.stock || 0);
    body.append('image', product.image);
    headers = undefined;
  } else {
    body = JSON.stringify(product);
    headers = { 'Content-Type': 'application/json' };
  }
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers,
    body,
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete product');
  return res.json();
} 