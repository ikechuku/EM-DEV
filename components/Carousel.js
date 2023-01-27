import React from 'react'
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
    Colors,
    RF,
} from '../helper/constants';
import { AppIcons } from '../helper/images';
import { H1 } from '../helper/element';

export const Carousel = (props) => {

    const { items } = props;
    const itemsPerInterval = props.itemsPerInterval === undefined
        ? 1
        : props.itemsPerInterval;

    const [interval, setInterval] = React.useState(1);
    const [intervals, setIntervals] = React.useState(1);
    const [width, setWidth] = React.useState(0);

    const init = (width) => {
        // initialise width
        setWidth(width);
        // initialise total intervals
        const totalItems = items.length;
        setIntervals(Math.ceil(totalItems / itemsPerInterval));
    }

    const getInterval = (offset) => {
        for (let i = 1; i <= intervals; i++) {
            if (offset + 1 < (width / intervals) * i) {
                return i;
            }
            if (i == intervals) {
                return i;
            }
        }
    }

    let bullets = [];
    for (let i = 1; i <= intervals; i++) {
        bullets.push(
            <Text
                key={i}
                style={{
                    ...styles.bullet,
                    color: interval === i ? "#5E38AF" : "#C4C4C4"
                }}
            >
                &bull;
            </Text>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(w, h) => init(w)}
                onScroll={data => {
                    setWidth(data.nativeEvent.contentSize.width);
                    setInterval(getInterval(data.nativeEvent.contentOffset.x));
                }}
                scrollEventThrottle={200}
                pagingEnabled
                decelerationRate="fast"
            >
                {items.map((item, index) => {

                    return (
                        <Slide
                            key={index}
                            title={item.title}
                            amount={item.amount}
                            buttonName={item.buttonName}
                        />
                    );


                })}
            </ScrollView>
            <View style={styles.bullets}>
                {bullets}
            </View>
        </View>
    )
}


const Slide = (props) => {

    const { title } = props;

    return (
        <View style={styles.slide}>
            <View
                style={{
                    backgroundColor: Colors.appCard,
                    width: "90%",
                    maxWidth: 800,
                    // height: RF(200),
                    marginTop: props.marginTop,
                    borderRadius: 6,

                }}>
                <View
                    style={{
                        width: '80%',
                        // height: RF(20),
                        marginTop: '3%',
                        alignItems: 'flex-start',

                    }}>
                    <H1
                        style={{
                            color: Colors.apptext,
                            fontSize: 15,
                            marginTop: 10,
                            marginLeft: '7%',
                            fontWeight: "bold"
                        }}>
                        {title}
                    </H1>
                </View>
                <View
                    style={{
                        width: '100%',
                        height: RF(55),
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginBottom: 30

                    }}>
                    <View
                        style={{
                            backgroundColor: Colors.appPrimary,
                            width: RF(48),
                            height: RF(48),
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '5%',
                        }}>
                        <Image style={{ height: 25, width: 25 }} source={AppIcons.thread} />
                    </View>
                    <View
                        style={{
                            width: '39%',
                            height: RF(33),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '-1%',
                        }}>
                        <H1
                            style={{
                                color: Colors.appPrimary,
                                fontSize: 20,
                                marginLeft: '3%',
                                fontWeight: 'bold',
                            }}>
                            {props.amount}
                        </H1>
                    </View>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: Colors.appBrown,
                            height: RF(35),
                            // width: '25%',
                            paddingHorizontal: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            marginLeft: '13%',
                        }}>
                        <H1 color={Colors.appWhite}>{props.buttonName || "View"}</H1>
                    </TouchableOpacity>
                    {/* <Button /> */}
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        width: '100%',
        // backgroundColor: 'gray',
        borderColor: '#ebebeb',
        height: RF(300),
        // borderWidth: 1,
        // borderRadius: 8,
        shadowColor: '#fcfcfc',
        shadowOpacity: 0.61,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 5
        },
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    bullets: {
        position: 'absolute',
        bottom: 0,
        right: "40%",
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5,
    },
    bullet: {
        paddingHorizontal: 5,
        fontSize: 30,
    },
    slide: {
        // paddingHorizontal: 20,
        // paddingBottom: 10,
        // paddingTop: 30,
        // flexBasis: '100%',
        flex: 1,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: "red"
        // height: 200,
    },
    slideText: {
        width: '100%',
        textAlign: 'left',
        fontSize: 20,
    }
});

export default Carousel;