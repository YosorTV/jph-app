import { FC } from 'react'
import { Snackbar } from '@material-ui/core';

type propsValue = {
  error:string | null
}

export const ErrorNotification:FC<propsValue> = ({ error }) => {

  const errorJSX = error && 
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={!!error} 
    message={error}
  />

  return (
    <>
      { errorJSX }
    </>
  )
}

