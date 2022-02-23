import {useEffect, useState} from "react";
import {api} from "../../helper/api";
import {setCats} from "../../redux/ducks/catDuck";
import {useDispatch, useSelector} from "react-redux";
import CatCard from "./catCard";

import "./styles.css"

export const MainDisplay = ({limit, categoryId, pageNum}) => {

    const dispatch = useDispatch();
    const cats = useSelector(({catDuck}) => catDuck.cats);


    useEffect(() => {
        fetch(`${api}/images/search?limit=${limit}&page=${pageNum}&category_ids=${categoryId}`)
            .then(res => res.json())
            .then(res => dispatch(setCats(res)));
    }, [categoryId]);


    return (
        <div className={"main-display-wrapper"}>

            {cats.map(({id, url}) => <CatCard key={id} img_url={url} />)}
        </div>
    );
};