"use client";
import React from 'react'
import {useDrawerContext} from '@/context/drawerContext'
import CustomDrawer from './Drawer';



const sidebar = () => {
  const { drawerOpen, setDrawerOpen } = useDrawerContext();
  console.log(drawerOpen,"drawerOpen")
  return (
    <>
    <CustomDrawer />
    
    </>
  )
}

export default sidebar
