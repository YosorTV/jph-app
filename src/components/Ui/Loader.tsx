import { FC } from 'react'
import { CircularProgress } from '@material-ui/core';

type propsValue = {
  loading:boolean
}

export const Loader:FC<propsValue> = ({ loading }) => {
  const loadingJSX = loading && <CircularProgress color="secondary" style={{ position:'absolute' }}/>
  return (
    <>
      { loadingJSX }
    </>
  )
}

