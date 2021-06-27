import { FC } from "react";
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { currentTheme } from './store/selectors';

import { ThemeProvider } from '@material-ui/core/styles';

import { ClientPostById, ClientTodosById, Layout, NotFound } from './components';
import { Posts, Contacts, Home } from './pages'
import { DARK_THEME, LIGHT_THEME } from "./components/Ui/styled";


const App:FC = () => {
  const MuiTheme = useSelector(currentTheme);
  return (
    <>
      <ThemeProvider theme={ MuiTheme === 'light' ? LIGHT_THEME : DARK_THEME }>
      <Routes>
      <Layout>
        <Route path="/" element={<Home />}/>
        <Route path="/clients" element={<Contacts />} />
          <Route path="/clients/:clientId/todos" element={<ClientTodosById />}/>
          <Route path="/clients/:clientId/posts" element={<ClientPostById />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="*" element={<NotFound/>} />
      </Layout>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
