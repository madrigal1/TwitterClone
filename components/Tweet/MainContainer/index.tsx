import React from "react";
import { View, Text, Image } from "react-native";
import { TweetType } from "../../../types";

import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import Footer from "./Footer";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderConatiner}>
      <View style={styles.thcInfo}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>25s{/*{tweet.createdAt}*/}</Text>
      </View>
      <Entypo name="chevron-down" size={16} />
    </View>

    <View>
      <Text style={styles.content}>{tweet.content}</Text>
      {!!tweet.image && <Image source={{ uri: tweet.image }} />}
    </View>

    <Footer />
  </View>
);

export default MainContainer;
