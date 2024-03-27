import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CardProduct, NavBar } from '../components'

export const Promociones = () => {

    // Simulacion de datos recuperados del back
    const productos = {
        "001": {
            "name": "Citrate Mag",
            "price": 407,
            "details": "240 Cápsulas | 800 Mg",
            "discount_percentage": 30,
            "discount_price": 122.1,
            "likes": 228,
            "rate": 3.5,
            "img": "https://blife.mx/cdn/shop/files/0_MockUp180_800x800transparente_ff34c2ac-2128-48c7-8c65-dc4e9a75a2bc.png?v=1708966645"
        },
        "002": {
            "name": "Omega 3 Salmon Oil",
            "price": 599,
            "details": "180 Cápsulas | 400 Mg",
            "discount_percentage": 20,
            "discount_price": 119.8,
            "likes": 1000,
            "rate": 4.4,
            "img": "https://blife.mx/cdn/shop/files/omega3salmonoilbuena2.jpg?v=1684260550"

        },
        "003": {
            "name": "Mens T Platinum",
            "price": 769,
            "details": "240 Cápsulas | 600 Mg",
            "discount_percentage": 15,
            "discount_price": 115.35,
            "likes": 90,
            "rate": 2.5,
            "img": "https://blife.mx/cdn/shop/files/0_Mockup_800x800_851f7106-bbb6-4023-b6cb-297c0e2a2ca5.png?v=1699552125"
        },
        "004": {
            "name": "Potassium Citrate",
            "price": 999,
            "details": "240 Cápsulas | 500 Mg",
            "discount_percentage": 30,
            "discount_price": 299.7,
            "likes": 86,
            "rate": 5,
            "img": "https://blife.mx/cdn/shop/products/Potassium-Citrate-B-Life.webp?v=1673453292"
        }
    }

    const [offerQuery, setOfferQuery] = useState("");
    const [dataFiltered, setFilter] = useState([]);
    const [mapeado, setMapeado] = useState(false);

    const placeholder = "Ofertas";

    const filterData = (offerQuery, offers) => {
        if (!offerQuery) {
            return offers;
        } else {
            return offers.filter((d) => {
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
        const filteredData = filterData(offerQuery);
        setFilter(filteredData);
    }, [offerQuery]);

    useEffect(() => {
        setMapeado(true);
    }, []);

    return (
        <Grid
            container
            spacing={0}
            padding={0}
            justifyContent='center'
            sx={{ minHeight: '100vh', minWidth: '100vw', bgcolor: 'App.background' }}
        >
            <NavBar pages={pages} setSearchQuery={setOfferQuery} placeholder={placeholder} />

            <Grid item xs={12} sx={{ mt: '10vh' }}>
                <Paper elevation={0} className='image-container'>
                    <img className='image' src="./Banner.svg" alt="Banner" />
                    <img className='overlay-image-offer' src="./Rectangle 1.svg" alt="Oferta" />
                </Paper>
            </Grid>

            {mapeado && productos && (
                Object.values(productos).map((product, index) => (
                    <Grid item container key={index} xs={12} sm={6} md={6} lg={3} padding={2} sx={{ mt: '5vh', display: 'flex', justifyContent:'center' }}>
                        <CardProduct producto={product} />
                    </Grid>
                ))
            )}

        </Grid>
    )
}