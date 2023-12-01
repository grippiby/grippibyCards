import { Router } from '@/Router.tsx'
import { Provider } from 'react-redux'
import { store } from '@/services/store.ts'
import s from './App.module.scss'

export function App() {
  return (
    <div className={s.appContainer}>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}
