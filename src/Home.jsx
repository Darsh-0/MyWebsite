import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import resumeIcon from './assets/resume.svg';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import gmailIcon from './assets/gmail.svg';
import HomeIcon from './HomeIcon';
import Timer from './Timer';
import PlayButton from './PlayButton';
import PlayerButtons from './PlayerButtons';

import SpotifyManagerIcon from './assets/projects/SpotifyManager1.png';
import CoffeeCatcherIcon from './assets/projects/CoffeeCatcher.png';
import DarshifyIcon from './assets/projects/darshify.png'
import UCFKIcon from './assets/projects/UCFK.png';
import TakeAHikeIcon from './assets/projects/TakeAHike.png';
import ChessEloHiderIcon from './assets/projects/ChessEloHider.png';
import ChessBot from './assets/projects/chessWebsite.png';

import ChessBotSC from './assets/projects/chessWebsiteSC.png';
import CoffeeCatcherIconSC from './assets/projects/CoffeeCatcherSC.png';
import TakeAHikeSC from './assets/projects/TakeAHikeSC.png';
import ChessEloHiderSC from './assets/projects/ChessEloHiderSC.png';
import DarshifySC from './assets/projects/DarshifySC.png'

import DarshImage from './assets/aboutme/me.jpg';
import DarshSnowImage from './assets/aboutme/snowboard.jpg';
import DarshBoatImage from './assets/aboutme/boat.jpg'

import cIcon from './assets/languages/c.png';
import cssIcon from './assets/languages/css.png';
import htmlIcon from './assets/languages/html.png';
import dockerIcon from './assets/languages/docker.png';
import javaIcon from './assets/languages/java.png';
import javascriptIcon from './assets/languages/javascript.png';
import typescriptIcon from './assets/languages/typescript.png';
import pythonIcon from './assets/languages/python.png';
import reactIcon from './assets/languages/react.png';
import tailwindIcon from './assets/languages/tailwind.png';
import gitIcon from './assets/languages/git.png';
import csIcon from './assets/languages/cs.png';

import Banner from './Banner';
import BannerRow from './BannerRow';

const logos = [
      {image: pythonIcon, url:"https://www.python.org/", name:"Python"},
      {image: javaIcon, url:"https://www.java.com/en/", name:"Java"},
      {image: cIcon, url:"https://www.c-language.org/", name:"C"},
      {image: reactIcon, url:"https://react.dev/", name:"React"},
      {image: csIcon, url:"https://dotnet.microsoft.com/en-us/languages/csharp", name:"C#"},
      {image: dockerIcon, url:"https://www.docker.com/", name:"Docker"},
      {image: typescriptIcon, url:"https://www.typescriptlang.org/", name:"TypeScript"},
      {image: cssIcon, url:"https://www.w3.org/Style/CSS/Overview.en.html", name:"CSS"}
];

const MyProjects = [
    {name: "Spotify Manager Bot", subtitle: "Python", description: "A simple bot to manage all my spotify songs",thumbnail: SpotifyManagerIcon, image: SpotifyManagerIcon, url:"https://github.com/Darsh-0/Spotify-Manager-Bot"},
    {name: "Coffee Catcher", subtitle: "Python", description: "A Game where you have to catch all the coffee you can", thumbnail: CoffeeCatcherIcon, image: CoffeeCatcherIconSC, url:"https://github.com/Darsh-0/Coffee_Catcher"},
    {name: "Portofio Website", subtitle: "React with Tailwind", description: "My website for showing off all my cool projects", thumbnail: DarshifyIcon, image: DarshifySC, url:"https://github.com/Darsh-0/MyWebsite"},
    {name: "Pong On UCFK4 Microcontroller", subtitle: "C", description: "An low level embedded systems project combining hardware and software", thumbnail: UCFKIcon, image: UCFKIcon, url:"https://github.com/Darsh-0/Pong-on-UCFK4"},
    {name: "TakeAHike", subtitle: "Java with JavaFX and ArcGIS", description: "An application to navigate though all of the trails in New Zealand", thumbnail: TakeAHikeIcon, image: TakeAHikeSC, url:"https://github.com/Darsh-0/TakeAHike"},
    {name: "Chess Elo Hider", subtitle: "JavaScript", description: "An extension made to help you gain elo while playing chess online", thumbnail: ChessEloHiderIcon, image: ChessEloHiderSC, url:"https://github.com/Darsh-0/Chess-elo-hider"},
    {name: "Chess Bot", subtitle: "C#, JavaScript, React", description: "My chess bot programmed from scratch, can you beat it?", thumbnail: ChessBot, image: ChessBotSC, url:"https://chess.darshgandhi.dev"},
];

