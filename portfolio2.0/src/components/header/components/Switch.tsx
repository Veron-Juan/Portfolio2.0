'use client'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'


function ThemeHandler () {
 
  const { theme, setTheme, forcedTheme } = useTheme();
  const [actual, setActual] = useState("dark")


  
    
  
  


 

  
  
  const toggleTheme = () => {
      setActual("light")
      setTheme(actual)
     
    
    
  }

  return (
    <>
    <label className='switch' >
      <input
        type='checkbox'
        onClick={toggleTheme}
        // onClick={handleTheme}
        // defaultChecked={checkedTheme}
      />
      <span className='slider' />
    </label>
    
    </>
    
  )
}

export default ThemeHandler 