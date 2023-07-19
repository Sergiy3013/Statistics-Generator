const fs = require('fs')
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

start();

async function start() {
    const width = 800; //px
    const height = 200; //px
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ type: 'png', width, height });

    const configuration = {
        type: 'line',
        // type: 'bar',
        data: {
            labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5', 'Date 6'],
            datasets: [
                {
                    label: 'Account 1',
                    data: [5, 4, 5, 5, 9, 10],
                    borderColor: 'rgba(255,99,132,1)',
                    backgroundColor: 'rgba(255,99,132,1)'
                },
                {
                    label: 'Account 2',
                    data: [5, 5, 6, 9, 11, 13],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 1)'
                },
                {
                    label: 'Account 3',
                    data: [5, 6, false, 10, 15, 14],
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: 'rgba(255, 206, 86, 1)'
                },
                {
                    label: 'Account 4',
                    data: [4, 3, 4, 5, 7, 9],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 1)'
                },
                {
                    label: 'Account 5',
                    data: [3, 4, 5, 7, 8, 12],
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 1)'
                },
                {
                    label: 'Account 6',
                    data: [false, 7, 6, 9, 9, 11],
                    borderColor: 'rgba(255, 159, 64, 1)',
                    backgroundColor: 'rgba(255, 159, 64, 1)'
                },
                {
                    label: 'Account 7',
                    data: [false, false, 6, 9, 10, 13],
                    borderColor: 'rgba(15, 192, 8, 1)',
                    backgroundColor: 'rgba(15, 192, 8, 1)'
                }
            ]
        },
    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);

    saveFile(`./images/${configuration.type}.png`, image)
    console.log('Done');
}

function saveFile(file, content) {
    fs.writeFile(file, content, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}