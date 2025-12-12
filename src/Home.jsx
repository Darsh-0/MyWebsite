import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

import DarshImage from './assets/aboutme/me.jpg';

import cIcon from './assets/languages/c.png';
import cssIcon from './assets/languages/css.png';
import htmlIcon from './assets/languages/html.png';
import javaIcon from './assets/languages/java.png';
import javascriptIcon from './assets/languages/javascript.png';
import pythonIcon from './assets/languages/python.png';
import reactIcon from './assets/languages/react.png';
import tailwindIcon from './assets/languages/tailwind.png';


function Title() {
    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-tr from-[#010203] to-transparent h-auto w-full rounded-md md:m-10 pb-5 md:pb-0 columns-2 items-start justify-start md:pt-0">
            <a className="p-4 md:pl-4 w-[305px] h-[305px] mx-auto md:mx-0">
                <img src="https://placehold.co/305x305" alt="Placeholder"></img>
            </a>
            <div className="flex flex-col md:pl-10 items-center md:items-start text-center md:text-left">
                <h1 className="text-white pt-10 font-[MyFont] font-ultrabold">You are currently listening to</h1>
                <h1 className="text-white text-7xl font-[MyFont] font-medium">Hey, I'm <span className="underline">Darsh</span>!</h1>
                <h1 className="text-white pt-5 font-[MyFont] font-ultrabold md:pb-0 pb-3 ml-3 mr-3">I'm currently a 3rd year student at the University of Canterbury studying Software Engineering</h1>
                <Socials />
            </div>
        </div>
    );
}

function ProgrammingLanguages({ setHoveredLang, onPlay }) {
  const logos = [
      {image: pythonIcon, url:"https://www.python.org/", name:"Python"},
      {image: javaIcon, url:"https://www.java.com/en/", name:"Java"},
      {image: cIcon, url:"https://www.c-language.org/", name:"C"},
      {image: reactIcon, url:"https://react.dev/", name:"React"},
      {image: tailwindIcon, url:"https://tailwindcss.com/", name:"Tailwind"},
      {image: htmlIcon, url:"https://www.w3.org/html/", name:"HTML"},
      {image: javascriptIcon, url:"https://javascript.info/", name:"JavaScript"},
      {image: cssIcon, url:"https://www.w3.org/Style/CSS/Overview.en.html", name:"CSS"}
  ];

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
        <a key={logo.name} href={logo.url} onMouseEnter={() => setHoveredLang(logo.name)} onMouseLeave={() => setHoveredLang(null)} className="relative group flex flex-row items-center bg-[#FFFFFF20] rounded-md w-full transition-transform duration-50 hover:scale-105 gap-5">
            <img key={logo.image} src={logo.image} alt={logo.name} className="object-contain h-12 w-12 md:h-20 md:w-20 bg-white p-2 rounded-l-md shadow-[10px_0_20px_rgba(0,0,0,0.4)]" />
            <h1 className="font-[Myfont] text-white mr-30 text-[17px] md:text-[20px] font-normal">{logo.name}</h1>
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

function AboutMe() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
            <div className="flex flex-row bg-gradient-to-t from-[#650A00] to-[#913000] rounded-lg flex-1 p-5 gap-5 items-center">
                <div>
                    <h1 className="pl font-[Myfont] font-medium text-white text-3xl">
                        Who I Am?
                    </h1>
                    <h1 className="pt-2 font-[Myfont] font-light text-white">
                        I'm Darsh Gandhi 20 year old Software Engineering student at The{" "}
                        <a href="https://www.canterbury.ac.nz/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                            University of Canterbury
                        </a>{" "}
                        with the Hiranga Scholarship after completing the International Baccalaureate Program.
                        I've gotten more into programming and Software Engineering after starting
                        university and making fun side projects.
                    </h1>
                </div>

                <div className="relative inline-block group">
                    <img src={DarshImage} className="rounded-md w-222 h-auto" />
                    <div className="absolute bottom-1 right-1">
                        <PlayButton size={50}/>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-t from-[#073D00] to-[#275E00] rounded-lg flex flex-col flex-1 p-5 grid-cols-1">
                <h1 className="pl font-[Myfont] font-medium text-white text-3xl">
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
            <div className="bg-gradient-to-t from-[#362870] to-[#524893] rounded-lg flex flex-col flex-1 p-5 grid-cols-1">
                <h1 className="pl font-[Myfont] font-medium text-white text-3xl">
                    Hobbies / Interest
                </h1>
                <h1 className="pt-2 font-[Myfont] font-light text-white">
                  My interests outside of Software Engineering include:
                </h1>
                <ul className="list-disc pl-5 pt-2 text-white space-y-1 font-[Myfont] font-light">
                    <li>Football</li>
                    <li>Snowboarding</li>
                    <li>Gym</li>
                    <li>Cooking</li>
                    <li>Chess (rated 1700+ on Chess.com)</li>
                    <li>Photoshop / Premiere Pro</li>
                    <li>Listening to music</li>
                </ul>

            </div>
        </div>
    );
}


