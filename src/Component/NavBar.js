import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MyButton from '../Reusable/MyButton'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 20,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class NavBar extends React.Component{

    state = {
        value: 0,
      };

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render(){
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Qtemu
                </Typography>
                <Tabs value={value} onChange={this.handleChange} className={classes.menu}>
                    <Tab label="Create Metup" />
                    <Tab label="Explore" />
                </Tabs>
                {/* <Typography  color="inherit" className={classes.grow} textAlign="left">
                    News
                </Typography>
                <Typography  color="inherit" className={classes.grow}>
                    Create Meetup
                </Typography> */}
                <MyButton color="inherit">Login</MyButton>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

/* function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
} */

/* ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}; */

export default withStyles(styles)(NavBar);
