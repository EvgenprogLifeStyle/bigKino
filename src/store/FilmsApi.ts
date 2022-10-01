import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFact, IFacts, IFilm, IFilms, IImages, IImg, IVideo, IVideos} from "../models/models";

export const filmsApi = createApi({
    reducerPath: "kinopoiskapiunofficial/api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
        prepareHeaders: (headers, {getState}) => {
            headers.set('X-API-KEY', '233dc3b7-d91b-486e-bd49-b130425854e4')
            return headers
        },
    }),

    refetchOnFocus: true,
    endpoints: build => ({
        getFilm: build.query<IFilm, number>({
            query: (id: number) => ({
                url: `films/${id}`,
            }),
            transformResponse: (response: IFilm) => response
        }),
        getFacts: build.query<IFact, number>({
            query: (id: number) => ({
                url: `films/${id}/facts`,
            }),
            transformResponse: (response: IFacts<IFact>) => response.items
        }),
        getVideos: build.query<IVideo, number>({
            query: (id: number) => ({
                url: `films/${id}/videos`,
            }),
            transformResponse: (response: IVideos<IVideo>) => response.items
        }),
        getImages: build.query<IImg, number>({
            query: (id: number) => ({
                url: `films/${id}/images`,
            }),
            transformResponse: (response: IImages<IImg>) => response.items
        }),
        getFilmsTop: build.query<IFilm,number>({
            query: (id:number) => ({
                url: `films/${id}/similars`,
            }),
            transformResponse: (response: IFilms<IFilm>) => response.items
        }),
    })
})

export const {useGetFilmQuery, useGetFactsQuery, useGetVideosQuery,useGetImagesQuery, useGetFilmsTopQuery} = filmsApi