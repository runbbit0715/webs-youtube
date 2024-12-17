import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Recommend = lazy(() => import('./pages/Recommend'));
const Song = lazy(() => import('./pages/Song'));
const Live = lazy(() => import('./pages/Live'));
const Radio = lazy(() => import('./pages/Radio')); 
const Lassgo = lazy(() => import('./pages/Lassgo'));
const Stage = lazy(() => import('./pages/Stage'));
const Outside = lazy(() => import('./pages/Outside'));
const Channer = lazy(() => import('./pages/Channer'));
const Video = lazy(() => import('./pages/Video'));
const Serch = lazy(() => import('./pages/Serch'));
const Not = lazy(() => import('./pages/Not'));



const App = () => {
    return (
        <BrowserRouter>
        <Suspense fallback={<Main />}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/today' element={<Today/>}/>
                <Route path='/recommend' element={<Recommend/>}/>
                <Route path='/song' element={<Song/>}/>
                <Route path='/live' element={<Live/>}/>
                <Route path='/radio' element={<Radio/>}/>
                <Route path='/lassgo' element={<Lassgo/>}/>
                <Route path='/stage' element={<Stage/>}/>
                <Route path='/outside' element={<Outside/>}/>
                <Route path='/channer/:channelID' element={<Channer/>}/>
                
                <Route path='/video/:videoID' element={<Video/>}/>
                <Route path='/serch/:serchID' element={<Serch/>}/>
                <Route path='/*' element={<Not/>}/>
            </Routes>
        </Suspense>
        </BrowserRouter>
    )
}

export default App
