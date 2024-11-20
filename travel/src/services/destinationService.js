import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/destinations',
});

const destinationService = {
  getDestinations: async () => {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (err) {
      throw new Error('Failed to fetch destinations');
    }
  },

  getDestinationById: async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (err) {
      throw new Error('Failed to fetch destination');
    }
  },
};

export default destinationService;
