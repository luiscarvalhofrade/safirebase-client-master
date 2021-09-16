import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SubjectsIcon from '@material-ui/icons/AccountBalance';
import BallotIcon from '@material-ui/icons/Ballot';
import BatteryCharging80Icon from '@material-ui/icons/BatteryCharging80';

// testing something
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

class Navbar extends Component {
  state = {
    open: false
  }
  handleClick = () => {
      this.setState({open: true})
  }
  handleClose = () => {
      this.setState({open: false})
  }
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <IconButton 
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        >
                        <MenuIcon onClick={this.handleClick} />
                    </IconButton>
                    <div
                        onClick={this.handleClose}
                        onKeyDown={this.handleClose}
                    >
                    <Drawer
                        anchor="left"
                        open={this.state.open}
                    >
                        <List>
                            <ListItem>
                                <Typography variant="h6">
                                  Colap
                                </Typography>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem key={1}>
                              <Link to="/">
                                <MyButton tip="Home">
                                  <HomeIcon /> Home
                                </MyButton>
                              </Link>
                            </ListItem>
                            <ListItem key={2}>
                              <Link to="/materias">
                                <MyButton tip="Materias">
                                  <SubjectsIcon /> Materias
                                </MyButton>
                              </Link>
                            </ListItem>
                            <ListItem key={3}>
                              <Link to="/forum">
                                <MyButton tip="Forum">
                                  <BallotIcon /> Forum
                                </MyButton>
                              </Link>
                            </ListItem>
                            <ListItem key={4}>
                              <Link to="/psi">
                                <MyButton tip="Psi">
                                  <BatteryCharging80Icon /> Psi
                                </MyButton>
                              </Link>
                            </ListItem>
                        </List>
                    </Drawer>
                    </div>
              <PostScream />
              <Notifications />
              <Button>
                <Avatar> L </Avatar>
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
