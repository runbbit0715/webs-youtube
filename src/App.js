import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Recommend from './pages/Recommend'
import Song from './pages/Song'
import Live from './pages/Live'
import Radio from './pages/Radio'
import Lassgo from './pages/Lassgo'
import Stage from './pages/Stage'
import Outside from './pages/Outside'
import Channer from './pages/Channer'
import Video from './pages/Video'
import Serch from './pages/Serch'
import Not from './pages/Not'

import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <Main>
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
        </Main>
        <Footer />
        </BrowserRouter>
    )
}

export default App
