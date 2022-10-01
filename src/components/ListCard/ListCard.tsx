import React, {FC} from 'react';
import {IFilm} from "../../models/models";


const ListCard = ({data}: { data: IFilm }) => {

    return (
        <div className="list">
            <div className="list__wrap">
                <div className="cart-film" style={{display: "flex", height: 100}}>


                    <div key={data.imdbId} className="cart-film">
                        <div className="cart-film__rating"></div>
                        <div className="cart-film__img">
                            <img src={data.posterUrl} alt="" style={{maxHeight: 100, objectFit: "contain"}}/>
                        </div>
                        <div className="cart-film__body">
                            <div className="cart-film__name">{data.nameRu}</div>
                            <div className="cart-film__desc"></div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ListCard;