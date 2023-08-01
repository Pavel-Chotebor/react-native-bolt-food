import { ReactElement } from "react";
import { HStack, Image, Text, VStack } from "native-base";

interface FoodDetailItemPreviewProps {
  title?: string;
}

export const FoodDetailItemPreview = ({
  title,
}: FoodDetailItemPreviewProps): ReactElement => {

  return (
    <HStack flexWrap="wrap" space={5} alignItems="center">
      <VStack flex={1} space={3}>
        <Text fontWeight={400} fontSize={22}>
          {title}
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis
          diam. Vivamus luctus egestas leo.
        </Text>
        <Text fontSize={16}>225 kč</Text>
      </VStack>
      <Image
        borderRadius={14}
        size={"lg"}
        source={require("../../../assets/food2.jpg")}
        alt="food"
      />
    </HStack>
  );
};
