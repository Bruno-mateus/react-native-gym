import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Singin } from "@screens/Singin";
import { Singup } from "@screens/Singup";

type AuthRoutes = {
    singIn: undefined
    singUp: undefined
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    
    return (
      <Navigator screenOptions={{headerShown:false}}>
            <Screen name="singIn" component={Singin} />
            <Screen name="singUp" component={Singup}/>
      </Navigator>
    );
}