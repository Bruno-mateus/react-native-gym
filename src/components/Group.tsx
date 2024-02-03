import { Text, Pressable, IPressableProps } from "native-base";


type GroupProps = IPressableProps & {
    name: string;
    isActive: boolean;
};
export function Group({ name,isActive,...rest }: GroupProps) {
  return (
    <Pressable
      mr={4}
      bg={"gray.600"}
      w={24}
      h={10}
      rounded="md"
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
      borderColor={isActive ? "green.500" : "gray.100"}
      borderWidth={isActive ? 2 : 0}
      _pressed={{ borderColor: "green.500", borderWidth: 1 }}
      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.100"}
        fontSize={"xs"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
      >
        {name}
      </Text>
    </Pressable>
  );
}
