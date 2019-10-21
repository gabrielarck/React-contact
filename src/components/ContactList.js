import React from 'react';


let Profils = 
[
    {
    name : "Todd Wells",
    image : "https://randomuser.me/api/portraits/men/78.jpg"
},
{
    name : "Julian Wheeler",
    image : "https://randomuser.me/api/portraits/men/96.jpg"
},
{
    name : "Landon Knight",
    image : "https://randomuser.me/api/portraits/men/69.jpg"
},
{
    name : "William Rodriguez",
    image : "https://randomuser.me/api/portraits/men/16.jpg"
},
{
    name : "Dianne Castillo",
    image : "https://randomuser.me/api/portraits/women/65.jpg"
}]
let ProfilsTP = (props) => (
    <div>
      {Profils.map(item => (
       <div className="Contact">
       <img 
             className="avatar" 
             src={item.image} 
             alt="profils">
         </img>
             <div className="name">
             {item.name}                
                     <div  className="status ">
                         <span className={props.online ? "status-online" : "status-offline" }>
                             {props.online}
                         </span>
                             <span className="status-texte">
                                 {props.online ? "online" : "offline"}
                             </span>
                     </div>
             </div>
     </div>)
       )}
     </div> );
export default ProfilsTP;