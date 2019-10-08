import React from 'react';
import './Contact.css';

function Contact (props){
    return (
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
















export default Contact;