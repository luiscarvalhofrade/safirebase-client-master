import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import List from '../components/subject/List';
import SubjectCredentials from '../components/subject/SubjectCredential';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { getSubject } from '../redux/actions/studentActions';

class subjectContent extends Component {
  state = {
    subjectData: null
  };
  componentDidMount() {
    const subject = this.props.match.params.subject;
    const subjectId = this.props.match.params.subjectId;

    this.props.getSubject(subject, subjectId);
    axios
      .get(`/materia/${subject}/${subjectId}`)
      .then((res) => {
        this.setState({
            subjectData: res.data
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { 
        student: {
            lists,
            loading
        }
    } = this.props;
    //console.log(this.state.lists)
    const listsMarkup = loading ? (
      <p>Loading lists...</p>
    ) : lists === null ? (
      <p>No lists from this subject</p>
    ) : (
        lists.map((list) => <List key={list.listId} list={list} />)
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
            {listsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.subject === null ? (
            <p>Loading subject...</p>
          ) : (
            <SubjectCredentials subject={this.state.subjectData} />
          )}
        </Grid>
      </Grid>
    );
  }
}

subjectContent.propTypes = {
  getSubject: PropTypes.func.isRequired,
  //subject: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  { getSubject }
)(subjectContent);