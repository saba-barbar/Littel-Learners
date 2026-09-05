import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import StudentLife from "./pages/studentLife";
import Contact from "./pages/Contact";

import NavBar from "./SharedComponent/NavBar/NavBar";
import Footer from "./SharedComponent/Footer/Footer";

import LoadingPage from "./components/LoadingPage/LoadingPage";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/student-Life" element={<StudentLife />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;