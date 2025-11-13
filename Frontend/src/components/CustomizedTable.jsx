import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTable() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fecthProductos = async () => {
            const responseProducts = await axios.get("https://fakestoreapi.com/products")
            setProductos(responseProducts.data)
            const dataProductos = responseProducts.data
            console.log(dataProductos)
        }
        fecthProductos()
    })

  return (
    <>
      <TableContainer component={Paper}>
        <Table  sx={{minWidth: 650}} arial-label='simple-table'>
            <TableHead>
                <TableRow>
                    <StyledTableCell>id</StyledTableCell>
                    <StyledTableCell>title</StyledTableCell>
                    <StyledTableCell>price</StyledTableCell>
                    <StyledTableCell>description</StyledTableCell>
                    <StyledTableCell>category</StyledTableCell>
                    <StyledTableCell>imagen</StyledTableCell>
                    <StyledTableCell>rating</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    productos.map((producto) => (
                        <StyledTableRow key={producto.id}>
                            <StyledTableCell>{producto.id}</StyledTableCell>
                            <StyledTableCell>{producto.title}</StyledTableCell>
                            <StyledTableCell>{producto.price}</StyledTableCell>
                            <StyledTableCell>{producto.description}</StyledTableCell>
                            <StyledTableCell>{producto.category}</StyledTableCell>
                            <StyledTableCell>{producto.imagen}</StyledTableCell>                            
                            <StyledTableCell>{producto.rating.rate}</StyledTableCell>
                            <StyledTableCell>{producto.rating.count}</StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
