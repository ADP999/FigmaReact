import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import JobPath from '../components/JobPath'
import JobPreview from '../components/JobPreview'
import Skills from '../components/Skills'
import Delete from '../components/Delete'

const JobPage = () => {
  return (
    <>
      <NavBar />
      <JobPath/>
      <JobPreview/>
      
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default JobPage