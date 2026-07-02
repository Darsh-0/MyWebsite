export default function Banner({ title, subtitle, thumbnail, image, description, onClick }) {

    return (
        <button
            onClick={onClick}
            className="group relative flex flex-col justify-end bg-[#181818] hover:bg-[#282828] rounded-2xl w-full max-w-[280px] aspect-[3/4] overflow-hidden transition-all duration-150 hover:scale-[1.02] cursor-pointer text-left p-4"
        >
            {/* Background image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top darkening gradient - dark at top, fades to nothing by mid/lower */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

            {/* Top-left: thumbnail + title/subtitle */}
            <div className="relative z-10 flex flex-row items-center gap-3 self-start mb-auto mt-1 ml-1">
                <div className="w-11 h-11 rounded-md bg-black/50 flex items-center justify-center overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.6)] p-1">
                    <img
                        src={thumbnail}
                        alt=""
                        className="w-full h-full object-cover rounded-sm"
                    />
                </div>
                <div className="flex flex-col min-w-0">
                    <h1 className="font-[Myfont] font-normal text-white text-lg leading-tight truncate drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                        {title}
                    </h1>
                    <h1 className="font-[Myfont] font-light text-[#E0E0E0] text-sm truncate drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                        {subtitle}
                    </h1>
                </div>
            </div>

            {/* Bottom gradient + description */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <h1 className="relative z-10 font-[Myfont] text-[#E0E0E0] text-sm font-light text-base leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                {description}
            </h1>
        </button>
    );
}