import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FeedItem {
  id: string;
  title: string;
  description: string;
}

type Props = {
  navigation: any;
  route: any;
};

const Practica31List: React.FC<Props> = ({ navigation, route }: Props) => {
  const [articles, setArticles] = useState<FeedItem[]>([]);

  useEffect(() => {
    setArticles(route.params?.articles || []);
  }, [route.params?.articles]);

  const handleArticlePress = async (article: FeedItem) => {
    await AsyncStorage.setItem(article.id, 'read');
    navigation.navigate('Practica31View', { article });
  };

  const isArticleRead = async (articleId: string): Promise<boolean> => {
    const status = await AsyncStorage.getItem(articleId);
    return status === 'read';
  };

  const renderItem = ({ item }: { item: FeedItem }) => (
    <TouchableOpacity onPress={() => handleArticlePress(item)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const addNews = () => {
    const newArticle: FeedItem = {
      id: new Date().getTime().toString(),
      title: 'New Article',
      description: 'Description for the new article',
    };

    setArticles((prevArticles) => [newArticle, ...prevArticles]);
  };

  return (
    <View>
      <FlatList
        data={articles.filter((item) => !isArticleRead(item.id))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button title="Add News" onPress={addNews} />
    </View>
  );
};

export default Practica31List;
