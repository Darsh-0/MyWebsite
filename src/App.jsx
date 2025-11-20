import { useState } from 'react'
import resumeIcon from './assets/resume.svg'
import linkedonIcon from './assets/linkedon.svg'
import githubIcon from './assets/github.svg'
import gmailIcon from './assets/gmail.svg'

function Title() {
    return (
        <div className="">
            <h1 className="text-white pt-10 pl-10">Welp... Didn't expect someone to end up here...</h1>
            <h1 className="text-white pl-10 text-7xl">Whassup, I'm <span className="underline">Darsh</span>.</h1>
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
      xl:grid-cols-8     /* Extra large: full 8 per row */
      pt-10 place-items-center"
    >
      {logos.map((logo) => (
        <a href={logo.url} className="bg-blue-300 p-6 m-4 rounded-4xl">
            <img key={logo.image} src={logo.image} alt={logo.name} className="object-contain h-40 max-w-full transition-transform hover:scale-110" />
        </a>
      ))}
    </div>
  );
}

function Socials() {
  const logos = [
    { image: linkedonIcon, url: "https://www.linkedin.com/in/darsh-gandhi-5bbaa92b2/", name: "Linkedon" },
    { image: resumeIcon, url: "resume", name: "Resume" },
    { image: githubIcon, url: "https://github.com/Darsh-0", name: "Github" },
  ];

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("Darsh.gandhi12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-row justify-end gap-4 p-4">
        {logos.map((logo) => (
        <button
            key={logo.name}
            className="hover:bg-gray-400 text-black font-bold py-2 px-4 rounded flex items-center"
            onClick={() => window.open(logo.url, "_blank")}
        >
            <img src={logo.image} alt={logo.name} className="w-16 h-16" />
        </button>
        ))}

        {/* Gmail button wrapper */}
        <div className="relative group">
            <button key="Gmail" onClick={copyEmail} className="hover:bg-gray-400 text-black font-bold py-2 px-4 rounded flex items-center">
                <img src={gmailIcon} alt="Gmail" className="w-20 h-20" />
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



export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-600 overflow-x-hidden columns-2">
        <div className="flex flex-col md:flex-row items-center justify-between pr-25">
            <Title />
            <Socials />
        </div>


        <div className="p-8 m-10 bg-sky-600 items-center rounded-2xl">
            <h2>I'm currently a 3rd year student at the University Of Canterbury studying Software Engineering</h2>
            <ProgrammingLanguages />
        </div>
    </div>
  );
}
