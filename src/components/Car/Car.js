import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import yaris1 from '../../assets/20190114_113258.jpg';
import yaris2 from '../../assets/20190114_113311.jpg';

import './Car.css';

const Car = (props) => {
    return (
        <div className="Car">
            <h1 style={{textAlign: 'center'}}>Toyota Yaris 1.0</h1>

            <ul className="Features">
                <li>silnik 1.0,</li>
                <li>przebieg: 164800 km</li>
                <li>kolor srebrny metalik,</li>
                <li>klimatyzacja manualna,</li>
                <li>poduszki powietrzne dla kierowcy i pasażera,</li>
                <li>ABS,</li>
                <li>radio z CD</li>
                <li>centralny zamek i alarm,</li>
                <li>data pierwszej rejestracji 24.12.2003, kupiony w Polskim salonie, Kasia jest trzecim właścicielem,</li>
                <li>ważne badania techniczne do sierpnia 2019 i OC do lipca 2019,</li>
                <li>co roku przegląd i wykonywane wszelkie naprawy eksploatacyjne</li>
                <li>w listopadzie 2018 wymieniony akumulator</li>
                <li>w pakiecie opony zimowe/letnie</li>
            </ul>
            <ul>
                <li>ma delikatne problemy blacharskie - korozja</li>
                <li>nie działa tylni spryskiwacz szyb</li>
            </ul>
            <ul>
                <li>cena dla znajomych 5000 (na otomoto takie modele zaczynają się od 7500)</li>
            </ul>

            <Carousel autoPlay showArrows={true}>
            <div>
                <img src={yaris1} />
            </div>
            <div>
                <img src={yaris2} />
            </div>
            </Carousel>
        </div>
    );
}

export default Car;