import './App.css'
import { useEffect, useState } from 'react'
import { Alert, Container, CssBaseline, Snackbar } from '@mui/material'

import OrderPage from './pages/OrderPage.jsx'

function App() {
    const [error, setError] = useState(null)
    const [open, setOpen] = useState(false)

    const handleClose = (_, reason) => {
        if (reason !== 'clickaway') {
            setOpen(false)
        }
    }

    useEffect(() => {
        if (error) {
            setOpen(true)
        }
    }, [error])

    return (
        <>
            <h1>{import.meta.env.VITE_APP_TMP}</h1>
            <CssBaseline/>
            <Container maxWidth="xl" className="containerFlex">
                <OrderPage setError={setError} />
            </Container>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </>
    )
}

export default App
