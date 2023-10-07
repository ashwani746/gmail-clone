import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { useState } from 'react'


const Main = () => {
   const [openDrawer, setOpenDrawer] = useState(true);

   const toggleDrawer = () => {
      setOpenDrawer(prevState => !prevState);
   }

  return (
    <div>
    <Header toggleDrawer={toggleDrawer}></Header>
    <SideBar openDrawer={openDrawer}></SideBar>
    <div>all mail content</div>
    </div>
  )
}

export default Main