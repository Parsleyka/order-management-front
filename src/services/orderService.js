import apiClient from './apiClient.js'

const apiEndpoint = '/api'

export default {
    createOrder: async (data) => {
        return apiClient(
            `${apiEndpoint}/orders`,
            'POST',
            data
        )
    },

    getOrdersByUserId: async (userId) => {
        return apiClient(
            `${apiEndpoint}/orders/${userId}`,
            'GET'
        )
    }
}