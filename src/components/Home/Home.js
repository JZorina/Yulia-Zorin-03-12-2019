import React from 'react';
import {Container} from 'semantic-ui-react';
import SearchBar from '../Layout/SearchBar';
import WeatherContainer from '../Weather/WeatherContainer';


class Home extends React.Component{
    
    renderContent=()=>{
        return(
            <div>
                <SearchBar 
                CreateLocationObject={this.props.CreateLocationObject}
                GetAPIFailure={this.props.GetAPIFailure}/>
                <WeatherContainer />
            </div>
        );
    }

    render(){
        return(
            <Container>
                 {this.renderContent()}      
            </Container>
                    
        );
    }  
};


export default Home;