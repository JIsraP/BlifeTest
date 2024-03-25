import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../components';

export const Productos = () => {
    const [productQuery, setProductQuery] = useState("");
    const [dataFiltered, setFilter] = useState([]);
    const placeholder = "Productos";

    const filterData = (offerQuery, products) => {
        if (!offerQuery) {
            return products;
        } else {
            return products.filter((d) => {
                return (
                    (offerQuery && d.name.toLowerCase().includes(offerQuery.toLowerCase()))
                );
            });
        }
    };

    const pages = [
        { name: 'Productos', route: '/products' },
        { name: 'Promociones', route: '/offers' },
        { name: 'Nosotros', route: '/aboutus' },
    ]

    useEffect(() => {
        const filteredData = filterData(productQuery);
        setFilter(filteredData);
    }, [productQuery]);

    return (
        <Grid 
            container
            spacing={0}
            padding={5}
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: '100vh', bgcolor: 'App.background' }}
        >
            <NavBar pages={pages} setSearchQuery={setProductQuery} placeholder={placeholder}/>

            <Typography>producto</Typography>


        </Grid>
    )
}
