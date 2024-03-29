import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard() {
    return (
        <HStack bg='gray.600' px={5} py={4} mb={3} alignItems={'center'}
            rounded={'md'}
            justifyContent={'space-between'}>
            <VStack>
                <Heading color='white' fontSize={'md'}>
                    Costas
                </Heading>
                <Text color={"gray.100"} fontSize={'lg'} numberOfLines={1}>Puxada frontal</Text>
            </VStack>
            <Text color='gray.300'>08:56</Text>
        </HStack>
    )
}