import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { ITasks } from '@/types/Types';
import Button from '../../components/Button';

const Tasks = () => {
  const tasks: ITasks[] = [
    {
      title: 'car wash',
      description: 'this is my car and i want to wash ',
      status: 'pending',
    },
    {
      title: 'car wash again',
      description: 'this is my car and i want to wash ',
      status: 'complete',
    },
  ];

  const snapPoint = useMemo(() => ['50%', '75%'], []);
  const bottomSheetref = useRef<BottomSheet>(null);
  const renderBackgrop = useCallback(
    (prop: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...prop}
      />
    ),
    [],
  );
  const [currentData, setCurrentData] = useState<ITasks | null>(null);

  return (
    <GestureHandlerRootView className="flex-1">
      <FlatList
        className="bg-white pb-10"
        data={tasks}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              bottomSheetref.current?.collapse();
              setCurrentData(item);
            }}
          >
            <View className="shadow-lg px-5 relative shadow-black mx-5 border border-transparent bg-white  py-3  rounded-lg my-4 ">
              <Text className="text-lg font-medium">{item.title}</Text>
              <Text className="text-slate-600">
                {item.description.slice(0, 20)}...
              </Text>
              <Text
                className={`absolute right-5 top-[50%] -translate-y-[20%] px-4 py-2 ${item.status === 'pending' ? 'bg-yellow-300' : 'bg-green-500 text-white'} rounded-full`}
              >
                {item.status}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <Text className="text-3xl text-center py-10 font-bold">Tasks</Text>
        )}
        ListEmptyComponent={() => (
          <Text className="text-center text-xl  py-10 text-gray-500">
            No tasks available
          </Text>
        )}
        ListFooterComponent={() => <View className="my-20"></View>}
      />

      <BottomSheet
        backdropComponent={renderBackgrop}
        backgroundStyle={{ backgroundColor: '#f2f9f1' }}
        index={-1}
        ref={bottomSheetref}
        snapPoints={snapPoint}
        enablePanDownToClose={true}
      >
        <BottomSheetView
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: '#ececec',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <View className="px-5">
            <Text className="text-2xl font-semibold text-center">
              Task Details
            </Text>
            <View className="py-5">
              <Text className="text-xl">
                <Text>Title : </Text>
                <Text className="font-medium capitalize">
                  {currentData?.title}
                </Text>
              </Text>
              <Text>
                <Text className="text-xl">Message : </Text>
                <Text className="capitalize">{currentData?.description}</Text>
              </Text>
              <Text>
                <Text className="text-xl">Status : </Text>
                <Text className="capitalize">{currentData?.status}</Text>
              </Text>
            </View>
            <View>
              <Text className="text-xl">TaKe Actions : </Text>
              <View className="flex flex-row justify-between my-4">
                <Button
                  text="Edit"
                  textStyle="text-white text-lg font-medium"
                  style="bg-button px-3 py-2 rounded-xl"
                />
                {currentData?.status === 'pending' && (
                  <Button
                    text="Cancel"
                    textStyle="text-white text-lg font-medium"
                    style="bg-red-400 px-3 py-2 rounded-xl"
                  />
                )}
                <Button
                  text="Delete"
                  textStyle="text-white text-lg font-medium"
                  style="bg-red-600 px-3 py-2 rounded-xl"
                />
                {currentData?.status === 'pending' && (
                  <Button
                    text="Complete"
                    textStyle="text-white text-lg font-medium"
                    style="bg-green-500 px-3 py-2 rounded-xl"
                  />
                )}
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Tasks;
