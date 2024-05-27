const data1 = [44, 55, 57, 56, 61, 58, 63, 60, 66];

const rawData1 = [
    {'Tipo': ['Economica/','Patrimonial'], 'Distrito': {2022: {'Centro':1154,'Norte-Orán':107,'Norte-Tartagal':43,'Sur-Anta':5,'Sur-Metán':96}}},
    {'Tipo': 'Fisica', 'Distrito': {2022: {'Centro':6131,'Norte-Orán':1594,'Norte-Tartagal':1353,'Sur-Anta':341,'Sur-Metán':666}}},
    {'Tipo': 'Otros', 'Distrito': {2022: {'Centro':0,'Norte-Orán':5,'Norte-Tartagal':0,'Sur-Anta':0,'Sur-Metán':0}}},
    {'Tipo': 'Psicologica', 'Distrito': {2022: {'Centro':14316,'Norte-Orán':2740,'Norte-Tartagal':3733,'Sur-Anta':621,'Sur-Metán':1600}}},
    {'Tipo': 'Sexual', 'Distrito': {2022: {'Centro':385,'Norte-Orán':208,'Norte-Tartagal':126,'Sur-Anta':26,'Sur-Metán':70}}},
    {'Tipo': 'Simbolica', 'Distrito': {2022: {'Centro':1278,'Norte-Orán':29,'Norte-Tartagal':18,'Sur-Anta':5,'Sur-Metán':67}}}
];

function getChartData1(year, distrito) {
    return rawData1.map(item => ({
        Tipo: item.Tipo,
        Cantidad: item.Distrito[year][distrito]
    }));
}

function changeDistritos1() {
    const year1 = document.getElementById('Year1').value;
    const distrito1 = document.getElementById('Distrito1').value;

    const newData1 = getChartData1(year1, distrito1);

    this.options.series[0].data = newData1.map(item => item.Cantidad);
    this.options.xaxis.categories = newData1.map(item => item.Tipo);

    const values2 = newData1.map(item => item.Cantidad);

    const max2 = Math.max(...values2);
    //const newBagc2 = values2.map(value => value === max2 ? 'rgba(231,165,44,0.7)' : 'rgb(82,76,66,0.7)');
    //const newBorc2 = values2.map(value => value === max2 ? 'rgba(231,165,44,0.9)' : 'rgb(82,76,66,0.9)');
    //const newBagc_hover2 = values2.map(value => value === max2 ? 'rgba(231,165,44,0.8)' : 'rgb(82,76,66,0.8)');
    //const newBorc_hover2 = values2.map(value => value === max2 ? 'rgba(231,165,44,1)' : 'rgb(82,76,66,1)');

    chart1.update();
}

const initialData1 = getChartData1(2022, "Centro");

var options = {
    series: [{
    name: 'Cantidad',
    data: data1
    }],
    chart: {
        type: 'bar'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
        },
    xaxis: {
        categories: initialData1.map(item => item.Tipo),
    },
    yaxis: {
        title: {
            text: 'Cantidad'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    },
    animations: {
        speed: 200
    }
    };

    var chart1 = new ApexCharts(document.querySelector("#chart"), options);
    chart1.render();
    changeDistritos1();