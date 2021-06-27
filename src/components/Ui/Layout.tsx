import { FC } from "react";
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { sideBar } from '../../store/selectors/index';
import { sideBarAction } from '../../store/actions';

import { CssBaseline, Container, AppBar } from "@material-ui/core";
import { Navigation } from "./Navigation";
import { Main } from "./styled";

export const Layout:FC = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(sideBar);

  const { setSideBarStatus } = sideBarAction;

  const handleDrawer = () => isOpened && dispatch(setSideBarStatus(false));

  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="xl" onClick = { handleDrawer }>
        <AppBar position="relative" color="primary">
          <Navigation />
        </AppBar>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  )
}