import React from 'react';
import AnimatedLoader from "react-native-animated-loader";
import styles from './styles'

function Loading(props) {
    return (
      <AnimatedLoader
          visible={props.visible}
          overlayColor="#fff"
          animationStyle={styles.lottie}
          speed={1.2}
        />
    );
}

export default Loading

