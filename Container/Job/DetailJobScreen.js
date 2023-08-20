import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetComponent from './BottomSheetComponent';
import colors from '../Metrics/Color';
import MapScreen from './MapScreen';

const DetailJobScreen = ({ route, navigation }) => {

    const snapPoints = useMemo(() => ['32%', '65%', '100%'], []);
    const [currentSnap, setCurrentSnap] = useState(null)
    const [isBackCenter, setIsBackCenter] = useState(false)
    const handleSheetChanges = useCallback((index) => {
        setCurrentSnap(index)
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }} >
                <MapScreen
                    navigation={navigation}
                    currentSnap={currentSnap}
                    isBackCenter={isBackCenter}
                />
            </View>
            <BottomSheet
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enableOverDrag={false}
                handleComponent={() => {
                    return (
                        <View />
                    )
                }}
                detached
                backgroundComponent={null}
                animateOnMount={false}
            >
                <BottomSheetComponent
                    data={route.params.data}
                    currentSnap={currentSnap}
                    navigation={navigation}
                    onBackCenter={() => setIsBackCenter(!isBackCenter)}
                />
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default DetailJobScreen;