import React, { Component } from 'react'

export default class Fevorite extends Component {  
    render() {
        return (
            <div>
                {
                    console.log(this.props.day)
                }
               {
                   
                   this.props.fevoriteList.map((item,i)=>{
                       return (<div>
                           <hr/>
                           <p>{item.city}</p>
                           <p>{item.weather[this.props.day].max_temp}</p>
                           <p>{item.weather[this.props.day].min_temp}</p>
                       </div>)
                   })
               }
            </div>
        )
    }
}
