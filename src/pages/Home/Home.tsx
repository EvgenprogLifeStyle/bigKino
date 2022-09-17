import React, {useEffect} from 'react';
import Teaser from "./Teaser/Teaser";
import ListCard from "../../components/ListCard/ListCard";
import {useGetFilmQuery} from "../../store/FilmsApi";

const Home = () => {


    return (
        <div className="home">
            <Teaser/>
            {/*<ListCard data={films} />*/}
        </div>
    );
};

export default Home;