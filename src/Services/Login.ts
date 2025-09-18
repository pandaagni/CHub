import { API_URL } from "../Constants/constant"

export const Login = async (formData: FormData) => {
    try {
        const payload = {
            email: formData.get("email"),
            password: formData.get("password"),
        };
        const response = await fetch(API_URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const res = await response.json();
        localStorage.setItem("token", res.token);
        localStorage.setItem("userId", res.userId);
        return res;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
    }
}