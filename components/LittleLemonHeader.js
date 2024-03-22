import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#34f000' }}>
      <Text
        style={{
          padding: 30,
          fontSize: 30,
          color: 'white',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
