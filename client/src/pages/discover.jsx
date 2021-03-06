import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { DISCOVER_TYPES, getDiscoverPosts } from '../redux/actions/discoverAction';
import LoadIcon from '../images/loader.gif';
import PostThumb from '../components/PostThumb';
import LoadMoreBtn from '../components/LoadMoreBtn';
import { getDataApi } from '../utils/fetchData';


const Discorver = () => {
    const { auth, discover } = useSelector(state => state)
    const dispatch = useDispatch();

    const [load, setLoad] = useState(false);

    useEffect(()=>{
        if(!discover.firstLoad){
            dispatch(getDiscoverPosts(auth.token))
        }
    },[dispatch, auth.token, discover.firstLoad ]) 

    const handleLoadMore = async()=>{
        setLoad(true);
        const res = await getDataApi(`post_discover?num=${discover.page * 9}`, auth.token);
        dispatch({type: DISCOVER_TYPES.UPDATE_POST, payload: res.data});
        setLoad(false);
    }

    return (
        <div>
            {
                discover.loading
                ? <img src={LoadIcon} alt="loader" className="d-block mx-auto my-4"/>
                : <PostThumb posts={discover.posts} result={discover.result} />
            }
            {
                load && <img src={LoadIcon} alt="loader" className="d-block mx-auto"/>
            }
            {
                !discover.loading &&
                <LoadMoreBtn result={discover.result} page={discover.page}
                load={load} handleLoadMore = {handleLoadMore} />
            }
            
        </div>
    )
}

export default Discorver
