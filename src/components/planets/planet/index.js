import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/DescriptionLink";
import SatellitesForm from "./form/satellites";

async function getSatellites(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSatellites(props.id).then((data) => {
            return setSatellites(data['satellites'])
        })
    }, []);

    
    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }
    

    /*componentDidMount(){
        getSatellites(this.props.id).then((data) => {
            setPlanet(data['satellites'])
        })
    }*/

    
    //const names = ['a', 'b', 'c', 'd']
    //mapeando pelo js
    //const satellites = names.map((n) => {
    //      return <li>Satélite {n}</li>
    //  })
    

    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>
        
    
    return ( 
        // onClick={this.props.clickOnPlanet(this.props.name)} se chamar um parâmetro, o método vai achar que está chamando como se fosse uma função e só irá chegar a resposta após o refresh do navegador
        // para resolver isso, adicionamos uma função anônima no método
        // onClick={() => this.props.clickOnPlanet(this.props.name)}
        <Fragment>
            <div>
                {title}
                <DescriptionWithLink description={props.description} link={props.link}/>
                <GrayImg img_url={ props.img_url } gray={props.gray}/>
                
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
            </div>
        </Fragment>
    )
}

export default Planet