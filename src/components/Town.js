import React, { Component } from "react"


class Town extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tempInDegree: "",
            showTemperatureInDegrees: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(){
        fetch( 
        "https://api.openweathermap.org/data/2.5/weather?lat=11&lon=79&appid=19166ad6e5e709f7f560c715c7cb9c6c&units=metric"
      ).then(response => {
        return response.json()
    })
    .then(response => {
        this.setState({
            tempInDegree: Math.floor(response.main.temp),
        })
    });  
    }
    
    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <img 
                alt={`Pondicherry`} 
                width={525} 
                src= "Pondicherry.jpg"                
                />

                    <h1>
                        I am from Pondicherry,India!
                    </h1>
                    <p>
                        Pondicherry , officially known as Puducherry (French: Pondichéry), is the capital and the most-populous city of the Union Territory of Puducherry in India. The city is in the Puducherry district on the southeast coast of India and is surrounded by the state of Tamil Nadu, with which it shares most of its culture and language 

                        <br></br>
                        <br></br>
                        
                        The climate of Pondicherry is classified by the Köppen climate classification as tropical wet and dry , similar to that of coastal Tamil Nadu. Summer lasts from April to early June, when maximum temperatures may reach 41 °C (106 °F). The average maximum temperature is 36 °C (97 °F). Minimum temperatures are in the order of 28–32 °C (82–90 °F).
                     </p>


                    {
                        this.state.tempInDegree < 10 ? 
                            <img 
                            alt={`cold weather`} 
                            width={125} 
                            src= "chill.png"
                            /> 
                        :
                            (this.state.tempInDegree >= 10 && this.state.tempInDegree < 20) ? 
                            <img 
                            alt={`mild weather`} 
                            width={125} 
                            src= "cloudy.png"
                            /> 
                        : 
                            <img 
                            alt={`sunny weather`} 
                            width={125} 
                            src= "sunny.png"
                            />
                    }

                    <h1>
                    {
                        this.state.showTemperatureInDegrees ? 
                        this.state.tempInDegree + " °C" 
                        : 
                        Math.floor((this.state.tempInDegree * 9/5) + 32) + " °F"
                    }
                    </h1>

                    <input 
                    type="radio" 
                    name="temperature" 
                        onClick = {() => this.setState(
                            {
                                showTemperatureInDegrees: true
                            })}
                            />
                    <label for="Degree">Celsius</label>
                    <br></br>
                    
                    {
                        this.state.showTemperatureInDegrees ? 
                        <input 
                        type="radio" 
                        name="temperature" 
                            onClick = {() => this.setState(
                                {
                                    showTemperatureInDegrees: false
                                })}
                                />
                        :
                        <input 
                        type="radio"  
                        name="temperature" 
                        checked="checked"
                            onClick = {() => this.setState(
                                {
                                    showTemperatureInDegrees: false
                                })}
                                />
                    }
                    <label for="Fahrenheit">Fahrenheit</label>  
    
                    <br></br>
                    
            </div>

)
}
}


export default Town;
