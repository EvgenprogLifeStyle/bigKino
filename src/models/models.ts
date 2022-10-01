export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}

export interface IFilm {
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn?: any;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl?: any;
    logoUrl?: any;
    reviewsCount: number;
    ratingGoodReview?: any;
    ratingGoodReviewVoteCount: number;
    ratingKinopoisk?: any;
    ratingKinopoiskVoteCount: number;
    ratingImdb?: any;
    ratingImdbVoteCount: number;
    ratingFilmCritics?: any;
    ratingFilmCriticsVoteCount: number;
    ratingAwait: number;
    ratingAwaitCount: number;
    ratingRfCritics?: any;
    ratingRfCriticsVoteCount: number;
    webUrl: string;
    year: number;
    filmLength?: any;
    slogan: string;
    description?: any;
    shortDescription?: any;
    editorAnnotation?: any;
    isTicketsAvailable: boolean;
    productionStatus: string;
    type: string;
    ratingMpaa?: any;
    ratingAgeLimits?: any;
    countries: Country[];
    genres: Genre[];
    startYear?: any;
    endYear?: any;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
    hasImax: boolean;
    has3D: boolean;
    lastSync: Date;
}

export interface IFilms<T> {
    total: number;
    items: T;
}


export interface IFact {
    text: string;
    type: string;
    spoiler: boolean;
}

export interface IFacts<T> {
    total: number;
    items: T;
}

export interface IVideo {
    url: string;
    name: string;
    site: string;
}

export interface IVideos<T> {
    total: number;
    items: T;
}

export interface IImg {
    imageUrl: string;
    previewUrl: string;
}

export interface IImages<T> {
    total: number;
    totalPages: number;
    items: T;
}
