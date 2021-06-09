import React, { useState } from 'react'
import { Collapse,Container } from 'reactstrap';

import '../style/ServiceMenu.css';

const ServiceMenu = () => {

    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);
    

    return (
        <div className="ssServiceMenu">
            <h1>Service Menu</h1>
            <Container className="serviceMenuCard">
                <h2 onClick={toggle}>Treatments</h2>
                <Collapse
                isOpen={collapse}
                >
            <div className="serviceMenuCardOne">
                <h4>Detox</h4>
                <p>Push the RESTART button on your skin! Enzymatic exfoliation gently buffs and polishes the surface of the skin to benefit congestion. Kaolin and bentonite clay help to detoxify and repair the skin from enviornmental pollutants and toxins. Beneficial for acne prone skin.</p>
                <h5>80.00</h5>
            </div>
            <div className="serviceMenuCardTwo">
                <h4>Restore</h4>
                <p>The Ultimate relaxation! Luxurious jade rollers and lymphatic drainage massage decrease puffiness , reduce inflammmation and stimulate blood circulation. Incredibly uplifting, your skin will feel nourished and hydrated, giving you an illuminating glow!</p>
                <h5>80.00</h5>
            </div>
            <div className="serviceMenuCardThree">
                <h4>Bro Glow</h4>
                <p>A rejuvinating experience specifically for furry faced gentlemen. This treatment effectively cleanses, hydrates and revives the skin and softens the beard...bonus!</p>
                <h5>80.00</h5>
            </div>
            </Collapse>
            </Container>
            <Container className="advanceTreatmentCard">
                <h2 onClick={toggle}> Advance Treatments</h2>
                <Collapse
                isOpen={collapse}
                >
            <div className="advanceTreatmentCardOne">
                <h4>CBD Nano Infusion</h4>
                <p>Looking to turn back time? Look no further! This treatment stimulates skin regeneration while increasing product absorption. CBD works to reduce inflammation and soothe the skin.</p>
                <h5>80.00</h5>
            </div>
            <div className="advanceTreatmentCardTwo">
                <h4>CBD Dermaplanning</h4>
                <p>Gently resurface your canvas whilesimultaneously feeding your skin antioxidants, vitamins and minerals. Skin feels smoother, inflammation is reduced leaving brighter and fresher skin.</p>
                <h5>80.00</h5>
            </div>
            <div className="dvanceTreatmentCardThree">
                <h4>Microneedling</h4>
                <p>The ULTIMATE skin rejuvenation. This minimally invasie procedure uses your skins's own natural healing ability to stimulate collagen , revitalizing the skin for a more youthful apperance. This treament treat acne scarring, fine lines and wrinkles, uneven texture, stretch marks, thinning hair and more. Must schedule a Detox or Restore facial before scheduling this service.</p>
                <h5>80.00</h5>
            </div>
            </Collapse>
        </Container>
        
        </div>
    )
}


export default ServiceMenu;
