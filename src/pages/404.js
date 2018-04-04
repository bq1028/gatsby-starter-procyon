import React from 'react';
import styled from '../utils/styled';
import Section from '../components/Section';

const NotFoundPage = () => (
  <Section>
    <Grid item xs={8}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Grid>
    );
  </Section>
);

export default NotFoundPage;
