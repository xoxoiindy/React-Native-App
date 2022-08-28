import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true)


export default function App() {
    return (
        <NavigationContainer>
            <Main />
        </NavigationContainer>
    );
}


