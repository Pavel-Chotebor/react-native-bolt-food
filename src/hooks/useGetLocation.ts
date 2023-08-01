import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useGetLocation = () => {
  const [location, setLocation] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (response?.[0]) {
        const addressObject = response[0];
        const addressDetail = `${addressObject.street} ${addressObject.streetNumber}`;
        setLocation(addressDetail);
      }
    })();
  }, []);

  return { location };
};
