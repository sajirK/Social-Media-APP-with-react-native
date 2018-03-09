import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Login from '../components/Login';

import { List, ListItem, Avatar } from 'react-native-elements';
import {connect} from 'react-redux';

class FollowingScreen extends React.Component {
  static navigationOptions = {
    title: 'following',
    header: null
  };

  render() {
    var following = [];
    var titleAvatar = null;
    var nameSplit;
    var firstName;
    var lastName;
    for(var i=0; i<this.props.following.length; i++ ){

      nameSplit = this.props.following[i].name.split(" ");
      firstName = nameSplit[0];
      lastName = nameSplit[1];

      following.push(<ListItem

        hideChevron
        key="0"
        avatar={<Avatar
          small
          overlayContainerStyle={{backgroundColor: '#2ecc71'}}
          rounded
          title={firstName[0].toUpperCase()+lastName[0].toUpperCase()}
                />}
        title={ this.props.following[i].name }
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{ this.props.following[i].email }</Text>
            <Text style={styles.ratingText}>company: { this.props.following[i].company }</Text>
          </View>
        }
                     />);

    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

          <List containerStyle={{marginBottom: 20}}>
            {following}
          </List>

        </ScrollView>

        <Login isVisible={this.props.visible}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  subtitleView: {
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    color: 'grey'
  }
});

function mapStateToProps(state) {
  return { following: state.following, visible: !state.user.login  }
}

export default connect(
    mapStateToProps,
    null
)(FollowingScreen);
