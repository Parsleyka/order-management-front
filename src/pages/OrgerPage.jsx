import { Box, Container, CssBaseline } from '@mui/material'
import OrderForm from '../components/OrderForm/OrderForm.jsx'
import OrderList from '../components/OrderList/OrderList.jsx'
import { useEffect, useState } from 'react'
import styles from './OrderPage.module.css'
import orderService from '../services/orderService.js'

function OrderPage({ setError }) {
    const [userId, setUserId] = useState(null)
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        if (userId) {
            const response = await orderService.getOrdersByUserId(userId)

            if (!response.success) {
                setError(response.error.message)
            } else {
                setOrders(response.body)
            }
        }
    }

    useEffect(() => {
        fetchOrders()
    },[userId])

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="xl" className="containerFlex">
                <Box className={styles.formContainer}>
                    <OrderForm setUserId={setUserId} onUpdate={fetchOrders} setError={setError}/>
                </Box>
                <Box className={styles.tableContainer} setError={setError}>
                    <OrderList orders={orders}/>
                </Box>
            </Container>
        </>
    )
}

export default OrderPage
