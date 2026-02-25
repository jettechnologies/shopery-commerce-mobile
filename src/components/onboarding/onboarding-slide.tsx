import { Text } from "@gluestack-ui/themed";
import { Image } from "expo-image";
import { View } from "react-native";

type Props = {
  image: any;
  title: string;
  description: string;
};

export const OnboardingSlide = ({ image, title, description }: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={image}
        contentFit="cover"
        style={{
          width: "100%",
          height: 350,
          borderRadius: 30,
        }}
      />

      <View className="mt-8 items-center">
        <Text className="text-xl font-bold text-center px-4">{title}</Text>

        <Text className="text-gray-500 text-center mt-3 px-6">
          {description}
        </Text>
      </View>
    </View>
  );
};
