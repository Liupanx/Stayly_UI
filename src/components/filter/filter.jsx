import './filter.scss';

function Filter() {
    return (
        <div className='filter'>
            <h1>Search results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id="city" name='city' placeholder='City Location' />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">Any</option>
                        <option value="all">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        name="minPrice"
                        id="minPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="number"
                        name="maxPrice"
                        id="maxPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input
                        type="text"
                        name="bedroom"
                        id="bedroom"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <button>
                        <img src="/search.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filter;