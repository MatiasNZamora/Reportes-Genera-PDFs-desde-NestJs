import fs from 'fs';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import * as Utils from '../helpers/chart-utils'

const sfgContent = fs.readFileSync('src/assets/ford.svg', 'utf8');

const generateChartImage = async () => {
    const chartConfig = {
        type: 'bar',                                // Show a bar chart
        data: {
            labels: [2012, 2013, 2014, 2015, 2016],   // Set X-axis labels
            datasets: [{
                label: 'Users',                         // Create the 'Users' dataset
                data: [120, 60, 50, 180, 120]           // Add data to the chart
            }]
        }
    };
    return Utils.chartJsToImage(chartConfig);
};

const generateDonutChartImage = async () => {

    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: Utils.numbers(NUMBER_CFG),
                backgroundColor: Object.values(Utils.CHART_COLORS),
            }
        ]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            }
        }
    };

    return Utils.chartJsToImage(config);
};


export const getBasicChartSvgReport = async (): Promise<TDocumentDefinitions> => {
    
    const [chart, donutChart ] = await Promise.all([ generateChartImage(), generateDonutChartImage() ]);

    return {
        content: [
            {
                svg: sfgContent,
                width: 150,
                fit: [150, 150],
            },
            {
                image: chart,
                width: 500,
                fit: [500, 300],
            },
            {
                image: donutChart,
                width: 500,
                fit: [500, 300],
            },
        ],
    };
};
