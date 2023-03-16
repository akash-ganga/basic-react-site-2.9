import './Home.css';
import mmk from '../../mmk.jpg';
import useReview from '../Hooks/expo';
import Comment from '../Comments/Comment';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [expo, setExpo] = useReview();
    const nav = useNavigate();
    return (
        <div>
            <div className='imgsec'>
                <div>
                    <h1>MOnkey MOnkey MOnkey</h1>
                    <h1>MOnkey MOnkey MOnkey</h1>
                    <p>Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians. Traditionally, all animals in the group now known as simians are counted as monkeys except the apes, which constitutes an incomplete paraphyletic grouping; however, in the broader sense based on cladistics, apes (Hominoidea) are also included, making the terms monkeys and simians synonyms in regards to their scope.</p>
                </div>
                <img src={mmk} alt="Girl in a jacket"/>
            </div>
            <h1>Reviews Reviews Reviews</h1>
            <div className='revsec'>
                {
                    expo.map(po =><Comment key= {po.id} com={po}></Comment>)
                }
            </div>
            <button onClick={()=>nav('/reviews')}>See All Reviews</button>
        </div>
    );
};

export default Home;
