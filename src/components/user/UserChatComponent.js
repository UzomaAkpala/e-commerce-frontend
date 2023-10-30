import "../../chats.css";

function UserChatComponent() {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <i class="bi bi-x-circle close"></i>
      </label>
    </>
  );
}

export default UserChatComponent;
