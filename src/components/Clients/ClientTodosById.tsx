import { FC, useEffect, useState, Fragment} from 'react'

import { 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Button,
  Checkbox,
  Divider,
  Grid,
  Paper } from '@material-ui/core';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clientTodos, clients } from '../../store/selectors/clients';
import { getClientTodos } from '../../store/actions/clients'
import { ErrorNotification, Loader } from '../Ui';
import { Pagination, Section } from '../Ui/styled';


export const ClientTodosById:FC = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(clients)
  const { todos, isLoading, error } = useSelector(clientTodos);
  const client = users.find(({ id }) => id === parseFloat(clientId));
  const [page, setPage] = useState(1);
  const [limit, ] = useState(10);

  useEffect(() => {
    if(client){
      dispatch(getClientTodos(clientId, limit, page))
    } else {
      navigate('/clients', { replace: true });
    }
  },[dispatch, navigate, client, clientId, page, limit])
  
  const ListJSX = todos?.map((todo) => {
    const labelId = `checkbox-list-label-${todo.completed}`;
      return (
        <Fragment key={todo.id}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={todo.id}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId}>{todo.title}</ListItemText>
          </ListItem>
          <Divider/>
        </Fragment>
      )
    })

  return (
    <Section>
      <Loader loading={ isLoading }/>
      <ErrorNotification error={ error } />
      <Typography variant="h4" component="h4">All Todos by: { client?.name } </Typography>
      <Grid container alignItems="center" justify="center">
        <Grid item xl={6} lg={8} md={10} sm={10} xs={11}>
          <Paper style={{marginBottom:"2rem"}}>
          <List>
            { ListJSX }
          </List>
          </Paper>
          <Pagination page={page} count={2} shape="rounded" onChange={ (event, page) => setPage(page) } />
          <Button variant="contained" size="small" onClick={() => navigate('/clients')}>&larr; Return</Button>
        </Grid>
      </Grid>
    </Section>
  )
}

