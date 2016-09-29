'use strict';

export function showActionSheet (buttons) {
    var normalBtn = [
        {
            text: 'Modals',
            label: true
        }
    ];
    var cancelBtn = [
        {
            text: 'Cancel',
            color: 'red'
        }
    ];
    Array.prototype.push.apply(normalBtn, buttons);
    var groups = [normalBtn, cancelBtn];
    myApp.actions(groups);
};