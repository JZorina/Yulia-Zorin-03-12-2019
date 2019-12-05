import React from 'react';
import { Checkbox } from 'semantic-ui-react'

const TempatureToggle=({SetTempatureUnit})=>{
    return(
         <Checkbox
         label="F° | C°" 
         toggle 
         onChange={SetTempatureUnit}/>
        );
}

export default TempatureToggle;