import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import EidImage from '../images/69133-moon-ramadan-lantern-free-download-png-hd.png'

export default function Achievements() {
    return (
        <div className="achievement">
            <h2>Achievements</h2>
            <OwlCarousel autoplay autoplayTimeout={3000} smartSpeed={3000} className='owl-theme' loop margin={10} nav>
                <div className='item'>
                    <img src={EidImage} alt="id imag" />
                </div>
                <div className='item'>
                    <img src={EidImage} alt="id imag" />
                </div>
                <div className='item'>
                    <img src={EidImage} alt="id imag" />
                </div>
            </OwlCarousel>;
        </div>
    )
}
