import { FC, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { sideBar } from '../../../store/selectors/index';
import { sideBarAction } from '../../../store/actions';

import { IconButton, Divider, List, ListItem, ListItemText, ListItemIcon, Drawer as DrawerUi } from '@material-ui/core'
import { MenuIcon, HomeIcon, RecentActorsSharpIcon, PostAddSharpIcon } from '../icons'

export const Drawer:FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOpened = useSelector(sideBar);

  const { setSideBarStatus } = sideBarAction;

  const handleDrawer = () => dispatch(setSideBarStatus(true));

  const sideBarList = [
    {
      text:"Home",
      icon: <HomeIcon />,
      onClick: () => navigate('/')
    },
    {
      text:"Clients",
      icon: <RecentActorsSharpIcon />,
      onClick: () => navigate('/clients')
    },
    {
      text:"Posts",
      icon: <PostAddSharpIcon />,
      onClick: () => navigate('/posts')
    },
  ]

  const listJSX = sideBarList?.map(({ text, icon, onClick }) => {
    return (
      <Fragment key={text}>
      <ListItem component="li" button onClick={ onClick }>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
      <Divider/>
      </Fragment>
    )
  })

  return (
    <>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawer}
      >
        <MenuIcon />
      </IconButton>
    <DrawerUi
      variant="persistent"
      anchor="left"
      open={isOpened}>
      <List>
        { listJSX }
      </List>
    </DrawerUi>
    </>
  )
}