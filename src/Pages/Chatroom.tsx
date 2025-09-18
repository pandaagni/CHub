import Chatbox from "../Components/Chatbox";
import ChatList from "../Components/ChatList";
import "../Styles/Chatroom.css"; // Assuming you have a CSS file for styling

function Chatroom() {
  return (
    <div className="chatroom">
      <div className="chatlist" >
        <ChatList />
      </div>
      <div className="chatbox" >
        <Chatbox />
      </div>
      
    </div>
  );
}

export default Chatroom;