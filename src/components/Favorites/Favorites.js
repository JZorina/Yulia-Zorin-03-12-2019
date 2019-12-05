import React from 'react';
import {connect} from 'react-redux';
import {Container,Card,Grid} from 'semantic-ui-react';
import Spinner from '../Layout/Spinner';
import FavoriteCard from './FavoriteCard';
class Favorites extends React.Component{
    
    renderErrorMsg=()=>{
        return(
            <div>
                Failed getting data 
            </div>
        );
    }

    renderNoCards=()=>{
        return(
            <Container>
                <div style={NoLocationsStyle}>
                   No favorite locations
                </div>
            </Container>

        );
    }

    renderCards=()=>{
        return(
            <Container>
                <Grid centered style={{paddingTop:"25px"}}>
                    <Grid.Column>
                        <Container>
                            <Card.Group>
                                {this.props.favoritesCities.map((city)=>
                                <FavoriteCard 
                                key={city.key} 
                                city={city} 
                                CreateLocationObject={this.props.CreateLocationObject}
                                goBack={this.props.history.push}
                                TempatureUnit={this.props.TempatureUnit}
                                />)}
                            </Card.Group>
                        </Container>
                    </Grid.Column>
                </Grid>
        </Container>
           
        );
    }

    renderContent=()=>{
        return this.props.favoritesCities.length>0? this.renderCards(): this.renderNoCards()
        
   }
    render(){
        const{APIstate}=this.props
        return(
            <div>
               <div className="ui row">
                    <div className="ui column">
                        {APIstate==='Loading'? <Spinner msg="waiting.."/>
                        :
                        APIstate==='SUCCESS'?this.renderContent():this.renderErrorMsg()}
                    </div>
                </div>
            </div>
        );
    }
    
};

const NoLocationsStyle={
    fontWeight:"solid", 
    fontSize:"30px",
    padding:"25px"
}


function mapsStateToProps(state){
    return{
        favoritesCities:state.Favorites,
        APIstate:state.APIstate,
        TempatureUnit:state.TempatureUnit,
    }
 }

 export default connect(mapsStateToProps,null)(Favorites);
