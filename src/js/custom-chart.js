import Chart from 'chart.js/auto';
function getGradients(ctx) {
    const excellent = ctx.createLinearGradient(80, 0, 0, 180);
    excellent.addColorStop(0, '#FFE39C');
    excellent.addColorStop(1, '#FFBA9C');

    const good = ctx.createLinearGradient(180, 0, 0, 180);
    good.addColorStop(0,'#6FCF97')
    good.addColorStop(1,'#66D2EA')

    const satisfactorily = ctx.createLinearGradient(80, 0, 0, 180);
    satisfactorily.addColorStop(0,'#BC9CFF')
    satisfactorily.addColorStop(1,'#8BA4F9')

    const disappointed =  ctx.createLinearGradient(80, 0, 0, 180);
    disappointed.addColorStop(0, '#919191')
    disappointed.addColorStop(1, '#3D4975')
    return [ disappointed, satisfactorily, good, excellent]
}

const counter = {
    id : 'counter',
    beforeDraw(chart, args, options) {
        const {ctx, chartArea: { right, bottom, left, width, height} } = chart
        console.log(chart.chartArea)
        ctx.save();
        const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2-10);
        ctx.fillStyle = 'rgba(188, 156, 255, 1)'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle';
        ctx.fontStyle = 'bold'
        ctx.font = '24px  sans-serif'
        ctx.fontFamily = 'Montserrat'
        ctx.fillText('260', centerX, centerY)
    }
};
const afterCounter = {
    id: 'afterCounter',
    afterDraw(chart, args, options) {
        const {ctx, chartArea: { right, bottom, left, width, height} } = chart
        const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2 + 13);
        ctx.fillStyle = 'rgba(188, 156, 255, 1)'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle';
        ctx.fontStyle = 'bold'
        ctx.fontFamily = 'Montserrat'
        ctx.font = '14px  sans-serif'
        ctx.fillText('голосов', centerX, centerY)
    }
}
const data = {
    labels:['Разочарован','Хорошо ','Удовлетворительно ','Великолепно',  ],
    datasets: [{
        label: "Data",
        borderColor: [ '#ffffff' ],
        color: 'rgba(31, 32, 65, 0,75)',
        backgroundColor: function(context){
            const chart = context.chart;
            const {ctx} = chart;
            return getGradients(ctx)
        },
        borderWidth:2,
        borderAlign: "inner",
        data: [0,25,25,50]
    }],
}

const config = {
    showTooltips: false,
    type: 'doughnut',
    data,
    plugins: [counter,afterCounter],

    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutout: 50,
        plugins:{
            tooltip:{
                enabled: false
            },
            legend:{
                fontColor: "blue",
                fullSize:false,
                display: true,
                reverse: true,
                position: 'right',
                align: 'end',
                labels: {
                    color: "rgba(31,32,65,0.75)",
                    usePointStyle: true,
                    boxWidth: 10,
                    boxHeight: 10,
                    font:{
                        size: 14,
                        family: 'Montserrat'
                    }
                }
            },
        },
    }
}


const myChart = new Chart(document.getElementById('myChart'), config);


