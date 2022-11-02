import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import background from "../assets/images/reg1.png";
import background2 from "../assets/images/reg2.png";
import background3 from "../assets/images/reg3.png";

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

export default function Login() {
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
            <Grid container component="main" sx={{height: '100vh', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto'}}>
                <Box sx={{ position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: 980,
                    width: 1330,
                    border: '2px solid #000',
                    boxShadow: 24,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${background3})`,
                    borderRadius: '50px',
                }}>
                    <Grid sx={{alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
                        <Grid container xs={12} md={6} sx={{alignItems: 'center', justifyContent:'center'}}>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                }}>
                                <Grid container>
                                    <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '20px'}}>
                                        You&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: 'black', fontSize: '20px'}}>
                                        care.&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '20px'}}>
                                        We&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: 'black', fontSize: '20px'}}>
                                        care.
                                    </Typography>
                                </Grid>
                                <Grid container>
                                    <Typography component="h1" sx={{color: 'black', fontSize: '50px'}}>
                                        Create an account&nbsp;
                                    </Typography>
                                    <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '50px'}}>
                                        .
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link style={{textDecoration: 'none'}} to="#" variant="body2" sx={{cursor:'pointer'}}>
                                        {
                                            <Grid container>
                                                <Typography component="h1" sx={{color: 'black', fontSize: '10px'}}>
                                                    Don't have an account?&nbsp;&nbsp;
                                                </Typography>
                                                <Typography component="h1" sx={{color: '#EBBD3B', fontSize: '10px'}}>
                                                    Sign Up
                                                </Typography>
                                            </Grid>
                                        }
                                    </Link>
                                </Grid>
                                <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{mt: 1}}>
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
                                        sx={{backgroundColor:'white', borderRadius: 3}}
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
