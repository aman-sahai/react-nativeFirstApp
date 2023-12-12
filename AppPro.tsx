import React from "react";
import{
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

function AppPro():JSX.Element{
    const darkMode = useColorScheme() === 'dark'
    return(
            <View style={Styles.container}>
                <Text style ={darkMode? Styles.whiteColor:
                    Styles.darkColor}>
                    Hello World
                </Text>
            </View>
    )
}
const Styles = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center' 
    },

    darkColor:{
        color:"#000000"
    },

    whiteColor:{
        color: "#FFFFFF"
    }
})

export default AppPro