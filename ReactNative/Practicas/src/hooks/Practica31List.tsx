import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as rssParser from 'react-native-rss-parser';
import axios from 'axios';

interface FeedItem {
  id: string;
  title: string;
  description: string;
}

type Props = {
  navigation: any;
  route: any;
  articles: FeedItem[];
};

const Practica31List: React.FC<Props> = ({ navigation, route, articles }: Props) => {
  const handleArticlePress = async (article: FeedItem) => {
    await AsyncStorage.setItem(article.title, article.description);
    navigation.navigate('Vista Articulo', { article });
  };

  const renderItem = ({ item }: { item: FeedItem }) => (
    <TouchableOpacity onPress={() => handleArticlePress(item)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Practica31List;
