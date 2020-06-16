import React from 'react'

export default function globalview(props) {
    const { TotalDeaths, TotalConfirmed, TotalRecovered } = props.Data; 
    return (
        <div className="user-weather">

            <div className="row">
                <div className="col-md-4 weather-info">
                    <p><b>Total Confirmed Cases</b></p>
                    <h2>{TotalConfirmed}</h2>
                </div>

                <div className="col-md-4 weather-info">
                    <p><b>Total Deaths</b></p>
                    <h2>{TotalDeaths}</h2>
                </div>

                <div className="col-md-4 weather-info">
                    <p><b>Total Recovered Cases</b></p>
                    <h2>{TotalRecovered}</h2>
                </div>

            </div>
        </div>

    )
}
