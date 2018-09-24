import React, { Component } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import { connect } from 'react-redux';
import moment from 'moment';

import { fetchChartData } from './actions';


@connect(
  state => ({
    bpRecords: state.history.bpChart,
    error: state.history.error,
    isLoding: state.history.isLoding,
    userId: state.user.info.id,
  }),
  { fetchChartData }
)
class HistoryChartScreen extends Component {
  state = {
    range: 'week',
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', (route) => {
      this.fetchData();
    });
  }

  fetchData() {
    let startUTC = moment().subtract(7, 'd').startOf('day').utc().format();
    if (this.state.range === 'month') {
      startUTC = moment().subtract(1, 'M').startOf('day').utc().format();
    } else if (this.state.range === 'month3') {
      startUTC = moment().subtract(3, 'M').startOf('day').utc().format();
    }

    const endUTC = moment().endOf('day').utc().format();

    this.props.fetchChartData(startUTC, endUTC, this.props.userId);
  }

  processData() {
    const LOW_MIN = 65.0;
    const LOW_MAX = 80.0;
    const HIGH_MIN = 100.0;
    const HIGH_MAX = 120.0;

    const length = 10;

    chartData = {};

    chartData.labels = Array(length).fill('a');

    chartData.low = [];

    chartData.high = [];

    chartData.lowMin = Array(length).fill(LOW_MIN);
    chartData.lowMax = Array(length).fill(LOW_MAX);

    chartData.highMin = Array(length).fill(HIGH_MIN);
    chartData.highMax = Array(length).fill(HIGH_MAX);

    return chartData;
  }


  render() {
    // 
    let chartData = this.processData();
    console.log(chartData);
    return (
      <ScrollView horizontal>
        <LineChart
          data={{
            labels: chartData.labels,
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              },
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  60,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              },
              {
                data: [
                  60,
                  60,
                  60,
                  60, 
                  60, 
                  60,
                  60, 
                  60,
                  60,
                  60
                ]
              },
              {
                data: chartData.lowMin
              },
              {
                data: chartData.lowMax
              },
              {
                data: chartData.highMin
              },
              {
                data: chartData.highMax
              },
            ]
          }}
          width={Dimensions.get('window').width * 2} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            // style: {
            //   borderRadius: 16
            // }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </ScrollView>
    );
  }
}
export default HistoryChartScreen;