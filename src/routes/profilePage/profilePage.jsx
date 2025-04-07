import './profilePage.scss';
import List from '../../components/list/List';

function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar:
                            <img src="https://images.pexels.com/photos/16972913/pexels-photo-16972913/free-photo-of-close-up-of-a-little-cute-dog.jpeg" alt="User Avatar" />
                        </span>
                        <span>Username: <b>Panxin Liu</b></span>
                        <span>E-mail: <b>liupanx@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper"></div>
            </div>
        </div>
    );
}

export default ProfilePage;