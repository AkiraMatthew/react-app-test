import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form/index"


async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data
}


const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets().then((data) => {
            setPlanets(data['planets'])
        })
    }, []) //caso o colchetes esteja vazio, significa que o useEffect não irá renderizar nenhum component, caso desejar rendererizar, deve se passar um parâmetro
    
    const addPlanet = (newPlanet) => {
        setPlanets((prevPlanets) => [
          ...prevPlanets,
          { id: prevPlanets.length + 1, ...newPlanet, },
        ]);
      };
      

    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    key={index}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                />
            )}
        </Fragment>
    )

}

export default Planets