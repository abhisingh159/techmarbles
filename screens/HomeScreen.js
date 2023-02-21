import { View, Text, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Bars4Icon } from "react-native-heroicons/outline";
import { ImageSlider } from 'react-native-image-slider-banner';

const HomeScreen = () => {
 
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
    <SafeAreaView>
        <View>
            <View className="bg-gray-50">
                <View className="flex-row  items-center mx-4 space-x-2">
                    <Image 
                        source={{
                        uri: 'https://techmarbles.com/wp-content/uploads/2022/03/final-logo.png'
                        }}
                        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-xl">
                            We Create Websites
                        </Text>
                        <Text className="font-bold text-gray-400 text-xs">
                            You Deserve
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Bars4Icon />
                    </TouchableOpacity>
                </View>
                <View className="flex-row">
                    <ImageSlider 
                        data={[
                            {img: 'https://media.licdn.com/dms/image/C4D22AQGRPuVLpOjkmA/feedshare-shrink_800/0/1657765335162?e=1679529600&v=beta&t=yuYjZeotFdJ4Bd4J-3x3X1sLqq8Nf4QK7VeslHj9p8Y'},
                            {img: 'https://media.licdn.com/dms/image/C4D22AQGRPuVLpOjkmA/feedshare-shrink_800/0/1657765335162?e=1679529600&v=beta&t=yuYjZeotFdJ4Bd4J-3x3X1sLqq8Nf4QK7VeslHj9p8Y'},
                            {img: 'https://media.licdn.com/dms/image/C4D22AQGRPuVLpOjkmA/feedshare-shrink_800/0/1657765335162?e=1679529600&v=beta&t=yuYjZeotFdJ4Bd4J-3x3X1sLqq8Nf4QK7VeslHj9p8Y'},
                            {img: 'https://media.licdn.com/dms/image/C4D22AQGRPuVLpOjkmA/feedshare-shrink_800/0/1657765335162?e=1679529600&v=beta&t=yuYjZeotFdJ4Bd4J-3x3X1sLqq8Nf4QK7VeslHj9p8Y'}
                        ]}
                        autoPlay={true}
                        closeIconColor="#fff"
                    />
                </View>
                <View className="flex items-center p-4 bg-[#f6931d] ">
                    <Text className="text-white">What‘s so great about our work</Text>
                </View>
                <View className="flex-row items-center p-2 bg-gray-10 ">
                    <View>
                        <Text>We help clients to achieve goals because the solutions of Tech Marbles IT Service simplify businesses. We implement, customize and integrate your needs and then work with strategic planning to ensure that the web app developed remains in line with your business goals.</Text>
                    </View>
                </View>
                
            </View>
        </View>
    </SafeAreaView>
        )
    }
    
    export default HomeScreen