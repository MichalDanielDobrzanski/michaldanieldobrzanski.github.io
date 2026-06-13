import React from 'react';
import * as ROUTES from './Routes.js';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to Planter & Hourglass Landing Page
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          paragraph
        >
          Please navigate to the dedicated section
        </Typography>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button href={ROUTES.PLANTER_HOME_ROUTE} variant="contained">Planter</Button>
          <Button href="/hourglass/" variant="contained">Hourglass</Button>
        </Stack>
      </Container>
    </main>
  );
}