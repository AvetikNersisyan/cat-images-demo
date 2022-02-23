import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import "./styles.css";

const Sidebar = () => {
    const categories = useSelector(({catDuck}) => catDuck.categories);


    return <div className={"sidebar-wrapper"}>
        {categories.map(({id, name}) => <div key={id}  className={"nav-link"}>
            <NavLink to={`${name}`} className={"nav-item"}> {name}</NavLink>
        </div>)}
    </div>;

};
export default Sidebar;