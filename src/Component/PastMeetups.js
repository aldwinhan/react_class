import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MyButton from '../Reusable/MyButton'
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
  card: {
    minWidth: 275,
    background: 'grey',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class ImageAvatars extends React.Component{
    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        return (
          <Grid container justify="space-between" alignItems="center">
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <MyButton size="small">Learn More</MyButton>
                </CardActions>
                </Card>
                <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <MyButton size="small">Learn More</MyButton>
                </CardActions>
                </Card>
                <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <MyButton size="small">Learn More</MyButton>
                </CardActions>
                </Card>
          </Grid>
        );
    }
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
