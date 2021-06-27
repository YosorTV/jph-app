/* eslint-disable react-hooks/exhaustive-deps */
import { FC, Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller, useFormState } from 'react-hook-form';
import { 
  CardContent,
  Grid,
  Typography,
  CardActions,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core'

import { AddPost } from './AddPost'
import { editPost } from '../../store/actions'

import { posts as postsSelector } from '../../store/selectors'
import { getPosts, deletePost, selectedPostAction} from '../../store/actions'
import { Pagination, Post, Wrapper } from '../Ui/styled'
import { ErrorNotification, Loader } from '../Ui'
import { DeleteIcon, EditIcon } from '../Ui/icons'
import { Post as PostModel } from '../../models'

const { setPost } = selectedPostAction;

type FormValues = {
  title: string;
  body: string;
};

export const Posts:FC = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error, selectedPost } = useSelector(postsSelector);
  const { title, body } = new PostModel(selectedPost?.title, selectedPost?.body, selectedPost?.id, selectedPost?.userId);
  const { control, handleSubmit, reset } = useForm<FormValues>({ mode:"onSubmit" });
  const { isDirty } = useFormState({control});

  const [openDialog, setOpenDialog] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts(page))
  },[dispatch, page]) 

  useEffect(() => {
    reset({title, body})
  },[reset, title, body])

const submitForm = (cb:any) => handleSubmit((values:any) => {
  const EditedPost = new PostModel(values.title, values.body, selectedPost?.id, selectedPost?.userId);
  dispatch(editPost(EditedPost))
  cb()
});

  const handleClickOpen = (data:Object) => {
    dispatch(setPost(data))
    setOpenDialog(true)
  };
  
  const handleClose = () => {
    setOpenDialog(false);
  }

  const deletePostHadler = (id:string) => dispatch(deletePost(id));

  const PostJSX = posts.map((post) => {
    return (
    <Fragment key={post?.id}>
    <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
      <Post>
        <CardContent>
          <Typography variant="h5" component="h5">
            Title: { post?.title }
          </Typography>
          <Typography paragraph>
            Description: { post?.body }
          </Typography>
        </CardContent>
        <Divider />
          <CardActions>
            <IconButton onClick={ () => handleClickOpen({...post}) }>
              <EditIcon />
            </IconButton>
            <IconButton color="secondary" onClick={ () => deletePostHadler(post?.id) }>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Post>
      </Grid>
      </Fragment>
      )
    })

    const EditPostJSX = (<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openDialog}>
        <form onSubmit = { submitForm(handleClose) }>
          <DialogTitle id="dialog-title">
            Edit Post
          </DialogTitle>
          <DialogContent dividers>
          <Grid container alignItems="center" justify="center" spacing={3}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Controller
                name="title"
                control={control}
                defaultValue={title}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Title"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Title required' }}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
            <Controller
                name="body"
                control={control}
                defaultValue={body}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Description"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Description required' }}
              />
            </Grid>
          </Grid>
          </DialogContent>
          <DialogActions>
            <Button type = "submit" disabled={!isDirty}>
              Save changes
            </Button>
          </DialogActions>
      </form>
    </Dialog>)
  return (
    <>
    <Loader loading={ isLoading }/>
    <ErrorNotification error={ error } />
    <AddPost />
    <Wrapper>
      <Typography variant="h4" component="h4">All Posts </Typography>
      <Grid container  alignItems="center" justify="flex-start">
        { PostJSX }
        { EditPostJSX }
      </Grid>
      <Pagination page={page} count={10} shape="rounded" onChange={ (event, page) => setPage(page) } />
      </Wrapper>
    </>
  )
}
