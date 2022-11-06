//MUI
import {Box, Container, Link, Stack, Typography} from '@mui/material'

export default function MyFooterComponent({links}) {
    return (
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

                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ mt: { xs: 3, md: 0 }, ml: { xs: 0, md: 3 } }}
                    >
                        {links.map((link) => (
                            <Link
                                color='white'
                                key={link}
                                underline="none"
                                variant="body2"
                            >
                                {link}
                            </Link>
                        ))}
                    </Stack>
                    <Typography color='white' variant="body2">
                        © 2022 Redelso
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}