const aboutMeTracks = [
  { image: DarshImage, name: "Who Am I" },
  { image: DarshSnowImage, name: "Snowboarding" },
  { image: gitIcon, name: "Skills" },
];

const allTracks = [...logos, ...aboutMeTracks];

function FeaturedProject({ index }) {
    const project = MyProjects[index];

    return (
        <Banner
            title={project.name}
            subtitle={project.subtitle}
            thumbnail={project.thumbnail}
            image={project.image}
            description="View on GitHub"
            onClick={() => window.open(project.url, "_blank")}
        />
    );
}

function Title() {
    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-tr from-[#010203] to-transparent h-auto w-full rounded-lg lg:m-10 pb-5 lg:pb-0 columns-2 items-start justify-start lg:pt-0">
            <a className="p-4 lg:pl-4 w-[305px] h-[305px] mx-auto lg:mx-0">
                <img src={DarshBoatImage} alt="Me on boat"></img>
            </a>
            <div className="flex flex-col lg:pl-10 items-center lg:items-start text-center lg:text-left">
                <h1 className="text-white pt-10 pl-0.5 font-[MyFont] font-ultrabold">Playlist</h1>
                <h1 className="text-white text-7xl font-[MyFont] font-medium">Hey, I'm <span className="underline">Darsh</span>!</h1>
                <h1 className="text-white pt-5 font-[MyFont] font-ultrabold lg:pb-0 pb-3 ml-3 mr-3">I'm currently a 3rd year student at the University of Canterbury studying Software Engineering</h1>
                <Socials />
            </div>
        </div>
    );
}

function ProgrammingLanguages({ setHoveredLang, onPlay }) {
  return (
    <div className="grid
      grid-cols-2        /* Very small screens: 2 per row */
      lg:grid-cols-4     /* Medium screens */
      auto-rows-fr
      place-items-center
      w-full
      gap-5"
    >
      {logos.map((logo, index) => (
        <a key={logo.name} href={logo.url} onMouseEnter={() => setHoveredLang(logo.name)} onMouseLeave={() => setHoveredLang(null)} className="relative group flex flex-row items-center bg-[#FFFFFF20] rounded-md w-full transition-transform duration-50 hover:scale-105 gap-[clamp(0.75rem,2vw,5rem)]">
            <img key={logo.image} src={logo.image} alt={logo.name} className="object-contain h-12 w-12 md:h-20 md:w-20 bg-white p-2 rounded-l-md shadow-[10px_0_20px_rgba(0,0,0,0.4)]" />
            <h1 className="flex-1 font-[Myfont] text-white font-normal text-[clamp(0.700rem,2vw,1.25rem)] truncate">
                {logo.name}
            </h1>
            <div onClick={(e) => {
                         e.preventDefault();  // prevent <a> navigation
                         e.stopPropagation(); // prevent event from reaching parent <a>
                         onPlay(index);
                       }} className="absolute right-5 top-1/2 transform -translate-y-1/2">
                <PlayButton size={50} />
            </div>
        </a>
      ))}
    </div>
  );
}

