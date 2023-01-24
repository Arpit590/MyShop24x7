import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer);