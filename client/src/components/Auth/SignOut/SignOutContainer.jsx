import SignOut from './SignOut';
import { connect } from "react-redux";
import * as actions from '../../../store/actions/index';


const mapDispatchToProps = dispatch => ({
    auth: payload => {
      dispatch(actions.authorize(payload));
    }
});

export default connect(null, mapDispatchToProps)(SignOut);