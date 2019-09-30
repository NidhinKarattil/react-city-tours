import React, {Component} from 'react';
import './SingleTour.scss'

class singleTour extends Component {
    state={
        showInfo: false
    }

    inforHandler = () => {
        this.setState(
           { showInfo: !this.state.showInfo}
        )
    }
    render(){
        const {id, city, img, name, info} = this.props.tour;
        const removeItem = this.props.removeItem;
        console.log(city);
        return (
        <article className= 'tour'>
            <div className='img-container'>
                <img src= {img}></img>

                <span className='close-btn' onClick = {()=>{removeItem(id)}}> 
                <i className= 'fas fa-window-close' />  
                     </span>
            </div>
            <div className='tour-info'>
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5 onClick = {this.inforHandler} >
                    info
                </h5>
                <p> 
                    {this.state.showInfo && info}
                </p>
               
            </div>
        </article> )
    }
      
}

export default singleTour;

