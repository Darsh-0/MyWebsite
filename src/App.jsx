import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";

console.log("You shouldn't be here😐");

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
		<Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
