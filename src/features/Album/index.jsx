import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/index';


AlbumFeatures.propTypes = {

};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            title: 'Nguoi ve di dau',
            thumnailURL: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/10/28/2/2/8/5/1603857885251_300.jpg'
        },
        {
            id: 2,
            title: 'Where we go',
            thumnailURL: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/11/13/1/5/e/2/1605253601528_300.jpg'
        },
        {
            id: 3,
            title: 'Cuu mon hoi uc',
            thumnailURL: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/11/13/1/5/e/2/1605240647040_300.jpg'
        }

    ]
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;