import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

export type FooterProps = {};

const Footer: React.FC = (props: FooterProps) => (
  <View style={styles.container}>
    <Text>Hellow World</Text>
  </View>
);

export default Footer;
