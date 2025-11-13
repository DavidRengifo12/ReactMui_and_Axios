import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'






export default function TableMui() {

    const [users, setUsers] = useState([])


    useEffect(() => {
        const fecthusuarios = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
            const data = response.data
            console.log(data)
        }
        fecthusuarios()
    }, [])
  return (
    <>
     <h1>Tabla Usuarios Consumo uno</h1>
     <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} arial-label='simple-table'>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nombre</TableCell>            
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>                
                <TableCell>Address</TableCell>
                <TableCell>Street</TableCell>
                <TableCell>Suite</TableCell>
                <TableCell>City</TableCell>
                <TableCell>ZipCode</TableCell>
                <TableCell>Phone</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.address.street}</TableCell>
                        <TableCell>{user.address.suite}</TableCell>
                        <TableCell>{user.address.city}</TableCell>
                        <TableCell>{user.address.zipcode}</TableCell>                        
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
        </Table>    
     </TableContainer>
    </>
  )
}
