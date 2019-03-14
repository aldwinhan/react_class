import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class PaperSheet extends React.Component{
    render(){
        const { classes } = this.props;

        return (
          <div>
            <Paper className={classes.root} elevation={1} style={{background:"grey"}}>
              <Typography component="p">
                Awesome meetup and event<br/>
                25 January 2019<br/>
                Hellor, JavaScript & Node.js Ninjas!<br/>
                Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br/>
                ..........<br/>
                <br/>
                See you there!<br/>
                <br/>
                Best, Hengki, Giovanni, Agung The JakartaJS Organizers
              </Typography>
            </Paper>
          </div>
        );
    }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
