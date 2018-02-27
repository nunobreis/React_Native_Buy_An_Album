// IMPORT A LIBRARY TO HELP CREATE A COMPONENT
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// CREATE A COMPONENT
const App = () => (
    <View style={{ flex: 1 }} >
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// RENDER IT TO A DEVICE
AppRegistry.registerComponent('albums', () => App);
