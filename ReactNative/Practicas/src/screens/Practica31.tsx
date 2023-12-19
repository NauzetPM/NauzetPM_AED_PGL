// Practica31Home.tsx

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';
import Practica31View from '../hooks/Practica31View';
import Practica31List from '../hooks/Practica31List';

interface FeedItem {
  id: string;
  title: string;
  description: string;
}

const API_URL = 'https://www.xataka.com/feedburner.xml';

const Drawer = createDrawerNavigator();

const Practica31Home = () => {
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
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Lista Articulos">
        <Drawer.Screen name="Lista Articulos">
          {(props) => <Practica31List {...props} articles={articles} />}
        </Drawer.Screen>
        <Drawer.Screen name="Vista Articulo" component={Practica31View} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Practica31Home;
