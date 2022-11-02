import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ShortcutIcon from '@mui/icons-material/Shortcut';
// import PanoramaFishEyeOutlinedIcon from '@mui/icons-material/PanoramaFishEyeOutlined';
// import AppleIcon from '@mui/icons-material/Apple';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import RAppBar from "../appbar/appBar";
import {CardContent } from "@mui/material";
import {Card} from "reactstrap";

const theme = createTheme({
    typography: {
    fontFamily: [
        'Righteous'
    ].join(','),
    }
});

export default  function SignInSide() {
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
            <Grid container component="main" sx={{height: '100vh', backgroundColor:'#FBF3EA',  display: "flex", justifyContent: "center", mb: 3}} >
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
                            <Typography fontSize='50px' fontFamily='Baloo'>
                                Login to your account
                            </Typography>
                            <Typography component="h1" variant="h5" fontFamily='Baloo'>
                                Choose among 2k products to satisfy your little buddy! With freshly new products every second month
                            </Typography>
                            <Typography component="h1" variant="h5" fontFamily='Baloo'>
                                With freshly new products every second month
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 10 }}
                            >
                                <Grid container sx={
                                    {
                                        justifyContent: 'center'
                                    }
                                }>
                                    <Grid container spacing={2} xs={6} md={3} >
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <TextField>xs=8</TextField>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <TextField>xs=8</TextField>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <TextField>xs=8</TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} xs={6} md={3} sx={
                                        {
                                            alignItems: 'center'
                                        }}>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <TextField>xs=8</TextField>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <TextField>xs=8</TextField>
                                        </Grid>
                                        <Grid item xs={12} sx={
                                            {
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                            <TextField>xs=8</TextField>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </ThemeProvider>
    );
}

/*
export default function SignInSide() {
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
            <RAppBar/>
            <Grid container component="main" sx={{height: '100vh', backgroundColor:'#FBF3EA',  display: "flex", justifyContent: "center", mb: 3}} >
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
                            <Typography fontSize='50px' fontFamily='Baloo'>
                                Login to your account
                            </Typography>
                            <Typography component="h1" variant="h5" fontFamily='Baloo'>
                                Choose among 2k products to satisfy your little buddy! With freshly new products every second month
                            </Typography>
                            <Typography component="h1" variant="h5" fontFamily='Baloo'>
                                With freshly new products every second month
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 10 }}
                            >
                                <Grid container >
                                    <Grid item xs={12} sm={6}>
                                        <OutlinedInput sx={{ mt: 0, mb: 2, height: 56, justifyContent: 'flex-start', width: '30%', ml: '920px' }}
                                            autoComplete="given-name"
                                            name="firstName"
                                            id="signup-firstName"
                                            placeholder="Email/Username"
                                            endAdornment={<PanoramaFishEyeOutlinedIcon sx={{ mr: 2 }} />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            startIcon={<FacebookIcon />}
                                            type="submit"
                                            variant="outlined"
                                            sx={{ color: 'black',mt: 0, mb: 2, height: 56, justifyContent: 'flex-start', width: '30%', ml: '50px', textTransform: 'none',  border:'1px solid transparent',   borderRightColor: '#e5cc70',
                                                borderLeftColor:'#01c29a', background:'linear-gradient(to left,#e5cc70 10%, #e5cc70 70%,#e5cc70 85%, #01c29a 100%) top/100% 1px,linear-gradient(to left, #e5cc70 0%, #01c29a 100%) bottom/100% 1px', backgroundRepeat:'no-repeat'}}
                                        >
                                            Sign in with Facebook
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <OutlinedInput sx={{ mt: 0, mb: 2, height: 56, justifyContent: 'flex-start', width: '30%', ml: '920px' }}
                                             autoComplete="password"
                                             name="password"
                                             id="password"
                                             placeholder="Password"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            startIcon={<GoogleIcon />}
                                            type="submit"
                                            variant="outlined"
                                            sx={{ color: 'black',mt: 0, mb: 2, height: 56, justifyContent: 'flex-start', width: '30%', ml: '50px', textTransform: 'none',  border:'1px solid transparent',   borderRightColor: '#e5cc70',
                                                borderLeftColor:'#01c29a', background:'linear-gradient(to left,#e5cc70 10%, #e5cc70 70%,#e5cc70 85%, #01c29a 100%) top/100% 1px,linear-gradient(to left, #e5cc70 0%, #01c29a 100%) bottom/100% 1px', backgroundRepeat:'no-repeat'}}
                                        >
                                            Sign in with Google
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            endIcon={<ShortcutIcon sx={{ ml: 15 }} />}
                                            type="submit"
                                            variant="contained"
                                            sx={{ fontSize: 20, color: 'black', mt: 0, mb: 2, height: 56, justifyContent: 'flex-start', width: '30%', ml: '920px', textTransform: 'none', background: 'linear-gradient(to right, #01c29a, #e5cc70)' }}
                                        >
                                            Login to your account
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            startIcon={<AppleIcon sx={{ fontSize: '20' }} />}
                                            type="submit"
                                            variant="outlined"
                                            sx={{ color: 'black',mt: 0, mb: 2, height: 56, justifyContent: 'flex-start', width: '30%', ml: '50px', textTransform: 'none',  border:'1px solid transparent',   borderRightColor: '#e5cc70',
                                                borderLeftColor:'#01c29a', background:'linear-gradient(to left,#e5cc70 10%, #e5cc70 70%,#e5cc70 85%, #01c29a 100%) top/100% 1px,linear-gradient(to left, #e5cc70 0%, #01c29a 100%) bottom/100% 1px', backgroundRepeat:'no-repeat'}}
                                        >
                                            Sign in with Apple Account
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', mt: 10}}>
                                        <Button sx={{textTransform: 'none', fontSize: 20, color: 'black'}}> Forgot password? </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </ThemeProvider>
    );
}
*/