function Projects() {
    const MyProjects = [
        {name: "Spotify Manager Bot", image: SpotifyManagerIcon, url:"https://github.com/Darsh-0/Spotify-Manager-Bot"},
        {name: "Coffee Catcher", image: CoffeeCatcherIcon, url:"https://github.com/Darsh-0/Coffee_Catcher"},
        {name: "Portofio Website", image: DarshifyIcon, url:"https://github.com/Darsh-0/MyWebsite"},
        {name: "Pong On UCFK4 Microcontroller", image: UCFKIcon, url:"https://github.com/Darsh-0/Pong-on-UCFK4"},
        {name: "TakeAHike", image: TakeAHikeIcon, url:"https://github.com/Darsh-0/TakeAHike"},
    ];
    return (
        <div className="grid grid-cols-1 justify-items-center gap-4 md:flex md:flex-row md:gap-4 md:justify-start">
            {MyProjects.map((project) => (
                <button key={project.image} className="flex flex-col items-center p-5 max-w-[170px] rounded-md hover:bg-[#1E1E1E] cursor-pointer" onClick={() => window.open(project.url, "_blank")}>
                    <div className="rounded-lg overflow-hidden w-[170px] h-[170px] bg-[#00000030] flex justify-center items-center">
                        <img key={project.image} src={project.image} alt={project.name} className="max-w-[150px] max-h-[150px] object-contain"/>
                    </div>
                    <div className="flex flex-col pt-5 text-center">
                        <h1 className="text-[#A0A0A0] whitespace-normal">{project.name}</h1>
                    </div>
                </button>
            ))}
        </div>
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
  const buttons = ["Languages", "About Me", "Projects"];

  return (
    <div className="w-full flex justify-center md:justify-start gap-4 md:pl-10">
      {buttons.map((btn, index) => (
        <button
          key={btn}
          onClick={() => {
              setSelected(index);
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
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

function MusicPlayer({ song, setSong }) {
    const [currentTime, setCurrentTime] = useState(0);
    const upperLimit = 123;
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        setCurrentTime(0);
    }, [song]);


    const logos = [
        {image: pythonIcon, url:"https://www.python.org/", name:"Python"},
        {image: javaIcon, url:"https://www.java.com/en/", name:"Java"},
        {image: cIcon, url:"https://www.c-language.org/", name:"C"},
        {image: reactIcon, url:"https://react.dev/", name:"React"},
        {image: tailwindIcon, url:"https://tailwindcss.com/", name:"Tailwind"},
        {image: htmlIcon, url:"https://www.w3.org/html/", name:"HTML"},
        {image: javascriptIcon, url:"https://javascript.info/", name:"JavaScript"},
        {image: cssIcon, url:"https://www.w3.org/Style/CSS/Overview.en.html", name:"CSS"}
    ];

    return (
        <div className="grid grid-cols-3 grid-rows-2 fixed bottom-0 left-0 pt-4 w-full bg-black text-white hidden md:grid">
            {/* Left: Song info */}
            <div className="col-start-1 row-start-1 row-span-2 pl-5 flex items-center gap-4 pb-3">
                <div className="bg-white rounded-md inline-block">
                    <img src={logos[song].image} className="w-16 h-16 p-1" alt="Darshify"/>
                </div>
                <div className="flex flex-col">
                    <h1>{logos[song].name}</h1>
                    <h1 className="text-[#929292]">Darsh Gandhi</h1>
                </div>
            </div>

            {/* Center: Player buttons */}
            <div className="col-start-2 row-start-1 flex justify-center items-center">
                <PlayerButtons playing={playing} setPlaying={setPlaying}/>
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
    );
}

export default function Home() {

    const [selected, setSelected] = useState(0);
    const [hoveredLang, setHoveredLang] = useState(null);
    const [song, setSong] = useState(0);

    const onPlay = (index) => {
        setSong(index);
    };

    return (
    <div className="flex flex-col overflow-x-hidden bg-black border-l-[14px] border-r-[14px]">
        <div
            className={`flex flex-col overflow-hidden min-h-screen transition-colors duration-800 overflow-y-scroll
            ${hoveredLang === "Python" ? "bg-gradient-to-t from-[#2B2D42] to-[#3A86FF]"
            : hoveredLang === "Java" ? "bg-gradient-to-t from-[#052449] to-[#2A1400]"
            : hoveredLang === "C" ? "bg-gradient-to-t from-[#001219] to-[#005F73]"
            : hoveredLang === "React" ? "bg-gradient-to-t from-[#0A0A0A] to-[#00D8FF]"
            : hoveredLang === "Tailwind" ? "bg-gradient-to-t from-[#021F2A] to-[#38BDF8]"
            : hoveredLang === "HTML" ? "bg-gradient-to-t from-[#2F0A00] to-[#FF5722]"
            : hoveredLang === "JavaScript" ? "bg-gradient-to-t from-[#2D2A00] to-[#F7DF1E]"
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

            <div className="flex flex-col items-center justify-between mx-auto">
                <Title />
            </div>



            <div className="flex-1 overflow-y-auto px-2 md:px-10 pt-5 md:pt-0 pb-[140px]">
                <Buttons selected={selected} setSelected={setSelected} />
                <div className="p-4 md:p-8">
                    {selected === 0 && <ProgrammingLanguages setHoveredLang={setHoveredLang} onPlay={(index) => setSong(index)}/>}
                    {selected === 1 && <AboutMe />}
                    {selected === 2 && <Projects />}
                </div>
            </div>
        <MusicPlayer song={song} setSong={setSong}/>
        </div>
    </div>
  );
}
