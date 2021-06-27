import { FC } from "react"
import { Typography } from "@material-ui/core";
import { LightImg, Section } from "../components/Ui/styled";
import ReactLogo from '../assets/react.svg';

import { currentTheme } from '../store/selectors';
import { useSelector } from "react-redux";


export const Home:FC = () => {
  const MuiTheme = useSelector(currentTheme);
  const IMG = MuiTheme === 'light' ? <LightImg src={ReactLogo} alt="Logo" /> : <img src={ReactLogo} alt="Logo" />
  return (
    <Section>
      <Typography variant="h2">Jsonplaceholder</Typography>
      { IMG }
    </Section>
  )
}

