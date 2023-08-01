import { FoodCard } from "../components/FoodCard/FoodCard";
import { ScrollView, StyleSheet, View } from "react-native";
import { HStack, VStack, Text } from "native-base";

const styles = StyleSheet.create({
  container: {
    gap: 20,
    display: "flex",
    paddingHorizontal: 10,
    overflow: "hidden",
  },
  scrollView: {
    backgroundColor: "white",
  },
});

const imgSrc1 = require("../../assets/food1.jpg");
const imgSrc2 = require("../../assets/food2.jpg");
const imgSrc3 = require("../../assets/food3.jpg");

const dashBoardScrollViewProps = {
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: styles.container,
  horizontal: true,
};
export const Dashboard = () => {
  return (
    <ScrollView testID="dashboard" style={styles.scrollView} horizontal={false}>
      <VStack space={5} pt={5} pb={5}>
        <Text pl={3} fontWeight={400} fontSize={28}>
          GRILL
        </Text>
        <ScrollView {...dashBoardScrollViewProps}>
          <FoodCard imgSrc={imgSrc1} />
          <FoodCard imgSrc={imgSrc2} />
          <FoodCard imgSrc={imgSrc3} />
        </ScrollView>
        <Text pl={3} fontWeight={400} fontSize={28}>
          EUROPEAN
        </Text>
        <ScrollView {...dashBoardScrollViewProps}>
          <FoodCard imgSrc={imgSrc2} />
          <FoodCard imgSrc={imgSrc1} />
          <FoodCard imgSrc={imgSrc3} />
        </ScrollView>
        <ScrollView {...dashBoardScrollViewProps}>
          <FoodCard imgSrc={imgSrc3} />
          <FoodCard imgSrc={imgSrc2} />
          <FoodCard imgSrc={imgSrc1} />
        </ScrollView>
        <Text pl={3} fontWeight={400} fontSize={28}>
          FAST FOOD
        </Text>
        <ScrollView {...dashBoardScrollViewProps}>
          <FoodCard imgSrc={imgSrc1} />
          <FoodCard imgSrc={imgSrc2} />
          <FoodCard imgSrc={imgSrc3} />
        </ScrollView>
        <Text pl={3} fontWeight={400} fontSize={28}>
          HEALTHY
        </Text>
        <ScrollView {...dashBoardScrollViewProps}>
          <FoodCard imgSrc={imgSrc2} />
          <FoodCard imgSrc={imgSrc3} />
          <FoodCard imgSrc={imgSrc1} />
        </ScrollView>
      </VStack>
    </ScrollView>
  );
};
