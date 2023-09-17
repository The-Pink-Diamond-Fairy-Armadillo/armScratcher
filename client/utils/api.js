const BASE_URL = 'http://localhost:3001';

export const api = {
  createCategory: async (categoryData) => {
    const response = await fetch(`${BASE_URL}/route/createcategory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    return await response.json();
  },

  removeCategory: async (categoryData) => {
    const response = await fetch(`${BASE_URL}/route/removecategory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    return await response.json();
  },

  editCategory: async (categoryData) => {
    const response = await fetch(`${BASE_URL}/route/editcategory`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    return await response.json();
  },

  createUser: async (userData) => {
    const response = await fetch(`${BASE_URL}/route/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  removeUser: async (userData) => {
    const response = await fetch(`${BASE_URL}/route/removeuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  createTask: async (taskData) => {
    const response = await fetch(`${BASE_URL}/route/createtask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    return await response.json();
  },
};