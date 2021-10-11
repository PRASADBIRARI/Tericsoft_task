import React from 'react';
import { faBiking, faCrosshairs, faGlassMartiniAlt, faHorse, faRunning, faStar, faSwimmer, faWeight, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar1 = () => {
    const icons = [ 
        {
            icon: faStar,
            iconText: "Featured",
        },
        {
            icon: faCrosshairs,
            iconText: "Armoury",
        },
        {
            icon: faSwimmer,
            iconText: "Aquatics",
        },
        {
            icon: faBiking,
            iconText: "Cycling",
        },
        {
            icon: faHorse,
            iconText: "Equestrian",
        },
        {
            icon: faWeight,
            iconText: "Extreme",
        },
        {
            icon: faGlassMartiniAlt,
            iconText: "Golf",
        },
        {
            icon: faRunning,
            iconText: "Gymnastics",
        },
        {
            icon: faWineGlass,
            iconText: "Lake & sea",
        }
    ];

    return (
        <div>
            {
                icons.map(( { icon, iconText } ) => (
                    <div>
                        <FontAwesomeIcon icon={icon} className='icon' />
                        <div className="iconText">{iconText}</div>
                    </div>
                ) )
            }
        </div>
    )
}

export default Navbar1;