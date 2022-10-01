import React, {FC, useState} from 'react';
import {IFact, IImg, IVideo} from "../../models/models";
import {useGetFactsQuery, useGetImagesQuery, useGetVideosQuery} from "../../store/FilmsApi";
import {useParams} from "react-router-dom";


interface Tab {
    onClick: any,
    children: React.ReactNode | undefined,
    active: boolean
}

const Tab: FC<Tab> = ({children, active,onClick}) => <button
    className={` text-xl mr-2 hover:text-blue-800  ${!active && 'opacity-50'}  `} onClick={onClick}>{children}</button>

const stateTab = [
    {idx: 1, active: true, name: 'Описание'},
    {idx: 2, active: false, name: 'Трейлер'},
    {idx: 3, active: false, name: 'Изображения'},
    {idx: 4, active: false, name: 'Факты'}
]


const Tabs = ({descAll}: { descAll?: string }) => {
    const {id} = useParams();
    const {data: facts}: { data: IFact[] } = useGetFactsQuery<any>(Number(id))
    const {data: videoData}: { data: IVideo[] } = useGetVideosQuery<any>(Number(id))
    const {data: imagesData}: { data: IImg[] } = useGetImagesQuery<any>(Number(id))

    const [activeTab, setActiveTab] = useState<number>(1)

    console.log(activeTab)
    return (
        <>
            {stateTab &&
                <div className="flex">
                    {stateTab.map(e =>
                        <Tab key={e.idx}  active={ e.idx === activeTab ? true: false} onClick={()=>setActiveTab(+e.idx)}>{e.name}</Tab>)}
                </div>
            }
            <div className="flex flex-wrap">
                {activeTab == 1 &&
                    <div>{descAll}</div>}

                {activeTab == 2 &&
                    <div>
                        {videoData?.map((e, idx) =>
                            <div key={idx}>
                                <div>{e.name}</div>
                                <video src={e.url} controls/>
                            </div>
                        )}
                    </div>
                }
                {activeTab == 3 &&

                    <div> {imagesData?.map((e, idx) => <div key={idx}><img src={e.previewUrl}/></div>)}</div>
                }
                {activeTab == 4 &&
                    <div>{facts?.map((e, idx) => <div key={idx} dangerouslySetInnerHTML={{__html: e.text}}/>
                    )}
                    </div>
                }
            </div>
        </>
    );
};

export default Tabs;