import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { List, ListItem, Avatar } from 'react-native-elements';
import {connect} from 'react-redux';
import Login from '../components/Login';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <List containerStyle={{marginBottom: 20}}>

            <ListItem
              onPress={ ()=>this.props.onHandleClick("Emilie Carpenter", "emilie@gmail.com", "Deckow-Crist") }
              hideChevron
              key="0"
              avatar={<Avatar
                small
                overlayContainerStyle={{backgroundColor: '#2ecc71'}}
                rounded
                title="EC"
                      />}
              title="Emilie Carpenter"
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>contact@gmail.com</Text>
                  <Text style={styles.ratingText}>company: Deckow-Crist</Text>
                </View>
              }
            />

            <ListItem
              onPress={ ()=>this.props.onHandleClick("John Doe", "doe@gmail.com", "Crist") }
              hideChevron
              key="1"
              avatar={<Avatar
                small
                overlayContainerStyle={{backgroundColor: '#2ecc71'}}
                rounded
                title="EC"
                      />}
              title="John Doe"
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>contact@gmail.com</Text>
                  <Text style={styles.ratingText}>company: Crist</Text>
                </View>
              }
            />

            <ListItem
              hideChevron
              key="2"
              avatar={<Avatar
                small
                overlayContainerStyle={{backgroundColor: '#2ecc71'}}
                rounded
                title="EC"
                      />}
              title="Emilie Carpenter"
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>contact@gmail.com</Text>
                  <Text style={styles.ratingText}>company: Deckow-Crist</Text>
                </View>
              }
            />

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


function mapDispatchToProps(dispatch) {
  return {
    onHandleClick: function(name, email, company) {
        dispatch( {type: 'selecteUser', name:name, email: email, company: company } )
    }
  }
}

function mapStateToProps(state) {
  return { visible: !state.user.login  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchScreen);
