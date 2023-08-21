import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
import React, { useState } from "react"
import Colors from "../Metrics/Color"
import images from "../Metrics/Image"

let data = ['Ongoing', 'Available', 'History']
let dataView0 = [
    {
        from: 'Expo Hall 7',
        fromDetail: 'Expo Hall 7, Singapore',
        to: 'Far East Plaza',
        toDetail: '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
        amount: '65.00',
        time: 'in 7 months',
    }
]

export default JobScreen = ({ navigation }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    function renderView0() {
        return (
            <View style={{ marginTop: 30, flex: 1 }} >
                <FlatList
                    data={dataView0}
                    renderItem={({ item, index }) => {
                        return (
                            renderItem(item, index))
                    }}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }

    function renderItem(item, index) {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('DetailJobScreen', { data: item })}
                style={styles.containItem} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }} >
                    <Text style={styles.titleItem} >{item.from}</Text>
                    <Text style={styles.stylesAmount} >${item.amount}</Text>
                </View>
                <View style={styles.containTime}>
                    <Image source={images.clock}
                        style={styles.clock} />
                    <Text style={{
                        color: Colors.paleWhite,
                        fontWeight: '300'
                    }} >{item.time}</Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10
                    }} >
                        <Image source={images.man}
                            style={styles.man}
                            resizeMode="stretch" />
                        <Text style={styles.titleItem} >{item.from}<Text style={styles.detailItem} > - {item.fromDetail}</Text></Text>
                    </View>
                    <View style={styles.containLine} >
                        <View style={styles.line} >
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 5
                    }} >
                        <View style={styles.containCircle} >
                            <View style={styles.circle} />
                        </View>
                        <Text style={{
                            ...styles.titleItem,
                            lineHeight: 25
                        }} >{item.to} <Text style={styles.detailItem} > - {item.toDetail}</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    function renderView1() {
        return (
            <View />
        )
    }

    function renderListChoose() {
        return (
            <View style={styles.listChoose} >
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setCurrentIndex(index)}
                            key={index}
                            style={{
                                ...styles.containItemChoose,
                                backgroundColor: currentIndex == index ? Colors.black : Colors.white,
                            }}
                        >
                            <Text style={{
                                ...styles.textItemChoose,
                                color: currentIndex == index ? Colors.white : Colors.placeholder,
                            }} >{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    function renderTitle() {
        return (
            <View>
                <Text style={styles.title} >Jobs</Text>
            </View>
        )
    }

    function renderListContent() {
        switch (currentIndex) {
            case 0:
                return renderView0()
            case 1:
                return renderView1()
            case 2:
                return renderView1()
            default:
                break;
        }
    }

    return (
        <View style={{ flex: 1 }} >
            <SafeAreaView />
            <View style={styles.container}>
                {renderTitle()}
                {renderListChoose()}
                {renderListContent()}
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '600'
    },
    container: {
        margin: 20,
        flex: 1
    },
    containItem: {
        backgroundColor: Colors.black,
        paddingVertical: 25,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    titleItem: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 16
    },
    detailItem: {
        color: Colors.paleGray,
        fontWeight: '400',
        fontSize: 16,
    },
    stylesAmount: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '400'
    },
    containTime: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    listChoose: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    containItemChoose: {
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 100
    },
    textItemChoose: {
        fontSize: 15,
        fontWeight: '600'
    },
    circle: {
        height: 17,
        width: 17,
        backgroundColor: Colors.blueApp,
        borderRadius: 17
    },
    containCircle: {
        height: 20,
        width: 20,
        alignItems: 'center',
        marginRight: 10,
    },
    man: {
        height: 15,
        width: 20,
        tintColor: Colors.blueApp,
        marginRight: 10
    },
    line: {
        height: 25,
        width: 2.5,
        backgroundColor: Colors.blueApp
    },
    containLine: {
        width: 20,
        alignItems: 'center',
        marginRight: 10,
        marginTop: 5
    },
    clock: {
        height: 13,
        width: 13,
        tintColor: Colors.paleWhite,
        marginRight: 5
    }
})