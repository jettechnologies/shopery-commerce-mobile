import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export const PaginationDots = ({
  total,
  current,
}: {
  total: number;
  current: number;
}) => {
  return (
    <View className="flex-row justify-center mt-4 gap-2">
      {Array.from({ length: total }).map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            width: withTiming(current === index ? 20 : 8),
            opacity: withTiming(current === index ? 1 : 0.5),
          };
        });

        return (
          <Animated.View
            key={index}
            style={animatedStyle}
            className="h-2 rounded-full bg-primary500"
          />
        );
      })}
    </View>
  );
};
