import React from 'react';
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Skeleton from '../../components/Skeleton';
import { getSubreddits } from '../../features/subreddits/subredditsSlice';
import useFetch from '../../hooks/useFetch';

// TODO: Invata sa faci material-ui grid-ul fluid, ca sa nu mai forteze card-urile care nu sunt de aceeasi inaltime sa fie pe acelasi rand
const Subreddits: React.FC = () => {
  const {
    subreddits: { subreddits, isLoading, isError, error },
  } = useFetch({ action: getSubreddits });

  /* Promises pe incarcarea paginii ca sa nu mai fac Redux si pentru 404 */
  if (isError) {
    return (
      <Layout>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error with your request — <strong>{error}</strong>
        </Alert>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <Grid container spacing={3}>
          {Array.from(new Array(6)).map((_, idx) => (
            <Grid item xl={4} md={4} sm={6} xs={12} key={idx}>
              <Skeleton type="subreddit" />
            </Grid>
          ))}
        </Grid>
      </Layout>
    );
  }

  return (
    <Layout>
      <Grid container spacing={3}>
        {subreddits.map((subreddit: any) => (
          <Grid item xl={4} md={4} sm={6} xs={12} key={subreddit.id}>
            <Card type="subreddit" subredditProps={{ data: subreddit }} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Subreddits;
