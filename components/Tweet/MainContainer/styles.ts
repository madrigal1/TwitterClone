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
    marginTop: 8,
    lineHeight: 18,
  },
});

export default styles;
