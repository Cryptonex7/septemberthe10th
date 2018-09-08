import { Link } from 'react-router-dom';
import React from 'react';
import '../../css/Tile.css';

const Tile = ({btnText, bkg, route, click}) => {
    const styles = {
        backgroundImage: `url(${bkg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return <Link to={`${route}`}><button onClick={click} style={styles} id='small-tile'>{`${btnText}`}</button></Link>;
}

export default Tile;