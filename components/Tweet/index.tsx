import React from "react";
import { View } from "react-native";
import LeftContainer from "./LeftContainer.ts";
import MainContainer from "./MainContainer";
import { TweetType } from "../../types";

import styles from "./styles";

export type TweetProps = {
  tweet: TweetType;
};

const Tweet: React.FC<TweetProps> = ({ tweet }: TweetProps) => (
  <View style={styles.conatiner}>
    <LeftContainer user={tweet.user} />
    <MainContainer tweet={tweet} />
  </View>
);

export default Tweet;
