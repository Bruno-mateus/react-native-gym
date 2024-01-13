import { Center, Spinner } from "native-base";

export function Loading() {
    return (
      <Center flex={1} bgColor={'gray.700'}>
        <Spinner color='grenn.700' size={40}/>
      </Center>
    );
}