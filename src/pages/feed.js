import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Scream from '../components/scream/Scream';
import Profile from '../components/profile/Profile';
import ScreamSkeleton from '../util/ScreamSkeleton';
import PostScream from '../components/scream/PostScream';
// mui stuff
import Fab from '@material-ui/core/Fab';
import withStyles from '@material-ui/core/styles/withStyles';
// redux stuff
import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

const styles = {
  fab: {
    position: 'fixed',
    bottom: "5%",
    right: "10%",
  }
};

class feed extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { data: {screams, loading}, classes } = this.props;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
          <Fab className={classes.fab} color="primary" aria-label="add">
            <PostScream />
          </Fab>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
        
      </Grid>
    );
  }
}

feed.propTypes = {
  classes: PropTypes.object.isRequired,
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getScreams }
)(withStyles(styles)(feed));
