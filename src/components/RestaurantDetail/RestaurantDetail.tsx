import { Fragment, ReactElement, useState } from "react";
import { Box, Button, Divider, Image, Input, Text, VStack } from "native-base";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { FoodDetailItemPreview } from "./FoodDetailItemPreview";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationRouterStack } from "../Common/BottomNavigationRouter";

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: 10,
    top: 70,
    borderRadius: 100,
    zIndex: 1000,
  },
  container: {
    backgroundColor: "white",
    padding: 10,
  },
});

const mockedFoodTitles = [
  "Double Cheeseburger",
  "Classic Burger",
  "Burger Menu",
  "Hovězí žebra ",
];

export const RestaurantDetail = ({
  navigation,
  route,
}: NativeStackScreenProps<NavigationRouterStack, "Detail">): ReactElement => {
  const [filteredQuery, setFilteredQuery] = useState("");
  const filteredItems = mockedFoodTitles.filter((item) =>
    item.includes(filteredQuery)
  );
  const { id } = route.params;

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Button
          shadow={8}
          onPress={navigation.goBack}
          style={styles.backButton}
        >
          ZPĚT
        </Button>
        <VStack>
          <Image
            size={"2xl"}
            width={"100%"}
            source={require("../../../assets/food3.jpg")}
            alt="food"
          />
          <Box
            marginTop={-10}
            backgroundColor={"white"}
            borderRadius={24}
            p={8}
          >
            <Text>Restaurant info placeholder</Text>
            <Divider mt={5} mb={5} thickness="1" orientation="horizontal" />
            <Input
              onChangeText={setFilteredQuery}
              value={filteredQuery}
              mt={5}
              mb={5}
              variant="filled"
              placeholder="Filtrovat"
            />
            <Text fontWeight={600} fontSize={32}>
              Gourmet Burgers
            </Text>
            <View>
              {!!filteredItems.length ? (
                filteredItems.map((i) => (
                  <Fragment key={i}>
                    <FoodDetailItemPreview title={i} key={i} />
                    <Divider
                      mt={5}
                      mb={5}
                      thickness="1"
                      orientation="horizontal"
                    />
                  </Fragment>
                ))
              ) : (
                <Text>žádné položky</Text>
              )}
            </View>
          </Box>
        </VStack>
        <Text textAlign="center">{`developer info - id: ${id}`}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
