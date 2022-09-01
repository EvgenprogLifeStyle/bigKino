import React from 'react';
import ContainerPages from "./hooks/ContainerPages";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FavoritesList from "./pages/FavoritesList/FavoritesList";
import DetailCard from "./pages/DetailCard/DetailCard";
import Home from "./pages/Home/Home";

// const FavoritesList = React.lazy(() => import('./pages/FavoritesList/FavoritesList'));
// const DetailCard = React.lazy(() => import('./pages/DetailCard/DetailCard'));
// const Home = React.lazy(() => import('./pages/Home/Home'));


const App = () => <Router>
    {/*<Suspense fallback={<Loader/>}>*/}


    <div className="App">
        <ContainerPages>
            {/*<Routes basename={process.env.PUBLIC_URL}>*/}
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/detail' element={<DetailCard/>}/>
                <Route path='/favorites' element={<FavoritesList/>}/>

                {/*<Route activeClassName='active' path='/profile/:userId' element={<ProfileContainer/>}/>*/}

                {/*<Route activeClassName='active' path='*' element={<div>404 not found</div>}/>*/}
            </Routes>
        </ContainerPages>
    </div>


    {/*</Suspense>*/}
</Router>


export default App;
