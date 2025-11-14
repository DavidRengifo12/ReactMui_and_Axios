import React, { useState } from 'react'
import { Box, ButtonGroup, Paper, TextField, Typography} from '@mui/material'
import  Button  from '@mui/material/Button'
import supabase from './services/Supabase'
import toast from 'react-hot-toast'


export default function Register() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [rol] = useState("usuario")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            return toast.error("Las contraseñas no coinciden")
        }
        try {
            const {data, error} = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        nombre,
                        phone,
                        
                        rol
                    }
                }
            })
            console.log(error)

            
                toast.success("Usuario registrado correctamente")
                console.log(data)
            

            setNombre("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setPhone("")
            
        } catch (error) {
            toast.error("Error al registrar el usuario")
            console.log(error)
        }
    }


  return (
    <>
    <Paper elevation={3} sx={{padding:4, maxWidth: '800px', mx: 'auto', mt: 5}}>
        <Typography variant='h5' mb={2} textAlign='center'>
            Register Web
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
            label="Nombres y Apellidos"
            name='Fullname'
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            margin='normal'
            variant='standard'
            required
            />
            <TextField 
            label="email"
            name='your email'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin='normal'
            variant='standard'
            required
            />

            <TextField 
            label="Password"
            name='your password'
            type='password'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value) }
            margin='normal'
            variant='standard'
            required
            />
            <TextField 
            label="Confirm Password"
            name='confirm your password'
            type='password'
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin='normal'
            variant='standard'
            required
            />

            <TextField 
            label="Phone Number"
            name='your phone number'
            type='text'
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            margin='normal'
            variant='standard'
            required
            />
            <Button type='submit'>Registrarme</Button>
        </Box>
        
    </Paper>
    </>
  )
}
