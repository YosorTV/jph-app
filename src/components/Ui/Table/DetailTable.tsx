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
import { Client } from '../../../models';


export const DetailTable = (user:any) => {
  const dispatch = useDispatch();

  const client = new Client(
    user?.name,
    user?.email,
    user?.phone,
    user?.website,
    user?.address?.street,
    user?.address?.city,
    user?.address?.suite,
    user?.company?.name,
    user.id
  );

  const [openDetail, setOpenDetail] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { control, handleSubmit } = useForm({ mode:"onSubmit" });
  const { isDirty } = useFormState({ control });

  const handleClickOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);
  
  const submitForm = (cb:any) => handleSubmit((values:any) => {
    console.log('values: ', values);
    const data = new Client(
      values?.name,
      values?.email,
      values?.phone,
      values?.website,
      values?.street,
      values?.city,
      values?.suite,
      values?.company,
      user.id)
      dispatch(updateClient({...data}))
    cb()
    });

  return (
    <>
      <TableRow>
        <TableCell scope="row" component="th">
          <IconButton size="small" onClick={() => setOpenDetail(!openDetail)}>
            {openDetail ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{client?.name}</TableCell>
        <TableCell align="left">{client?.email}</TableCell>
        <TableCell align="left">{client?.phone}</TableCell>
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
                  <TableCell align="left">{client?.city}</TableCell>
                  <TableCell align="left">{client?.street}</TableCell>
                  <TableCell align="left">{client?.suite}</TableCell>
                  <TableCell align="left">{client?.name}</TableCell>
                  <TableCell align="left">{client?.website}</TableCell>
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
                defaultValue={client?.name}
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
                defaultValue={client?.email}
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
                defaultValue={client?.phone}
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
                defaultValue={client?.city}
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
                defaultValue={client?.street}
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
                defaultValue={client?.suite}
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
                defaultValue={client?.company}
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
                defaultValue={client?.website}
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