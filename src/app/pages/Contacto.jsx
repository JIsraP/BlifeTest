import { Button, FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavBar } from '../components'

export const Contacto = () => {
    const [contactQuery, setContactQuery] = useState("");
    const placeholder = "Contacto";

    const pages = [
        { name: 'Productos', route: '/products' },
        { name: 'Promociones', route: '/offers' },
        { name: 'Nosotros', route: '/aboutus' },
    ]

    return (
        <Grid
            container
            spacing={0}
            padding={0}
            alignItems='center'
            sx={{ minHeight: '100vh', bgcolor: 'App.background' }}
        >
            <NavBar pages={pages} setSearchQuery={setContactQuery} placeholder={placeholder} />

            <Grid container sx={{ mt: '10vh' }}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', px: 15, py: 3 }}>
                    <Typography variant="h6" sx={{ textAlign: 'justify', fontSize: '30px' }}>Sobre B Life</Typography>
                    <Typography variant="subtitle1" sx={{ textAlign: 'justify', fontSize: '55px' }}>Bienestar que se comparte</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: '16px' }}>Buscamos lo mejor de la naturaleza, la vida nos ofrece el apoyo necesario. Cada nutriente y cada componente esencial lo formulamos de manera consciente y honesta. Compartimos lo que sabemos que es bueno.</Typography>
                </Grid>

                <Grid item xs={12} md={7}>
                    <img className="image" src='https://cdn.optibacprobiotics.com/r/w-1406/p-webp/optibacuk/media/learning/content%20images/303-capsule_1.jpg' />
                </Grid>

                <Grid item container sx={{ padding: 5 }}>
                    <Grid item xs={12}>
                        <Typography align='center' sx={{ fontSize: '25px', color: 'App.text' }}>
                            Contáctanos
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography sx={{ fontSize: '20px', color: 'App.text' }}>
                            ¿Tienes alguna duda?
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'App.text' }}>
                            Escríbenos y te responderemos en un timepo máximo de 24 horas.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} marginTop={2}>
                        <FormControl fullWidth sx={{ backgroundColor: 'transparent', borderRadius: 1 }}>
                            <InputLabel sx={{
                                color: 'App.text',
                                '&.Mui-focused': {
                                    color: 'App.text' //change label color
                                },

                            }}>Nombre</InputLabel>
                            <OutlinedInput
                                type="text"
                                label="Nombre"
                                sx={{
                                    color: 'App.text',
                                    borderRadius: '24px',
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color when focused
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black'
                                    },
                                }}

                                //AUTH 
                                name='nombre'
                                inputProps={{
                                    autoComplete: 'off',
                                    autoCorrect: 'off',
                                    autoCapitalize: 'off',
                                    spellCheck: 'false',
                                }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} marginTop={2}>
                        <FormControl fullWidth sx={{ backgroundColor: 'transparent', borderRadius: 1 }}>
                            <InputLabel sx={{
                                color: 'App.text',
                                '&.Mui-focused': {
                                    color: 'App.text' //change label color
                                },

                            }}>Número de teléfono</InputLabel>
                            <OutlinedInput
                                type="tel"
                                label="Número de teléfono"
                                sx={{
                                    color: 'App.text',
                                    borderRadius: '24px',
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color when focused
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black'
                                    },
                                }}

                                //AUTH 
                                name='telefono'
                                inputProps={{
                                    autoComplete: 'off',
                                    autoCorrect: 'off',
                                    autoCapitalize: 'off',
                                    spellCheck: 'false',
                                }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} marginTop={2}>
                        <FormControl fullWidth sx={{ backgroundColor: 'transparent', borderRadius: 1 }}>
                            <InputLabel sx={{
                                color: 'App.text',
                                '&.Mui-focused': {
                                    color: 'App.text' //change label color
                                },

                            }}>Email</InputLabel>
                            <OutlinedInput
                                type="email"
                                label="Email"
                                sx={{
                                    color: 'App.text',
                                    borderRadius: '24px',
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color when focused
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black'
                                    },
                                }}

                                //AUTH 
                                name='email'
                                inputProps={{
                                    autoComplete: 'off',
                                    autoCorrect: 'off',
                                    autoCapitalize: 'off',
                                    spellCheck: 'false',
                                }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} marginTop={2}>
                        <FormControl fullWidth sx={{ backgroundColor: 'transparent', borderRadius: 1 }}>
                            <InputLabel sx={{
                                color: 'App.text',
                                '&.Mui-focused': {
                                    color: 'App.text' //change label color
                                },

                            }}>Comentario</InputLabel>
                            <OutlinedInput
                                multiline
                                rows={5}
                                type="text"
                                label="Comentario"
                                sx={{
                                    color: 'App.text',
                                    borderRadius: '24px',
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color on hover
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black', //change border color when focused
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'App.black'
                                    },
                                }}

                                //AUTH 
                                name='comentario'
                                inputProps={{
                                    autoComplete: 'off',
                                    autoCorrect: 'off',
                                    autoCapitalize: 'off',
                                    spellCheck: 'false',
                                }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} align='center' marginTop={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                bgcolor: 'App.btn_bg',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'App.btn_bg',
                                }
                            }}
                        >
                            Enviar contacto
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}