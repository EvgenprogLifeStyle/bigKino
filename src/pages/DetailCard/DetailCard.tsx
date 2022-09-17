import React, {FC} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useGetFilmQuery} from "../../store/FilmsApi";
import Loader from "../../components/Loader/Loader";
import Btn from "../../components/Ui/Btn/Btn";
import {IFilm} from "../../models/models";
import {Swiper, SwiperSlide} from 'swiper/react';

const Li  = ({children}:{children: React.ReactNode} ) => <li className="text-xl">{children}</li>

const DetailCard = () => {

    const {id} = useParams();

    const {isLoading, isError, data}: { isLoading: any, isError: any, data: IFilm } = useGetFilmQuery<any>(Number(id))

    console.log(data)
    console.log(data.genres.length)
    if (isLoading) return <Loader/>
    return (
        <div className="container mx-auto pt-[70px]">

            <NavLink to='/'>
                <Btn>Назад</Btn>
            </NavLink>
            <div className="flex mt-3">
                <div className="w-1/4 relative">
                    <div
                        className="absolute px-1 py-1 bg-orange-500 left-4 top-4 text-base text-white font-medium rounded-md">
                        {data.ratingKinopoisk}
                    </div>
                    <img src={data.posterUrl} alt="" className="w-full"/>
                </div>
                <div className="w-1/3 ml-6">
                    <h1 className="text-4xl font-bold">
                        {data.nameRu}
                        {data.year && ` (${data.year})`}
                    </h1>
                    {data.nameOriginal && <div className="mt-4 text-xl text-gray-600">{data.nameOriginal}</div>}
                    <div className="mt-4  ">
                        <Btn className=" inline-flex items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                 height="14" width="14"
                                 xmlns="http://www.w3.org/2000/svg">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            <span className="ml-2">Смотреть</span> </Btn>
                        <Btn className="ml-2">
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.9336 14.3028C0.843233 14.3633 0.73814 14.398 0.629551 14.4034C0.520962 14.4087 0.412958 14.3845 0.317082 14.3332C0.221207 14.2819 0.141062 14.2056 0.0852135 14.1123C0.0293649 14.019 -8.87258e-05 13.9123 2.00771e-07 13.8036V2.4132C-1.07061e-06 1.77752 0.252196 1.16779 0.701246 0.717843C1.1503 0.267894 1.75951 0.0144762 2.3952 0.0132049L9.5952 4.81001e-06C9.91037 -0.000626166 10.2226 0.0608272 10.514 0.180856C10.8054 0.300885 11.0704 0.477138 11.2937 0.699553C11.517 0.921968 11.6943 1.18619 11.8155 1.47713C11.9367 1.76807 11.9994 2.08003 12 2.3952V13.8024C12.0001 13.9111 11.9706 14.0178 11.9148 14.1111C11.8589 14.2044 11.7788 14.2807 11.6829 14.332C11.587 14.3833 11.479 14.4075 11.3705 14.4022C11.2619 14.3968 11.1568 14.3621 11.0664 14.3016L6 10.9176L0.9336 14.3016V14.3028ZM10.8 2.4012L10.7916 2.2596C10.7569 1.96751 10.6161 1.69834 10.396 1.50322C10.1759 1.3081 9.89175 1.20062 9.5976 1.2012L2.3976 1.2132C2.07976 1.21384 1.77515 1.34055 1.55062 1.56552C1.3261 1.7905 1.2 2.09536 1.2 2.4132V12.6816L5.6664 9.6984C5.76512 9.63237 5.88123 9.59711 6 9.59711C6.11877 9.59711 6.23488 9.63237 6.3336 9.6984L10.8 12.6816V2.4012Z"
                                    fill="#FAFAFA"/>
                            </svg>
                        </Btn>
                    </div>
                    <div className="text-2xl font-medium text-gray-900 mt-4">О фильме</div>
                    <ul className="mt-3">
                        <Li>
                            <b>Страны:</b> {data.countries.map(e => e.country)}
                        </Li>
                        <Li>
                            <b> Жанр: </b>{data.genres.map((e, idx) =>
                            <span key={idx}> e.genre{data.genres.length !== idx + 1 && ','}   </span>
                        )}
                        </Li>
                    </ul>
                    <div className="text-2xl font-medium text-gray-900 mt-4">Описание</div>
                    <div className="mt-2 ">
                        {data.description
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailCard;