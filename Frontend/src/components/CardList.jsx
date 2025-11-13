import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';


export default function CardList() {
    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        const fecthImages = async () => {
            try {
                const responseImages = await axios.get("https://jsonplaceholder.typicode.com/photos")
                const dataImages = responseImages.data
                setImagenes(responseImages.data)
                console.log(dataImages)

            }catch(error){
                console.error("Ocurrio un error al obtener datos de imagenes", error)
            }                
        }
        fecthImages()
    }, [])
  
return (
    <>
     <Grid>
        {
            imagenes.map((img) => (
                <Grid sx={12} md={4} key={img.id}> 
                    <Card>
                        <CardMedia
                        component='img'
                        height={'200'}
                        image={img.image}
                        />

                        <CardContent>
                            <Typography>
                                {img.title}
                            </Typography>
                            <Typography>
                                {img.url}
                            </Typography>

                            <Typography>
                                {img.thumbnailUrl}
                            </Typography>
                            
                        </CardContent>

                        
                    </Card>
                </Grid>
            ))
        }
    </Grid> 
    </>
  )
}
