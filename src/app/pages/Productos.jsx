import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CardProduct, NavBar } from '../components';

export const Productos = () => {
    // Simulacion de datos recuperados del back
    const productos = {
        "001": {
            "name": "Citrate Mag",
            "price": 407,
            "details": "240 Cápsulas | 800 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 228,
            "rate": 3.5,
            "img": "https://blife.mx/cdn/shop/files/0_MockUp180_800x800transparente_ff34c2ac-2128-48c7-8c65-dc4e9a75a2bc.png?v=1708966645"
        },
        "002": {
            "name": "Omega 3 Salmon Oil",
            "price": 599,
            "details": "180 Cápsulas | 400 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 1000,
            "rate": 4.4,
            "img": "https://blife.mx/cdn/shop/files/omega3salmonoilbuena2.jpg?v=1684260550"

        },
        "003": {
            "name": "Mens T Platinum",
            "price": 769,
            "details": "240 Cápsulas | 600 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 90,
            "rate": 2.5,
            "img": "https://blife.mx/cdn/shop/files/0_Mockup_800x800_851f7106-bbb6-4023-b6cb-297c0e2a2ca5.png?v=1699552125"
        },
        "004": {
            "name": "Potassium Citrate",
            "price": 999,
            "details": "240 Cápsulas | 500 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 86,
            "rate": 5,
            "img": "https://blife.mx/cdn/shop/products/Potassium-Citrate-B-Life.webp?v=1673453292"
        },
        "005": {
            "name": "60 Billion Probiotics",
            "price": 259,
            "details": "120 Cápsulas | 100 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 10,
            "rate": 2.5,
            "img": "https://blife.mx/cdn/shop/files/7_MockUp120_800x800_34cb5c06-108f-452a-9688-6788195857ab.png?v=1711001692"
        },
        "006": {
            "name": "Resveratrol",
            "price": 349,
            "details": "90 Cápsulas | 500 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 127,
            "rate": 3,
            "img": "https://blife.mx/cdn/shop/products/Resveratrol_90_caps_b_life.webp?v=1681324046"
        },
        "007": {
            "name": "Ashwagandha",
            "price": 399,
            "details": "200 Cápsulas | 500 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 325,
            "rate": 3.5,
            "img": "https://blife.mx/cdn/shop/files/0_MockUp180_800x800transparente_0088fe99-775b-4c3b-ab25-37cab8724ade.png?v=1708546192"
        },
        "008": {
            "name": "Womens Mult Matur3",
            "price": 499,
            "details": "180 Cápsulas | 300 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 769,
            "rate": 4,
            "img": "https://blife.mx/cdn/shop/products/Womens-Mult-Matur3-180-Caps_b_life.webp?v=1680539190"
        },
        "009": {
            "name": "D3 Plus",
            "price": 450,
            "details": "240 Cápsulas | 500 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 1298,
            "rate": 5,
            "img": "https://blife.mx/cdn/shop/files/Vitamina_D3_Plus_5000-_b_life.webp?v=1682531970"
        },
        "010": {
            "name": "Glycinate Mag",
            "price": 469,
            "details": "240 Cápsulas | 500 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 356,
            "rate": 4,
            "img": "https://blife.mx/cdn/shop/products/Glycinate_Mag_240_b_life.webp?v=1677518414"
        },
        "011": {
            "name": "Mens Multi Matur3",
            "price": 499,
            "details": "180 Cápsulas | 500 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 1876,
            "rate": 5,
            "img": "https://blife.mx/cdn/shop/files/0_Mockup180_800x800mens.png?v=1695838690"
        },
        "012": {
            "name": "Collagen Bio",
            "price": 449,
            "details": "200 Cápsulas | 500 Mg",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 2543,
            "rate": 5,
            "img": "https://blife.mx/cdn/shop/files/0_Mockup180_800x800_dc15f3f2-f513-4b8e-8cd3-3a0a28ef6c65.png?v=1694727289"
        }
    }
    
    const placeholder = "Productos";
    const [productQuery, setProductQuery] = useState("");
    const [dataFiltered, setFilter] = useState([]);
    const [mapeado, setMapeado] = useState(false);

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

    useEffect(() => {
        setMapeado(true);
    }, []);


    return (
        <Grid 
            container
            spacing={0}
            padding={0}
            justifyContent='space-between'
            alignItems='center'
            sx={{ minHeight: '100vh', bgcolor: 'App.background' }}
        >
            <NavBar pages={pages} setSearchQuery={setProductQuery} placeholder={placeholder}/>

            <Grid item xs={12} sx={{ mt: '10vh' }}>
                <Paper elevation={0} className='image-container'>
                    <img  className="image" src = "https://cdn.shopify.com/s/files/1/0626/0421/4463/files/bannerkitweb.jpg"  alt="Banner" />
                    <img className='overlay-image-product' src="https://cdn.shopify.com/s/files/1/0626/0421/4463/files/letraskitweb.png" alt="Oferta" />

                </Paper>
            </Grid>

            {mapeado && productos && (
                Object.values(productos).map((product, index) => (
                    <Grid item container key={index} xs={12} sm={6} md={6} lg={3} padding={2} sx={{ mt: '5vh', display: 'flex', justifyContent:'center' }}>
                        <CardProduct producto={product}  />
                    </Grid>
                ))
            )}

        </Grid>
    )
}
