import React, { Fragment, Component } from "react";
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
highchartsMore(Highcharts);
solidGauge(Highcharts);


class HighchartSolidGauge extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }



  renderChart = ({ chartId, chartData,colorsIndex }) => {
    Highcharts.chart(chartId, {

      chart: {
        type: 'solidgauge',
        height: "30%",
        events: {
          render() {
            let chart = this,
              label1 = chart.series[0].dataLabelsGroup;
    
            label1.translate(chart.marginRight, 0)
          }
        }
      },
       credits: {
          //  to remove highcharts.com watermark
          enabled: false
      },
      title: {
        text: "test",
        verticalAlign: 'bottom',
        align: 'center',
        style: {
          fontSize: "24px"
        }
      },
    
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{
          outerRadius: '112%',
          innerRadius: '100%',
          borderWidth: 0
        }]
      },
    
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },
    
      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: true,
            verticalAlign: 'middle'
          },
        }
      },
    
      series: [{
        name: "test",
        data: [{
          color: Highcharts.getOptions().colors[colorsIndex],
          radius: '112%',
          innerRadius: '100%',
          y: chartData,
          dataLabels: {
            y: 50,
            format: '{y}%',
            borderWidth: 0,
            style: {
              fontSize: '15px'
            }
          }
        }]
      },]
    });
  }


  componentDidMount() {
    this.renderChart(this.props);
  }


  render() {
    const { chartId } = this.props;
    return (
      <Fragment>
        <div id={chartId}>
        </div>
      </Fragment>
    );
  }

}

export default HighchartSolidGauge;
