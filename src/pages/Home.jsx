import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Recommend from '../components/contents/Recommend'
import Song from '../components/contents/Song'
import Live from '../components/contents/Live'
import Radio from '../components/contents/Radio'
import Lassgo from '../components/contents/Lassgo'
import Stage from '../components/contents/Stage'
import Outside from '../components/contents/Outside'

const Home = () => {
  return (
    <Main title="런빗의 유튜브" description="런빗의 유튜브 홈 페이지">
      <Today />
      <Recommend />
      <Song />
      <Live />
      <Radio />
      <Lassgo />
      <Stage />
      <Outside />
    </Main>
  )
}

export default Home