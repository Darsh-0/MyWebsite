import { useState, useRef } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

export default function PlayerButtons({playing, setPlaying}) {

    return (
        <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center w-10 h-10 hover:scale-107 duration-100 cursor-pointer ">
                <svg viewBox="0 0 16 16" className="fill-[#B3B3B3] m-1" width={20} height={20}>
                    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7z"/>
                </svg>
            </div>
            <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 hover:scale-107 hover:duration-100 cursor-pointer active:scale-93 active:bg-[#B9B9B9] active:duration-70" onClick={() => setPlaying(!playing)}>
                <svg viewBox="0 0 16 16" className="fill-black m-1" width={20} height={20}>
                    {playing === true && <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"/>}
                    {playing === false && <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"/>}

                </svg>
            </div>
            <div className="flex items-center justify-center w-10 h-10 hover:scale-107 duration-100 cursor-pointer">
                <svg viewBox="0 0 16 16" className="fill-[#B3B3B3] m-1" width={20} height={20}>
                    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"/>
                </svg>
            </div>
        </div>
    );
}