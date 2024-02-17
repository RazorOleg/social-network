import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import AddTextForm from '../../common/AddTextForm/AddTextForm';

const MyPosts = React.memo((props) => {
    // console.log("RENDER");

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

    let onAddPost = (values) => {
        props.addPost(values.newText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddTextForm onSubmit={onAddPost} maxlength={50}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;
