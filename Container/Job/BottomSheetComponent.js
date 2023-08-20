import React, { memo } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../Metrics/Color'
import Images from '../Metrics/Image'
import SlideToConfirm from 'rn-slide-to-confirm';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useEffect, useState } from 'react';
import ButtonSlider from './ButtonSlider';
import Modal from 'react-native-modal'
import Feather from 'react-native-vector-icons/Feather'

const windowWidth = Dimensions.get('window').width;

const BottomSheetComponent = ({ data, currentSnap, navigation, onBackCenter }) => {

    const [sliderState, setSliderState] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false)
    useEffect(() => {
        if (sliderState) {
            setVisibleModal(true)
        }
    }, [sliderState])

    function renderBackCenter() {
        return (
            <TouchableOpacity
                onPress={() => onBackCenter()}
                style={styles.backButton} >
                <Image
                    source={Images.location}
                    style={styles.backIcon}
                />
            </TouchableOpacity>
        )
    }

    function renderContent() {
        return (
            <View style={{ padding: 20 }} >
                <View style={{ flexDirection: 'row' }} >
                    <Image
                        source={Images.check}
                        style={{ height: 60, width: 60 }}
                        resizeMode='contain' />
                    <Text style={styles.rideMode} >STANDARD RIDE</Text>
                </View>
                {renderProgress()}
                <View style={styles.containJobDate} >
                    <Text style={styles.jobDate} >Job Date</Text>
                    <Text style={styles.date} >12/12/2023</Text>
                </View>
                {renderSlideToConfirm()}
            </View>
        )
    }

    function renderSlideToConfirm() {
        return (
            <View style={styles.containSlide} >
                <SlideToConfirm
                    unconfimredTipText={"Completed"}
                    unconfirmedTipTextStyle={styles.unconfirmedTipTextStyle}
                    confirmedTipText={"Confirmed"}
                    confirmedTipTextStyle={styles.confirmedTipTextStyle}
                    state={sliderState}
                    onSlideConfirmed={() => setSliderState(true)}
                    sliderStyle={styles.styleSlide}
                    sliderButtonComponent={<ButtonSlider sliderState={sliderState} />}
                    defaultColor={Colors.blueApp}
                    ballPadding={3}
                />
            </View>
        )
    }

    function modalComplete() {
        return (
            <Modal
                style={{
                    justifyContent: 'flex-end',
                    margin: 0
                }}
                backdropOpacity={0.85}
                useNativeDriver
                useNativeDriverForBackdrop
                hideModalContentWhileAnimating
                isVisible={visibleModal}
            >
                <View style={styles.containModal} >
                    <TouchableOpacity
                        onPress={() => setVisibleModal(false)}
                        style={{
                            padding: 20,
                            alignSelf: 'flex-end'
                        }} >
                        <AntDesign name='close' size={23} color={Colors.gray} />
                    </TouchableOpacity>
                    <Image
                        source={Images.lost}
                        style={styles.imageLost}
                        resizeMode='contain'
                    />
                    <Text style={styles.titleBlock} >{"You have not arrived\nback at Expo"}</Text>
                    <Text style={styles.detailBlock} >{"Please report back at Foyer 1 to complete the job."}</Text>
                    <TouchableOpacity
                        onPress={() => setVisibleModal(false)}
                        style={styles.containButton} >
                        <Text style={styles.textButton} >Ok</Text>
                    </TouchableOpacity>
                    <SafeAreaView />
                </View>
            </Modal>
        )
    }

    function renderProgress() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }} >
                    <View style={styles.containMan}>
                        <Image
                            source={Images.man}
                            style={styles.man}
                            resizeMode="stretch" />
                    </View>
                    <Text style={styles.titleFrom} >{data.from}</Text>
                </View>
                <View style={{
                    marginTop: 5,
                    flexDirection: 'row',
                }} >
                    <View style={styles.containLine}>
                        <View style={styles.line} />
                    </View>
                    <View style={{ marginLeft: 10, }} >
                        <Text style={styles.fromDetail} >{data.fromDetail}</Text>
                        <Text style={styles.pickup} >Picked up</Text>
                    </View>
                </View>
                <View style={styles.containTo} >
                    <View style={styles.containCircle} >
                        <View style={styles.circle} />
                    </View>
                    <View style={{ marginLeft: 10 }} >
                        <Text style={styles.time} >6:06pm</Text>
                        <Text style={styles.titleFrom} >{data.to}</Text>
                        <Text style={styles.fromDetail} >{data.toDetail}</Text>
                        <Text style={styles.pickup} >Dropped - off</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderHeaderFull() {
        return (
            <View style={{
                borderBottomWidth: 2,
                height: 200,
                paddingTop: 70,
            }} >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        padding: 20,
                        marginTop: 45,
                        zIndex: 1
                    }} >
                    <Feather name='chevron-left' size={29} color={Colors.black} />
                </TouchableOpacity>
                <View style={{
                    alignItems: 'center',
                }} >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }} >LY-4b3dec</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 30,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 28,
                            fontWeight: 300
                        }} >$65.00</Text>
                        <TouchableOpacity style={{
                            marginLeft: 10
                        }} >
                            <Feather name='refresh-ccw' size={20} color={Colors.blueApp} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function renderHeaderLine() {
        return (
            <View style={styles.containHeader} >
                <View style={styles.leftHeader}>
                    <View style={styles.containDateHeadline} >
                        <Text style={styles.dateHeaderline} >12</Text>
                    </View>
                    <View style={styles.containMonth} >
                        <Text style={styles.textMonth} >December</Text>
                        <Text style={styles.textCode} >N97551</Text>
                    </View>
                </View>
                <Text style={styles.textAmount} >$65.00</Text>
            </View>
        )
    }

    return (
        <View>
            {currentSnap != 2 && renderBackCenter()}
            <View style={{ backgroundColor: Colors.white }} >
                {currentSnap == 2 ? renderHeaderFull() : renderHeaderLine()}
                {renderContent()}
                {modalComplete()}
            </View>
        </View>
    )

}

