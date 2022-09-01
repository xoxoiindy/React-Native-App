import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
LogBox.ignoreAllLogs(true)


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Main />
            </NavigationContainer>
        </Provider>
    );
}


