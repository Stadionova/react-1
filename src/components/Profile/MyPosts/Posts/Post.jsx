import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    console.log(props.message);

    return (
        <div className={s.item}>
            <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"></img>
            {/* post 1 */}
            {/* в фигурных скобках обращаемся к js объекту */}
            {props.message}
            <div className={s.like}><span>{props.like}</span><img src="http://inkscape.paint-net.ru/img/img02/1020041.png" alt="#" /></div>
        </div>
        //     <div className={s.item}>
        //         post 2
        // </div>
        //     <div className={s.item}>
        //         post 3
        // </div>
        // <div>
        //     my posts
        //     <div>
        //         new post
        //     </div>
        //     <div className={s.posts}>
        //     </div>
        // </div>
    )
}

export default Post;