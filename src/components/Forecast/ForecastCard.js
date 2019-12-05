import React from 'react';
import {Card,Header,Image,List} from 'semantic-ui-react';
import {ConvertEchoTimeToDay,GetIconPath} from '../../Additionals/Helpers';

class ForecastCard extends React.Component{
   
    convertDegree=()=>{
        return Math.round( (5*(this.props.day.Temperature.Minimum.Value-32)/9));
    }
    render(){
        const {day,TempatureUnit}=this.props;
        return(
            <Card>
                <h3 style={{textAlign:"center",padding:'5px'}} >
                    {ConvertEchoTimeToDay(day.EpochDate)}
                </h3>
                <Card.Content>
                    <Header as="h3" icon textAlign="center">
                        <Image src={GetIconPath(day.Day.Icon)} />
                    </Header>
                    <Header.Content  style={{textAlign:"center"}}>
                        <List divided horizontal size="large" >
                            <List.Item >
                               <div style={{paddingBottom:"15px"}}>
                                    min
                               </div>
                               {TempatureUnit!==true ? day.Temperature.Minimum.Value + "° F"  :this.convertDegree() + "° C" }
                            </List.Item>

                            <List.Item >
                                <div style={{paddingBottom:"15px"}}>
                                    max
                                </div>
                                {TempatureUnit!==true ? day.Temperature.Minimum.Value + "° F"  :this.convertDegree() + "° C" }
                            </List.Item>
                        </List>
                    </Header.Content>
                </Card.Content>
            </Card>
           
        );
    }

}



export default ForecastCard;