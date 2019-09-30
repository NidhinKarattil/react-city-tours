import React, {Component} from 'react';
import './Tourlist.scss';
import SingleTour from '../Tour/SingleTour';
import {tourData} from '../tourData';

class Tourlist extends Component{
    state = {
        tours: tourData
    }

    removeTour= (id) =>{
        const {tours} = this.state;
        const newTuors = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: newTuors
        })

    }
    render(){
        const {tours} = this.state;
       
        return (
            <section className='tourlist'>
                {tours.map(tour => {
                   return <SingleTour key= {tour.id} tour= {tour}
                   removeItem= {this.removeTour}/>
                })}
              
            </section>
        )
           }
}


export default Tourlist;