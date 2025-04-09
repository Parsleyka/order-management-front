import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function OrderList({ orders }) {
    return (
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>productName</TableCell>
                    <TableCell align="right">productPrice</TableCell>
                    <TableCell align="right">quantity</TableCell>
                    <TableCell align="right">orderPrice</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map((row) => (
                    <TableRow
                        key={row.product.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.product.name}
                        </TableCell>
                        <TableCell align="right">{row.product.price}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.totalPrice}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default OrderList
