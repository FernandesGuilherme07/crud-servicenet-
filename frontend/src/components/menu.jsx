import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../styles/menu.scss'
import ListAltIcon from '@material-ui/icons/ListAlt';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div id="menu" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <div id="alinha-div">
            <ListAltIcon id="img"/>
            <h1>CreateCurriculum</h1>
            </div>
            

       
                    
         
        </Toolbar>
      </AppBar>
    </div>
  );
}