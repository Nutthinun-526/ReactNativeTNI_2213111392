import React from 'react';
import { View, Text } from 'react-native';
import { stylesPractice} from '../styles/styles';

interface AppHeaderProps {
  fullname: string;
  message: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ fullname, message }) => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>{fullname}</Text>
      <Text style={stylesPractice.subtitleText}>{message}</Text>
    </View>
  );
};

export default AppHeader;
