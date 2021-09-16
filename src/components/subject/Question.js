import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// Redux
import { connect } from 'react-redux';
import { getOneOption } from '../../redux/actions/answerActions';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
};

class Question extends Component {
  state = {
    answer: "",
    questionId: ""
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
      this.props.getOneOption({
        answer: event.target.value,
        questionId: this.props.question.questionId,
        correctAnswer: this.props.question.answer,
        result: event.target.value === this.props.question.answer ? true : false
      });
  }
  render() {
    const {
      classes,
      question: {
          description,
          item1,
          item2,
          item3,
          item4,
          item5,
              },
      /*user: {
        authenticated,
        credentials: { handle }
      }*/
    } = this.props;
    
    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="body1" >
            {description}
          </Typography>
          <FormControl>
              <RadioGroup aria-label="answer" name="answer" onChange={this.handleChange}>
                <FormControlLabel value="item1" control={<Radio />} label={item1}/>
                <FormControlLabel value="item2" control={<Radio />} label={item2}/>
                <FormControlLabel value="item3" control={<Radio />} label={item3}/>
                <FormControlLabel value="item4" control={<Radio />} label={item4}/>
                <FormControlLabel value="item5" control={<Radio />} label={item5}/>
              </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  getOneOption: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  //student: state.student
});

export default connect(mapStateToProps, {getOneOption})(withStyles(styles)(Question));