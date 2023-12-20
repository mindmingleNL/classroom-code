import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Animal } from "./types";
import AnimalBlock from "./components/AnimalBlock";

export default function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      const response = await fetch(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      const data = await response.json();
      setAnimals(data);
    };
    getAnimals();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {animals.map((animal) => (
          <AnimalBlock animal={animal} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hotpink",
    color: "white",
    alignItems: "stretch",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});
