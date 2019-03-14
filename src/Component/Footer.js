import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
            <div>
                <Divider/>
                <Grid container justify="center" alignItems="center">
                    <Typography style={{paddingTop:'20px'}}>Copyright Hacktiv8 2018</Typography>
                </Grid>
          </div>
        );
    }
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
