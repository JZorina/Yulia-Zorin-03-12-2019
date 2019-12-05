import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {removeFromFavorites} from '../../actions/removeFromFavorites';
import { Card ,Image,Button} from 'semantic-ui-react';
import {GetIconPath,ConvertEchoDateToTimeAndDay} from '../../Additionals/Helpers';

class FavoriteCard extends React.Component{
    

    GoToMainScreen=()=>{   
        var locationObj={
            Key:this.props.city.key,
            LocalizedName:this.props.city.cityName,
            Country:{
                LocalizedName:this.props.city.contryName
            },
            isFavorite:true
        }
        this.props.CreateLocationObject(locationObj);
        this.props.goBack('/');
    }

    render(){
        const {city,TempatureUnit}=this.props;
        return(
            <Card style={cardStyle}>
            <Card.Content>
                <Card.Description style={cityNameStyle}>
                    <strong>{city.cityName}</strong>
                </Card.Description>
                <Card.Meta style={DaterStyle}>{ConvertEchoDateToTimeAndDay(city.Date)}</Card.Meta>
                <Card.Header style={TempatureStyle}>{TempatureUnit===true ? city.Tempature.Metric.Value + "° C":city.Tempature.Imperial.Value + "° F" }</Card.Header>
                <Image size="small" style={ImgStyle}  src={GetIconPath((city.WeatherIcon))} />
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button 
                    basic color='green'
                    onClick={this.GoToMainScreen}>
                        Go To
                    </Button>
                    <Button 
                    basic color='red' 
                    onClick={()=>this.props.removeFromFavorites(city.key)}>
                        Remove
                    </Button>
                </div>
            </Card.Content>
            </Card>
        );
    }
}
const cardStyle={
    width: "240px",
    height: "320px",
    padding:"20px",
    borderStyle:"solid",
    borderColor:"#0b0c40"
}
const cityNameStyle={
    padding:"5px",
    textAlign:"center",
    fontSize:"25px"
}
const DaterStyle={
    padding:"5px",
    textAlign:"center",
    fontSize:"1em"
}
const TempatureStyle={
    fontSize:"2.3em",
    padding:"5px",
    textAlign:"center"
}
const ImgStyle={
    padding:"3px",
    position: "absolute",
    left: "40%",
    marginLeft:"-50px"
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        removeFromFavorites:removeFromFavorites
    },dispatch);
}

export default connect(null,matchDispatchToProps)(FavoriteCard);