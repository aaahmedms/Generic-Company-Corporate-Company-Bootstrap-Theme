/*
* Creates the 3 graphs on the index page. 
* To see all the available options 
* on how to modify the graph see the 
* github page created by Vancoppenolle Francois at https://github.com/FVANCOP/ChartNew.js 
*/

window.onload = function () {

/**************************************** 
*first chart 
***************************************/
    
//Assign data to graph
var mydata =  
{
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			type: "Line",
			fill: false,
			strokeColor : "rgb(230, 14, 14)",
			pointColor : "rgb(205, 151, 155)",
			pointStrokeColor : "#f56691",
			data : [0.30,0.44,0.42,0.19,0.90,0.37,1.20],
      title : "line 1"
		},
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [0.65,0.59,0.90,0.81,0.56,0.55,0.40],
      title : "Bar 1"
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [0.28,0.48,0.40,0.19,0.96,0.27,1.00],
      title : "Bar 2"
		},
		{
			type: "Line",
			fill: false,
			fillColor : "rgba(151, 205, 172, 0.5)",
			strokeColor : "rgb(87, 147, 106)",
			pointColor : "rgb(151, 205, 172)",
			pointStrokeColor : "#fff",
			data : [0.42,0.58,0.44,0.22,0.84,0.17,0.70],
      title : "Line 2"
		},
	]
}

//This part here is to change the settings and options
//for the graph.
 var options = {
         legend : true,
         dynamicDisplay : true,
     responsive : true,
         inGraphDataTmpl: "<%=v3 + (i==0 ?  '    ('+v2+')' : '')%>"
    };

var firstChart = new Chart(document.getElementById("infoChart").getContext("2d")).Bar(mydata,options);

/**************************************** 
*second chart 
***************************************/ 

//Assign data to graph
var mydata2 = [
{
    value : 30,
    color: "#D97041",
    title : "January"
},
{
    value : 90,
    color: "#C7604C",
    title : "February",
    expandInRadius : 0.2,
    expandOutRadius : 0.2
},
{
    value : 24,
    color: "#21323D",
    title : "March"
},
{
    value : 58,
    color: "#9D9B7F",
    title : "April",
    expandInRadius : -0.2
},
{
    value : 82,
    color: "#7D4F6D",
    title : "May"
},
{
    value : 8,
    color: "#584A5E",
    title : "June",
    expandOutRadius : 0.3
}
]

//This part here is to change the settings and options
//for the graph.
   var options2 = {
         inGraphDataShow : true,
        legend : true,
       dynamicDisplay : true,
       responsive : true,
         inGraphDataTmpl: "<%=v3 + (i==0 ?  '    ('+v2+')' : '')%>"
    };
  
var secondChart = new Chart(document.getElementById("infoChart2").getContext("2d")).PolarArea(mydata2,options2);

/**************************************** 
*third chart 
***************************************/
    
//Assign data to graph
var mydata3 = [
{
    value : 30,
    color: "#D97041",
    title : "January"
},
{
    value : 90,
    color: "#C7604C",
    title : "February"
},
{
    value : 24,
    color: "#21323D",
    title : "March"
},
{
    value : 58,
    color: "#9D9B7F",
    title : "April"
},
{
    value : 82,
    color: "#7D4F6D",
    title : "May"
},
{
    value : 8,
    color: "#584A5E",
    title : "June"
}
]


//This part here is to change the settings and options
//for the graph.
   var options3 = {
         inGraphDataShow : true,
        legend : true,
       responsive : true,
       dynamicDisplay : true,
       inGraphDataShow : true, 
      inGraphDataAnglePosition : 2,
      inGraphDataRadiusPosition: 2,
      inGraphDataRotate : "inRadiusAxisRotateLabels",
      inGraphDataAlign : "center",
      inGraphDataVAlign : "middle",
      inGraphDataFontColor : "white",
      inGraphDataFontSize : 16,
         inGraphDataTmpl: "<%=v3 + (i==0 ?  '    ('+v2+')' : '')%>"
    };
  
var thirdChart = new Chart(document.getElementById("infoChart3").getContext("2d")).Pie(mydata3,options3);

            
}
    
  