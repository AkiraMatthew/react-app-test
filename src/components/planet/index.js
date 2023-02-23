import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../shared/DescriptionLink";
import SatellitesForm from "./form/satellites";

import { useParams, useNavigate } from "react-router-dom";
import NotFoundScreen from "../screens/notFound";

async function getPlanet(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data
};

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState(false);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getPlanet(id).then((data) => {
            setSatellites(data['satellites']);
            setPlanet(data['data'])
        }).catch((error) => {
            setError(true)
        })
        
    }, [id]);

    const goToPlanets = () => {
        navigate('/')
    }
    
    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }
    

    let title;
    if(planet.title_with_underline)
        title = <h4><u>{planet.name}</u></h4>
    else
        title = <h4>{planet.name}</h4>

    if(error)
        return <NotFoundScreen/>
    
    return ( 
        // onClick={this.props.clickOnPlanet(this.props.name)} se chamar um parâmetro, o método vai achar que está chamando como se fosse uma função e só irá chegar a resposta após o refresh do navegador
        // para resolver isso, adicionamos uma função anônima no método
        // onClick={() => this.props.clickOnPlanet(this.props.name)}
        <Fragment>
            <div>
                {title}
                <DescriptionWithLink description={planet.description} link={planet.link}/>
                <GrayImg img_url={ planet.img_url } gray={planet.gray}/>
                
                <h4>Satélites</h4>
                <hr/>
                <SatellitesForm addSatellite={addSatellite}/>
                <hr/>
                <ul>
                    {satellites.map((satellite, index) => {
                        return <li key={index}>{satellite.name}</li>
                    })}
                </ul>
                <hr/>
                <button type="button" onClick={goToPlanets}>Home</button>
            </div>
        </Fragment>
    )
}

export default Planet