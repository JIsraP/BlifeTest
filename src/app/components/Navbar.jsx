import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, useMediaQuery } from "@mui/material"
import { GridMenuIcon } from '@mui/x-data-grid';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { startLogout } from '../../store/auth';
import { useDispatch } from 'react-redux';
import { AccountCircleOutlined, Logout, Search, ShoppingCartOutlined } from "@mui/icons-material";
import { SearchIcon } from "./SearchIcon";

export const NavBar = ({ pages, setSearchQuery, placeholder }) => {
    const location = useLocation();
    const currentPage = pages.find(page => page.route === location.pathname);

    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const [menuAnchor, setMenuAnchor] = useState(null);

    const onLogout = () => {
        dispatch(startLogout());
    }

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuAnchor(null);
    }

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                bgcolor: 'App.background',
                minHeight: '10vh'
            }}
        >
            <Toolbar>
                <Grid container
                    alignItems='center'
                    spacing={2}
                >

                    <Grid item xs={4} sx={{ mt: 1 }} >
                        <img src="/BlifeLogo.svg" width="100" height="80" />
                    </Grid>

                    {isSmallScreen ?
                        <Grid item>
                            <IconButton onClick={handleMenuOpen} sx={{ ml: 1, color: 'App.white' }}>
                                <GridMenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={menuAnchor}
                                open={Boolean(menuAnchor)}
                                onClose={handleMenuClose}
                                PaperProps={{
                                    sx: {
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        bgcolor: 'secondary.main',
                                    },
                                }}
                            >
                                {pages.map((page) =>
                                    <MenuItem key={page.name} onClick={handleMenuClose}>
                                        <Button fullWidth component={Link} to={page.route} sx={{
                                            color: 'App.text',
                                            textTransform: 'capitalize',
                                            fontSize: '15px',
                                            borderRadius: '22px',
                                            height: '25px',
                                            bgcolor: currentPage && currentPage.route === page.route ? 'App.btn_navbar_route' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: currentPage && currentPage.route === page.route ? 'App.btn_navbar_route' : 'transparent'
                                            }
                                        }}>
                                            {page.name}
                                        </Button>
                                    </MenuItem>
                                )}

                                <MenuItem>
                                    <Button fullWidth onClick={onLogout} sx={{ color: 'App.text', textTransform: 'capitalize', fontSize: '15px' }}>
                                        Log Out
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Grid>
                        :
                        <Grid item xs={4}>
                            <Grid container justifyContent='center'>
                                {pages.map((page) =>
                                    <Grid item key={page.name} sx={{ ml: 1 }}>
                                        <Button component={Link} to={page.route} sx={{
                                            color: 'App.text',
                                            textTransform: 'capitalize',
                                            fontSize: '15px',
                                            borderRadius: '22px',
                                            height: '25px',
                                            bgcolor: currentPage && currentPage.route === page.route ? 'App.btn_navbar_route' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: currentPage && currentPage.route === page.route ? 'App.btn_navbar_route' : 'transparent'
                                            }
                                        }}>
                                            {page.name}
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    }

                    <Grid item xs={4} >
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <SearchIcon setSearchQuery={setSearchQuery} placeholder={placeholder} />
                            </Grid>

                            <Grid item>
                                <IconButton>
                                    <AccountCircleOutlined />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <IconButton>
                                    <ShoppingCartOutlined />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <IconButton onClick={onLogout}>
                                    <Logout />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}