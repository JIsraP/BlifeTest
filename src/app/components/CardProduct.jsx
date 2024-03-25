import { FacebookOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import { Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { RatingStars } from './RatingStarts'

export const CardProduct = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: '340px', maxHeight: '515px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '24px', bgcolor: 'transparent' }}>
      <CardContent sx={{ width: '100%', bgcolor: 'App.card_action', minHeight: '520px', display: 'flex', alignItems: 'flex-end' }}>
        <Grid container alignItems='center' justifyContent='space-around'>
            <Grid item>
              <Grid container >
                <Grid item xs={12} sx={{ ml: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', fontSize: '10px' }}>
                    Comparte
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <IconButton>
                        <FacebookOutlined sx={{ fontSize: '20px' }} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <FacebookOutlined sx={{ fontSize: '20px' }} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <FacebookOutlined sx={{ fontSize: '20px' }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

            <Grid item>
              <Grid container>
                <Button sx={{ textTransform: 'capitalize', borderRadius: '20px', border: '1px solid', borderColor: 'App.btn_border', width: '90px', fontSize: '12px' }}>
                  Agregar
                </Button>
              </Grid>
            </Grid>
          </Grid>
      </CardContent>
      
      <CardContent sx={{borderRadius: '24px', bgcolor: 'App.card_data', position: 'relative', bottom: '530px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.03)' }}>
        <CardMedia
          component="img"
          height="auto"
          style={{ width: '304px', display: 'block', margin: '0 auto' }}
          image={producto.img}
          alt="Citrate Mag"
        />
        <Grid container alignItems='center' padding={2}>
          <Grid item xs={9}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
              {producto.name}
            </Typography>

          </Grid>
          <Grid item container xs={3} justifyContent='flex-end'>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
              {producto.price.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={6} >
            <Typography sx={{ fontSize: '10px' }}>
              {producto.details}
            </Typography>
          </Grid>
          <Grid item container xs={6} justifyContent='flex-end'>
            <Typography sx={{ fontSize: '10px', textDecoration: 'line-through' }}>
              {producto.discount_price.toFixed(2)}
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ mt: 3 }}>
            <RatingStars value={producto.rate} />
          </Grid>

        </Grid>

      </CardContent>
      

      <CardContent >
        <Card sx={{ bgcolor: 'App.card_discount', maxWidth: '90px', maxHeight: '35px', borderRadius: '24px', display: 'flex', alignItems: 'center', position: 'relative', bottom: '925px', left: '260px' }}>
          <CardContent>
            <Typography sx={{ fontSize: '12px', color: 'App.white', fontWeight: 'bold', mt: 1 }}>
              -{producto.discount_percentage}%
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: 'App.card_likes', minWidth: '70px', maxHeight: '35px', borderRadius: '24px', display: 'flex', alignItems: 'center', position: 'relative', bottom: '1000px', left: '240px' }}>
          <CardContent>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <FavoriteBorderOutlined sx={{ fontSize: '14px', color: 'App.card_heart', mt: 2 }} />
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: '12px', color: 'App.text', fontWeight: 'bold', mt: 1 }}>
                  {producto.likes}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
