import * as React from 'react';
import { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { AuthContext } from '../context/auth-context'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};

var score
var email
const getDetails = () => {
  var Score = localStorage.getItem('score');
  var Email = localStorage.getItem('email')
  score = Score
  email = Email
}

export default function AppDrawer() {
  const auth = useContext(AuthContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
        {auth.isLoggedIn && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
              {getDetails()}
            <MenuIcon />
          </IconButton>
        )}
          <Typography variant="h6" noWrap component="div">
            Know Your Finances !
          </Typography>
          {auth.isLoggedIn && (
          <span style={{marginLeft: "70%", marginTop:"15px"}}>
            <h5>Score : {score}</h5>
          </span>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "#1976D2",
            color:"white"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Link to='/home' style={styles.link}>
            <List>
              <ListItem button key='Home'>
                <ListItemIcon><HomeIcon/>
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </List>
          </Link>
          <Link to='/learn' style={styles.link}>
          <List>
            <ListItem button key='Learn'>
              <ListItemIcon><CastForEducationIcon/>
              </ListItemIcon>
              <ListItemText primary='Learn' />
            </ListItem>
            </List>
          </Link>
          <Link to='/familiarize' style={styles.link}>
          <List>
            <ListItem button key='Familiarize'>
              <ListItemIcon><Diversity2Icon/>
              </ListItemIcon>
              <ListItemText primary='Familiarize' />
            </ListItem>
            </List>
          </Link>
          <Link to='/play' style={styles.link}>
          <List>
            <ListItem button key='Play'>
              <ListItemIcon><SmartToyIcon/>
              </ListItemIcon>
              <ListItemText primary='Play' />
            </ListItem>
            </List>
          </Link>
      </Drawer>
    </Box>
  );
}