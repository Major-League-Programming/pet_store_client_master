
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {CardContent, ListItem, ListItemButton, ListItemIcon, ListItemText, OutlinedInput} from "@mui/material";
import {Button, List} from "reactstrap";
import myPhoneIcon from '../../assets/images/footer/phone.png'
import myEmailIcon from '../../assets/images/footer/email.png'
import myGoogleIcon from '../../assets/images/footer/google.png'
import myAppleIcon from '../../assets/images/footer/apple.png'
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {purple} from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";

const categoriesProducts = [
    { header: "Our Products", links: ["Dog Food", "Cat Food", "Treats", "Accessories", "Hygiene"] }
];
const categoriesWagg = [
    { header: "Wagg Wagg", links: ["About Wagg", "The Team", "The Pets", "The Doctors", "News"] }
];
const categoriesResources = [
    { header: "Resources", links: ["Download", "Help Center", "Guides", "Delivery", "FAQ"] }
];
const categoriesNews = [
    { header: "Newsletter", links: [] }
];

const links = [ "Privacy", "Services", "Terms & Conditions"];

const MyCustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#234844',
    border: 0,
    borderRadius: 2,
    height: 40,
    width: 50

}));

export default function FooterHome() {
    return (
        <Box component="footer">
            <Container maxWidth="lg">
                <Box component="section">
                    <Container maxWidth="lg" sx={{ py: 10 }}>
                        <Card
                            sx={{ bgcolor: "#234844", color: "background.default", py: 6 }}
                        >
                            <CardContent sx={{ textAlign: "flex-end" }}>
                                <Typography component="div" sx={{ mb: 2 }} variant="h4">
                                    Find Everything Your Pet Needs
                                </Typography>
                                <MyCustomButton fullWidth sx={{ mt: 4, backgroundColor: '#124944', textTransform: 'none' }} variant="contained">
                                    Book Now
                                </MyCustomButton>
                            </CardContent>
                        </Card>
                    </Container>
                </Box>
                <Grid container spacing={3} sx={{ py: 5 }}>
                    <Grid item xs={12} md={4}>
                        <Typography fontFamily="Satisfy" fontSize={30} color="text.primary" sx={{ mt: '-5px' }}>
                            Wagg .
                        </Typography>
                        <Typography fontFamily="Righteous" color="text.secondary" sx={{ mt: 2 }} variant="body2">
                            Our experts are available 24/7:
                        </Typography>
                        <List>
                            <ListItem sx={{padding: 0, ml: '-40px'}}>
                                <ListItemButton sx={{padding: 0}}>
                                    <ListItemIcon>
                                        <img width="40%" height="40%" src={myPhoneIcon} alt="dog food" />
                                    </ListItemIcon>
                                    <ListItemText primary="22 - 010101" sx={{ml: '-20px'}} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{padding: 0, ml: '-40px'}}>
                                <ListItemButton sx={{padding: 0}}>
                                    <ListItemIcon>
                                        <img width="40%" height="40%" src={myEmailIcon} alt="dog food" />
                                    </ListItemIcon>
                                    <ListItemText primary="waggfood@wagg.co.cy" sx={{ml: '-20px'}} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Stack spacing={-10} direction="row" sx={{ml: '-50px'}}>
                        <IconButton
                            sx={{"&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }}}>
                            <img width="60%" height="100%" src={myGoogleIcon} alt="dog food" />
                        </IconButton>
                            <IconButton
                                sx={{"&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }}}>
                            <img width="60%" height="100%" src={myAppleIcon} alt="dog food" />
                        </IconButton>
                            </Stack>
                    </Grid>
                    {categoriesProducts.map((categoryP) => (
                        <Grid key={categoryP.header} item xs={12} md={2}>
                            <Stack spacing={1}>
                                <Typography fontFamily="Righteous"  component="div" variant="h6">
                                    {categoryP.header}
                                </Typography>
                                {categoryP.links.map((link) => (
                                    <Link
                                        color="text.secondary"
                                        key={link}
                                        underline="none"
                                        variant="body2"
                                        sx={{fontFamily:'Righteous' }}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                    {categoriesWagg.map((categoryW) => (
                        <Grid key={categoryW.header} item xs={12} md={2}>
                            <Stack spacing={1}>
                                <Typography component="div" variant="h6" fontFamily="Righteous" >
                                    {categoryW.header}
                                </Typography>
                                {categoryW.links.map((link) => (
                                    <Link
                                        color="text.secondary"
                                        key={link}
                                        underline="none"
                                        variant="body2"
                                        sx={{fontFamily:'Righteous' }}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                    {categoriesResources.map((categoryR) => (
                        <Grid key={categoryR.header} item xs={12} md={2}>
                            <Stack spacing={1}>
                                <Typography fontFamily="Righteous"  component="div" variant="h6">
                                    {categoryR.header}
                                </Typography>
                                {categoryR.links.map((link) => (
                                    <Link
                                        color="text.secondary"
                                        key={link}
                                        underline="none"
                                        variant="body2"
                                        sx={{fontFamily:'Righteous' }}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                    {categoriesNews.map((categoryN) => (
                        <Grid key={categoryN.header} item xs={12} md={2}>
                            <Stack spacing={1}>
                                <Typography fontFamily="Righteous" component="div" variant="h6">
                                    {categoryN.header}
                                </Typography>
                                {categoryN.links.map((link) => (
                                    <Link
                                        color="text.secondary"
                                        key={link}
                                        underline="none"
                                        variant="body2"
                                        sx={{fontFamily:'Righteous' }}
                                    >
                                        {link}
                                    </Link>
                                ))}
                                <Box sx={{ mt: { xs: 2, md: 0 } }}>
                                    <OutlinedInput
                                        id="mail"
                                        endAdornment={<CircleNotificationsOutlinedIcon/>}
                                        placeholder="Email"
                                        sx={{ pr: 0.5 }}
                                    />
                                </Box>
                                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                                    <IconButton aria-label="Facebook">
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton aria-label="Instagram">
                                        <InstagramIcon />
                                    </IconButton>
                                    <IconButton aria-label="Twitter">
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton aria-label="LinkedIn">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
                <Divider />
                <Box component="footer">
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                justifyContent: "space-between",
                                py: 4,
                            }}
                        >
                            <Typography color="text.secondary" variant="body2" fontFamily="Righteous">
                                All right reserved © Wagg Foods Ltd 2022
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={3}
                                sx={{ mt: { xs: 3, md: 0 }, ml: { xs: 0, md: 3 } }}
                            >
                                {links.map((link) => (
                                    <Link
                                        color="text.secondary"
                                        key={link}
                                        underline="none"
                                        variant="body2"
                                        sx={{fontFamily:'Righteous'}}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Box>
    );
}