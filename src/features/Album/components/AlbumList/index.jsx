import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem/index';

import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array
};

AlbumList.defaultProps = {
    albumList: []
}

function AlbumList({ albumList }) {
    console.log(albumList);
    return (
        <>
            <h3 className="album-header">Album List</h3>
            <ul className="album-list">
                {
                    albumList.map((album) => {
                        return (
                            <li className="album-list__item" key={album.id} >
                                <AlbumItem albumItem={album} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default AlbumList;