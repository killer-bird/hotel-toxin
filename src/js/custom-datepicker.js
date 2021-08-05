let toggler = 0;
const mainInput = $('#arrive input')

$(document).ready(()=>{
    const  datepicker = $(mainInput).datepicker({
        prevHtml: '<div class="back material-icons">arrow_back</div>',
        nextHtml: '<div class="forward material-icons">arrow_forward</div>',
        navTitles: {
            days: 'MM yyyy'
        },
        disableNavWhenOutOfRange: true,
        range: true,
        minDate: new Date(),
        onShow: function (dp, animationCompleted) {
            if (animationCompleted) {
                ++toggler
                console.log(toggler, 'show')
            }else {
                if (dp.$datepicker.find('.datepicker--nav').html()) {
                    if (dp.$datepicker.find('.controls').html() === undefined) { /*ONLY when button don't existis*/
                        dp.$datepicker.append('<div class="controls"><button class="clear">очистить</button><button class="apply">применить</button></div>');

                        dp.$datepicker.find('button.clear').click(function (event) {
                           dp.clear();
                        });
                        dp.$datepicker.find('button.apply').click(function (event){
                            dp.hide();
                        });
                    }
                }
            }
        },
        onHide: function (dp, animationCompleted) {
            if(animationCompleted){
                toggler--
                console.log(toggler, 'hide')
            }
        },
        onSelect: function (formattedDate, date, dp) {
            dp.update('minDate',date[0])
            let dates = formattedDate.split(',')
            $(mainInput).val(dates[0])
            $('.second-input').val(dates[1])
            if (!date[0])
                dp.update('minDate', new Date())
        }
    }).data('datepicker')

//buttons
    $('.second-input').click(function () {
        datepicker.show()
    })
    $('.form-button').click(function () {
        if(toggler===0){
            datepicker.show()
        }else {
            datepicker.hide()
        }
    })
})


