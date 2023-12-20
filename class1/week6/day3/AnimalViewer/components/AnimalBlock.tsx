import { StyleSheet, Text, View, Image } from "react-native";
import { Animal } from "../types";

const AnimalBlock = ({ animal }: { animal: Animal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{animal.name}</Text>
      <Image source={{ uri: animal.imgUrl }} style={styles.animalImg} />
      <Text>{animal.hasBeenFed ? "Happy😁" : "Hungry🤤"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 30,
  },
  animalImg: {
    width: 180,
    height: 180,
  },
});

export default AnimalBlock;
