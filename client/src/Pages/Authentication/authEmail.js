import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {CardContent } from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Card} from "reactstrap";
import FooterLogin from "./footerLogin";

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
            'Righteous'
        ].join(',')
    }
});

export default  function AuthEmail() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{height: '100vh', backgroundColor:'#09040a',  display: "flex", justifyContent: "center", position: 'absolute'}} >
                <Card>
                    <CardContent>
                        <Box
                            sx={{
                                mt: 25,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography fontSize='60px' fontFamily='Baloo' color='white'>
                                Please authenticate your email
                            </Typography>
                            <Typography component="h1" variant="h6" fontFamily='Baloo' color='white'>
                                A link has being send to your provided email to
                            </Typography>
                            <Typography component="h1" variant="h6" fontFamily='Baloo' color='white'>
                                authenticate your account.
                            </Typography>
                        </Box>
                    </CardContent>
                    <Grid item sx={{mt: 65}}><FooterLogin /></Grid>
                </Card>
            </Grid>
        </ThemeProvider>
    );
}