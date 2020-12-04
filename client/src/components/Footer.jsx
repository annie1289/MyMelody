import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css'

export default function Footer(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const { currentUser} = props;

  return (
    <div className="footer">
    
          
         <ButtonGroup className = "buttons" size="large" color="primary" aria-label="large outlined primary button group">
        <Link to ='/home'><Button className = "homeb">Home</Button> </Link>
        <Link to = '/artists'><Button className = "favb">My Favorites</Button> </Link>
        <Link to='/charts'><Button className = "chartb">Charts</Button></Link>
            </ButtonGroup>
        
         
   
    </div>

  
  )
}



