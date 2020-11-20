import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            city:"",
            country:"",
            findcity:false,
            day:null,
            days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        }
    }
    search=()=>{
        const d = new Date()
        this.setState({day:d.getDay()})
       // go to getWeather
       this.props.getWeather(this.state.city,this.state.country);
       this.setState({findcity:true})
    } 
    render() {
        return (
            <div>
                <input type="text" placeholder="enter city" onChange={(e)=>this.setState({city:e.target.value})}/>
                <input type="text" placeholder="enter country" onChange={(e)=>this.setState({country:e.target.value})}/>
                <button onClick={()=>this.search()}>search</button>
                <button onClick={()=>this.props.addToFevorite()}>add to fevorite</button>

                {
                   
                   this.props.findcity || this.state.findcity?
                   // show city result search
                   <div>
                      {
                          this.props.error?
                          <div>
                              {/* error */}
                              <p>no found city</p>
                          </div>
                          :
                          <div>
                              {/* show weather location ditails */}
                              <p>{this.props.WeatherDitails.city} {this.props.WeatherDitails.country}</p>
                              <p>{this.state.days[this.props.day]}</p>
                              <p>maximum temperature {this.props.WeatherDitails.weather[this.props.day].max_temp}</p>
                              <p>minimum temperature{this.props.WeatherDitails.weather[this.props.day].min_temp}</p>
                              
                              {
                                  this.props.WeatherDitails.weather.map((item,key)=>{
                                      return (<div key={key+1}>
                                         <p>{this.state.days[key]}</p>
                                         <span> {item.max_temp}</span><br/>
                                         <span>{item.min_temp}</span> 
                                      </div>)
                                  })
                              }
                          </div>
                      }
                   </div>
                   :null
                }
            </div>
        )       
     }
    
}
