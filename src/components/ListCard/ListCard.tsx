import React, {FC} from 'react';
import {IFilm} from "../../models/models";

interface ListCard {
    data: IFilm | undefined
}

const ListCard:FC<ListCard> = ({data}) => {
    console.log(data)
    return (
        <div className="list">
            <div className="list__wrap">
                <div className="cart-film" style={{display:"flex",height:100}}>

                    {/*{data?.map(e=>*/}
                    {/*    <div key={e.id} className="cart-film">*/}
                    {/*        <div className="cart-film__rating"></div>*/}
                    {/*        <div className="cart-film__img">*/}
                    {/*            <img src={e.poster?.previewUrl} alt="" style={{maxHeight:100,objectFit:"contain"}}/>*/}
                    {/*        </div>*/}
                    {/*        <div className="cart-film__body">*/}
                    {/*            <div className="cart-film__name">{e.alternativeName}</div>*/}
                    {/*            <div className="cart-film__desc"></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                </div>
            </div>

        </div>
    );
};

export default ListCard;