import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import resumeIcon from './assets/resume.svg'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import gmailIcon from './assets/gmail.svg'

function Title() {
    return (
        <div className="flex flex-row bg-gradient-to-tr from-[#010203] to-transparent h-80 w-full rounded-md m-10 columns-2 items-start justify-start">
            <a className="pt-4 pl-4">
                <img src="https://placehold.co/290x290" alt="Placeholder"></img>
            </a>
            <div className="flex flex-col pl-10">
                <h1 className="text-white pt-10 font-[MyFont] font-ultrabold">Welp... Didn't expect someone to end up here...</h1>
                <h1 className="text-white text-7xl font-[MyFont] font-medium">Whassup, I'm <span className="underline">Darsh</span>.</h1>
                <h1 className="text-white pt-5 font-[MyFont] font-ultrabold">I'm currently a 3rd year student at the University of Canterbury studying Software Engineering</h1>
                <Socials />
            </div>
        </div>
    );
}

function ProgrammingLanguages() {
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
      md:grid-cols-4     /* Medium screens */
      auto-rows-fr
      place-items-center
      w-full
      gap-5"
    >
      {logos.map((logo) => (
        <a href={logo.url} className="flex flex-row items-center bg-[#FFFFFF20] rounded-md w-full transition-transform hover:scale-105 gap-5">
            <img key={logo.image} src={logo.image} alt={logo.name} className="object-contain h-20 max-w-full transition-transform hover:scale-110 bg-white p-2" />
            <h1 className="font-[Myfont] text-white">{logo.name}</h1>
        </a>
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






export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-t from-[#121212] to-[#052449] overflow-x-hidden columns-2">
        <div className="flex flex-col md:flex-row items-center justify-between pr-25">
            <Title />
        </div>
        <div>

        </div>


        <div className="p-8 m-10 items-center rounded-2xl">
            <ProgrammingLanguages />
        </div>
    </div>
  );
}
