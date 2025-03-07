import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Your Next Home Quick and Samrt!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem fugiat fugit quibusdam incidunt blanditiis provident veritatis assumenda, neque hic. Voluptate ipsam voluptas nam pariatur magni reprehenderit soluta corporis enim!
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16</h1>
                            <h2>Years</h2>
                        </div>
                        <div className="box">
                            <h1>2000</h1>
                            <h2>Comments</h2>
                        </div>
                        <div className="box">
                            <h1>100,000</h1>
                            <h2>Houses</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;