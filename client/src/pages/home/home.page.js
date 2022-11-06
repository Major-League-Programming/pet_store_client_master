//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from '@mui/material'
//Images
import dogHome from '../../assets/images/home/dogHome.png'
import dogHouse from '../../assets/images/home/dogHouse.png'
import dogFood from '../../assets/images/home/dogFood.png'
import catFood from '../../assets/images/home/catFood.png'
import vetShop from '../../assets/images/home/vetShop.png'

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
                    <Container sx={{ py: 10 }} maxWidth="lg">
                        <Grid container alignItems="center" spacing={3}>
                            <Grid item xs={12} md={5}>
                                {/*<Box sx={{*/}
                                {/*    display: 'flex',*/}
                                {/*    ml: '850px',*/}
                                {/*    width: '500px',*/}
                                {/*    mt: '-160px'*/}
                                {/*}}>*/}
                                {/*    <Container sx={{backgroundColor: '#99CCCB', width: 300, height: 500 }} xs={12} sm={6} md={6}></Container >*/}
                                {/*</Box>*/}
                                <Typography component="h1" variant="h3">
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
                                    <Grid item sx={{width:'100%'}}>
                                        <Card>
                                            <CardContent>
                                                <Grid container spacing={3}
                                                      sx={{
                                                          "& .MuiGrid-item:last-child > .MuiBox-root": {
                                                              border: "none",
                                                          },
                                                      }}>
                                                    <Grid item>
                                                        <Box >
                                                            <Typography fontFamily="Righteous" gutterBottom color="text.secondary" variant="h4" sx={{display: 'flex', justifyContent: 'center'}}> 200 + </Typography>
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
                                </Grid>
                            </Grid>
                            <Container maxWidth="lg" sx={{ py: 10 }}>
                                <Box sx={{ textAlign: "center", mb: 10 }}>
                                    <Typography variant="h4">Real Pet food fresh from the fridge.</Typography>
                                </Box>
                                <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
                                    <Grid item xs={12} md={3}>
                                        <Card elevation={0}>
                                            <CardContent
                                                sx={{
                                                    backgroundColor: '#E7F1ED',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: "center",
                                                }}
                                            >
                                                <img width="40%" height="40%" src={dogFood} alt="dog food" />
                                                <Typography variant="h6" sx={{ mt: 2 }}>
                                                    Dog Food
                                                </Typography>
                                                <Button size="large" variant="contained" sx={{
                                                    backgroundColor: '#124944',
                                                    textTransform: 'none', mt: 15
                                                }}>
                                                    Shop Now
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Card elevation={0}>
                                            <CardContent
                                                sx={{
                                                    backgroundColor: '#F1F7F9',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: "center",
                                                }}
                                            >
                                                <img width="40%" height="40%" src={catFood} alt="dog food" />
                                                <Typography variant="h6" sx={{ mt: 2 }}>
                                                    Dog Food
                                                </Typography>
                                                <Button size="large" variant="contained" sx={{
                                                    backgroundColor: '#124944',
                                                    textTransform: 'none', mt: 15
                                                }}>
                                                    Shop Now
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Card elevation={0}>
                                            <CardContent
                                                sx={{
                                                    backgroundColor: '#E7F1ED',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: "center",
                                                }}
                                            >
                                                <img width="40%" height="40%" src={dogHouse} alt="dog food" />
                                                <Typography variant="h6" sx={{ mt: 2 }}>
                                                    Dog Food
                                                </Typography>
                                                <Button size="large" variant="contained" sx={{
                                                    backgroundColor: '#124944',
                                                    textTransform: 'none', mt: 15
                                                }}>
                                                    Shop Now
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Card elevation={0}>
                                            <CardContent
                                                sx={{
                                                    backgroundColor: '#F1F7F9',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: "center",
                                                }}
                                            >
                                                <img width="40%" height="40%" src={vetShop} alt="dog food" />
                                                <Typography variant="h6" sx={{ mt: 2 }}>
                                                    Dog Food
                                                </Typography>
                                                <Button size="large" variant="contained" sx={{
                                                    backgroundColor: '#124944',
                                                    textTransform: 'none', mt: 15
                                                }}>
                                                    Shop Now
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}