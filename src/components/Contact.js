import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false
        };
    }
    render(){
        return(
            <div className="Contact">
          <img 
                className="avatar" 
                src={this.props.image} 
                alt="profils">
            </img>
                <div 
                    onClick={event => {
                        const clikonline =! this.state.online;
                        this.setState({ online: clikonline });
                    }}
                    className="name">
                     {this.props.name}                
                        <div  className="status ">
                            <span className={this.state.online ? "status-online" : "status-offline" }>
                                {this.state.online}
                            </span>
                                <span className="status-texte">
                                    {this.state.online ? "online" : "offline"}
                                </span>
                        </div>
                </div>
        </div>

        );
    }
}




export default Contact;