//MUI
import {Card} from 'reactstrap'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {Box, CardContent, Grid, Typography} from '@mui/material'
//Components
import MyFooterComponent from '../../components/footer/footer.component';

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

export default function MyVerifyPage() {
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
                    <Grid item sx={{mt: 65}}><MyFooterComponent links={['Privacy Policy']} /></Grid>
                </Card>
            </Grid>
        </ThemeProvider>
    );
}