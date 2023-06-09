import React from 'react';
import { Container } from 'react-bootstrap';
import EmailPrivate from '../components/EmailPrivate';
import Box from '@mui/material/Box';

export default function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <Box sx={{ height: 48 }} />
      <h4>Hello!</h4>
      <p>
        I am a passionate mobile developer who followed the idea to launch the clean, intuitive mobile app for taking care of plants - Planter.
      </p>
      <p>
        I am actively maintaining it and my goal is to make it very accessible and user friendly.
      </p>
      <p>
        I am curious what you think about it!
      </p>
      <p>
        You can share your thoughts and contact me in other case with this e-mail: <EmailPrivate />
      </p>
      <p>
        For other programming work I invite to <a href='https://github.com/MichalDanielDobrzanski/'>my Github Page</a>
      </p>

      <p />
      <p />
      <p />
    </Container>
  );
}
