import React from 'react';
import {Container, Dropdown} from 'semantic-ui-react'
import Popup from 'react-popup';

import {GetAutoCompleteSearchText}from '../../apis/APIData';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
            results:[],
            cityNames:[]
        };
    }
 
    onChange=(e, { value })=> {
        e.preventDefault();
        var locationObj= this.state.cityNames.filter(e=>e.Key===value);
        this.props.CreateLocationObject(locationObj[0]);
    }
    handleInputChange = (e, { searchQuery }) => {  
        if (searchQuery !== "") {
        this.setState({
            term: searchQuery
        }, () => {
            if (this.state.term && this.state.term.length > 1) {
                if (this.state.term.length % 2 === 0) 
                this.getInfo()
            }})
        } else {
            this.setState({ results: [] })
        }
  }

    getInfo = async() => {
        var dataObj=await fetch(GetAutoCompleteSearchText(this.state.term))
        .then(res => res.json())
        .catch(error=>this.handleWithAPIError(error))
        .then(data=>{
        this.setState({
            cityNames: data,
            results: data.map(this.getAttributesFromData)
            });    
   })
   if (dataObj === undefined) return}
   
 
   getAttributesFromData(data){
       return{
            key: data.Key,
            text:data.LocalizedName+" , "+data.Country.LocalizedName,
            value: data.Key
        }
    }

    handleWithAPIError=(error)=>{
        this.props.GetAPIFailure();
        Popup.alert('Sorry, but the API request reached the 50 per day limit :(');
        }

    render(){
        return(
            <Container style={{paddingTop:"25px"}}>
                <form className="ui form"> 
                    <div className="field"> 
                    <Dropdown
                        placeholder='type a city'
                        fluid
                        search
                        selection
                        value={this.state.term}
                        onSearchChange={this.handleInputChange}
                        onChange={this.onChange}
                        options={this.state.results}
                    />                      
                    </div>
                </form>
            </Container>
        );
    }
}
export default SearchBar;