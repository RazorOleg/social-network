
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { addMessage } from '../../../redux/actions/actions';
import Dialog from './Dialog';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return ({
        state: state.dialogsPage
    });
}

// const mapdispatchToProps = (dispatch) => {
//     return ({
//         addMessage: () => {
//             dispatch(addMessageActionCreator());
//         },
//         updateNewMessageText: (text) => {
//             let action = updateNewMessageTextActionCreator(text);
//             dispatch(action);
//         }
//     });
// }

// const DialogWithAuthRedirect = withAuthRedirect(Dialog);

// const DialogContainer = connect(mapStateToProps, {
//     addMessage,
//     updateNewMessageText
// })(DialogWithAuthRedirect);

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialog);