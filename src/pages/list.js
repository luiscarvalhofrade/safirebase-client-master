import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from '../components/subject/Question';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { getList } from '../redux/actions/studentActions';

class list extends Component {
  state = {
    listData: null
  };
  componentDidMount() {
    const subject = this.props.match.params.subject;
    const listId = this.props.match.params.listId;

    this.props.getList(subject, listId);
  }
  render() {
    const { 
        student: {
            questions,
            loading
        }
    } = this.props;
    const questionsMarkup = loading ? (
      <p>Loading questions...</p>
    ) : questions === null ? (
      <p>No questions from this list</p>
    ) : (
        questions.map((question) => <Question key={question.description} question={question} />)
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
            {questionsMarkup}
        </Grid>
      </Grid>
    );
  }
}

list.propTypes = {
  getList: PropTypes.func.isRequired,
  //subject: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    student: state.student
});

export default connect(
  mapStateToProps,
  { getList }
)(list);