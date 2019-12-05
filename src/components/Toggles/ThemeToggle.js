import React from 'react';
import { Checkbox } from 'semantic-ui-react'

const ThemeToggle=({SetTheme})=>{
   
    return(
        <Checkbox
         label="Light | Dark" 
         toggle 
         onChange={SetTheme}/>
        );
}

export default ThemeToggle;