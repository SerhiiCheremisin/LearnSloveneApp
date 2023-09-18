import { View } from "react-native";
import { commonContainer } from "../../services/styles/views";

const ViewContainer = (  { children } : any   ):JSX.Element => {
    return (
        <View style={commonContainer}>
            {children}
        </View>
    )
}

export default ViewContainer;