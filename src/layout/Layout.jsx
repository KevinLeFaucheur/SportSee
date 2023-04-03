import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Side } from './Side'

export const Layout = () => {
  return (
    <>
      <Header />
      <Side />
      <Outlet />
    </>
  )
}
