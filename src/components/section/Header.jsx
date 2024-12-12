import React from 'react'

/* react icon */
import { TbSquareRoundedLetterP } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { BsBookmarkHeart } from "react-icons/bs";
import { CiMusicNote1 } from "react-icons/ci";
import { CiStreamOn } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { TbSquareRoundedLetterLFilled } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { PiMicrophoneStage } from "react-icons/pi";

import { FaTwitter } from "react-icons/fa6";
import { TbSquareRoundedLetterW } from "react-icons/tb";
import { SiGooglelens } from "react-icons/si";
import { MdOutlineLocalCafe } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";
import { TbSquareRoundedLetterD } from "react-icons/tb";

const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header_logo'>
        <a href='/'>
          <em aria-hidden='true'></em>
          <span>Runbbit's<br/>youtube</span>
        </a>
      </h1>

      <nav className='header_menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><TbSquareRoundedLetterP  />플레이브</a>
          </li>
          <li>
            <a href='/today'><CiYoutube />추천 영상</a>
          </li>
          <li>
            <a href='/recommed'><BsBookmarkHeart />추천 채널</a>
          </li>
          <li>
            <a href='/song'><CiMusicNote1 />노래</a>
          </li>
          <li>
            <a href='/live'><CiStreamOn />라이브 방송</a>
          </li>
          <li>
            <a href='/radio'><CiMicrophoneOn />플레디오</a>
          </li>
          <li>
            <a href='/lassgo'><TbSquareRoundedLetterLFilled />라쓰고 플레이브</a>
          </li>
          <li>
            <a href='/stage'><BsHeadset />무대</a>
          </li>
          <li>
            <a href='/outside'><PiMicrophoneStage />외부 영상</a>
          </li>
        </ul>

        <ul className='keyword'>
                    <li>
                        <a href='/search/plave'>plave</a>
                    </li>
                    <li>
                        <a href='/search/song'>song</a>
                    </li>
                    <li>
                        <a href='/search/live'>live</a>
                    </li>
                    <li>
                        <a href='/search/radio'>radio</a>
                    </li>
                    <li>
                        <a href='/search/outside'>outside</a>
                    </li>
                    <li>
                        <a href='/search/offical'>offical</a>
                    </li>
                    <li>
                        <a href='/search/fanmade'>fanmade</a>
                    </li>
                    <li>
                        <a href='/search/original'>original</a>
                    </li>
                    <li>
                        <a href='/search/cover'>cover</a>
                    </li>
                    <li>
                        <a href='/search/stage'>stage</a>
                    </li>
                    <li>
                        <a href='/search/shots'>shots</a>
                    </li>
                    <li>
                        <a href='/search/long'>long</a>
                    </li>
                </ul>
      </nav>
      <div className='header_sns'>
                <ul>
                    <li>
                        <a href='https://x.com/plave_official' rel='noopener noreferrer'>
                        <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='https://weverse.io/plave/artistpedia' rel='noopener noreferrer'>
                        <TbSquareRoundedLetterW />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/plave_official/' rel='noopener noreferrer'>
                        <SiGooglelens />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/asterum433_10/' rel='noopener noreferrer'>
                        <MdOutlineLocalCafe />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.tiktok.com/@plave_official' rel='noopener noreferrer'>
                        <AiFillTikTok />
                        </a>
                    </li>
                    <li>
                        <a href='https://cafe.daum.net/plave' rel='noopener noreferrer'>
                        <TbSquareRoundedLetterD />
                        </a>
                    </li>
                </ul>
            </div>
    </header>
  )
}

export default Header