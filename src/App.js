import './App.css';
import {useEffect, lazy, Suspense} from "react";
import {api} from "./helper/api";
import {setCatCategories} from "./redux/ducks/catDuck";
import Sidebar from "./components/sidebar";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {initialLimit} from "./helper/constants";
import Home from "./components/home";
import Loading from "./components/loading";

const MainDisplay = lazy(async () => await import("./components/mainDisplay"));

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
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {categories?.map(({name, id}) => (
                        <Route key={id} path={`${name}`}
                               element={<MainDisplay categoryId={id} limit={initialLimit} pageNum={1}/>}/>
                    ))}
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
