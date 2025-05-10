
import { StatusBar, SafeAreaView, Text } from 'react-native';
import DropdownSelect from './component/DropdownSelect';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="red"
      />


      <DropdownSelect />
    </SafeAreaView>
  );
}
