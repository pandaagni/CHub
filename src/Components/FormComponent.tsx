import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormComponentSource } from "../types/interfaces.tsx";
import "../Styles/FormComponent.css";

function FormComponent({ source }: { source: FormComponentSource }) {
    const [error_message, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const result = await source.action(formData);
        if (result) {
            navigate("/chatroom");
            // window.location.href = "/chatroom";
        } else {
            setErrorMessage("An error occurred during form submission.");
        }
        
        // Handle form submission
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <div className="form-content">
                {source.elements.map((element, index) => (
                    <div className="element" key={index}>
                        <label>{element.label}</label>
                        <input
                            type={element.type}
                            placeholder={element.placeholder}
                            name={element.name}
                            defaultValue={element.defaultValue}
                            required={element.required}
                            className="input"
                        />
                    </div>
                ))}
            </div>
            <input
                className="button"
                type="submit"
                value={source.button}
            />
            <div className="error-message">
                {error_message && <p>{error_message}</p>}
            </div>
        </form>
    );
}

export default FormComponent;