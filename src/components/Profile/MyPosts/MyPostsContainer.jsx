import { addPost } from '../../../redux/actions/actions';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts
    });
}

// const mapdispatchToProps = (dispatch) => {
//     return ({
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostTextAction: (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action);
//         }
//     });
// }

const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts);

export default MyPostsContainer;