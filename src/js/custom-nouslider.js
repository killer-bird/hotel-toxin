import noUiSlider from "nouislider";
document.addEventListener("DOMContentLoaded",()=>{
    if (document.getElementById('range')){
        const range = document.getElementById('range');
        console.log(123)
        noUiSlider.create(range, {
            start: [5000, 10000],
            connect: true,
            range: {
                'min': 0,
                'max': 15000
            }
        });
        const rangeMin = document.querySelector('span.min')
        const rangeMax = document.querySelector('span.max')
        range.noUiSlider.on('update', (values)=>{
            rangeMin.innerHTML = `${Math.floor(Number(values[0]))}₽`
            rangeMax.innerHTML = `${Math.floor(Number(values[1]))}₽`
        })
    }

})

