import { useState } from "react";
import "../Styles/Home.css";
import FormComponent from "../Components/FormComponent";
import {Login} from "../Services/Login";
import {Signup} from "../Services/Signup";

function Home() {
    const [activeComponent, setActiveComponent] = useState<string>("login");

    const formTypes: any = {
        login: {
            elements: [
                {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email",
                    required: true,
                    defaultValue: "",
                    name: "email",
                },
                {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                    required: true,
                    defaultValue: "",
                    name: "password",
                },
            ],
            action: Login,
            button: "Log In",
        },
        signup: {
            elements: [
                {
                    label: "Username",
                    type: "text",
                    placeholder: "Enter your username",
                    required: true,
                    defaultValue: "",
                    name: "username",
                },
                {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email",
                    required: true,
                    defaultValue: "",
                    name: "email",
                },
                {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                    required: true,
                    defaultValue: "",
                    name: "password",
                },
            ],
            action: Signup,
            button: "Sign Up",
        },
    };
    const toggleComponent = (type: string) => {
        setActiveComponent(type);
    };
    return (
        <div className="home">
            <div className="tabs">
                <button onClick={() => toggleComponent('login')}>
                    LogIn
                </button>
                <button onClick={() => toggleComponent('signup')}>
                    SignUp
                </button>
            </div>
                <FormComponent key={activeComponent} source={formTypes[activeComponent]} />
        </div>
    );
}

export default Home;