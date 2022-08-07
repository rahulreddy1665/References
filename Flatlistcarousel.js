import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions, Animated, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { CommonStyles, DashboardStyles, MycartStyles, RecommendStyles, SearchPagestyles, SubcategoryStyles } from '../../styles/Globalstyles'
import { CartIcon } from '../../assets/icons/CartIcon'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { ColorConstants } from '../../constants/constants'
import { LocationIcon } from '../../assets/icons/LocationIcon'
import { DownIcon } from '../../assets/icons/DownIcon'
import { bannerData } from '../Dummydata/bannerData'
import { Sub } from '../Dummydata/Subcategoriesdata'
import { offerData } from '../Dummydata/OffersData'
import { data } from "../Dummydata/Categoriesdata"
import { dataZ } from '../Dummydata/recommend'
import { useNavigation } from '@react-navigation/native'
const numColumns = 3;
const Dashboard = () => {
    const width = Dimensions.get('screen').width
    const [currentIndex, SetCurrentindex] = useState(0)
    // Auto scrolling 
    useEffect(() => {
        const interval = setInterval(() => {
            var nextSlide = 0
            if (currentIndex < maxSlider) {
                nextSlide = currentIndex + 1
            }
            scrollToIndex(nextSlide, true)
            SetCurrentindex(nextSlide)
        }, 3000)
        return () => clearInterval(interval);
    })

    const formatData = (Sub, numColumns) => {
        const numberOfFullRows = Math.floor(Sub.length / numColumns);

        let numberOfElementsLastRow = Sub.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            Sub.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }

        return Sub;
    };
    // For Auto scrolling
    const scrollToIndex = (index, animated) => {
        scrollRef && scrollRef.current?.scrollToIndex({ index, animated })
    }

    const scrollX = useRef(new Animated.Value(0)).current;

    const scrollRef = useRef(null)
    const [maxSlider] = useState(bannerData.length - 1)

    const navigation = useNavigation()
    return (
        <View>
            {/* Banner carousel using flatlist */}
            <View style={{ marginTop: 20 }}>
                <FlatList
                    horizontal
                    bounces={false}
                    initialScrollIndex={0}
                    pagingEnabled={true}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    showsHorizontalScrollIndicator={false}
                    data={bannerData}
                    ref={scrollRef}
                    renderItem={({ item }) => (
                        <Image source={item.Image} style={{ width: width, height: 190 }} />
                    )}
                />
                <View style={{ width: width, flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
                    {bannerData.map((_, i) => {
                        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [10, 20, 10],
                            extrapolate: "clamp"
                        });
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.1, 1, 0.1],
                            extrapolate: "clamp"
                        });

                        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />;
                    })}
                </View>
            </View>
        </View>
    )
}

export default Dashboard