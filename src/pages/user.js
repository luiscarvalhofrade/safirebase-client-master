import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Profile from '../components/profile/Profile';

class user extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

export default user;
