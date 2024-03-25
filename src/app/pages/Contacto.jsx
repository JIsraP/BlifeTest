import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../components'

export const Contacto = () => {
    const [contactQuery, setProductQuery] = useState("");
    const [dataFiltered, setFilter] = useState([]);
    const placeholder = "Contacto";

    const filterData = (contactQuery, contact) => {
        if (!contactQuery) {
            return contact;
        } else {
            return contact.filter((d) => {
                return (
                    (contactQuery && d.name.toLowerCase().includes(contactQuery.toLowerCase()))
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
        const filteredData = filterData(contactQuery);
        setFilter(filteredData);
    }, [contactQuery]);

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

            <Typography>contacto</Typography>

        </Grid>
    )
}
