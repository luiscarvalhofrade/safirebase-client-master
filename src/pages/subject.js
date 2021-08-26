import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Subject from '../components/subject/Subject';

import { connect } from 'react-redux';
import { getSubjects } from '../redux/actions/studentActions';

class subject extends Component {
    componentDidMount() {
        this.props.getSubjects();
    }
    render() {
        const { subjects, loading } = this.props.student;
        let recentSubjectsMarkup = !loading ? (
          subjects.map((subject) => <Subject key={subject.subjectId} subject={subject} />)
        ) : (
          <p>Loading subjects</p>
        );
        return (
          <Grid container spacing={16}>
            <Grid item sm={8} xs={12}>
              {recentSubjectsMarkup}
            </Grid>
          </Grid>
        );
      }
}

subject.propTypes = {
    getSubjects: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    student: state.student
  });
  
  export default connect(
    mapStateToProps,
    { getSubjects }
  )(subject);