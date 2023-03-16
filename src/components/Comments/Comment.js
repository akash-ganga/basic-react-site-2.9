import React from 'react';
import './Comments.css';

const Comment = ({com}) => {
    const {name, email} = com;
    return (
        <div className='com'>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <p>kjfios kjewiujd wii lsdk ;ldja iweio idousiok  kdjfskjfios kjewiujd wii lsdk ;ldja iweio idousiok  kdjfskjfios kjewiujd wii lsdk ;ldja iweio idousiok  kdjfskjfios kjewiujd wii lsdk ;ldja iweio idousiok  kdjfskjfios kjewiujd wii lsdk ;ldja iweio idousiok  kdjfs</p>
        </div>
    );
};

export default Comment;