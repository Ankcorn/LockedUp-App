import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-material-ui';

class Lock extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <ListItem 
                divider
                leftElement="home"
                centerElement={<Text>{this.props.lock.name}</Text>}
                rightElement={this.props.lock.status?"lock":"lock-open"}
            />
        )
    }
}

export default Lock