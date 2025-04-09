import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import orderService from '../../services/orderService.js'

function OrderForm({ setUserId, onUpdate, setError}) {
    const { register, handleSubmit } = useForm({
        mode: 'onChange'
    })

    const handleFormSubmit = async (data) => {
        const response = await orderService.createOrder(data)

        setUserId(data.userId)

        if (response.success) {
            onUpdate()
        } else {
            setError(response.error.message)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <TextField
                    label="userId"
                    variant="standard"
                    fullWidth
                    {...register('userId', {
                        required: true,
                    })} />
                <TextField
                    label="productId"
                    variant="standard"
                    fullWidth
                    {...register('productId', {
                        required: true
                    })} />
                <TextField
                    label="quantity"
                    variant="standard"
                    type="number"
                    fullWidth
                    {...register('quantity', {
                        required: true
                    })} />
                <Button variant="contained" type="submit" fullWidth sx={{marginTop: '3%'}}>
                    Submit Order
                </Button>
            </form>
        </>
    )
}

export default OrderForm
