import { useNavigate } from "react-router-dom";
import HomeIcon from './HomeIcon';
import resume from './assets/pdfs/Resume.pdf';
import DarshifyIcon from './assets/projects/darshify.png'

export default function Resume() {
    return (
        <div className="flex flex-col h-screen bg-black border-l-[14px] border-r-[14px]">
            <div className="flex flex-col bg-gradient-to-t from-[#121212] to-[#052449] rounded-2xl overflow-hidden flex-1">
                <div className="bg-black p-2 relative flex items-center">
                    <HomeIcon size={32} color="white" />
                    <div className="text-white absolute left-1/2 transform -translate-x-1/2 font-[Myfont] font-medium text-[30px] flex flex-row items-center gap-2">
                        <img src={DarshifyIcon} className="w-8 h-8" alt="Darshify"/>
                        <h1 className="text-[#1ED760]">Darshify</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-1 p-10">
                    <div className="w-full max-w-5xl h-full bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                        <iframe src={resume} type="application/pdf" width="100%" height="100%" className="w-full h-full">
                            <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center text-white">
                                <p className="mb-4 text-lg">
                                    The PDF viewer could not load.
                                </p>

                                <a href={resume} download className="px-6 py-3 bg-[#1ED760] text-black font-semibold rounded-xl hover:opacity-90 transition">
                                    Download PDF
                                </a>
                            </div>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
  );
}
