import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";

// Helper function to get auth headers
const getAuthHeaders = () => {
  const user = localStorage.getItem('user');
  if (!user) return {};
  
  try {
    const userData = JSON.parse(user);
    if (userData.token) {
      return {
        'Authorization': `Bearer ${userData.token}`,
        'Content-Type': 'application/json'
      };
    }
  } catch (error) {
    console.error('Error parsing user data:', error);
  }
  
  return { 'Content-Type': 'application/json' };
};

export async function createOrder(orderData) {
  const response = await axios.post(API_URL, orderData, {
    headers: getAuthHeaders()
  });
  return response.data;
}
