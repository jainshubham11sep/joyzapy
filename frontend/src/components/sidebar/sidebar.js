"use client";
import React from 'react'
import VerticalComponent from './VerticalComponent'
import {useDrawerContext} from '@/context/drawerContext'
import Drawer from "./Drawer"
import CustomDrawer from './Drawer';



const sidebar = () => {
  const { drawerOpen, setDrawerOpen } = useDrawerContext();
  console.log(drawerOpen,"drawerOpen")
  return (
    <>
    {
   
      drawerOpen ? <CustomDrawer/>:<VerticalComponent />
    }
    
    </>
  )
}

export default sidebar
