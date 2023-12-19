import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

interface ArticleViewProps {
  route?: { params: { article: FeedItem } };
}

interface FeedItem {
  id: string;
  title: string;
  description?: string; 
}

const Practica31View: React.FC<ArticleViewProps> = ({ route }) => {
  const { article } = route?.params || {};

  const htmlContent = article?.description || '';

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ html: htmlContent }} />
    </View>
  );
};

export default Practica31View;


