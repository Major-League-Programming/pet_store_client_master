import { Box, Avatar, Paper, Container, Typography, Stack } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { orange, grey } from "@mui/material/colors";


export default function HomePageTestimonials() {
    return (
        <Box component="section" sx={{ width: '100%', mr: 0 }}>
            <Container maxWidth="xl" sx={{ py: 10, justifyContent: 'center', mr: 0, pr: '0 !important', ml: '0 !important', pl: '0 !important' }}>
                <Container maxWidth='xl' sx={{ mr: 0, pr: '0 !important', ml: '0 !important', pl: '0 !important' }}>
                    <Paper variant='outlined' elevation={0}>
                        <Stack direction='row' justifyContent='space-evenly' alignItems='center'>
                            <Paper sx={{ padding: '25px', width: '50%' }} elevation={0}>
                                <Stack direction='column'>
                                    <Typography sx={{ padding: '10px', lineHeight: 1 }} fontSize='20px'>REVIEWS & AWARDS</Typography>
                                    <Typography sx={{ padding: '10px', lineHeight: 1 }} fontSize='40px'>Over 1000 customers with 5-star reviews</Typography>
                                    <Typography sx={{ padding: '10px', lineHeight: 1 }} fontSize='22px'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Typography>
                                    <Stack sx={{ padding: '10px' }} direction='row' justifyContent='start' alignItems='flex-start' spacing={-2}>
                                        <Avatar sx={{ border: '0.2px solid white' }} />
                                        <Avatar sx={{ border: '0.2px solid white' }} />
                                        <Avatar sx={{ border: '0.2px solid white' }} />
                                        <Avatar sx={{ border: '0.2px solid white' }} />
                                    </Stack>
                                    <Stack sx={{ padding: '10px' }} direction='row' justifyContent='flex-start' alignItems='center' spacing={1}>
                                        <StarRoundedIcon sx={{ color: orange[400], mb: '5px' }} />
                                        <Typography fontSize='15px'>4.9</Typography>
                                        <Typography sx={{ color: grey[500] }} fontSize='15px'>(1000 reviews)</Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                            <Paper sx={{ padding: '25px', width: '50%' }} elevation={0}>
                                <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' spacing={-5}>
                                    <Avatar sx={{ ml: '40px', width: '60px', height: '60px' }} />
                                    <Stack direction='row' justifyContent='center' alignItems='center'>
                                        <Paper sx={{ padding: '55px' }}>
                                            <Stack direction='column' justifyContent='flex-start' alignItems='center'>
                                                <Typography fontSize='15px'> Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</Typography>
                                            </Stack>
                                        </Paper>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Stack>
                    </Paper>
                </Container>
            </Container>
        </Box>
    );
}