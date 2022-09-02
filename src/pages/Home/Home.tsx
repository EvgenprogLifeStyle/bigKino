import React, {useEffect} from 'react';
import Teaser from "./Teaser/Teaser";
import ListCard from "../../components/ListCard/ListCard";
import {useGetFilmsQuery} from "../../store/FilmsApi";

const Home = () => {

    const {isLoading, isError, data:films } = useGetFilmsQuery("2016-2018")



    return (
        <div className="home">
            <Teaser/>
            <ListCard data={films} />
        </div>
    );
};

export default Home;