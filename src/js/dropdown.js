$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
        controls: {
            position: 'right',
            displayCls: 'iqdropdown-item-display',
            controlsCls: 'iqdropdown-item-controls',
            counterCls: 'counter'
        },
        selectionText: 'гостей',
        textPlural: 'Сколько гостей',
    });
});