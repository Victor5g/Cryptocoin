import { LinearGradient } from 'expo-linear-gradient';

import { TouchableOpacity } from "react-native";

import { COLORS } from "../../constants";

const ButtonTab = ({children, onPress}:any) => {
  return(
    <TouchableOpacity style={{
      top:-30, 
      justifyContent:'center', 
      alignItems:'center'}} 
       onPress={onPress}>
        <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={{width:70, height:70, borderRadius:35}} >
          {children}
        </LinearGradient>
    </TouchableOpacity>

  )
}

export default ButtonTab;