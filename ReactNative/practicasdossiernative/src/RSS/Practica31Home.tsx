import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import Practica31List from './Practica31List';
import Practica31View from './Practica31View';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';

interface FeedItem {
    id: string;
    title: string;
    description: string;
  }
  
  const API_URL = 'https://www.xataka.com/feedburner.xml';
  
  const Drawer = createDrawerNavigator();

export const Practica31Home = () => {
    const [articles, setArticles] = useState<FeedItem[]>([]);
    useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(API_URL);
          const responseData = await rssParser.parse(response.data);
          setArticles(responseData.items);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  

  return (
      <Drawer.Navigator initialRouteName="ArticleList">
        <Drawer.Screen name="ArticleList">
          {(props:any) => <Practica31List {...props} articles={articles} />}
        </Drawer.Screen>
        <Drawer.Screen name="ArticleView" component={Practica31View} />
      </Drawer.Navigator>
  );
};
