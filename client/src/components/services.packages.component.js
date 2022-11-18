import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import {createTheme} from "@mui/material/styles";
import {CssBaseline, ThemeProvider} from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: 'Jua',
    },
});

const pricingsFriendly = [
    {
        price: 100,
        title: "Friendly Pack",
        features: ["5 days services", "Pet Shower", "Basic Checkup", "Grooming", "Hair and Nail Cut"],
    }
];
const pricingsExclusive = [
    {
        price: 175,
        title: "Exclusive Pack",
        features: ["15 days services", "Pet Shower", "Intensive Checkup", "Grooming", "Hair and Nail Cut", "Control Hair Falling", "Fresh Shack", "Pet Park & Games"],
    }
];
const pricingsFamily = [
    {
        price: 200,
        title: "Family Pack",
        features: ["30 days services", "Pet Shower", "Basic Checkup", "Grooming", "Hair and Nail Cut"],
    }
];

export default function PricingCard() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="xl">
            <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Pricing
          </Typography>
          <Typography color="text.secondary" component="div">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </Typography>
        </Box>
                <Grid container>
                    {pricingsFriendly.map((pricingF) => (
                        <Grid key={pricingF.title} item xs={12} md={4}>
                            <Card sx={{borderTopLeftRadius: 30, borderBottomLeftRadius: 30}}>
                                <CardContent>
                                    <Typography align="center" component="div" variant="h6">
                                        {pricingF.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mt: 4,
                                        }}
                                    >
                                        <Typography fontFamily="Architects Daughter" color="text.primary" component="div" variant="h4" sx={{mb: 5}}>
                                            €
                                        </Typography>
                                        <Typography component="div" variant="h3">
                                            {pricingF.price}
                                        </Typography>
                                        <Typography component="div" color="text.secondary">
                                            /
                                        </Typography>
                                        <Typography component="div" color="text.secondary">
                                            visit
                                        </Typography>
                                    </Box>
                                    <Stack spacing={2} sx={{ mt: 4 }}>
                                        {pricingF.features.map((feature) => (
                                            <Box
                                                key={feature}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Typography color="text.secondary">
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                    <Button fullWidth sx={{ mt: 4, backgroundColor: '#124944', textTransform: 'none' }} variant="contained">
                                        Book Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    {pricingsExclusive.map((pricingE) => (
                        <Grid key={pricingE.title} item xs={12} md={4}>
                            <Card sx={{borderRadius: 8, mt: -8, backgroundColor: '#124944'}}>
                                <CardContent>
                                    <Typography align="center" component="div" variant="h6" sx={{color: 'white', fontSize: 30}}>
                                        {pricingE.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mt: 4,
                                        }}
                                    >
                                        <Typography fontFamily="Architects Daughter" component="div" variant="h4" sx={{mb: 5, color: 'white'}}>
                                            €
                                        </Typography>
                                        <Typography component="div" variant="h3" sx={{color: 'white'}}>
                                            {pricingE.price}
                                        </Typography>
                                        <Typography component="div" color="text.secondary">
                                            /
                                        </Typography>
                                        <Typography component="div" color="text.secondary">
                                            visit
                                        </Typography>
                                    </Box>
                                    <Stack spacing={2} sx={{ mt: 4 }}>
                                        {pricingE.features.map((feature) => (
                                            <Box
                                                key={feature}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Typography sx={{color: 'white'}}>
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                    <Button fullWidth sx={{ mt: 4, backgroundColor: 'white', color: '#124944', textTransform: 'none' }} variant="contained">
                                        Book Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    {pricingsFamily.map((pricingFa) => (
                        <Grid key={pricingFa.title} item xs={12} md={4}>
                            <Card sx={{borderTopRightRadius: 30, borderBottomRightRadius: 30}}>
                                <CardContent>
                                    <Typography align="center" component="div" variant="h6">
                                        {pricingFa.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mt: 4,
                                        }}
                                    >
                                        <Typography fontFamily="Architects Daughter" color="text.primary" component="div" variant="h4" sx={{mb: 5}}>
                                            €
                                        </Typography>
                                        <Typography component="div" variant="h3">
                                            {pricingFa.price}
                                        </Typography>
                                        <Typography component="div" color="text.secondary">
                                            /
                                        </Typography>
                                        <Typography component="div" color="text.secondary">
                                            visit
                                        </Typography>
                                    </Box>
                                    <Stack spacing={2} sx={{ mt: 4 }}>
                                        {pricingFa.features.map((feature) => (
                                            <Box
                                                key={feature}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Typography color="text.secondary">
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                    <Button fullWidth sx={{ mt: 4, backgroundColor: '#124944', textTransform: 'none' }} variant="contained">
                                        Book Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
    </ThemeProvider>
    );
}