import React, { Fragment, useState } from "react";

const state0 = { //initial state of the form, used to reset it to blank inputs
    name: '',
        description: '',
        link: '',
        img_url: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(state0);

    const handleFieldsChange = (event) => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value,
        [event.currentTarget.description]: event.currentTarget.value,
    })

    const handleSubmit = (event) => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(state0);
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Planet name: </label>
                    <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="description">Planet description: </label>
                    <textarea cols="20" rows="auto" id="description" name="description" type="text" value={fields.description} onChange={handleFieldsChange}></textarea>
                </div>
                <div>
                    <label htmlFor="link">Planet link: </label>
                    <input id="link" name="link" type="text" value={fields.link} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="img_url">Image url: </label>
                    <input id="img_url" name="img_url" type="text" value={fields.img_url} onChange={handleFieldsChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
    //<input id="description" name="description" type="text" value={fields.description} onChange={handleFieldsChange}/>
};

export default Form;