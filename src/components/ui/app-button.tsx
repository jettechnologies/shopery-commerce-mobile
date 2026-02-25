import { Button, ButtonText } from "@gluestack-ui/themed";

export const AppButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <Button onPress={onPress} className="rounded-full bg-primary500">
      <ButtonText className="text-white font-semibold">{title}</ButtonText>
    </Button>
  );
};
