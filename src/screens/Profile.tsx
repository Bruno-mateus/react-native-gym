import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, Skeleton, Text, VStack } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export function Profile() {
  const userPHotoSize = 33
  
  const [userPhotoIsLoading, setUserPhotoIsLoading] = useState(false)
  
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView
        px={3}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}

      >
        <Center mt={6}>
          {userPhotoIsLoading ? (
            <Skeleton
              size={userPHotoSize}
              rounded={"full"}
              startColor={"gray.500"}
              endColor={"gray.300"}
            />
          ) : (
            <UserPhoto
              source={{
                uri: "https://xesque.rocketseat.dev/users/avatar/profile-85559fce-1ed4-43c0-a678-c2365a338b87-1636412686401.jpg",
              }}
              size={userPHotoSize}
              alt="profile picture"
            />
          )}
          <TouchableOpacity disabled={userPhotoIsLoading}>
            <Text color={"green.500"} mt={3} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg={"gray.600"} />
          <Input
            placeholder="johnndee@hotmail.com"
            bg={"gray.600"}
            keyboardType="email-address"
            isDisabled
          />
        </Center>
        <VStack>
          <Text fontFamily={'heading'} color='gray.100' fontSize={'md'}>Atualizar senha</Text>
          <Input placeholder="Senha atual" bg={"gray.600"} secureTextEntry/>
          <Input placeholder="Senha nova" bg={"gray.600"} secureTextEntry/>
          <Input placeholder="Confirmar nova senha" bg={"gray.600"} secureTextEntry />
          <Button title="Atualizar" mt={4} mb={6} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
