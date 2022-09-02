import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFilms, ServerResponse} from "../models/models";

export const filmsApi = createApi({
    reducerPath: "kinopoisk/api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/',
    }),
     refetchOnFocus: true,
    endpoints: build => ({
        getFilms: build.query<IFilms[], string>({
            query: (search: string) => ({
                url: `movie`,
                params: {
                    search: 328,
                    // search: search,
                    field: "id",
                    // field: "year",
                    limit: 1,
                    token: 'ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06',
                    lang:'ru'
                }
            }),
            transformResponse: (response: ServerResponse<IFilms[]>) => response.docs
        }),

    })
})

export const {useGetFilmsQuery} = filmsApi