export default memo(BottomSheetComponent)

const styles = StyleSheet.create({
    backButton: {
        marginBottom: 30,
        alignSelf: 'flex-end',
        marginRight: 20
    },
    backIcon: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    rideMode: {
        color: Colors.blueApp,
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 5
    },
    styleSlide: {
        justifyContent: 'center',
        width: windowWidth * 0.9,
        height: 70,
        borderRadius: 100,
        overflow: 'hidden',
    },
    containHeader: {
        backgroundColor: Colors.black,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        height: 120
    },
    leftHeader: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    man: {
        height: 20,
        width: 30,
        tintColor: Colors.blueApp,
    },
    titleFrom: {
        color: Colors.black,
        fontWeight: '600',
        fontSize: 26,
    },
    fromDetail: {
        color: Colors.paleGray,
        fontWeight: '400',
        fontSize: 18,
        marginTop: 10,
        lineHeight: 25
    },
    containMan: {
        width: 60,
        marginRight: 10,
        alignItems: 'center'
    },
    pickup: {
        color: Colors.green,
        fontSize: 18,
        marginTop: 10,
        fontWeight: '500'
    },
    time: {
        color: Colors.blueApp,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 25
    },
    circle: {
        height: 17,
        width: 17,
        backgroundColor: Colors.blueApp,
        borderRadius: 15
    },
    containCircle: {
        height: 20,
        width: 60,
        alignItems: 'center',
    },
    line: {
        height: 140,
        width: 2.5,
        backgroundColor: Colors.blueApp
    },
    containLine: {
        width: 60,
        alignItems: 'center'
    },
    containTo: {
        flexDirection: 'row',
        marginTop: 5,
    },
    jobDate: {
        color: Colors.gray,
        fontSize: 18,
        fontWeight: '300',
        marginLeft: 10,
        marginTop: 5
    },
    date: {
        color: Colors.black,
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 5
    },
    containJobDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginHorizontal: 10
    },
    unconfirmedTipTextStyle: {
        color: Colors.black,
        fontSize: 18,
        fontWeight: '600'
    },
    confirmedTipTextStyle: {
        color: "white",
        fontSize: 18,
        fontWeight: '600'
    },
    containSlide: {
        alignSelf: 'center',
        marginTop: 50,
    },
    imageLost: {
        height: windowWidth * 0.5,
        width: windowWidth * 0.8,
        alignSelf: 'center'
    },
    titleBlock: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
        lineHeight: 45
    },
    detailBlock: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '300',
        marginHorizontal: windowWidth * 0.05,
        color: Colors.gray,
        lineHeight: 30
    },
    containButton: {
        backgroundColor: Colors.black,
        width: windowWidth * 0.85,
        paddingVertical: 20,
        marginTop: 50,
        alignSelf: 'center',
        borderRadius: 5,
        marginBottom: 20
    },
    textButton: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.white,
        fontWeight: '500'
    },
    containModal: {
        backgroundColor: Colors.white

    },
    dateHeaderline: {
        color: Colors.white,
        fontSize: 35,
        fontWeight: '600'
    },
    containMonth: {
        marginLeft: 10
    },
    textMonth: {
        color: Colors.white,
        fontSize: 22
    },
    textCode: {
        color: Colors.placeholder,
        marginTop: 5,
        fontSize: 18,
        fontWeight: '300'
    },
    textAmount: {
        color: Colors.white,
        fontSize: 25,
        fontWeight: '300'
    },
    containDateHeadline: {
        width: 60,
        alignItems: 'center'
    }
})