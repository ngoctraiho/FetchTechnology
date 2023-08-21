import { Image, Text, View } from "react-native";
import Images from "../Metrics/Image";
import Colors from "../Metrics/Color";

export default function ButtonSlider({ sliderState }) {
    return (
        <View style={{
            backgroundColor: Colors.white,
            height: 64,
            width: 64,
            alignItems: 'center',
            borderRadius: 40,
            justifyContent: 'center',
            alignSelf: 'flex-start'
        }} >
            <Image source={sliderState ? Images.loading : Images.slider}
                style={{
                    height: 30,
                    width: 30,
                }}
                resizeMode="contain"
            />
        </View>
    )
}