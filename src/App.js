import React from 'react'
import {Typography,AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';

import useStyles from './styles' ;
const cards = [1,2,3,4,5,6,7,8,9]
const App = () => {
    const classes = useStyles();
  return (
    <>
    <CssBaseline />
    <AppBar position='relative' >
        <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant='h6'>
                    Gemtunde-Photos
            </Typography>
        </Toolbar>
    </AppBar>
    <main>
        <div className={classes.container}>
        <container maxWidth='sm'>
            <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
                    Tunde Photos
            </Typography>
            <Typography variant='body1' align='center' color='textSecondary' paragraph>
            React components for faster and easier web development. Build your own design system,
             or start with Material Design.
            </Typography>
        <div className={classes.button}>
           <Grid container spacing={2} justify='center'>
                <Grid item>
                    <Button variant='contained' color='primary' >
                        see my pix
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='secondary' >
                        read more
                    </Button>
                </Grid>
           </Grid>
        </div>
        </container>
        </div>
        <container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
               {
                   cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia 
                            className={classes.cardMedia}
                            image='https://source.unsplash.com/random'
                            title='image title'
                        />
                        <CardContent className={classes.cardContent}>
                             <Typography variant='h4' align='center' gutterBottom>
                                    Latest pics
                            </Typography>
                             <Typography variant='body1' align='center' color='textSecondary' paragraph>
                         React components for faster and easier web development. Build your own design system,
                         or start with Material Design.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='primary'> View </Button>
                            <Button size='small' color='primary'> edit </Button>
                        </CardActions>
                    </Card>
            </Grid>
                   ))
               }
            </Grid>
        </container>
    </main>
    <footer className={classes.footer}>
        <Typography variant='h4' align='center' gutterBottom>  Footer </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' >gemtunde inc </Typography>
    </footer>
    </>
  )
}

export default App