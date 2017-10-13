import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';

import Lock from './lock'
//import { } from 'react-native-material-ui';

class LockList extends React.Component {
    render() {
        console.log('props',this.props.locks)
        return (
            <View style={style.pane}>
                <ScrollView>
                    {this.props.locks.map((el, index) => {
                        return <View style={style.list} key={index}><Lock lock={el}/></View>
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default LockList;

const style = StyleSheet.create({
    list:{
        margin:8,
        elevation:5,
        borderColor:'#000'
    },
    pane:{
        height:1000
    }
})