import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import resumeIcon from './assets/resume.svg';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import gmailIcon from './assets/gmail.svg';
import HomeIcon from './HomeIcon';;

import SpotifyManagerIcon from './assets/projects/SpotifyManager.png';
import CoffeeCatcherIcon from './assets/projects/CoffeeCatcher.png';
import UCFKIcon from './assets/projects/UCFK.png';
import TakeAHikeIcon from './assets/projects/TakeAHike.png';

import DarshImage from './assets/aboutme/me.jpg';

function Title() {
    return (
        <div className="flex flex-row bg-gradient-to-tr from-[#010203] to-transparent h-auto w-full rounded-md m-10 pb-5 columns-2 items-start justify-start">
            <a className="pt-4 pl-4 w-[305px] h-[305px]">
                <img src="https://placehold.co/305x305" alt="Placeholder"></img>
            </a>
            <div className="flex flex-col pl-10">
                <h1 className="text-white pt-10 font-[MyFont] font-ultrabold">Welp... Didn't expect someone to end up here...</h1>
                <h1 className="text-white text-7xl font-[MyFont] font-medium">Whassup, I'm <span className="underline">Darsh</span>!</h1>
                <h1 className="text-white pt-5 font-[MyFont] font-ultrabold">I'm currently a 3rd year student at the University of Canterbury studying Software Engineering</h1>
                <Socials />
            </div>
        </div>
    );
}

