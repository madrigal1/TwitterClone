import React from "react";
import { Image } from "react-native";

export type ProfilePictureProps = {
  image: string;
  size?: number;
};

const ProfilePicture = ({ image, size = 50 }: ProfilePictureProps) => {
  let uri = require(image);
  return <Image source={uri} />;
};

export default ProfilePicture;
