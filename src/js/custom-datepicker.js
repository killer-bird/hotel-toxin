let togler = 0;
let newMinDate = "";
const  datepicker = $('.arriv-depart-input').datepicker({
    prevHtml: '<div class="back material-icons">arrow_back</div>',
    nextHtml: '<div class="forward material-icons">arrow_forward</div>',
    navTitles: {
        days: 'MM yyyy'
    },
    minDate: new Date(),
    onShow: function (dp, animationCompleted) {
        if (animationCompleted) {
            ++togler
            console.log(togler, 'show')
        }else {
            if (dp.$datepicker.find('.datepicker--nav').html()) {
                if (dp.$datepicker.find('.datepicker--controls').html() === undefined) { /*ONLY when button don't existis*/
                    dp.$datepicker.append('<div class="datepicker--controls"><button class="clear">очистить</button><button class="apply">применить</button></div>');
                    dp.$datepicker.find('button.clear').click(function (event) {
                        dp.clear();
                    });
                    dp.$datepicker.find('button.apply').click(function (event) {
                        dp.hide();
                    });
                }
            }
        }
    },
    onHide: function (dp, animationCompleted) {
        if(animationCompleted){
            togler--
            console.log(togler, 'hide')
        }
    },
    onSelect: function (formattedDate, date, dp) {
        datepicker['minDate'] = date[0]
        newMinDate = date[0]
        let dates = formattedDate.split(',')
        $('.arriv-depart-input').val(dates[0])
        $('.second-input').val(dates[1])
        console.log(formattedDate)
        console.log(date[0])
    }

}).data('datepicker')

//buttons
$('.second-input').click(function () {
    datepicker.show()
})
$('.arrive-depart-button').click(function () {
    if(togler===0){
        datepicker.show()

    }else {
        datepicker.hide()
    }
})
$('.guest-button').click(function (event) {
    $('.guests-dropdown').toggleClass('active');
})


