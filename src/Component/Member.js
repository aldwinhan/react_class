import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

class ImageAvatars extends React.Component{
    render(){
        const { classes } = this.props;
        return (
          <Grid container justify="left" alignItems="center" style={{background:"grey"}}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.bigAvatar} />
            <Typography variant="h6">Organizers</Typography>
            <Grid container justify="left" alignItems="center">
                <Typography>Adhy Wiranata</Typography>
                <Typography>4 others</Typography>
            </Grid>
          </Grid>
        );
    }
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
