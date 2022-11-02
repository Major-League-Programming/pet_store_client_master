import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import background from "../assets/images/register.png";
import logo from "../assets/images/logo.png";
import {Modal} from "reactstrap";

const theme = createTheme({
    typography: {
        fontFamily: [
           'Righteous'
        ].join(','),
    },
    palette: {
        primary: {
            main: blue[50],
        },
    },
});

export default function SignUpSide() {
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
            <Grid container component="main" sx={{height: '100vh', backgroundColor: '#282a37'}}>
                <Grid sx={{backgroundColor: '#282a37', boxShadow: 'none', }} item xs={12} sm={8} md={6} component={Paper} square>
                   <Grid container sx={{alignItems: 'center', justifyContent:'center'}}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Avatar variant="rounded" src={logo} sx={{width: 220, height:100}}/>
                        <Grid container sx={{mt: 30}}>
                            <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '40px'}}>
                                You&nbsp;
                            </Typography>
                            <Typography component="h1" sx={{color: 'white', fontSize: '40px'}}>
                                care.&nbsp;
                            </Typography>
                            <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '40px'}}>
                                We&nbsp;
                            </Typography>
                            <Typography component="h1" sx={{color: 'white', fontSize: '40px'}}>
                                care.
                            </Typography>
                        </Grid>
                        <Grid container>

                            <Typography component="h1" sx={{color: 'white', fontSize: '64px'}}>
                                Create an account&nbsp;
                            </Typography>
                            <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '64px'}}>
                                .
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link style={{textDecoration: 'none'}} to="#" variant="body2" sx={{cursor:'pointer'}}>
                                {
                                    <Grid container>
                                        <Typography component="h1" sx={{color: 'white', fontSize: '15px'}}>
                                            Don't have an account?&nbsp;&nbsp;
                                        </Typography>
                                        <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '15px'}}>
                                            Sign Up
                                        </Typography>
                                    </Grid>
                                }
                            </Link>
                        </Grid>
                        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{mt: 1}}>
                            <Grid container>
                                <Grid xs={12} sm={6} md={6}>
                                <TextField
                                    sx={{backgroundColor:'white', borderRadius: 3}}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    name="full name"
                                />
                                </Grid>
                                <Grid xs={12} sm={6} md={6} sx={{'& .MuiTextField-root': { ml: 3, width: '38ch'}}} >
                                <TextField
                                    sx={{backgroundColor:'white', borderRadius: 3}}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="surname"
                                    label="Surname"
                                    name="surname"
                                />
                                </Grid>
                            </Grid>
                            <TextField
                                sx={{backgroundColor:'white', borderRadius: 3}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                            />
                            <TextField
                                sx={{backgroundColor:'white', borderRadius: 3}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                            />
                            <TextField
                                sx={{borderRadius: 3, borderBlockColor: 'white'}}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                type="password"
                                id="password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2, backgroundColor:'#EBBD3B', height:'60px'}}
                            >
                                Sign Up
                            </Button>

                        </Box>
                    </Box>
                   </Grid>
                </Grid>
                <div className="divider"></div>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        clipPath: 'polygon(0 0, 0 0, 10000px 20000px, 10000px -0)',
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Grid>
        </ThemeProvider>
    );
}
