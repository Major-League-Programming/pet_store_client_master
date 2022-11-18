//MUI
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
//Images
import dogHouse from '../../assets/images/home/dogHouse.png'
import dogFood from '../../assets/images/home/dogFood.png'
import catFood from '../../assets/images/home/catFood.png'
import vetShop from '../../assets/images/home/vetShop.png'


export default function HomePageMenu() {
    return (
        <Box component="section" sx={{ width: '100%', mr: 0 }}>
            <Container maxWidth="xl" sx={{ py: 10, justifyContent: 'center', mr: 0,  pr: '0 !important' }}>
                <Box sx={{ textAlign: "center", mb: 10, width: '100%', mr: 0,  pr: '0 !important' }}>
                    <Typography variant="h4">Categories</Typography>
                </Box>
                <Grid container spacing={3} sx={{ justifyContent: 'center', mr: 0 }}>
                    <Grid container spacing={0} sx={{ justifyContent: 'center', mr: 0,  pr: '0 !important' }}>
                        <Grid item xs={12} md={3} sx={{mr: 0,  pr: '0 !important'}}>
                            <Card elevation={0}>
                                <CardContent
                                    sx={{
                                        backgroundColor: '#E7F1ED',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
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
                </Grid>
            </Container>
        </Box>
    );
}