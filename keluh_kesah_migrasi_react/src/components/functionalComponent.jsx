import React, {useContext, useState} from "react";
import { Identity } from "../helper/context";

export default function FunctionalComponent() {

    const identityContext = useContext(Identity);
    
    const [fname, setFname] = useState(identityContext.f_name)
    const [mname, setMname] = useState(identityContext.m_name)
    const [lname, setLname] = useState(identityContext.l_name)

    const handleChange = (e) => {
        const ids = e.target.id
        const values = e.target.value

        switch(ids) {
            case 'f_name':
                setFname(values)
              break;
            case 'm_name':
                setMname(values)
              break;
            case 'l_name':
                setLname(values)
              break;
            default:

          }
    }
    
    return(
        <div style={{position: 'relative', marginTop: '10%'}}>
            <input id='f_name' value={fname} onChange={handleChange} />
            <input id='m_name' value={mname} onChange={handleChange} />
            <input id='l_name' value={lname} onChange={handleChange} />

            <p> Firstname result : {fname}</p>
            <p> Middlename result : {mname}</p>
            <p> Lastname result : {lname}</p>
        </div>
    )
}