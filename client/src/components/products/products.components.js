import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

import pro1 from '../../assets/images/products/pro1.png'

const members = [
  {
    name: "Sonoma Style BBQ",
    job: "All dog sizes",
    image: pro1,
  },
  {
    name: "Sonoma Style BBQ",
    job: "All dog sizes",
    image: pro1,
  },
  {
    name: "Sonoma Style BBQ",
    job: "All dog sizes",
    image: pro1,
  },
];

const icons = [
  { name: "Favorite", icon: <FavoriteBorderIcon /> },
];

const cart = [
    { name: "Favorite", icon: <LocalMallOutlinedIcon /> },
  ];
export default function ProductGrid() {
  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {members.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} sx={{backgroundColor: '#fff' }}>
              <Card sx={{boxShadow: 'none', mr: 5}}>
                <Box sx={{backgroundColor: '#F9F3EC', borderRadius: 5}}>
                <Stack direction="row" spacing={1} sx={{justifyContent: 'flex-end'}}>
                    {icons.map((social) => (
                      <IconButton
                      sx={{justifyContent: 'flex-end'}}
                        key={social.name}
                        aria-label={social.name}
                        component="span"
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                />
                </Box>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {member.name}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {member.job}
                  </Typography>
                </CardContent>
                <CardActions  sx={{justifyContent: 'flex-end'}}>
                  <Stack direction="row" spacing={16} >
                  <CardContent>
                  <Typography variant="h6" component="div">
                  €60.00
                  </Typography>
                </CardContent>
                    {cart.map((social) => (
                        <Box sx={{backgroundColor: '#000', borderRadius: 10, width: 60, height: 60}}>
                      <IconButton
                      fontSize="large"
                      sx={{color: '#fff'}}
                        component="span"
                      >
                        {social.icon}
                      </IconButton></Box>
                    ))}
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}