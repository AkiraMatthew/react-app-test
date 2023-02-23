import React, { Fragment, useState } from "react";

const state0 = { //initial state of the form, used to reset it to blank inputs
    name: ''
}

const SatellitesForm = (props) => {

    const [fields, setFields] = useState(state0);
    const handleFieldsChange = (event) => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value
    });
    
    const handleSubmit = (event) => {
        props.addSatellite(fields);
        event.preventDefault();
        setFields(state0)
    };

    return (
        <Fragment>
           <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Satellite name: </label>
                    <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}/>
                     <br/>
                     <input type="submit"/>
                </div>
            </form>
        </Fragment>
    )
};

export default SatellitesForm;