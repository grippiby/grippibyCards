import Snackbar from '@mui/material/Snackbar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/services/store.ts'
import { SyntheticEvent } from 'react'
import { setAuthErrorMessage, setAuthSuccessMessage } from '@/services/auth-service/auth-slice.ts'
import Alert from '@mui/material/Alert'
import s from './AlertBar.module.scss'

type Props = {
  alertType: 'error' | 'success' | 'warning'
  message: string | null
}

export function AlertBar({ alertType, message }: Props) {
  const dispatch = useDispatch<AppDispatch>()

  const handleClose = (_event?: SyntheticEvent | Event) => {
    dispatch(setAuthErrorMessage(null))
    dispatch(setAuthSuccessMessage(null))
  }

  return (
    <Snackbar open={!!message} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        className={s.alert}
        variant={'outlined'}
        onClose={handleClose}
        severity={alertType}
        data-severity={alertType}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
