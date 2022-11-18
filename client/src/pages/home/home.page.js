//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from '@mui/material'
//Images
import dogHome from '../../assets/images/home/dogHome.png'
import FooterHome from "../../components/footer/footerHome.component";
import ProductGrid from '../../components/products/products.components';
import HomePageMenu from '../../components/menu/homepage.menu.component';
import HomePageTestimonials from '../../components/testimonials.component';

//Theme
const theme = createTheme({
    overrides: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        }
    },
    overflow: 'hidden',
    typography: {
        fontFamily: [
            'Jua'
        ].join(',')
    }
});

export default function MyHomePage() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ backgroundColor: '#FBF3EA', display: "flex", justifyContent: "center", position: 'absolute' }} >
                <Box component="section">
                    <Container sx={{ py: 10 }} maxWidth="xl">
                        <Grid container alignItems="center" spacing={3}>
                            <Grid item xs={12} md={5}>
                                {/*<Box sx={{*/}
                                {/*    display: 'flex',*/}
                                {/*    ml: '850px',*/}
                                {/*    width: '500px',*/}
                                {/*    mt: '-160px',*/}
                                {/*}}>*/}
                                {/*    <Container sx={{backgroundColor: '#99CCCB', width: 300, height: 500 }} xs={12} sm={6} md={6}></Container >*/}
                                {/*</Box>*/}
                                <Typography component="h1" fontSize='80px'>
                                    Real Pet food fresh from the fridge.
                                </Typography>
                                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                                    <Button size="large" variant="contained" sx={{
                                        backgroundColor: '#124944',
                                        textTransform: 'none'
                                    }}>
                                        Shop Now
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Grid container sx={{display: 'flex', flexWrap: 'nowrap'}}>
                                    <Grid item>
                                        <img width="150px" height="175px" src={dogHome} alt="dog food" />
                                    </Grid>
                                    <Grid item sx={{width:'100%', mt: 6}}>
                                        <Card sx={{borderRadius: 0, width: 800}}>
                                            <CardContent>
                                                <Grid container spacing={3}
                                                      sx={{
                                                          "& .MuiGrid-item:last-child > .MuiBox-root": {
                                                              border: "none",
                                                          },
                                                          justifyContent: 'center'
                                                      }}>
                                                    <Grid item>
                                                        <Box >
                                                            <Typography fontFamily="Righteous" gutterBottom color="text.secondary" variant="h4" sx={{display: 'flex', justifyContent: 'center'}}> 200k+ </Typography>
                                                            <Typography fontFamily="Righteous" variant="h5" sx={{display: 'flex', justifyContent: 'center'}}> Nutritional Complete </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item>
                                                        <Box>
                                                            <Typography fontFamily="Righteous" gutterBottom color="text.secondary" variant="h4" sx={{display: 'flex', justifyContent: 'center'}}> 1k </Typography>
                                                            <Typography fontFamily="Righteous" variant="h5" sx={{display: 'flex', justifyContent: 'center'}}> Product Sales </Typography>
                                                   </Box>
                                                    </Grid>
                                                    <Grid item>
                                                        <Box>
                                                            <Typography fontFamily="Righteous" gutterBottom color="text.secondary" variant="h4" sx={{display: 'flex', justifyContent: 'center'}}> 96% </Typography>
                                                                <Typography fontFamily="Righteous" variant="h5" sx={{display: 'flex', justifyContent: 'center'}}> Client Satisfaction </Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item sx={{width: 40, height: 126.5, backgroundColor: '#FEB988', ml: -1.1, mt: 6}}>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Container maxWidth="xl" sx={{justifyContent: 'center', display: 'flex', pr: '0 !important'}}>
                            <Grid container sx={{justifyContent: 'center', width: '100%'}}>
                                    < HomePageMenu/>
                                </Grid>
                            </Container>
                            <Container maxWidth="xl" sx={{justifyContent: 'center', display: 'flex', pr: '0 !important'}}>
                            <Grid container sx={{justifyContent: 'center', width: '100%'}}>
                                    < ProductGrid/>
                                </Grid>
                            </Container>
                            <Container maxWidth="xl" sx={{justifyContent: 'center', display: 'flex', pr: '0 !important'}}>
                            <Grid container sx={{justifyContent: 'center', width: '100%'}}>
                                    < HomePageTestimonials/>
                                </Grid>
                            </Container>
                           
                        </Grid>
                    </Container>
                    <FooterHome sx={{mt: 10}}/>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}