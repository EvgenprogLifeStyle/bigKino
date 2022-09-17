import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFilm} from "../models/models";

export const filmsApi = createApi({
    reducerPath: "kinopoiskapiunofficial/api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        getFilm: build.query<IFilm, number>({
            query: (id: number) => ({
              url: `films/${id}`,
                headers:{
                    'X-API-KEY': '233dc3b7-d91b-486e-bd49-b130425854e4',
                }
            }),
            transformResponse: (response: IFilm) => response
        }),
    })
})

export const {useGetFilmQuery} = filmsApi