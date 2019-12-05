import React from 'react';
import {Header,Grid,Image} from 'semantic-ui-react';
import {GetIconPath} from '../../Additionals/Helpers';
import FavoriteSymbol from '../Favorites/FavoriteSymbol';

const WeatherMetaData=({TempatureUnit,WeatherIcon,cityName,contryName,WeatherText,isFavorite,SetIfFavorite,Tempature})=>{
    return(
        <div>
            <Grid>
                <Grid.Row verticalAlign="middle" columns={3}>
                    <Grid.Column textAlign="left">
                        <Header as='h1'>
                            <Image src={GetIconPath((WeatherIcon))} />
                            <Header.Content>
                                {cityName}
                                <Header.Subheader>{contryName}</Header.Subheader>
                                <Header.Subheader>
                                    {TempatureUnit===true ? Tempature.Metric.Value + "° C":Tempature.Imperial.Value + "° F" }
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column  >
                        <div style={WeatherTextStyle}>
                            {WeatherText}
                        </div>
                    </Grid.Column>
                    <Grid.Column  >
                       <FavoriteSymbol isFavorite={isFavorite} SetIfFavorite={SetIfFavorite}/>
                    </Grid.Column>
                </Grid.Row> 
            </Grid>
        </div>
    );
};

const WeatherTextStyle={
   textAlign:'center',
    fontSize:'2.5rem',
    fontWeight:"bold",
}

export default WeatherMetaData;