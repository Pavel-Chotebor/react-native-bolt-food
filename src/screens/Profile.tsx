import { SafeAreaView, Text } from "react-native";
import { ReactElement } from "react";
import { Center } from "native-base";

export const Profile = (): ReactElement => {
  return (
    <SafeAreaView>
      <Center>
        <Text testID='profile' >Profile</Text>
      </Center>
    </SafeAreaView>
  );
};
