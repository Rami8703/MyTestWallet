import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Button, Text, View } from "react-native";

export default function Index() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  console.log(data, isFetching, "isLoading");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          data
            ?.slice(0, 10)
            .map((item) => <Text key={item.id}>{item.title}</Text>)
        )}
        <Button
          onPress={() => {
            refetch();
          }}
          title={"REFETCH"}
        />
      </View>
    </View>
  );
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};
