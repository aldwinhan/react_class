import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MyButton from '../Reusable/MyButton'
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    //maxWidth: 345,
  },
  media: {
    maxWidth:166,
    height: 163,
  },
};

class MediaCard extends React.Component{
    render(){
        const { classes } = this.props;
        return (
        <Card className={classes.card}>
            <CardActionArea >
            <div style={{flex:1, flexDirection:'column', justifyContent:'center',background:"grey"}}>
            <div style={{flexDirection:'row'}}>
                <img src="https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b" alt="logo" style={{flex:0.2, float:'left'}}/>
                <CardContent style={{flex:0.8, borderWidth:1}} >
                    <Typography gutterBottom variant="h5" component="h2">
                    Hacktiv8 Meetup
                    </Typography>
                    <div style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                        <Typography component="p" style={{flex:0.5,float:'left'}}>
                        Location
                        </Typography>
                        <Typography component="p" style={{flex:0.5}}>
                        Jakarta, Indonesia
                        </Typography>
                    </div>
                    
                    <Typography component="p" style={{flex:0.5,float:'left'}}>
                    Members     
                    </Typography>
                    <Typography component="p">
                    1,078
                    </Typography>
                    <Typography component="p" style={{flex:0.5,float:'left'}}>
                    Organizers 
                    </Typography>
                    <Typography component="p">
                    Adhy Wiranata
                    </Typography>
                    <MyButton>
                        Join Us
                    </MyButton>
                </CardContent>
            </div>
            </div>
            </CardActionArea>
        </Card>
        );
    }
}


MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
