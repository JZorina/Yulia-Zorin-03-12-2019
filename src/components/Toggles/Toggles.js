import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Grid } from 'semantic-ui-react';
import TempatureToggle from './TempatureToggle';
import ThemeToggle from './ThemeToggle';
import {SetTempatureUnit}from "../../actions/SetTempatureUnit";
import {SetTheme}from "../../actions/SetTheme";

class Toggles extends React.Component{
 
    render(){
        return(
           <Container style={{padding:"40px"}}>
               <Grid>
                   <Grid.Row columns={2}>
                     <Grid.Column >
                        <TempatureToggle SetTempatureUnit={this.props.SetTempatureUnit}/>
                    </Grid.Column>
                    <Grid.Column >
                        <ThemeToggle SetTheme={this.props.SetTheme}/>
                    </Grid.Column>
                   </Grid.Row>
               </Grid>
           </Container>
            );
        }
    }
    function matchDispatchToProps(dispatch){
        return bindActionCreators({
            SetTempatureUnit:SetTempatureUnit,
            SetTheme:SetTheme
        },dispatch);
    }
    

export default connect(null,matchDispatchToProps)(Toggles);