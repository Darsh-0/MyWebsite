import { useState, useRef } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

export default function HomeIcon({ size = 24, color = "currentColor" }) {

    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;

    const [showTooltip, setShowTooltip] = useState(false);

    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        timeoutRef.current = setTimeout(() => setShowTooltip(true), 200); // 200ms delay
    };

    const handleMouseLeave = () => {
            clearTimeout(timeoutRef.current); // cancel pending tooltip
            setShowTooltip(false); // hide immediately
    };

    return (
        <div className="relative">
            <button onClick={() => navigate("/")} className="cursor-pointer" key="Home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="bg-[#1F1F1F] rounded-full w-15 h-15 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer hover:bg-[#2A2A2A]">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color}>
                        {currentPage === "/" ? <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z"/> : <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z"/>}
                    </svg>
                </div>
            </button>
            <span
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow transition-opacity duration-150 font-[Myfont]
                ${showTooltip ? "opacity-100" : "opacity-0"}`}
            >
                Home
            </span>
        </div>
    );
}