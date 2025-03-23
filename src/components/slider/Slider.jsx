import './slider.scss';

function Slider({ images = [] }) {
    if (!images.length) return null;
    return (
        <div className="slider">
            <div className="fullSlider">
                <div className='arrow'>
                    <img src="/arrow.png" alt="" />
                </div>
                <div className='imgContainer'>
                    <img src={images[0]} alt="" />
                </div>
                <div className='arrow'>
                    <img src="/arrow.png" className='right' alt="" />
                </div>
            </div>
            <div className="bigImage">
                <img src={images[0]} alt="" />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img src={image} alt="" key={index} />
                ))}
            </div>
        </div>
    )
}

export default Slider;