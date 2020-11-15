import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

AlbumItem.propTypes = {
    albumItem: PropTypes.object
};

AlbumItem.defaultProps = {
    albumItem: []
}

function AlbumItem({ albumItem }) {
    console.log("Item : ", albumItem)
    return (
        <div className="album-item">
            <div className="album-item__thumnail">
                <img src={albumItem.thumnailURL} alt={albumItem.title} />
            </div>

            <p className="album-item__detail">{albumItem.title}</p>
        </div>
    );
}

export default AlbumItem;