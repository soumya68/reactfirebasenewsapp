import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { fire } from '../config/fire'
export class Navbar extends React.Component {
    logout = () => {
        fire.auth().signOut();
    }
    render() {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="#" className="brand-logo">QNEWS</a>
                <ul className="right">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <NavLink to="/About">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login">LOG IN</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
}
export default Navbar
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// const drawerWidth = 240;
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3),
//   },
// }));
// export default function PermanentDrawerLeft() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//         MY APP
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <div className={classes.toolbar} />
//         <Divider />
//         <List>
//           {['HOME','About','Contact'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <NavLink to={"/"+text}><ListItemText primary={text} /></NavLink>
//             </ListItem>
//           ))}
//         </List>
//         </Drawer>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//        </main>
//     </div>
//   );
// }
