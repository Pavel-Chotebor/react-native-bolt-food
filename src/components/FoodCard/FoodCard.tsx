import { ImageSourcePropType, StyleSheet, View, Pressable } from "react-native";
import { HStack, Image, Text, VStack } from "native-base";
import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { NavigationRouterStack } from "../Common/BottomNavigationRouter";

const styles = StyleSheet.create({
  chip: {
    padding: 5,
    borderRadius: 12,
    backgroundColor: "white",
    position: "absolute",
    right: 10,
    top: 90,
  },
  clickableCard: {},
});

interface FoodCardProps {
  imgSrc: ImageSourcePropType;
}

export const FoodCard = ({ imgSrc }: FoodCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationRouterStack>>();

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? { transform: [{ scale: 0.9 }], elevation: 10 } : []
      }
      onPress={() =>
        navigation.navigate("Detail", {id: 'from food card'})
      }
    >
      <VStack space={0.5}>
        <Image alt='food card' size="xl" width={200} borderRadius={14} source={imgSrc} />
        <View style={styles.chip}>
          <Text>15 - 20 min</Text>
        </View>
        <HStack style={{ justifyContent: "space-between" }}>
          <Text fontSize={18} fontWeight={600}>
            Grill time
          </Text>
          <Text fontSize={18} fontWeight={600}>
            4.4*
          </Text>
        </HStack>
        <Text fontSize={16} fontWeight={200}>
          49kč
        </Text>
      </VStack>
    </Pressable>
  );
};
