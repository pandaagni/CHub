import { API_URL } from "../Constants/constant";

export const fetchChatRooms = async () => {
    try {
        let userId = localStorage.getItem("userId");
        let token = localStorage.getItem("token");
        if (!userId || !token) {
            alert("You are not logged in. Please log in to access chat rooms.");
            window.location.href = "/"; // Redirect to login page
            return [];
        }
        let response = await fetch( `${API_URL}/users/${userId}/chatrooms`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let chatRooms = await response.json();
        return chatRooms;
    } catch (error) {
        console.error("Error fetching chat rooms:", error);
        return [];
    }
}

export const createChatRoom = async (name: string) => {
    try {
        let userId = localStorage.getItem("userId");
        let token = localStorage.getItem("token");
        if (!userId || !token) {
            alert("You are not logged in. Please log in to create a chat room.");
            window.location.href = "/"; // Redirect to login page
            return;
        }
        let response = await fetch(`${API_URL}/chatrooms`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ name, user: userId }),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let chatRoom = await response.json();
        return chatRoom;
    } catch (error) {
        console.error("Error creating chat room:", error);
    }
}