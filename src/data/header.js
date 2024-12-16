// react icon
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

// header_menu - menu
export const headerMenus = [
  {
    title: "플레이브",
    icon: <TbSquareRoundedLetterP  />,
    src: "/"
  },
  {
    title: "추천 영상",
    icon: <CiYoutube />,
    src: "/today"
  },
  {
    title: "추천 채널",
    icon: <BsBookmarkHeart />,
    src: "/recommend"
  },
  {
    title: "노래",
    icon: <CiMusicNote1 />,
    src: "/song"
  },
  {
    title: "라이브 방송",
    icon: <CiStreamOn />,
    src: "/live"
  },
  {
    title: "플레디오",
    icon: <CiMicrophoneOn />,
    src: "/radio"
  },
  {
    title: "라쓰고 플레이브",
    icon: <TbSquareRoundedLetterLFilled />,
    src: "/lassgo"
  },
  {
    title: "무대",
    icon: <BsHeadset />,
    src: "/stage"
  },
  {
    title: "외부 영상",
    icon: <PiMicrophoneStage />,
    src: "/outside"
  },
]

// header_menu - keyword
export const searchKeyword = [
  {
    title: "plave",
    src: "/search/plave"
  },
  {
    title: "song",
    src: "/search/song"
  },
  {
    title: "live",
    src: "/search/live"
  },
  {
    title: "radio",
    src: "/search/radio"
  },
  {
    title: "outside",
    src: "/search/outside"
  },
  {
    title: "offical",
    src: "/search/offical"
  },
  {
    title: "fanmade",
    src: "/search/fanmade"
  },
  {
    title: "original",
    src: "/search/original"
  },
  {
    title: "cover",
    src: "/search/cover"
  },
  {
    title: "stage",
    src: "/search/stage"
  },
  {
    title: "shots",
    src: "/search/shots"
  },
  {
    title: "long",
    src: "/search/long"
  },
]

export const snsLink = [
  {
    title: "twitter",
    icon: <FaTwitter />,
    src: "https://x.com/plave_official"
  },
  {
    title: "weverse",
    icon: <TbSquareRoundedLetterW />,
    src: "https://weverse.io/plave/artistpedia"
  },
  {
    title: "instagram",
    icon: <SiGooglelens />,
    src: "https://www.instagram.com/plave_official/"
  },
  {
    title: "instargram_cafe",
    icon: <MdOutlineLocalCafe />,
    src: "https://www.instagram.com/asterum433_10/"
  },
  {
    title: "tiktok",
    icon: <AiFillTikTok />,
    src: "https://www.tiktok.com/@plave_official"
  },
  {
    title: "officalCafe",
    icon: <TbSquareRoundedLetterD />,
    src: "https://cafe.daum.net/plave"
  },
]