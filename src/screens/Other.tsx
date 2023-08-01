import { Alert, Button, Text, VStack } from "native-base";
import { ReactElement, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { CameraView } from "../components/Other/CameraView";
import { useGetLocation } from "../hooks/useGetLocation";

export const Other = (): ReactElement => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { location } = useGetLocation();

  return (
    <SafeAreaView>
      {isAlertVisible && (
        <Alert status="info" colorScheme="info">
          LONG PRESS
        </Alert>
      )}
      {isCameraOpen ? (
        <CameraView onClose={() => setIsCameraOpen(false)} />
      ) : (
        <ScrollView>
          <VStack space={5} p={10}>
            <Text>CAMERA SECTION</Text>
            <Button onPress={() => setIsCameraOpen(true)}>OPEN CAMERA</Button>
            <Text>LOCATION SECTION</Text>
            <Button onPress={() => setIsLocationVisible(true)}>
              GET LOCATION
            </Button>
            {isLocationVisible && location && <Text>location: {location}</Text>}
            <Button onLongPress={() => setIsAlertVisible(true)}>
              LONG PRESS
            </Button>
          </VStack>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
