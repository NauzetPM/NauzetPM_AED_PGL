import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

interface ArticleViewProps {
    route?: { params?: { article?: FeedItem } };
  } 
  interface FeedItem {
    id: string;
    title: string;
    description: string;
  }
const Practica31View: React.FC<ArticleViewProps> = ({ route }) => {
  const article = route?.params?.article;

  if (!article) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No article found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ html: article.description }} />
    </View>
  );
};

export default Practica31View;
