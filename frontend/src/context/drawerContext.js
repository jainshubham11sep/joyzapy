"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const DrawerContext = createContext();


const DrawerContextComponent = (props) => {
    // const { user } = useSelector((state) => ({ ...state.user }));
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    return (
      <DrawerContext.Provider
        value={{
            drawerOpen,
             setDrawerOpen
            
        }}
        {...props}
      />
    );
  };
  export default DrawerContextComponent;


    export const useDrawerContext = () => {
      const context = useContext(DrawerContext);
     
      return context;
    };
  