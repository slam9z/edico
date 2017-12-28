window.onload = function () {

var options = {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "EtherDelta Transaction Amount"
	},
	axisX: {
		valueFormatString: "MMM"
	},
	axisY: {
		prefix: "$",
		labelFormatter: addSymbols
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [
		{
			type: "column",
			name: "Transaction Amount",
			showInLegend: true,
			xValueFormatString: "MMMM YYYY",
			yValueFormatString: "$#,##0",
			dataPoints: [
				{ x: new Date(2017, 0), y: 20000 },
				{ x: new Date(2017, 1), y: 25000 },
				{ x: new Date(2017, 2), y: 30000 },
				{ x: new Date(2017, 3), y: 70000 },
				{ x: new Date(2017, 4), y: 40000 },
				{ x: new Date(2017, 5), y: 10000000 },
				{ x: new Date(2017, 6), y: 20000000 },
				{ x: new Date(2017, 7), y: 50000000 },
				{ x: new Date(2017, 8), y: 130000000 },
				{ x: new Date(2017, 9), y: 370000000 }
			]
		}
//		,
//		{
//			type: "line",
//			name: "Expected Sales",
//			showInLegend: true,
//			yValueFormatString: "$#,##0",
//			dataPoints: [
//				{ x: new Date(2017, 0), y: 32000 },
//				{ x: new Date(2017, 1), y: 37000 },
//				{ x: new Date(2017, 2), y: 40000 },
//				{ x: new Date(2017, 3), y: 52000 },
//				{ x: new Date(2017, 4), y: 45000 },
//				{ x: new Date(2017, 5), y: 47000 },
//				{ x: new Date(2017, 6), y: 42000 },
//				{ x: new Date(2017, 7), y: 43000 },
//				{ x: new Date(2017, 8), y: 41000 },
//				{ x: new Date(2017, 9), y: 42000 }
//			]
//		}
//		,
//		{
//			type: "area",
//			name: "Profit",
//			markerBorderColor: "white",
//			markerBorderThickness: 2,
//			showInLegend: true,
//			yValueFormatString: "$#,##0",
//			dataPoints: [
//				{ x: new Date(2017, 0), y: 4000 },
//				{ x: new Date(2017, 1), y: 7000 },
//				{ x: new Date(2017, 2), y: 12000 },
//				{ x: new Date(2017, 3), y: 40000 },
//				{ x: new Date(2017, 4), y: 20000 },
//				{ x: new Date(2017, 5), y: 35000 },
//				{ x: new Date(2017, 6), y: 33000 },
//				{ x: new Date(2017, 7), y: 20000 },
//				{ x: new Date(2017, 8), y: 25000 },
//				{ x: new Date(2017, 9), y: 16000 },
//				{ x: new Date(2017, 10), y: 29000 },
//				{ x: new Date(2017, 11), y: 20000 }
//			]
//		}
]
};
$("#chartContainer").CanvasJSChart(options);

function addSymbols(e) {
	var suffixes = ["", "K", "M", "B"];
	var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

	if (order > suffixes.length - 1)
		order = suffixes.length - 1;

	var suffix = suffixes[order];
	return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}


}
