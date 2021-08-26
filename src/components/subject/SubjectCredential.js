import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
// MUI stuff
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// Icons
import CalendarToday from '@material-ui/icons/CalendarToday';
//Redux
import { connect } from 'react-redux';

const styles = (theme) => ({
  ...theme
});

class SubjectCredentials extends Component {
  render() {
    const {
      classes,
      student: {
          subject: {
            subject,
            createdAt,
            userHandle,
            loading
          }
      }
    } = this.props;

    let subjectMarkup = !loading ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className="profile-details">
            <Typography color="primary" variant="h5">{subject}</Typography>
              <hr />
              <Typography variant="body2">{userHandle}</Typography>
              <hr />
              <CalendarToday color="primary" />{' '}
              <span>Created {dayjs(createdAt).format('MMM YYYY')}</span>
            </div>
          </div>
        </Paper>
    ) : (
      <p>Loading Subject...</p>
    );

    return subjectMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  student: state.student
});

SubjectCredentials.propTypes = {
  //subject: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps
)(withStyles(styles)(SubjectCredentials));