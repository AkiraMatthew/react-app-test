import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/DescriptionLink";

async function getSatellites(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data
}

class Planet extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            satellites: [],
        }
    }

    componentDidMount(){
        getSatellites(this.props.id).then((data) => {
            this.setState((state) => {
                return {
                    satellites: data['satellites']
                }
            })
        })
    }


    render(){
        //const names = ['a', 'b', 'c', 'd']
    //mapeando pelo js
    //const satellites = names.map((n) => {
    //      return <li>Satélite {n}</li>
    //  })

    let title;
    if(this.props.title_with_underline)
        title = <h4><u>{this.props.name}</u></h4>
    else
        title = <h4>{this.props.name}</h4>
    
    return ( 
        // onClick={this.props.clickOnPlanet(this.props.name)} se chamar um parâmetro, o método vai achar que está chamando como se fosse uma função e só irá chegar a resposta após o refresh do navegador
        // para resolver isso, adicionamos uma função anônima no método
        // onClick={() => this.props.clickOnPlanet(this.props.name)}
        <Fragment>
            <div>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link}/>
                <GrayImg img_url={ this.props.img_url } gray={this.props.gray}/>
                
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satellite, index) => {
                        return <li key={index}>{satellite.name}</li>
                    })}
                </ul>
                
                <hr/>
            </div>
        </Fragment>
    )
    }
}

export default Planet