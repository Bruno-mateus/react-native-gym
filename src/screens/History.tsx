import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "27.08.22",
      data: ["Puxada frontal"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />
        <SectionList
          px={3}
          pt={8}
          sections={exercises}
          keyExtractor={(item) => item}
          renderItem={() => <HistoryCard />}
          renderSectionHeader={({ section }) => (
            <Heading color="gray.100" fontSize={"md"}>
              {section.title}
            </Heading>
          )}
          contentContainerStyle={
            exercises.length == 0 && {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }
          }
          ListEmptyComponent={() => (
            <Text color={"gray.100"} fontSize={"md"}>
              Não há exercicios registrados.{"\n"}
              Bora se exercictar hoje ?
            </Text>
          )}
        />
    </VStack>
  );
}
