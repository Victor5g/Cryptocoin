import { View, Image, ImageSourcePropType, Text } from "react-native";
import { COLORS } from "../../constants";

interface PropTabIcon {
 focused?:Boolean;
 label:String;
 icon:ImageSourcePropType;
}

const TabIcon = ({ focused, label, icon }:PropTabIcon) => {
  return (
  <View style={{alignItems:'center',justifyContent:'center'}} >
   <Image source={icon} resizeMode={'contain'} style={{
    width:30,
    height:30,
    tintColor: focused ? COLORS.primary : COLORS.black
   }}/>
   <Text style={{color: focused ? COLORS.primary : COLORS.black}}>{label}</Text>
 </View>
 )
}

export default TabIcon;