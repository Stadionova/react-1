import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
        my posts
        <div>
            new post
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"></img>
                post 1
                </div>
            <div className={s.item}>
                post 2
                </div>
            <div className={s.item}>
                post 3
                </div>
        </div>
    </div>
}

export default MyPosts;