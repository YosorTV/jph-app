import { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { DialogContent, DialogTitle, Dialog, Grid, TextField, DialogActions, Button, IconButton } from '@material-ui/core'
import { useForm, Controller, useFormState } from 'react-hook-form';
import { addPost } from '../../store/actions'
import { PostAddIcon } from '../Ui/icons';
import { Post } from '../../models'

type FormValues = {
  title: string;
  body: string;
};

export const AddPost:FC = () => {
  const { title, body } = new Post('', '', null, null);
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<FormValues>({
    mode:"onSubmit",
    defaultValues: { title, body },
  });
  
  const { isDirty } = useFormState({ control });

  const submitForm = (callback:Function) => handleSubmit((values) => {
    const id = Math.ceil(Math.random() * 10000);
    const userId = Math.ceil(Math.random() * 100);
    const data = new Post(values.title, values.body, id, userId)
    dispatch(addPost(data))
    reset();
    callback()
  });

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  return (
    <>
      <IconButton onClick = {handleOpen} style={{ marginLeft:"0.5rem", marginTop:"0.5rem" }}> 
        <PostAddIcon />
      </IconButton>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openDialog}>
        <form onSubmit = { submitForm(handleClose) }>
          <DialogTitle id="dialog-title">
            Add Post
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
              <Button type="submit" disabled={!isDirty}>
                Add Post
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
  )
}

