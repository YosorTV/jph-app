/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react'
import { useDispatch } from 'react-redux';

import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Switch, Typography } from "@material-ui/core";

import { Drawer } from './Drawer';
import { Navlink, Nav, Switcher } from "../styled";
import { themeTypeAction } from '../../../store/actions';

const { setTheme } = themeTypeAction;

export const Navigation:FC = () => {
  const dispatch = useDispatch();
  const { breakpoints } = useTheme();
  const isMedium = useMediaQuery(breakpoints.down('md'));

  const onChangeTheme = (event:any):void => {
    const { checked } = event.target;
    checked ? dispatch(setTheme('light')) : dispatch(setTheme('dark'));
  }

  return (
    <>
      <Nav>
        { !isMedium ?
          <>
            <Navlink to="/" end> Home </Navlink>
            <Navlink to="/clients"> Clients </Navlink>
            <Navlink to="/posts"> Posts </Navlink>
          </>
          : <Drawer/>
        }
        <Switcher>
          <Typography component="span">
            Switch Theme
          </Typography>
          <Switch onChange={ onChangeTheme } />
        </Switcher>
      </Nav>
    </>
  )
}

