import {
  View,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonSecondary from '../components/buttons/ButtonSecondary';

function DetailsScreen({route}) {
  const navigation = useNavigation();
  const { itemId, otherParam } = route.params;
  console.log(route.params)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <ButtonPrimary
        title="Go to Details... stack deep to Details"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <ButtonPrimary style={{ margin: 10 }} title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <ButtonSecondary style={{ margin: 10 }} title="Go back" onPress={() => navigation.goBack()} />
      <ButtonSecondary style={{ margin: 10 }} title="Pop To Top " onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default DetailsScreen;
