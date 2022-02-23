import './App.css';
import {useEffect} from "react";
import {api} from "./helper/api";
import {setCatCategories} from "./redux/ducks/catDuck";
import Sidebar from "./components/sidebar";
import {useDispatch, useSelector} from "react-redux";
import {MainDisplay} from "./components/mainDisplay";
import {Route, Routes} from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const categories = useSelector(({catDuck}) => catDuck.categories);

    useEffect(() => {
        fetch(`${api}/categories`)
            .then(res => res.json())
            .then(res => dispatch(setCatCategories(res)))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="App">
            <Sidebar/>


            <Routes>
                {categories?.map(({name, id}) => (
                    <Route key={id} path={`${name}`} element={<MainDisplay categoryId={id} limit={10} pageNum={1}/>}/>
                ))}
                <Route path={"/"} element={<div> Main</div>}/>
            </Routes>


        </div>
    );
}

export default App;
