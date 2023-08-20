import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions } from 'react-native';
import Colors from '../Metrics/Color';
import Images from '../Metrics/Image';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window');
const origin = { latitude: 1.337130151669364, longitude: 103.96153629999121 };
const destination = { latitude: 1.3071073664842188, longitude: 103.83355229998749 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyC1cC7gG0SKu8ZVC4N5T89u9QfVQVMM_ZY'
const LATITUDE = Math.max(origin.latitude, destination.latitude);
const LONGITUDE = Math.max(origin.longitude, destination.longitude)
const LATITUDE_DELTA = 0.2;
const LONGITUDE_DELTA = 0.2

const MapScreen = ({ navigation, isBackCenter }) => {

    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.containerback} >
                <Image source={Images.back}
                    style={{
                        height: 40,
                        width: 40,
                    }} />
            </TouchableOpacity>
            {renderMaps()}
        </View>
    )

    function renderMaps() {
        return (
            <View style={{ height: height * 0.8, width: width }} >
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor={Colors.blueApp}
                        lineDashPattern={[2, 6]}
                    />
                    <Marker
                        coordinate={origin}
                        title="Start Point"
                        description="This is the start point"
                    >
                        <View style={styles.containFrom} >
                            <Image source={Images.car_fill}
                                style={styles.imageFrom}
                            />
                        </View>
                    </Marker>
                    <Marker
                        coordinate={destination}
                        title="Last Point"
                        description="This is the last point"
                    >
                        <AntDesign name='downcircle' size={28} color={Colors.blueApp} />
                    </Marker>
                </MapView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    containerback: {
        padding: 10,
        position: 'absolute',
        top: width * 0.1,
        left: width * 0.01,
        zIndex: 1
    },
    containFrom: {
        backgroundColor: Colors.blueApp,
        padding: 7,
        borderRadius: 100
    },
    imageFrom: {
        height: 15,
        width: 15,
        tintColor: Colors.white
    }
});

export default MapScreen;