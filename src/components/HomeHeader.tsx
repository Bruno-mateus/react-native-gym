import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
} from "react-native";

export function HomeHeader() {
  return (
    <HStack pt={16} pb={5} px={8} bg={"gray.600"} alignItems={"center"}>
      <UserPhoto
        source={{
          uri: "https://xesque.rocketseat.dev/users/avatar/profile-85559fce-1ed4-43c0-a678-c2365a338b87-1636412686401.jpg",
        }}
        alt="User Avatar"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color={"gray.100"} fontSize={"md"}>
          Olá
        </Text>
        <Heading color="gray.100" fontSize={"md"}>
          Bruno
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color={"gray.100"} size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
