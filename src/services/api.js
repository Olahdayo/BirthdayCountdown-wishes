const BASE_URL = 'https://birthday-db.onrender.com/api';

export const api = {
  // Admin Authentication
  async registerAdmin(adminData) {
    const response = await fetch(`${BASE_URL}/admin/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(adminData)
    });
    return response.json();
  },

  async loginAdmin(credentials) {
    const response = await fetch(`${BASE_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },

  // Birthday Configuration
  async getConfig(uniqueRoute) {
    const response = await fetch(`${BASE_URL}/config/${uniqueRoute}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.json();
  },

  async updateConfig(uniqueRoute, config) {
    const response = await fetch(`${BASE_URL}/config/${uniqueRoute}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(config)
    });
    return response.json();
  },

  // Birthday Wishes
  async getWishes(uniqueRoute) {
    const response = await fetch(`${BASE_URL}/wishes/${uniqueRoute}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.json();
  },

  async submitWish(uniqueRoute, wishData) {
    const response = await fetch(`${BASE_URL}/wishes/${uniqueRoute}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wishData)
    });
    return response.json();
  },

  async deleteWish(uniqueRoute, wishId) {
    const response = await fetch(`${BASE_URL}/wishes/${uniqueRoute}/${wishId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.json();
  },

  async updateWish(uniqueRoute, wishId, wishData) {
    const response = await fetch(`${BASE_URL}/wishes/${uniqueRoute}/${wishId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(wishData)
    });
    return response.json();
  }
}; 