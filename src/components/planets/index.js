import React, { Fragment } from "react";
import Planet from "./planet";

/*const clickOnPlanet = (name) => {
    console.log(`Um clique no planeta: ${name}`)
}*/


async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data
}

/*componentDidMount(){
    getPlanets().then((data) => {
        this.setState((state) => {
            return {
                planets: data['planets']
            }
        })
    })
}*/

const Planets = () => {


    const removeLast = () => {
        let new_planets = [...state.planets];
        new_planets.pop();
        setState((state) => {
            return {planets: new_planets}
        })
    }

    const lastPlanetDuplicate = () => {
        const n = state.planets.length - 1
        let last_planet = state.planets[n]

        setState((state) => (
            {
                planets: [...state.planets, last_planet]
            }
        ))
    }
    
    render(){
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={removeLast}>Remove Last</button>
                <button onClick={lastPlanetDuplicate}>Duplicate Last</button>
                <hr/>
                {state.planets.map((planet, index) =>
                    <Planet
                        id={planet.id}
                        key={index}
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                        //clickOnPlanet={clickOnPlanet}
                        //title_with_underline={true}
                        //gray={true}
                    />
                )}
            </Fragment>
        )
    }

}

export default Planets