const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'API error');
  }
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}

export const api = {
  listProducts: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/products${qs ? `?${qs}` : ''}`);
  },
  getProduct: (id) => request(`/api/products/${id}`),
  wishlist: {
    get: (userId) => request(`/api/wishlist?user_id=${userId}`),
    add: (body) => request(`/api/wishlist`, { method: 'POST', body: JSON.stringify(body) }),
    remove: (userId, productId) => request(`/api/wishlist?user_id=${userId}&product_id=${productId}`, { method: 'DELETE' }),
  },
  cart: {
    get: (userId) => request(`/api/cart?user_id=${userId}`),
    add: (body) => request(`/api/cart`, { method: 'POST', body: JSON.stringify(body) }),
    update: (body) => request(`/api/cart`, { method: 'PUT', body: JSON.stringify(body) }),
    remove: (userId, productId) => request(`/api/cart?user_id=${userId}&product_id=${productId}`, { method: 'DELETE' }),
  },
  orders: {
    list: () => request(`/api/orders`),
    update: (orderId, params) => {
      const qs = new URLSearchParams(params).toString();
      return request(`/api/orders/${orderId}?${qs}`, { method: 'PUT' });
    },
  },
  payment: {
    createOrder: (order) => request(`/api/payment/create-order`, { method: 'POST', body: JSON.stringify(order) }),
    verify: (body) => request(`/api/payment/verify`, { method: 'POST', body: JSON.stringify(body) }),
  }
}

export function getUserId() {
  let id = localStorage.getItem('demo_user_id');
  if (!id) {
    id = `demo_${Math.random().toString(36).slice(2,10)}`;
    localStorage.setItem('demo_user_id', id);
  }
  return id;
}
