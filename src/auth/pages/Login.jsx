import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Alert, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography, useMediaQuery } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from '../../hooks/useForm';

import { checkingAuthentication, startLoginWithEmailPassword } from '../../store/auth';
import { useTheme } from '@emotion/react';

export const Login = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const containerpadding = isLargeScreen ? 15 : isMediumScreen ? 10 : 5;
    const containerHeight = isLargeScreen ? '100vh' : isMediumScreen ? '50vh' : '50vh';
    const imageHeight = isLargeScreen ? 200 : isMediumScreen ? 150 : 150;

    //Funciones para oculatar y revelar la contraseña
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const dispatch = useDispatch();
    //Primer argumento de useForm es Como luce el formulario
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });

    //To avoid double authentication
    const { status, errorMessage } = useSelector(state => state.auth);

    /*Esta es la función que hace el submit de email y contraseña*/
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(checkingAuthentication());
        dispatch(startLoginWithEmailPassword({ email, password }));
    }
    return (
        <Grid
            container
            spacing={0}
            justifyContent='center'
            alignItems='center'
            align='center'
            sx={{ minHeight: '100vh', bgcolor: 'App.background'}}
        >
            <Grid item xs={12} md={6}>
                <img src="/BlifeLogo.svg" height={imageHeight} />
            </Grid>

            <Grid
                item
                xs={12}
                md={6}
                sx={{ minHeight: containerHeight, backgroundColor: 'App.background', paddingX: containerpadding, display: 'flex', alignItems: 'center' }}>
                <form onSubmit={onSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: '70px', color: 'App.text' }}>
                                Bienvenido
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <FormControl fullWidth sx={{ backgroundColor: 'transparent', borderRadius: 1 }}>
                                <InputLabel sx={{
                                    color: 'App.text',
                                    '&.Mui-focused': {
                                        color: 'App.text' //change label color
                                    },
                                    
                                }}>Correo</InputLabel>
                                <OutlinedInput
                                    type="email"
                                    label="Correo"
                                    placeholder="blife@test.com"
                                    sx={{
                                        color: 'App.text',
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'App.gris', //change border color on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'App.gris', //change border color when focused
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'App.gris'
                                        },
                                    }}

                                    //AUTH 
                                    //name se necesita para que el onChange funcione
                                    name='email'
                                    value={email}
                                    onChange={onInputChange}
                                    inputProps={{
                                        autoComplete: 'off',
                                        autoCorrect: 'off',
                                        autoCapitalize: 'off',
                                        spellCheck: 'false',
                                    }}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <FormControl fullWidth sx={{ backgroundColor: 'transparent', borderRadius: 1 }} >
                                <InputLabel sx={{
                                    color: 'App.text',
                                    '&.Mui-focused': {
                                        color: 'App.text' //change label color
                                    }
                                }}>Contraseña</InputLabel>
                                <OutlinedInput
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                sx={{ color: 'App.white' }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Contraseña"
                                    placeholder="blifetest"
                                    sx={{
                                        color: 'App.text',
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'App.gris', //change border color on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'App.gris', //change border color when focused
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'App.gris'
                                        },
                                    }}
                                    inputProps={{
                                        autoComplete: 'new-password', // Use 'new-password' as an unconventional value
                                    }}

                                    // AUTH
                                    name='password'
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </FormControl>
                        </Grid>

                        {/* Esta es la alerta del inicio de sesión con Firebase */}
                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'}
                            sx={{ mt: 1 }}>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>

                        <Grid item sx={{ mt: 1 }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox sx={{
                                        color: 'App.black',
                                        '&.Mui-checked': {
                                            color: 'App.black', // change filled color when checked
                                        },
                                    }} />
                                    }
                                    label="Recuérdame"
                                    sx={{ color: 'App.text' }}
                                />
                            </FormGroup>
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" sx={{ backgroundColor: 'App.btn_bg', textTransform: 'none' }} onClick={onSubmit}>
                                Iniciar Sesión
                            </Button>
                        </Grid>

                    </Grid>
                </form>

            </Grid>


        </Grid>
    )
}