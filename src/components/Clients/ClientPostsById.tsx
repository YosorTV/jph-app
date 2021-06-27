
import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography, CardContent, Grid } from '@material-ui/core';

import { getClientPosts, } from '../../store/actions';
import { clientPosts, clients } from '../../store/selectors/clients';
import { Loader, ErrorNotification } from '../Ui';
import { Wrapper, Post } from '../Ui/styled';

export const ClientPostById:FC = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(clients)
  const { posts, isLoading, error } = useSelector(clientPosts);
  const client = users.find(({ id }) => id === parseFloat(clientId));
  
  useEffect(() => {
    if (client) {
      dispatch(getClientPosts(clientId))
    } else {
      navigate('/clients', { replace: true });
    }
  }, [dispatch, navigate, client, clientId])
    
  const PostJSX = posts.map(({ id, title, body }) => {
    return (
    <Grid item xl={3} lg={4} md={6} sm={12} xs={12} key={id}>
      <Post>
        <CardContent>
          <Typography variant="h5" component="h5">
            Title: { title }
          </Typography>
          <Typography paragraph>
            Description: { body }
          </Typography>
        </CardContent>
        </Post>
      </Grid>
      )
    })

  return (
    <>
    <Loader loading={ isLoading }/>
    <ErrorNotification error={ error } />
    <Wrapper>
      <Typography variant="h4" component="h4">All posts from: { client?.name } </Typography>
      <Button variant="contained" size="small" onClick={() => navigate('/clients')}>&larr; Return</Button>
      <Grid container  alignItems="center" justify="flex-start">
        { PostJSX }
      </Grid>
      </Wrapper>
    </>
  )
}

