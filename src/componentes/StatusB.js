import React from "react";
import {StatusBar} from "react-native";

const StatusB = () => {

  return (
    <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#0066CC"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
  )
}

export default StatusB