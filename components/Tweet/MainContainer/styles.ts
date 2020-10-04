import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    // backgroundColor: "blue",
  },
  tweetHeaderConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  thcInfo: {
    flexDirection: "row",
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    color: "grey",
    marginRight: 5,
  },
  createdAt: {
    marginRight: 5,
    color: "grey",
  },
  content: {
    marginVertical: 5,
    lineHeight: 18,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "cover",
    overflow: "hidden",
    marginVertical: 10,
  },
});

export default styles;
