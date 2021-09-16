import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from '../components/subject/Question';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import MyButton from '../util/MyButton';
// Mui Stuff
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
// redux stuff
import { connect } from 'react-redux';
import { getList } from '../redux/actions/studentActions';
import { getAnswers, getResult } from '../redux/actions/answerActions';

class list extends Component {
  state = {
    listData: null,
    answers: []
  };
  componentDidMount() {
    const subject = this.props.match.params.subject;
    const listId = this.props.match.params.listId;
    
    this.props.getList(subject, listId);
  }
  handleSubmit = (event) => {
    const listId = this.props.match.params.listId;
    let finalAnswers = this.props.answer.answers;
    event.preventDefault();
    //console.log(finalAnswers)
    this.props.getAnswers(listId, finalAnswers)
    this.props.getResult(listId, finalAnswers)
    this.props.student.answers = [];
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
        questions.map((question) => <Question key={question.questionId} question={question} />)
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
            {questionsMarkup}
              <MyButton tip="finalizar lista" onClick={this.handleSubmit}>Finalizar</MyButton>
              <Tooltip title="ver o resultado" placement="top">
                <Link to={`/u/resultado/${this.props.answer.result.resultId}`}>
                  <IconButton>
                     Ver Resultado
                  </IconButton>
                </Link>
              </Tooltip>
                      
              
        </Grid>
      </Grid>
    );
  }
}

list.propTypes = {
  getList: PropTypes.func.isRequired,
  getAnswers: PropTypes.func.isRequired,
  getResult: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    answer: state.answer,
    student: state.student,
    user: state.user
});

export default connect(
  mapStateToProps,
  { getList, getAnswers, getResult }
)(list);