function ProgrammingLanguages({ hoveredLang, setHoveredLang }) {
  const logos = [
      {image: "https://brandslogos.com/wp-content/uploads/images/large/python-logo.png", url:"https://www.python.org/", name:"Python"},
      {image: "https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png", url:"https://www.java.com/en/", name:"Java"},
      {image: "https://www.pngkit.com/png/full/101-1010012_c-programming-icon-c-programming-language-logo.png", url:"https://www.c-language.org/", name:"C"},
      {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", url:"https://react.dev/", name:"React"},
      {image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png", url:"https://tailwindcss.com/", name:"Tailwind"},
      {image: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png", url:"https://www.w3.org/html/", name:"HTML"},
      {image: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png", url:"https://javascript.info/", name:"JavaScript"},
      {image: "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png", url:"https://www.w3.org/Style/CSS/Overview.en.html", name:"CSS"}
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
      {logos.map((logo) => (
        <a key={logo.name} href={logo.url} onMouseEnter={() => setHoveredLang(logo.name)} onMouseLeave={() => setHoveredLang(null)} className="flex flex-row items-center bg-[#FFFFFF20] rounded-md w-full transition-transform duration-50 hover:scale-105 gap-5">
            <img key={logo.image} src={logo.image} alt={logo.name} className="object-contain h-20 max-w-full bg-white p-2 rounded-l-md shadow-[10px_0_20px_rgba(0,0,0,0.4)]" />
            <h1 className="font-[Myfont] text-white mr-30 text-[20px] font-normal">{logo.name}</h1>
        </a>
      ))}
    </div>
  );
}

function AboutMe() {
    const gridsclassName = "rounded-lg flex flex-col flex-1 p-5";

    return (
        <div className="grid grid-cols-3 gap-10 pb-10">
            <div className={`bg-gradient-to-t from-[#650A00] to-[#913000] ${gridsclassName}`}>
                <h1 className="pl font-[Myfont] font-medium text-white text-3xl">
                    Who I Am?
                </h1>
                <h1 className="pt-2 font-[Myfont] font-light text-white">
                    I'm Darsh Gandhi 20 year old Software Engineering student at The {" "}
                    <a href="https://www.canterbury.ac.nz/"  className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                        University of Canterbury
                    </a>{" "}
                    with the Hiranga Scholarship after Completing the International Baccalaureate Program.
                    I've gotten more into programming and Software Engineering after starting
                    university and making fun side projects.
                </h1>
                <div className="flex justify-center mt-5">
                    <img src={DarshImage} className="w-40 rounded-md" />
                </div>
            </div>
            <div className={`bg-gradient-to-t from-[#073D00] to-[#275E00] ${gridsclassName}`}>
                <h1 className="pl font-[Myfont] font-medium text-white text-3xl">
                    Skills
                </h1>
                <h1 className="pt-2 font-[Myfont] font-light text-white">
                    I'm most confident programming in Python, Java and C.
                    I have had experience working on projects, developing Apps as groups.
                    Working with CI/CD pipelines to improve efficiency.
                    Programming using Microcontrollers and Embedded Systems.

                </h1>
                <div className="flex justify-center mt-5">
                    <img src={DarshImage} className="w-40 rounded-md" />
                </div>
            </div>
            <div className={`bg-gradient-to-t from-[#362870] to-[#524893] ${gridsclassName}`}>
                <h1 className="font-[Myfont] font-medium text-white">hi</h1>
            </div>
        </div>
    );
}


function Projects() {
    const MyProjects = [
        {name: "Spotify Manager Bot", image: SpotifyManagerIcon, url:"https://github.com/Darsh-0/Spotify-Manager-Bot"},
        {name: "Coffee Catcher", image: CoffeeCatcherIcon, url:"https://github.com/Darsh-0/Coffee_Catcher"},
        {name: "Portofio Website", image: "https://placehold.co/305x305", url:"https://github.com/Darsh-0/MyWebsite"},
        {name: "Pong On UCFK4 Microcontroller", image: UCFKIcon, url:"https://github.com/Darsh-0/Pong-on-UCFK4"},
        {name: "TakeAHike", image: TakeAHikeIcon, url:"https://github.com/Darsh-0/TakeAHike"},
    ];
    return (
        <div className="flex flex-row gap-4">
            {MyProjects.map((project) => (
                <button key={project.image} className="flex flex-col items-start p-5 max-w-50 rounded-md hover:bg-[#1E1E1E] cursor-pointer flex" onClick={() => window.open(project.url, "_blank")}>
                    <div className="rounded-lg overflow-hidden w-[170px] h-[170px] bg-[#00000030] overflow-hidden flex justify-center items-center">
                        <img key={project.image} src={project.image} alt={project.name} className="max-w-[170px] max-h-[170px] object-contain"/>
                    </div>
                    <div className="flex flex-col pt-5 text-left">
                        <h1 className="text-[#A0A0A0] whitespace-normal">{project.name}</h1>
                    </div>
                </button>
            ))}
        </div>
    );
}

function Socials() {
  const navigate = useNavigate();
  const logos = [
    { image: githubIcon, url: "https://github.com/Darsh-0", name: "Github", colour: "white" },
  ];

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("Darsh.gandhi12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-row gap-4 pt-10">

      {/* Resume button - green */}
      <button
        key="Resume"
        className="hover:bg-[#3BE477] transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-[#1ED760] bg-[#1ED760]"
        onClick={() => navigate("/resume")}
      >
        <img src={resumeIcon} alt="Resume" className="w-10 h-10" />
        <h1 className="pl-3 font-[Myfont] font-medium">Resume</h1>
      </button>

      {/* LinkedIn button - green */}
      <button
        key="Linkedin"
        className=" transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-gray-400 bg-transparent filter invert"
        onClick={() => window.open("https://www.linkedin.com/in/darsh-gandhi-5bbaa92b2/", "_blank")}
      >
        <img src={linkedinIcon} alt="Linkedin" className="w-10 h-10" />
        <h1 className="pl-3 font-[Myfont] font-medium">Linkedin</h1>
      </button>

      {/* GitHub button - transparent */}
      {logos.map((logo) => (
        <button
          key={logo.name}
          className="hover:bg-gray-400 transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-gray-400 bg-transparent filter invert"
          onClick={() => window.open(logo.url, "_blank")}
        >
          <img src={logo.image} alt={logo.name} className="w-10 h-10" />
          <h1 className="pl-3 font-[Myfont] font-medium">Github</h1>
        </button>
      ))}

      {/* Gmail button */}
      <div className="relative group">
        <button
          key="Gmail"
          onClick={copyEmail}
          className="hover:bg-gray-400 transform transition-transform duration-50 hover:scale-110 cursor-pointer text-black font-bold py-2 px-4 rounded-4xl flex items-center border border-gray-400 bg-transparent filter invert"
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
    <div className="flex gap-4 pl-10">
      {buttons.map((btn, index) => (
        <button
          key={btn}
          onClick={() => setSelected(index)} // select this button
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

export default function Home() {
    const [selected, setSelected] = useState(0);
    const [hoveredLang, setHoveredLang] = useState(null);
    return (
    <div className="flex flex-col h-screen overflow-x-hidden bg-black border-l-[14px] border-r-[14px]">
        <div
          className={`flex flex-col rounded-2xl overflow-hidden h-screen transition-colors duration-800
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

        <div className="bg-black p-2">
            <HomeIcon size={32} color="white" />
        </div>

        <div className="flex flex-col items-center justify-between pr-25 mx-auto">
            <Title />
        </div>



        <div className="px-10">
            <Buttons selected={selected} setSelected={setSelected} />
            <div className="p-8">
                {selected === 0 && <ProgrammingLanguages hoveredLang={hoveredLang} setHoveredLang={setHoveredLang}/>}
                {selected === 1 && <AboutMe />}
                {selected === 2 && <Projects />}
            </div>
            </div>
        </div>
    </div>
  );
}
