import { Camera, CameraType, FlashMode } from "expo-camera";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Button, VStack } from "native-base";

interface CameraViewProps {
  onClose: () => void;
}

export const CameraView = ({ onClose }: CameraViewProps) => {
  const [, requestPermission] = Camera.useCameraPermissions();
  const [cameraIsAllowed, setCameraIsAllowed] = useState(false);
  const [flashlight, setFlashLight] = useState(0);

  useEffect(() => {
    (async () => {
      const cameraStatus = await requestPermission();
      if (cameraStatus.granted) setCameraIsAllowed(true);
      else setCameraIsAllowed(false);
    })();
  }, []);

  return (
    <SafeAreaView>
      {cameraIsAllowed && (
        <Camera
          style={{ width: "100%", height: "100%" }}
          type={CameraType.back}
          ratio={"1:1"}
          flashMode={FlashMode.on}
        >
          <View
            style={{
              position: "absolute",
              top: 70,
              left: 20,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VStack space={2}>
              <Button onPress={onClose}>back</Button>
              <Button onPress={() => setFlashLight(1)}>flash light</Button>
            </VStack>
          </View>
        </Camera>
      )}
    </SafeAreaView>
  );
};
