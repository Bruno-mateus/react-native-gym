import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import BkgImage from "@assets/background.png";
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Singin() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg="gray.700" paddingX={8} paddingBottom={'16'}>
          <Image
            source={BkgImage}
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
              Acesse sua conta
            </Heading>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Acessar" />
          </Center>
          <Center mt="20">
            <Text color={"gray.100"} fontFamily={"body"} fontSize={"sm"} mb={3}>
              Ainda não tem uma conta ?
            </Text>
            <Button title="Criar conta" variant={"outline"} />
          </Center>
        </VStack>
      </ScrollView>
    );
}