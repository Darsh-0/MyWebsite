import { useState, useRef } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

export default function PlayButton({ size = 12 }) {
    const iconSize = size * 0.5;

    return (
        <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <div
                className="bg-[#3BE276] rounded-full flex items-center justify-center" style={{ width: `${size}px`, height: `${size}px` }}>
                <svg viewBox="0 0 16 16" className="fill-black" width={iconSize} height={iconSize}>
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"/>
                </svg>
            </div>
        </div>
    );
}


