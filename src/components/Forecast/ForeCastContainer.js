import React from 'react';
import {Grid,Container,Card} from 'semantic-ui-react';
import ForecastCard from './ForecastCard';
const ForeCastContainer=({dailyForecast,TempatureUnit})=>{
    return(
        <Grid.Column>
            <Container>
                <Card.Group itemsPerRow={5}>
                    {dailyForecast.map((day)=>
                         <ForecastCard 
                         key={day.EpochDate} 
                         day={day}
                         TempatureUnit={TempatureUnit}/>)}
                </Card.Group>
            </Container>
        </Grid.Column>
    );
    
};

export default ForeCastContainer;