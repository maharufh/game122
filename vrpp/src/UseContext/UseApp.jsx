import React,{useState} from 'react'
import  "./UseAppCss";

 import UseParent from './UseParent';
 import ThemeContext from './ThemeContext';
 import UseNav from './UseNav';


export default function UseApp() {
    const [mode,setMode] = useState(false);

  return (
    <div> 
        <ThemeContext.Provider value={{mode,setMode}}>
            <UseNav/>
            <UseParent/>
        </ThemeContext.Provider>
    </div>
  )
}
