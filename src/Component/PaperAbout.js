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
            <Paper className={classes.root} elevation={1} >
              <Typography component="p">
                Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.<br/>
                <br/>
                Twitter:@JakartaJS and we use the hashtag #jakartajs
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
