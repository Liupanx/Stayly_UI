import './slider.scss';

function Slider({ images = [] }) {
    if (!images.length) return null;
    return (
        <div className="slider">
            {/* <div className="fullSlider">
                <div></div>
            </div> */}
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