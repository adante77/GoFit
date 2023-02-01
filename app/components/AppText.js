import React  from 'react';
import Animated from 'react-native-reanimated';

function AppText({children , style}) {
    return (
        <Animated.Text style={[style]}>{children}</Animated.Text>
    );
}

export default AppText;