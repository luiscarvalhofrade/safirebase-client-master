import React, { Component } from 'react';
import PropTypes from 'prop-types';
// mui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// redux stuff
import { connect } from 'react-redux';
import { showResult } from '../redux/actions/answerActions';

const styles = (theme) => ({
    ...theme
  });

class listResult extends Component {
    componentDidMount() {
        const resultId = this.props.match.params.resultId;
        
        //console.log(this.props.student.finalScore.trueCount)
        this.props.showResult(resultId);
      }
    render() {
        const {
            answer: {
                finalresult: {
                    trueCount,
                    falseCount
                }
            }
        } = this.props;
        return (
            <Grid>
                <Typography>
                    {this.props.userHandle}
                </Typography>
                <Typography>
                    false: {falseCount}
                </Typography>
                <Typography>
                    true: {trueCount}
                </Typography>
            </Grid>
        )
    }
}

listResult.propTypes = {
    showResult: PropTypes.func.isRequired
  };

const mapStateToProps = (state) => ({
    answer: state.answer,
    user: state.user
});

export default connect(mapStateToProps, {showResult})(listResult);
