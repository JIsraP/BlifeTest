import { AppBar, Badge, Button, Grid, IconButton, Popover, Toolbar, useMediaQuery } from "@mui/material"
import { GridMenuIcon } from '@mui/x-data-grid';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { startLogout } from '../../store/auth';
import { useDispatch } from 'react-redux';
import { AccountCircleOutlined, Logout, ShoppingBagOutlined } from "@mui/icons-material";
import { SearchIcon } from "./SearchIcon";
import { useCart } from "../../hooks";
import { CartContent } from "./CartContent";

export const NavBar = ({ pages, setSearchQuery, placeholder }) => {
    const { cartItems } = useCart();
    const [cartAnchor, setCartAnchor] = useState(null);

    const handleCartOpen = (event) => {
        setCartAnchor(event.currentTarget);
    };

    const handleCartClose = () => {
        setCartAnchor(null);
    };

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
                    justifyContent='space-between'
                    spacing={2}
                >

                    <Grid item xs={4} sx={{ mt: 1 }} >
                        <img src="/BlifeLogo.svg" width="100" height="80" />
                    </Grid>

                    {isSmallScreen ?
                        <Grid item>
                            <IconButton onClick={handleMenuOpen}>
                                <GridMenuIcon />
                            </IconButton>
                            <Popover
                                open={Boolean(menuAnchor)}
                                anchorEl={menuAnchor}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                {pages.map((page) =>
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
                                )}
                            </Popover>
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
                                            bgcolor: (currentPage && currentPage.route === page.route) ? 'App.btn_navbar_route' : 'transparent',
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
                                    <AccountCircleOutlined sx={{fontSize: '20px'}}/>
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <IconButton onClick={handleCartOpen}>
                                    <Badge badgeContent={cartItems} color="error">
                                        <ShoppingBagOutlined sx={{fontSize: '20px'}}/>
                                    </Badge>
                                </IconButton>
                                <Popover
                                    open={Boolean(cartAnchor)}
                                    anchorEl={cartAnchor}
                                    onClose={handleCartClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <CartContent />
                                </Popover>
                            </Grid>

                            <Grid item>
                                <IconButton onClick={onLogout}>
                                    <Logout sx={{fontSize: '20px'}}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>

            </Toolbar>
        </AppBar>
    )
}