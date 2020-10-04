import React, { Fragment, Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class LiveData extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  renderChart(){

    let chart = am4core.create("LiveData", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    let data = [];
    let open = 100;
    let close = 250;
    
    for (var i = 1; i < 120; i++) {
      open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
      close = Math.round(open + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
      data.push({ date: new Date(2018, 0, i), open: open, close: close });
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0.3;
    series.defaultState.transitionDuration = 1000;
    series.tensionX = 0.8;
    
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.defaultState.transitionDuration = 1500;
    series2.stroke = chart.colors.getIndex(6);
    series2.tensionX = 0.8;
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

  }

  componentDidMount() {
    this.renderChart(this.props);
  }



  render() {
   // const { chartId } = this.props;
    return (
      <Fragment>
        <div id={"LiveData"}></div>
      </Fragment>
    );
  }
}

export default LiveData;
