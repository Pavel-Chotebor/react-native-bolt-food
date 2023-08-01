import React, { ReactElement, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";
import { Button, Spinner } from "native-base";
import { useGetLocation } from "../../hooks/useGetLocation";

export const UpperHeader = (): ReactElement => {
  const { location } = useGetLocation();
  return (
    <View>
      <Text>{location ?? <Spinner accessibilityLabel="Loading" />}</Text>
    </View>
  );
};
