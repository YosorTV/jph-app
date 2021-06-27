import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { 
  Grid,
  Paper, 
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Typography,
} from '@material-ui/core';


import { getClients } from '../../store/actions';
import { clients } from '../../store/selectors/clients';

import { Section, Pagination } from '../Ui/styled';

import { Loader, ErrorNotification } from '../Ui';
import { DetailTable } from '../Ui/Table/DetailTable';


export const Clients:FC = () => {
  const dispatch = useDispatch();
  const { users, error, isLoading } = useSelector(clients)
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getClients(5, page))
  }, [dispatch, page])

  const DetailJSX = users?.map((user) => <DetailTable key={user.id}  {...user} /> )

  return (
    <>
    <Loader loading={ isLoading }/>
    <ErrorNotification error={ error } />
    <Section>
      <Typography variant="h3" component="h4">Client's</Typography>
        <Grid container alignItems="center" justify="center">
          <Grid item xl={6} lg={8} md={10} sm={10} xs={11}>
            <TableContainer component={Paper}>
              <Table aria-label="table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Detail</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Phone</TableCell>
                    <TableCell align="left">Todos</TableCell>
                    <TableCell align="left">Posts</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { DetailJSX }
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={12}>
                      <Pagination page={page} count={2} shape="rounded" onChange={ (event, page) => setPage(page) } />
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
    </Section>
    </>
  )
}