function AboutMe({onPlay}) {

    const [rating, setRating] = useState(null);
    useEffect(() => {
        fetch(`https://api.chess.com/pub/player/mrlittlegamer/stats`)
          .then(res => res.json())
          .then(data => {
            setRating(data.chess_rapid?.last?.rating);
          })
          .catch(err => console.error(err));
      }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
            <div className="flex flex-col lg:flex-row bg-gradient-to-t from-[#650A00] to-[#913000] rounded-lg flex-1 p-5 gap-5 items-center transition-all duration-300 ease-in-out">
                <div className="flex-1">
                    <h1 className="font-[Myfont] font-medium text-white text-3xl">
                        Who Am I?
                    </h1>
                    <h1 className="pt-2 font-[Myfont] font-light text-white">
                        I'm Darsh Gandhi 20 year old Software Engineering student at The{" "}
                        <a
                            href="https://www.canterbury.ac.nz/"
                            className="text-blue-400 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            University of Canterbury
                        </a>{" "}
                        with the Hiranga Scholarship after completing the International Baccalaureate Program.
                        I've gotten more into programming and Software Engineering after starting
                        university and making fun side projects.
                    </h1>
                </div>
                <div className="flex flex-1 justify-center lg:justify-end order-last lg:order-none transition-all duration-300 ease-in-out">
                    <div className="relative inline-block group mx-auto lg:ml-auto">
                        <img
                            src={DarshImage}
                            className="rounded-md w-full max-w-xs lg:max-w-40 transition-all duration-300 ease-in-out"
                        />

                        <div
                            onClick={() => onPlay(8)}
                            className="absolute bottom-2 right-2"
                        >
                            <PlayButton size={50} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row bg-gradient-to-t from-[#073D00] to-[#275E00] rounded-lg flex-1 p-5 gap-5 items-center transition-all duration-300 ease-in-out">
                <div className="flex-1">
                    <h1 className="font-[Myfont] font-medium text-white text-3xl">
                        Skills
                    </h1>
                    <h1 className="pt-2 font-[Myfont] font-light text-white">
                        I am most proficient in Python, Java, and C.
                        I have had experience working on projects, developing applications in groups.
                        I am familiar with CI/CD pipelines to streamline development, improve efficiency and reduce manual labour.
                        Programming using Microcontrollers and Embedded Systems.
                        I have worked with large databases, managing and querying extensive datasets.
                    </h1>
                </div>
                <div className="flex flex-1 justify-center lg:justify-end order-last lg:order-none transition-all duration-300 ease-in-out">
                    <div className="relative inline-block group mx-auto lg:ml-auto">
                        <img
                            src={gitIcon}
                            className="rounded-md w-full max-w-xs lg:max-w-40 transition-all duration-300 ease-in-out"
                            alt="Skills icon"
                        />
                        <div
                            onClick={() => onPlay(10)}
                            className="absolute bottom-2 right-2"
                        >
                            <PlayButton size={50} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row bg-gradient-to-t from-[#362870] to-[#524893] rounded-lg flex-1 p-5 gap-5 items-center transition-all duration-300 ease-in-out">


                <div className="flex-1">
                    <h1 className="font-[Myfont] font-medium text-white text-3xl">
                        Hobbies / Interest
                    </h1>
                    <h1 className="pt-2 font-[Myfont] font-light text-white">
                        My interests outside of Software Engineering include:
                    </h1>
                    <ul className="list-disc pl-5 pt-2 text-white space-y-1 font-[Myfont] font-light">
                        <li>Football</li>
                        <li>Hockey</li>
                        <li>Snowboarding</li>
                        <li>Gym</li>
                        <li>Chess (rated {rating ? `${rating}` : "Loading..."} on chess.com)</li>
                        <li><a
                                                        href="https://leetcode.com/u/darsh_gandhi/"
                                                        className="text-blue-400 underline"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Leetcode
                                                    </a>{" "}</li>
                        <li>Listening to music</li>
                    </ul>
                </div>
                <div className="flex flex-1 justify-center lg:justify-end order-last lg:order-none transition-all duration-300 ease-in-out">
                    <div className="relative inline-block group mx-auto lg:ml-auto">
                        <img
                            src={DarshSnowImage}
                            className="rounded-md w-full max-w-xs lg:max-w-40 transition-all duration-300 ease-in-out"
                        />

                        <div
                            onClick={() => onPlay(9)}
                            className="absolute bottom-2 right-2"
                        >
                            <PlayButton size={50} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


function Projects() {
    const projectBanners = MyProjects.map((project) => ({
        title: project.name,
        subtitle: project.subtitle,
        thumbnail: project.thumbnail,
        image: project.image,
        description: project.description,
        onClick: () => window.open(project.url, "_blank"),
    }));

    return (
        <BannerRow banners={projectBanners} />
    );
}


function Socials() {
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("Darsh.gandhi12@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="grid grid-cols-1 gap-4 items-center md:flex md:flex-row md:gap-4 md:pt-10 md:justify-start w-max items-center">

            {/* Resume button - green */}
            <button
                key="Resume"
                className="hover:bg-[#3BE477] transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-[#1ED760] bg-[#1ED760] active:scale-100"
                onClick={() => navigate("/resume")}
            >
                <img src={resumeIcon} alt="Resume" className="w-10 h-10" />
                <h1 className="pl-3 font-[Myfont] font-medium">Resume</h1>
            </button>

            {/* LinkedIn button - transparent */}
            <button
                key="Linkedin"
                className="hover:bg-gray-400 transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-gray-400 bg-transparent filter invert active:scale-100"
                onClick={() => window.open("https://www.linkedin.com/in/darsh-gandhi-5bbaa92b2/", "_blank")}
            >
                <img src={linkedinIcon} alt="Linkedin" className="w-10 h-10" />
                <h1 className="pl-3 font-[Myfont] font-medium">Linkedin</h1>
            </button>

            {/* GitHub button - transparent */}

            <button
                key="Github"
                className="hover:bg-gray-400 transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-gray-400 bg-transparent filter invert active:scale-100"
                onClick={() => window.open("https://github.com/Darsh-0", "_blank")}
            >
                <img src={githubIcon} alt="Github" className="w-10 h-10" />
                <h1 className="pl-3 font-[Myfont] font-medium">Github</h1>
            </button>

            {/* Gmail button */}
            <div className="relative group flex-none">
                <button
                key="Gmail"
                onClick={copyEmail}
                className="hover:bg-gray-400 transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-gray-400 bg-transparent filter invert w-full active:scale-100"
                >
                    <img src={gmailIcon} alt="Gmail" className="w-10 h-10" />
                    <h1 className="pl-3 font-[Myfont] font-medium">Gmail</h1>
                </button>

                {!copied && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                    Copy to clipboard
                </span>
                )}

                {copied && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow">
                    Copied!
                </span>
                )}
            </div>
        </div>
    );
}

function Buttons({selected, setSelected}) {
  const buttons = ["Skills", "About Me", "Projects"];

  return (
    <div className="w-full flex justify-center md:justify-start gap-4 md:pl-10">
      {buttons.map((btn, index) => (
        <button
          key={btn}
          onClick={() => {
              setSelected(index);

          }} // select this button
          className={`px-4 py-2 rounded-4xl font-bold transition-colors cursor-pointer ${
            selected === index
              ? "bg-white text-black" // selected
              : "bg-[#FFFFFF20] text-black hover:bg-[#FFFFFF30] text-white" // unselected
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

function MusicPlayer({ song, setSong, showPlayer, setShowPlayer }) {
    const [currentTime, setCurrentTime] = useState(0);
    const upperLimit = 123;
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        setCurrentTime(0);
    }, [song]);

    return (
        <div className={`fixed bottom-0 left-0 w-full hidden md:block z-50 ${showPlayer ? "" : "pointer-events-none"}`}>
            {/* Ribbon toggle - tracks the top edge of the player */}
            <div
                className={`absolute right-10 transition-all duration-300 ease-in-out pointer-events-auto ${
                    showPlayer ? "bottom-24" : "bottom-0"
                }`}
            >
                <button
                    onClick={() => setShowPlayer((prev) => !prev)}
                    className="flex justify-center items-center bg-[#6F6F6F] hover:bg-[#3A3A3A] transition-colors duration-150 text-black font-bold py-1.5 px-4 rounded-t-lg cursor-pointer"
                >
                    <h1 className="font-[Myfont] text-sm">
                        {showPlayer ? "▼  Hide Player" : "▲  Show Player"}
                    </h1>
                </button>
            </div>

            {/* Player panel */}
            <div
                className={`grid grid-cols-3 grid-rows-2 h-24 pt-4 w-full bg-black text-white transition-transform duration-300 ease-in-out ${
                    showPlayer ? "translate-y-0 pointer-events-auto" : "translate-y-full pointer-events-none"
                }`}
            >
                {/* Left: Song info */}
                <div className="col-start-1 row-start-1 row-span-2 pl-5 flex items-center gap-4 pb-3">
                    <div className="rounded-lg inline-block bg-white overflow-hidden w-18 h-18">
                        <img src={allTracks[song].image} className="w-full h-full object-contain object-center rounded-lg" alt="Darshify"/>
                    </div>
                    <div className="flex flex-col">
                        <h1>{allTracks[song].name}</h1>
                        <h1 className="text-[#929292]">Darsh Gandhi</h1>
                    </div>
                </div>

                {/* Center: Player buttons */}
                <div className="col-start-2 row-start-1 flex justify-center items-center">
                    <PlayerButtons playing={playing} setPlaying={setPlaying} song={song} setSong={setSong} currentTime={currentTime} setCurrentTime={setCurrentTime} totalSongs={allTracks.length}/>
                </div>

                {/* Right: Info tooltip icon */}
                <div className="col-start-3 row-start-1 flex items-center justify-end pr-5">
                    <div className="relative group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-[#929292] hover:text-white transition-colors cursor-help"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        <span className="absolute bottom-full right-0 mb-2 w-max max-w-[180px] bg-gray-800 text-white text-xs text-center px-3 py-1.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Just for show — this player doesn't actually play music!
                        </span>
                    </div>
                </div>

                {/* Timer left */}
                <div className="col-start-1 row-start-2 flex items-center justify-end mr-4">
                    <h1>
                        {Math.floor(currentTime/60)}:
                        {String(Math.trunc(currentTime % 60)).padStart(2, "0")}
                    </h1>
                </div>

                {/* Timer progress bar */}
                <div className="col-start-2 row-start-2 flex items-center w-full">
                    <div className="bg-[#4D4D4D] rounded-full h-2 w-full relative">
                        <a
                            className="bg-white h-2 rounded-full absolute top-0 left-0 transition-all duration-300"
                            style={{ width: `${(currentTime / upperLimit) * 100}%` }}
                        />
                        <Timer
                            upperLimit={upperLimit}
                            currentSeconds={currentTime}
                            setCurrentSeconds={setCurrentTime}
                            playing={playing}
                            onEnd={() => setSong((prev) => (prev + 1) % logos.length)}
                        />
                    </div>
                </div>

                {/* Timer right: total */}
                <div className="col-start-3 ml-4 row-start-2 flex justify-start items-center">
                    <h1>
                        {Math.floor(upperLimit/60)}:
                        {String(upperLimit % 60).padStart(2, "0")}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default function Home() {

    const [selected, setSelected] = useState(0);
    const [hoveredLang, setHoveredLang] = useState(null);
    const [song, setSong] = useState(0);
    const [showPlayer, setShowPlayer] = useState(false);

    const project1 = MyProjects[6];
    const project2 = MyProjects[4];
    const project3 = MyProjects[2];

    const onPlay = (index) => {
        setSong(index);
    };

    return (
    <>
    <Helmet>
        <title>Darsh Gandhi</title>
	<meta name="description" content="Hi, I'm Darsh Gandhi — a developer based in NZ." />
	<meta property="og:title" content="Darsh Gandhi | Developer" />
	<meta property="og:description" content="Hi, I'm Darsh Gandhi — a developer based in NZ." />
        <meta property="og:url" content="https://darshgandhi.dev" />
    </Helmet>
    <div className="flex flex-col overflow-x-hidden bg-black border-l-[14px] border-r-[14px]">
        <div
            className={`flex flex-col overflow-hidden min-h-screen transition-colors duration-800 overflow-y-scroll
            ${hoveredLang === "Python" ? "bg-gradient-to-t from-[#2B2D42] to-[#3A86FF]"
            : hoveredLang === "Java" ? "bg-gradient-to-t from-[#052449] to-[#2A1400]"
            : hoveredLang === "C" ? "bg-gradient-to-t from-[#001219] to-[#005F73]"
            : hoveredLang === "React" ? "bg-gradient-to-t from-[#0A0A0A] to-[#00D8FF]"
            : hoveredLang === "C#" ? "bg-gradient-to-t from-[#68217A] to-[#9B4F96]"
            : hoveredLang === "Docker" ? "bg-gradient-to-t from-[#1D63ED] to-[#FF5722]"
            : hoveredLang === "TypeScript" ? "bg-gradient-to-t from-[#AAAAAA] to-[#0079CA]"
            : hoveredLang === "CSS" ? "bg-gradient-to-t from-[#001B2E] to-[#2965F1]"
            : selected === 1 ? "bg-gradient-to-t from-[#222222] to-[#121212]"
            : "bg-gradient-to-t from-[#121212] to-[#052449]"}`}
        >

        <div className="bg-black p-2 flex items-center relative">
            <HomeIcon size={32} color="white" />
            <div className="text-white absolute left-1/2 transform -translate-x-1/2 font-[Myfont] font-medium text-[30px] flex flex-row items-center gap-2">
                <img src={DarshifyIcon} className="w-8 h-8" alt="Darshify"/>
                <h1 className="text-[#1ED760]">Darshify</h1>
            </div>
        </div>

            <div className="flex flex-col items-center justify-between mx-auto py-5 lg:py-0">
                <Title />
            </div>



            <div className="flex-1 overflow-y-auto px-2 md:px-10 pt-5 md:pt-0 pb-[140px]">
                <Buttons selected={selected} setSelected={setSelected} />
                <div className="p-4 md:p-8">
                    {selected === 0 && (
                        <>
                            <ProgrammingLanguages
                                setHoveredLang={setHoveredLang}
                                onPlay={(index) => setSong(index)}
                            />
                            <h1 className="pt-5 text-white text-2xl font-[MyFont] font-medium">Featured Projects</h1>
                            <div className="flex flex-row flex-wrap gap-4 justify-center w-full">
                                <Banner
                                    title={project1.name}
                                    subtitle={project1.subtitle}
                                    thumbnail={project1.thumbnail}
                                    image={project1.image}
                                    description={project1.description}
                                    onClick={() => window.open(project1.url, "_blank")}
                                />
                                <Banner
                                    title={project2.name}
                                    subtitle={project2.subtitle}
                                    thumbnail={project2.thumbnail}
                                    image={project2.image}
                                    description={project2.description}
                                    onClick={() => window.open(project2.url, "_blank")}
                                />
                                <Banner
                                    title={project3.name}
                                    subtitle={project3.subtitle}
                                    thumbnail={project3.thumbnail}
                                    image={project3.image}
                                    description={project3.description}
                                    onClick={() => window.open(project3.url, "_blank")}
                                />
                            </div>
                        </>
                    )}
                    {selected === 1 && <AboutMe onPlay={onPlay}/>}
                    {selected === 2 && <Projects />}
                </div>
            </div>
        <MusicPlayer song={song} setSong={setSong} showPlayer={showPlayer} setShowPlayer={setShowPlayer}/>
        </div>
    </div>
    </>
  );
}
