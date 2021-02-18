import React,{Fragment} from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <Fragment>
            <hr/>
            <center>&copy; Developer Funnel {props.year} {props.month}</center>
        </Fragment>
    )
}

export default Footer;