import React from 'react';
import {useGetFilmQuery, useGetFilmsTopQuery} from "../../store/FilmsApi";
import {IFilm} from "../../models/models";
import ListCard from "../ListCard/ListCard";
import Loader from "../Loader/Loader";
import {useParams} from "react-router-dom";

const FilmsTop = () => {
const {id} =useParams()
    const {isLoading, isError, data}: { isLoading: any, isError: any, data: IFilm[] } = useGetFilmsTopQuery<any>(Number(id))
    if(isLoading)  return <Loader/>


    return (
        <>
            {data?.map((e, idx) => <ListCard data={e}/>)}
        </>
    );
};

export default FilmsTop;