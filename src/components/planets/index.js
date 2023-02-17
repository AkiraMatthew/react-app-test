import React, { Fragment, useState } from "react";
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
    const [planets, setPlanets] = useState([
        {
            "id": "Mercury",
            "name": "Mercúrio",
            "description": "Finge que tem alguma coisa aqui",
            "img_url": "https://veja.abril.com.br/wp-content/uploads/2016/05/alx_vista_de_mercurio_original5.jpeg?quality=70&strip=info&w=1280&h=720&crop=1",
            "link": "https://google.com"
        }
    ]);

    const removeLast = () => {
        let new_planets = [...planets];
        new_planets.pop();
        setPlanets(new_planets);
    };

    const lastPlanetDuplicate = () => {
        const n = (planets.length - 1);
        let last_planet = planets[n];

        setPlanets([...planets, last_planet]);
    };
    
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={lastPlanetDuplicate}>Duplicate Last</button>
            <hr/>
            {planets.map((planet, index) =>
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

export default Planets