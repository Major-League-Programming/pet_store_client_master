//MUI
import { styled } from '@mui/material/styles'
import {AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Stack, Toolbar, Typography} from '@mui/material'
import {Adb as AdbIcon, Menu as MenuIcon} from '@mui/icons-material'
//Imports
import * as React from 'react'
import { Outlet } from 'react-router-dom'

const pages = ['Home','Food', 'Treats', 'Services'];

export default function MyHomeAppBarComponent() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#BD5252",
        '&:hover': {
            backgroundColor: "#BD5252",
        },
    }));

    return (
        <Grid sx={{backgroundColor: '#FBF3EA'}}>
            <AppBar position="static" sx={{backgroundColor: '#FBF3EA'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: '12' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/login"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Satisfy',
                                fontWeight: 700,
                                fontSize: 50,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Wagg .
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                sx={{color: 'black'}}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/login"
                            sx={{
                                mr: 2,
                                ml: 15,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none'
                            }}
                        >
                            Wagg .
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Baloo', ml:5 }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Stack  spacing={2} direction="row">
                            <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row'}}>
                                <ColorButton   href="/signup"  sx={{color: 'black', fontFamily: 'Baloo'}} xs={12} sm={6} md={6} variant="contained">Contact Us</ColorButton >
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </Grid>
    );
}