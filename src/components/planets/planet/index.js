import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/DescriptionLink";

const Planet = (props) => {
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
            </div>
        </Fragment>
    )
}

export default Planet