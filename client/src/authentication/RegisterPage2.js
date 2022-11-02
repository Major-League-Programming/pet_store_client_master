import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import background from "../assets/images/reg1.png";
import background2 from "../assets/images/reg2.png";
import background3 from "../assets/images/reg3.png";
import Login from "./login2";
import logo from "../assets/images/logo.png";
import Avatar from "@mui/material/Avatar";

const theme = createTheme({
    typography: {
        fontFamily: [
           'Righteous'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#162637',
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
            <Grid xs={12} md={12} sm={12} container component="main" sx={{height: '100vh', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <Box sx={{ position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: 980,
                    width: 1330,
                    border: '5px solid #744b2b',
                    boxShadow: 24,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${background3})`,
                    borderRadius: '55px',
                    }}>
                    <Grid xs={12} md={12} sm={12} sx={{alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
                        <Grid container xs={12} md={6} sx={{alignItems: 'center', justifyContent:'center'}}>
                            <Box
                                sx={{
                                    my: 4,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                }}>
                                <Grid container sx={{justifyContent: 'flex-end' }}>
                                    <Button sx={{fontFamily: 'Baloo', textTransform: 'none'}}> Home</Button>
                                    <Button sx={{fontFamily: 'Baloo', textTransform: 'none'}}> Login</Button>
                                </Grid>
                                <Grid container sx={{mt: 10}}>
                                    <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '30px', fontFamily: 'Baloo'}}>
                                        You&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: 'black', fontSize: '30px', fontFamily: 'Baloo'}}>
                                        care.&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '30px', fontFamily: 'Baloo'}}>
                                        We&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: 'black', fontSize: '30px', fontFamily: 'Baloo'}}>
                                        care.
                                    </Typography>
                                </Grid>
                                <Grid container>
                                    <Typography component="h1" sx={{color: 'black', fontSize: '50px', fontFamily: 'Baloo'}}>
                                        Create an account&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '50px'}}>
                                        .
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link style={{textDecoration: 'none'}} to={"login"} variant="body2" sx={{cursor:'pointer'}}>
                                        {
                                            <Grid container>
                                                <Typography component="h1" sx={{color: 'black', fontSize: '20px', fontFamily: 'Baloo'}}>
                                                    Already a member?&nbsp;&nbsp;
                                                </Typography>
                                                <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '20px', fontFamily: 'Baloo'}}>
                                                    Log In
                                                </Typography>
                                            </Grid>
                                        }
                                    </Link>
                                </Grid>
                                <Box xs={12} md={12} sm={12} component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{mt: 1}}>
                                    <TextField xs={12} md={12} sm={12}
                                                sx={{backgroundColor:'white', borderRadius: 50}}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="Name"
                                                label="Name"
                                                name="name"
                                            />
                                    <TextField xs={12} md={12} sm={12}
                                                sx={{backgroundColor:'white', borderRadius: 4}}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="surname"
                                                label="Surname"
                                                name="surname"
                                            />
                                    <TextField xs={12} md={12} sm={12}
                                        sx={{backgroundColor:'white'}}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                    />
                                    <TextField xs={12} md={12} sm={12}
                                        sx={{backgroundColor:'white', borderRadius: 4}}
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
                                        sx={{backgroundColor:'white', borderRadius: 50}}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        name="full name"
                                    />

                                    <Button xs={12} md={12} sm={12}
                                        type="submit"
                                            fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2, backgroundColor:'#EBBD3B', height:'60px', borderRadius: 5}}
                                    >
                                        Sign Up
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    <Grid md={6}  sx={{
                        width: '50%',
                            backgroundImage: `url(${background2})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    />
                    </Grid>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}
