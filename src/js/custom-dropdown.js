$(document).ready(() => {
    $('#guests.iqdropdown').iqDropdown({
        maxItems:20,
        controls: {
            position: 'right',
            displayCls: 'iqdropdown-item-display',
            controlsCls: 'iqdropdown-item-controls',
            counterCls: 'counter'
        },
        //этот говнокод был проспонсирован замечательным человеком, который
        // написал этот прекрасный плагин без функции Clear
        setSelectionText: function setSelectionText(itemCount, totalItems){
            let total = itemCount['kids'] + itemCount['babys'] +itemCount['adults']
            $('.clear').click(()=>{

                for(let i of Object.keys(itemCount)){
                    itemCount[i] = 0
                }
                $(".counter").html(0)
                $(".iqdropdown-selection").html(`Сколько гостей`)})
            if(total === 1)
                return `${total} гость`
            else if(total>1 && total<5)
                return `${total} гостя`
            else if(total >= 5)
                return `${total} гостей`;
            return`Сколько гостей`
        },
    });

    $(`#conveniences.iqdropdown`).iqDropdown({
        counts: {
            bathrooms: [0,],
            beds: [0,],
            bedrooms: [0,],
        },
        maxItems: 10,
        strings:[],
        setSelectionText: function setSelectionText(itemCount,totalItems){
            const formats = {
                bedrooms:['спальня', 'спальни','cпален'],
                beds :['кровать', 'кровати', 'кроватей'],
                bathrooms:['ванная', 'ванные', 'ванных' ]
            }
            let result = []
            for(let [key, value] of Object.entries(itemCount)){
                if(itemCount[key]>0){
                    if(itemCount[key]===1){
                        result.push(`${itemCount[key]} ${formats[key][0]}`)
                    }
                    else if (itemCount[key]>1 && itemCount[key]<5){
                        result.push(`${itemCount[key]} ${formats[key][1]}`)
                    }
                    else if(itemCount[key]>4){
                        result.push(`${itemCount[key]} ${formats[key][2]}`)
                    }
                }
            }
            return result.length > 0 ? result.join(', '):'Удобства'
        }
    })



    //закрытие и открытие дропдауна, нормальная работа кнопок
    $(document).click(function(e){
        const guests = $("#guests")
        const conveniences = $("#conveniences")
        if((e.target!==guests[0] && !guests.has(e.target).length) || e.target.className ==="apply"){
            guests[0].classList.remove('menu-open')

        }else {
            guests[0].classList.add('menu-open')

        }
        if($('.form-input-block').find('#conveniences').html()) {
            if((e.target!==conveniences[0] && !conveniences.has(e.target).length || e.target.className ==="apply")) {
                conveniences[0].classList.remove('menu-open')
            }else
                conveniences[0].classList.add('menu-open')
        }

    })

});