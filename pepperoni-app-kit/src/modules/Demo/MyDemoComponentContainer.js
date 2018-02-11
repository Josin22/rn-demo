import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import {connect} from "react-redux";
import MyDemoComponent from "./MyDemoComponent";

export default connect(
	null,
	dispatch => {
		return {
			navigate: bindActionCreators(NavigationActions.navigate, dispatch)
		};
	}
)(MyDemoComponent);