import React from 'react';
import c from './Aside.module.scss';
import {NavLink} from "react-router-dom";



const Aside = (props) => {

    let nav = props.nav;

    return (
       <aside className={c.aside}>
           <nav className={`${c.nav} ${c.sticky}`}>

               {Object.keys(nav).map(elem => {
                   return (
                       <div className={`${c.nav_item}`}>
                           <NavLink to={elem}>{nav[elem]}</NavLink>
                       </div>
                   );
               })}

           </nav>
       </aside>
    )
};

export default Aside;