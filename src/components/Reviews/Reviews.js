import React from 'react';
import Comment from '../Comments/Comment';
import './Reviews.css';
import useReview from '../Hooks/expo';

const Reviews = () => {
    const [expo, setExpo] = useReview();
    return (
        <div>
            <h1>This is Reviews</h1>
            <div className='coms'>
                {
                    expo.map(ex =><Comment key= {ex.id} com={ex}></Comment>)
                }
            </div>
        </div>
    );
};

export default Reviews;