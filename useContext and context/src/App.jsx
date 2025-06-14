import { useState } from 'react'

import Footer from './Footer'
import Header from './Header'
import SiteContext from './context/SiteContext'
import Home from './Home'


function App() {

  const [theme,setTheme]=useState('light')

  const data={
    theme,
    setTheme
  }
  
 return(
    <SiteContext.Provider value={data}>
  <Home/>
    </SiteContext.Provider>
  )
}

export default App