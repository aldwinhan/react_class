import React,{ Component } from 'react'
import Button from '@material-ui/core/Button';

class MyButton extends Component{
  render(){
    const { variant,warna,action, valueForAction, title, size } = this.props
    return(
      <Button
        variant={variant || "contained"}
        color={warna || 'primary'} 
        onClick={action}
        size={size || "medium"}
      >
      {this.props.children}
      </Button>
    )
  }
}

export default MyButton