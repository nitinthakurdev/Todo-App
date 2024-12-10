import { View, Text } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const Chart = () => {
  return (
    <View>
      <Text className="text-xl font-medium ">Chart</Text>
      <View>
        <BarChart
          data={[{ value: 100,frontColor:"#e0ffcd" }, { value: 200, frontColor: '#ffc93c' }, { value: 75, frontColor: '#4ef037' }, { value: 130, frontColor: '#ff6f3c' }]}
          height={200}
          width={300}
          barWidth={20}
          barBorderRadius={3}
          spacing={20}
        />
      </View>
    </View>
  );
};

export default Chart;
