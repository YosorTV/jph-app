import { useState } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateClient } from '../../../store/actions'

import { 
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid
} from '@material-ui/core';

import { Link } from '../styled';
import { EditIcon, KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '../icons';
import { Button } from '@material-ui/core';
import { User } from './types';


export const DetailTable = (user:User) => {
  const dispatch = useDispatch();

  const [openDetail, setOpenDetail] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { control, handleSubmit } = useForm({ mode:"onSubmit" });
  const { isDirty } = useFormState({ control });

  const handleClickOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);
  
  const submitForm = (callback:Function) => handleSubmit((values) => {
    const data:User = {
      id: user.id,
      name: values?.name,
      email: values?.email,
      address: {
        street: values?.street,
        suite: values?.suite,
        city: values?.city,
      },
      phone:  values?.phone,
      website: values?.website,
      company: {
        name: values?.company,
      }
    }
      dispatch(updateClient(data));
    callback();
    });

  return (
    <>
      <TableRow>
        <TableCell scope="row" component="th">
          <IconButton size="small" onClick={() => setOpenDetail(!openDetail)}>
            {openDetail ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{user?.name}</TableCell>
        <TableCell align="left">{user?.email}</TableCell>
        <TableCell align="left">{user?.phone}</TableCell>
        <TableCell align="left">
          <Link to={`${user.id}/todos`}>Todos</Link>
        </TableCell>
        <TableCell align="left">
          <Link to={`${user.id}/posts`}>Posts</Link>
        </TableCell>
        
        <TableCell align="right">
          <IconButton onClick = { handleClickOpen }>
            <EditIcon />
          </IconButton>
        </TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell style={{ padding:0 }} colSpan={12}>
          <Collapse in={openDetail} timeout="auto" unmountOnExit>
            <Table aria-label="detail info" size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">Street</TableCell>
                  <TableCell align="left">Suite</TableCell>
                  <TableCell align="left">Company</TableCell>
                  <TableCell align="left">Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left">{user?.address?.city}</TableCell>
                  <TableCell align="left">{user?.address?.street}</TableCell>
                  <TableCell align="left">{user?.address?.suite}</TableCell>
                  <TableCell align="left">{user?.company?.name}</TableCell>
                  <TableCell align="left">{user?.website}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>


      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openDialog}>
        <form onSubmit = { submitForm(handleClose) }>
          <DialogTitle id="customized-dialog-title">
            Update client information
          </DialogTitle>
          <DialogContent dividers>
          <Grid container alignItems="center" justify="center" spacing={3}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue={user?.name}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Name"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Name required' }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
              <Controller
                name="email"
                control={control}
                defaultValue={user?.email}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Email"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Email required' }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="phone"
                control={control}
                defaultValue={user?.phone}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Phone"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Phone required' }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="city"
                control={control}
                defaultValue={user?.address?.city}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="City"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'City required' }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="street"
                control={control}
                defaultValue={user?.address?.street}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Street"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Street required' }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="suite"
                control={control}
                defaultValue={user?.address?.suite}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Suite"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Suite required' }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="company"
                control={control}
                defaultValue={user?.company?.name}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Company"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Company required' }}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Controller
                name="website"
                control={control}
                defaultValue={user?.website}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Company"
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Company required' }}
              />
            </Grid>
          </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="submit" disabled={!isDirty}>
              Save changes
            </Button>
          </DialogActions>
      </form>
      </Dialog>
    </>
  );
}