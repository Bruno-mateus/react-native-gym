import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Box, FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groupSelected, setGroupSelected] = useState('')
  const [groups, setGroups] = useState(['Peito', 'costa', 'perna', 'biceps', 'triceps'])
   const [exercises, setExercises] = useState([
     "Remada Curvada",
     "Remada unilateral",
     "Remada romana",
     "Remada cavalinho",
     "Remada crossover",
   ]);
  return (
    <Box flex={1}>
      <HomeHeader />
      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(item) => groups.indexOf(item).toString()}
          renderItem={({ item }) => (
            <Group
              name={item}
              onPress={() => setGroupSelected(item)}
              isActive={String(groupSelected).toUpperCase() === String(item).toUpperCase()}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          my={8}
          maxH={10}
          _contentContainerStyle={{ px: 8 }}
        />
      </HStack>
      <VStack px={8}>
        <HStack justifyContent={"space-between"}>
          <Heading color="gray.100" fontSize={"lg"}>
            Exercicios
          </Heading>
          <Text fontSize={"sm"} color="gray.100">
            {exercises.length}
          </Text>
        </HStack>
      </VStack>
      <VStack flex={1} px={8}>
        <FlatList
          data={exercises}
          renderItem={() => <ExerciseCard />}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:20}}
        />
      </VStack>
    </Box>
  );
}
