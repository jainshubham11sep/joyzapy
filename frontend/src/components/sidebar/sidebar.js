"use client";
import React from 'react'
// import { useDrawerContext } from '@/context/drawerContext'
import CustomDrawer from './Drawer';

const sidebar =  ({gameCategories}) => {

  // console.log(gameCategories,"gameCategoriesgameCategories")

  // const { drawerOpen, setDrawerOpen } = useDrawerContext();
  // console.log(drawerOpen, "drawerOpen")
  return (
    <>
      <CustomDrawer gameCategories={gameCategories} />

    </>
  )
}

export default sidebar
