import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import yaris1 from '../../assets/20190114_113258.jpg';
import yaris2 from '../../assets/20190114_113311.jpg';
import yaris4 from '../../assets/20190115_113958.jpg';
import yaris5 from '../../assets/20190115_114008.jpg';
import yaris6 from '../../assets/20190115_114020.jpg';

import './Car.css';

const Car = (props) => {
    const imgs = [yaris1, yaris2, yaris4, yaris5, yaris6].map(foto => {
        return (
        <div>
            <img src={foto} className="Image"/>
        </div>
        );
    });

    return (
        <div className="Car">
            <h1 style={{ textAlign: 'center' }}>Sprzedam Toyotę Yaris 1.0</h1>

            <ExpansionPanel className="Panel" defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="Heading">Opis samochodu:</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Details">
                    <Typography className="List">
                    <ul className="Features">
                        <li>silnik 1.0 benzyna,</li>
                        <li>przebieg: 164800 km</li>
                        <li>kolor srebrny metalik,</li>
                        <li>klimatyzacja manualna,</li>
                        <li>poduszki powietrzne dla kierowcy i pasażera,</li>
                        <li>ABS,</li>
                        <li>radio z CD</li>
                        <li>centralny zamek i alarm,</li>
                        <li>data pierwszej rejestracji 24.12.2003, kupiony w polskim salonie, jestem trzecim właścicielem,</li>
                        <li>ważne badania techniczne do sierpnia 2019 i OC do lipca 2019,</li>
                        <li>co roku przegląd i wykonywane wszelkie naprawy eksploatacyjne</li>
                        <li>w listopadzie 2018 wymieniony akumulator</li>
                        <li>w pakiecie opony zimowe/letnie.</li>
                    </ul>
                    Ale ...
                    <ul className="Features">    
                        <li>ma delikatne problemy blacharskie - korozja</li>
                        <li>nie działa tylni spryskiwacz szyb</li>
                    </ul> 
                    Cena: 7000 zł   
                  </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className="Panel">
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="Heading">Kontakt:</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Details">
                    <Typography className="List">
                        <ul className="Features">
                            <li>email: <a href="mailto:rzubala@gmail.com" className="Link">Rafał Zubala</a></li>
                            <li>telefon: +48 506 515 655</li>
                        </ul>
                        
                  </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className="Panel">
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="Heading">Galeria:</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="Details">
                    <div className="Gallery">
                        <Carousel autoPlay showArrows={true}>
                            {imgs}
                        </Carousel>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Car;