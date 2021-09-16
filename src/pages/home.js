import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import colappost from "../images/colappost.png";
import pontoscolap from "../images/pontoscolap.png"
// mui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Redux
import { connect } from 'react-redux';

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
    },
    cardimage: {
        maxWidth: 358,
    }
  };

class home extends Component {
    render() {
        const { 
            classes,
            user: {
                credentials: { handle }
                } 
            } = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    <Typography variant="h5">
                        Olá, {handle}         
                    </Typography>
                    <Card className={classes.card}>
                    <img className={classes.cardimage} alt="pontoscolap" src={pontoscolap}/>
                    </Card>
                    <Card className={classes.card}>
                    <img className={classes.cardimage} alt="colaplogo" src={colappost}/>
                    </Card>
                    <Link to={`/materias`}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography variant="h5">
                                    Materias
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={`/forum`}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography variant="h5">
                                    Forum
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={`/psi`}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography variant="h5">
                                    Psi
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        )
    }
}

home.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(home));
