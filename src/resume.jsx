import { useNavigate } from "react-router-dom";
import HomeIcon from './HomeIcon';
import resume from './assets/pdfs/Resume.pdf';

export default function Resume() {
    return (
        <div className="flex flex-col h-screen bg-black border-l-[14px] border-r-[14px]">
            <div className="flex flex-col bg-gradient-to-t from-[#121212] to-[#052449] rounded-2xl overflow-hidden flex-1">
                <div className="bg-black p-2">
                    <HomeIcon size={32} color="white" />
                </div>
                <div className="flex justify-center items-center flex-1 p-10">
                    <div className="w-full max-w-5xl h-full bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                        <object data={resume} type="application/pdf" width="100%" height="100%" className="w-full h-full">
                            <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                        </object>
                    </div>
                </div>
      </div>
    </div>
  );
}