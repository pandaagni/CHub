import { useEffect, useState } from "react";
import {fetchChatRooms, createChatRoom} from "../Services/Chatroom";

function ChatList() {
  const [chatRooms, setChatRooms] = useState<any[]>([]);
  useEffect(() => {
    console.log("ChatList component mounted");
    const getChatRooms = async () => {
      try {
        const rooms = await fetchChatRooms();
        setChatRooms(rooms);
      } catch (error) {
        console.error("Error fetching chat rooms:", error);
      }
    };
    getChatRooms();    
  }, []);

  const createRoom = async(event: any) => {
    let name = event.target.name;

    try {
      const newRoom = await createChatRoom(name.value);
      setChatRooms((prevRooms) => [...prevRooms, newRoom]);
    } catch (error) {
      console.error("Error creating chat room:", error);
    }
  };
  return (
    <div className="chat-list">
      <h2>Chat List</h2>
      <form onSubmit={createRoom}>
        <input type="text" name="name" required />
        <input type="submit" value="+" />
      </form>
    </div>
  );
}

export default ChatList;