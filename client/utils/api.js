const BASE_URL = 'http://localhost:3000';

export const api = {
  createCategory: async (categoryData) => {
    const response = await fetch(`${BASE_URL}/createcategory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    return await response.json();
  },

  removeCategory: async (categoryData) => {
    const response = await fetch(`${BASE_URL}/removecategory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    return await response.json();
  },

  editCategory: async (categoryData) => {
    const response = await fetch(`${BASE_URL}/editcategory`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    return await response.json();
  },

  createUser: async (userData) => {
    const response = await fetch(`${BASE_URL}/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  removeUser: async (userData) => {
    const response = await fetch(`${BASE_URL}/removeuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  createTask: async (taskData) => {
    const response = await fetch(`${BASE_URL}/createtask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    return await response.json();
  },
};