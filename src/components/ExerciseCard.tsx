import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type ExerciseCardProps = TouchableOpacityProps & {}

export function ExerciseCard({...rest}:ExerciseCardProps) {
    return (
      <TouchableOpacity {...rest}>
        <HStack bg="gray.500" py={2} px={4} my={3} rounded={"md"} alignItems={'center'} justifyContent={'center'}>
          <Image
            resizeMode="center"
            mr={4}
            width={67}
            height={67}
            source={{
              uri: "https://sportlife.com.br/wp-content/uploads/2023/04/remada-curvada.jpg",
            }}
            alt="Imagem do exercicio"
            rounded={"md"}
          />
          <VStack textAlign={"center"} justifyContent={"center"} flex={1}>
            <Heading color="gray.100" fontSize={"lg"}>
              Remada Curvada
            </Heading>
            <Text color="gray.100" fontSize={"sm"} numberOfLines={2}>
              3 séries 12 repetições
            </Text>
          </VStack>
          <Icon as={Entypo} width={24} height={24} name="chevron-thin-right" color="gray.300" />
        </HStack>
      </TouchableOpacity>
    );
}