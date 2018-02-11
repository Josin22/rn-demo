import React ,{Component} from 'react'
import {
	View,
	StyleSheet
} from "react-native";

class MyDemoComponent extends Component{

	static navigationOptions = {
		title: 'MyDemo',

	}

	render(){
		return(
			<View style={styles.myView1}>
				<View style={styles.myView2}>

				</View>
				<View style={styles.myView3}>

				</View>
				<View style={styles.myView4}>

				</View>
			</View>
		)
	}
}

/**
 * 样式
 */
const styles = StyleSheet.create({
	myView1:{
		flexDirection:'row',
		justifyContent:'space-between', //flex-star t
		alignItems:'flex-start', //flex-start
		alignContent:'center',
		width:'100%',
		height:200,
		backgroundColor:'red',
		paddingLeft:0,
	},
	myView2:{
		marginLeft:0,
		marginTop:0,
		width:40,
		height:40,
		backgroundColor:'blue'
	},
	myView3: {
		alignSelf:'center',
		marginBottom:0,
		marginTop:0,
		width:40,
		height:40,
		backgroundColor:'black',
	},
	myView4: {
		alignSelf:'flex-end',
		marginLeft:0,
		marginTop:0,
		width:40,
		height:40,
		backgroundColor:'yellow'
	}
})

export default MyDemoComponent