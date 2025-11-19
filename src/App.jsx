import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Title() {
    return (
        <div>
            <h1 className="text-white pt-10 pl-10">Didn't expect someone to end up here...</h1>
            <h1 className="text-white pl-10 text-7xl">Whassup, I'm <span className="underline">Darsh</span>.</h1>
        </div>
    );
}

function ProgrammingLanguages() {
    return (
        <div className="flex space-x-10 pt-10">
            <img
                className="max-w-20 max-h-20"
                src="https://brandslogos.com/wp-content/uploads/images/large/python-logo.png"
                alt="Python Logo"
            />
            <img
                className="max-w-20 max-h-20"
                src="https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png"
                alt="Java Logo"
            />
            <img
                 className="max-w-20 max-h-20"
                 src="https://www.pngkit.com/png/full/101-1010012_c-programming-icon-c-programming-language-logo.png"
                 alt="Java Logo"
            />
        </div>
  );
}

function App() {
  return (
    <div className="flex flex-col h-screen bg-purple-600 overflow-x-hidden">
        <Title />
        <div className="p-8 m-10 bg-purple-300 items-center">
            <h2>I'm currently a 3rd year student at the University Of Canterbury studying Software Engineering</h2>
            <ProgrammingLanguages />
        </div>
    </div>
  );
}

export default App;
