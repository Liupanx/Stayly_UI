import './chat.scss';
import { useState } from 'react';

function Chat() {
    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://images.pexels.com/photos/16972913/pexels-photo-16972913/free-photo-of-close-up-of-a-little-cute-dog.jpeg" alt="" />
                    <span>Claire</span>
                    <p>Hi, is it still avaliable</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/16972913/pexels-photo-16972913/free-photo-of-close-up-of-a-little-cute-dog.jpeg" alt="" />
                    <span>Claire</span>
                    <p>Hi, is it still avaliable</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/16972913/pexels-photo-16972913/free-photo-of-close-up-of-a-little-cute-dog.jpeg" alt="" />
                    <span>Claire</span>
                    <p>Hi, is it still avaliable</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/16972913/pexels-photo-16972913/free-photo-of-close-up-of-a-little-cute-dog.jpeg" alt="" />
                    <span>Claire</span>
                    <p>Hi, is it still avaliable</p>
                </div>
            </div>
            {chat && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="" alt="" />
                            Panxin Liu
                        </div>
                        <span className="close" onClick={() => setChat(null)}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatMessage own">
                            <p>Hi there! It's still avaliable!</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Hi there! It's still avaliable!</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Hi there! It's still avaliable!</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Hi there! It's still avaliable!</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Chat;