import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";
import PropTypes from 'prop-types';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// export default class Weather extends Component{
//   render()  {
//     return(
//       <LinearGradient
//         colors={["#00C6FB","#005BEA"]}
//         style = {styles.container}
//       >
//       <View style = {styles.upper} >
//         <Ionicons color="white" size={144} name="ios-rainy"></Ionicons>
//         <Text style={styles.temp}>Temp here!</Text>
//       </View>

//       <View style={styles.lower}>
//         <Text style={styles.title}>Raining like MF</Text>
//         <Text style={styles.subtitle}>For more info look for outside</Text>
//       </View>

//       </LinearGradient>
//     );
//   }
// }

const weatherCases = {
  Rain: {
    colors: ['#00C6FB','#005BEA'],
    title: "비가 오고 있어요",
    subtitle: "밖을 보면 비가 주르르륵",
    icon: 'weather-rainy'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: "날씨가 맑은 날 입니다.",
    subtitle: "해가 쨍쨍합니다.",
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: "천둥번개가 치는 날입니다.",
    subtitle: "밖에 나가지 마세요!!",
    icon: 'weather-lightning' 
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: "구름이 낀 날입니다.",
    subtitle: "앞이 잘 안보일 수 있으니 조심하세요!!",
    icon: 'weather-cloudy'
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: "눈이 오고 있어요",
    subtitle: "밖을 보면 눈이 펑펑",
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "이슬비가 오고 있어요",
    subtitle: "밖을 보면 비가 조금씩 옵니다.!!",
    icon: 'weather-hail'
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "안개가 많이 끼었습니다.",
    subtitle: "밖을 보면 잘 안보여요.!!",
    icon: 'weather-fog'
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
    icon: "weather-fog"
  }
}

function Weather({temp,weatherName})  {
  console.log(weatherName);

  return(
    <LinearGradient
        colors={weatherCases[weatherName].colors}
        style = {styles.container}
      >
      <View style = {styles.upper} >
        <MaterialCommunityIcons 
          color="white" 
          size={144} 
          name={weatherCases[weatherName].icon}>
        </MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}°C</Text>
      </View>

      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>

      </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  upper:  {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    backgroundColor:'transparent'
  },
  temp: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 48,
    marginTop: 10
  },
  title: {
    fontSize:38,
    backgroundColor:'transparent',
    color:'white',
    marginBottom:10,
    fontWeight: '300',
  },
  subtitle: {
    fontSize:24,
    backgroundColor:'transparent',
    color:'white',
    marginBottom: 24,
  },

  lower: {
    flex:1,
    alignItems:'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  }
})