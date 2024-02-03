import { Center, Text } from "native-base";

type ScreenHeaderProps = {
    title:string
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
    return (
      <Center bg={"gray.600"} pt={20} pb={6}>
            <Text fontSize={"xl"}  color={"gray.100"} fontFamily={'heading'}>
          {title}
        </Text>
      </Center>
    );
}