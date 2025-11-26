import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // your main page
import Resume from "./Resume";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}