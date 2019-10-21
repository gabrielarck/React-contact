import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false
        };
    }
    render(props){
        return(
            <div className="Contact">
          <img 
                className="avatar" 
                src={props.image} 
                alt="profils">
            </img>
                <div className="name">
                     {props.name}                
                        <div  className="status ">
                            <span className={props.online ? "status-online" : "status-offline" }>
                                {props.online}
                            </span>
                                <span className="status-texte">
                                    {props.online ? "online" : "offline"}
                                </span>
                        </div>
                </div>
        </div>

        );
    }
}

















export default Contact;