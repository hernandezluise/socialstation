import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [firstName, setFirstName] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                navigate("/login");
            }
            const { data } = await axios.post(
                "http://localhost:8000",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            setFirstName(user);
            return status
                ? toast( {
                    position: "",
                })
                : (removeCookie("token"), navigate("/login"));
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
        removeCookie("token");
        navigate("/login");
    };
    return (
        <>
            <div className="homePage">
            <ToastContainer />
                <h4>
                    {" "}
                    Welcome <span>{firstName}</span>
                </h4>
                <button onClick={Logout}>LOGOUT</button>
            </div>
        </>
    );
};

export default Home;
