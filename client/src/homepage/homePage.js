import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CloudIcon from "@mui/icons-material/CloudOutlined";
import GppGoodIcon from "@mui/icons-material/GppGoodOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const theme = createTheme({
    overrides: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        }},
    overflow: 'hidden',
    typography: {
        fontFamily: [
            'Jua'
        ].join(',')
    }
});

const features = [
    {
        title: "Dog Food",
        icon: <CloudIcon fontSize="large" />,
    },
    {
        title: "Cat Food",
        icon: <CloudIcon fontSize="large" />,
    },
    {
        title: "Accessories",
        icon: <GppGoodIcon fontSize="large" />,
    },
    {
        title: "Services",
        icon: <GppGoodIcon fontSize="large" />,
    },
];

export default  function HomePage() {
    return (
        <ThemeProvider theme={theme}>
            <Grid sx={{backgroundColor: 'black'}}></Grid>
            <Grid container component="main" sx={{height: '100vh', backgroundColor:'#FBF3EA',  display: "flex", justifyContent: "center", position: 'absolute'}} >
                <Box component="section">
                <Container sx={{ py: 10 }} maxWidth="lg">
                <Grid container alignItems="center" spacing={3}>
                <Grid item xs={12} md={5}>
                <Typography component="h1" variant="h3">
                    Real Pet food fresh from the fridge.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button size="large" variant="contained" sx={{
                    backgroundColor: '#124944',
                    textTransform: 'none'}}>
               Shop Now
                </Button>
                </Stack>
                </Grid>
                    <Container maxWidth="lg" sx={{ py: 10 }}>
                        <Box sx={{ textAlign: "center", mb: 10 }}>
                            <Typography variant="h4">Key Features</Typography>
                        </Box>
                        <Grid container spacing={0}>
                            {features.map((feature) => (
                                <Grid key={feature.title} item xs={12} md={3}>
                                    <Card>
                                        <CardContent
                                            sx={{
                                                textAlign: "center",
                                            }}
                                        >
                                            {feature.icon}
                                            <Typography variant="h6" sx={{ mt: 2 }}>
                                                {feature.title}
                                            </Typography>
                                            <Button
                                                sx={{
                                                    mt: 3,
                                                }}
                                                variant="contained"
                                            >
                                                Learn More
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                {/*<Grid item xs={12} md={6}>*/}
                {/*<Box*/}
                {/*alt="hero"*/}
                {/*component="img"*/}
                {/*src="/img/hero.svg"*/}
                {/*sx={{ width: "100%" }}*/}
                {/*/>*/}
                {/*</Grid>*/}
                </Grid>
                </Container>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}