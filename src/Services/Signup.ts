import { API_URL } from "../Constants/constant"

export const Signup = async (formData: FormData) => {
    try {
        const payload = {
            userName: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
        };
        const response = await fetch(API_URL + "/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
    }
}