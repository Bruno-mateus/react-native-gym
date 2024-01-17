import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import BkgImage from "@assets/background.png";
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Singup() {
    const navigate = useNavigation()
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} paddingX={8} paddingBottom={"16"}>
          <Image
            source={BkgImage}
            defaultSource={BkgImage}
            alt="pessoas treinando"
            resizeMode="contain"
            position={"absolute"}
          />
          <Center my={24}>
            <LogoSvg />
            <Text fontSize={"sm"} color="gray.100">
              Treine sua mente e o seu corpo
            </Text>
          </Center>
          <Center>
            <Heading fontFamily={"heading"} fontSize={"xl"} color={"gray.100"}>
              Crie sua conta{" "}
            </Heading>
            <Input placeholder="Nome" />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirmar senha" secureTextEntry />
            <Button title="Criar e acessar" />
          </Center>
          <Button
            mt="20"
            title="Voltar para o login"
            variant={"outline"}
            onPress={() => navigate.goBack()}
          />
        </VStack>
      </ScrollView>
    );
}