import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {CardContent, OutlinedInput} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Card} from "reactstrap";

//Icons
import ShortcutIcon from '@mui/icons-material/Shortcut';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import FooterLogin from "./FooterLogin";


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


export default  function SignUpSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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
                                Create your new account
                            </Typography>
                            <Typography component="h1" variant="h6" fontFamily='Baloo' color='white'>
                                Choose among 2k products to satisfy your little buddy!
                            </Typography>
                            <Typography component="h1" variant="h6" fontFamily='Baloo' color='white'>
                                With freshly new products every second month
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 10 }}
                            >
                                <Grid container  sx={
                                    {
                                        justifyContent: 'center'
                                    }
                                }>
                                    <Grid container spacing={1} xs={6} md={3}>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <OutlinedInput
                                                sx={{color: 'white', border: '1px solid #fff'}}
                                                autoComplete="email"
                                                fullWidth
                                                name="email"
                                                id="email"
                                                placeholder="Email">
                                            </OutlinedInput>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <OutlinedInput
                                                sx={{color: 'white', border: '1px solid #fff'}}
                                                autoComplete="password"
                                                fullWidth
                                                name="password"
                                                id="password"
                                                placeholder="Password">
                                            </OutlinedInput>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <OutlinedInput
                                                sx={{color: 'white', border: '1px solid #fff'}}
                                                autoComplete="password"
                                                fullWidth
                                                name="confirm-password"
                                                id="confirm-password"
                                                placeholder="Confirm Password">
                                            </OutlinedInput>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <Button  endIcon={<ShortcutIcon />}
                                                     sx={{
                                                         border: 'none',
                                                         textTransform: 'none',
                                                         justifyContent: 'flex-start',
                                                         height: 55,
                                                         color: 'white',
                                                         background: 'linear-gradient(to right,#124944, #C4D9B9)'
                                                     }}
                                                     fullWidth
                                                     size="large"
                                                     type="submit"
                                                     variant="outlined">Sign up your account</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} xs={10} md={1} >
                                        <Grid item xs={12} sx={
                                            {
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                color: 'white'
                                            }}>
                                            <Typography fontSize="20px">- or -</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} xs={6} md={3} sx={
                                        {
                                            alignItems: 'center'
                                        }}>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <Button
                                                     sx={{
                                                         fontSize: 20,
                                                         fontFamily: 'Baloo',
                                                         textTransform: 'none',
                                                         justifyContent: 'center',
                                                         height: 55,
                                                         color: 'white',
                                                         border:'1px solid transparent',
                                                         whiteSpace: "pre-line"
                                                     }}
                                                     fullWidth
                                                     size="large"
                                                     type="submit"
                                                     variant="outlined">Use one of the following{"\n"} methods to Signup</Button>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <Button  startIcon={<FacebookIcon />}
                                                     sx={{
                                                         textTransform: 'none',
                                                         justifyContent: 'flex-start',
                                                         height: 55,
                                                         color: 'white',
                                                         border:'1px solid transparent',
                                                         borderRightColor: '#C4D9B9',
                                                         borderLeftColor:'#124944',
                                                         background:'linear-gradient(to left,#C4D9B9 10%,#C4D9B9 70%,#C4D9B9 85%, #124944 100%) ' +
                                                             'top/100% 2px,linear-gradient(to left, #C4D9B9 0%, #124944 100%) bottom/100% 2px',
                                                         backgroundRepeat:'no-repeat'
                                                     }}
                                                     fullWidth
                                                     size="large"
                                                     type="submit"
                                                     variant="outlined">Sign Up with Facebook</Button>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <Button  startIcon={<GoogleIcon />}
                                                     sx={{
                                                         textTransform: 'none',
                                                         justifyContent: 'flex-start',
                                                         height: 55,
                                                         color: 'white',
                                                         border:'1px solid transparent',
                                                         borderLeftColor: '#C4D9B9',
                                                         borderRightColor:'#124944',
                                                         background:'linear-gradient(to right,#C4D9B9 10%,#C4D9B9 70%,#C4D9B9 85%, #124944 100%) ' +
                                                             'top/100% 2px,linear-gradient(to right, #C4D9B9 0%, #124944 100%) bottom/100% 2px',
                                                         backgroundRepeat:'no-repeat'
                                                     }}
                                                     fullWidth
                                                     size="large"
                                                     type="submit"
                                                     variant="outlined">Sign Up with Google</Button>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <Button  startIcon={<AppleIcon />}
                                                     sx={{
                                                         textTransform: 'none',
                                                         justifyContent: 'flex-start',
                                                         height: 55,
                                                         color: 'white',
                                                         border:'1px solid transparent',
                                                         borderRightColor: '#C4D9B9',
                                                         borderLeftColor:'#124944',
                                                         background:'linear-gradient(to left,#C4D9B9 10%,#C4D9B9 70%,#C4D9B9 85%, #124944 100%) ' +
                                                             'top/100% 2px,linear-gradient(to left, #C4D9B9 0%, #124944 100%) bottom/100% 2px',
                                                         backgroundRepeat:'no-repeat'
                                                     }}
                                                     fullWidth
                                                     size="large"
                                                     type="submit"
                                                     variant="outlined">Sign Up with Apple account</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </CardContent>
                    <Grid item sx={{mt: 20}}><FooterLogin /></Grid>
                </Card>
            </Grid>
        </ThemeProvider>
    );
}