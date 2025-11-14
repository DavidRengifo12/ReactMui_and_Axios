import { Paper, Table, TableCell, TableContainer, TableHead, TableBody, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Table2MUI() {
    const [api, setApi] = useState([])


    useEffect(() => {
        const fetchApi = async () => {
            try {
                const respuestaApi = await axios.get("https://rickandmortyapi.com/api/character") 
                setApi(respuestaApi.data.results)
                const dataApi = respuestaApi.data
                console.log(dataApi)
            } catch (error) {
                console.error("Error al trare datos de la api", error)
            }
        }
        fetchApi()
    }, [])

  return (
    <>
    <h1>CONSUMO EN LA TERCERA TABLE</h1>
     <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} arial-label='simple-table'>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>                
                    <TableCell>Species</TableCell>
                    <TableCell>Types</TableCell>                
                    <TableCell>Gender</TableCell>
                    <TableCell>Origin</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Imagen</TableCell>
                    <TableCell>Episodio</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    api.map((apiKey) => (
                        <TableRow key={apiKey.id}>
                            <TableCell>{apiKey.id}</TableCell>
                            <TableCell>{apiKey.name}</TableCell>
                            <TableCell>{apiKey.status}</TableCell>
                            <TableCell>{apiKey.species}</TableCell>
                            <TableCell>{apiKey.types}</TableCell>
                            <TableCell>{apiKey.gender}</TableCell>
                            <TableCell>{apiKey.origin.name}</TableCell>
                            <TableCell>{apiKey.origin.url}</TableCell>
                            <TableCell>{apiKey.location.name}</TableCell>
                            <TableCell>{apiKey.location.url}</TableCell>
                            <TableCell>{apiKey.image}</TableCell>
                            <TableCell>{apiKey.episode}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer> 
    </>
  )
}
