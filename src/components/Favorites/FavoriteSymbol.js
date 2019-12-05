import React from 'react';
import {Icon, Popup} from 'semantic-ui-react';

class FavoriteSymbol extends React.Component{

    handleOnClick=()=>{
        this.props.SetIfFavorite();
    }
    render(){
        const{isFavorite}=this.props;
        return(
            <div>
                {isFavorite &&
                 <Popup
                  trigger={
                <Icon name ="star" size='big' color="yellow"
                onClick={this.handleOnClick}
                />
                  }
                  content='Remove from favorites'
                  position='right center'
                />
                }
                {
                   !isFavorite &&
                   <Popup
                        trigger={
                        <Icon name ="star outline" size='big' color="yellow"
                            onClick={this.handleOnClick}
                        />
                            }
                            content='Add to favorites'
                            position='right center'
                    />
                }
            </div>

        );
    }
}

export default FavoriteSymbol;