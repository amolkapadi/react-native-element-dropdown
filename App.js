
import { StatusBar, SafeAreaView, Text } from 'react-native';
import SearchDropDown from './component/SearchDropdown';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="red"
      />
      <SearchDropDown />
    </SafeAreaView>
  );
}
