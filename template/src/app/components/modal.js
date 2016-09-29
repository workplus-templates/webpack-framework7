'use strict';

export default {
    alert(text, callback){
        myApp.modal({
            title: 'Coustom Title',
            text,
            buttons: [{
                text: 'OK',
                onClick(){
                    callback && callback();
                }
            }]
        });
    },
    confrim(text, callback){
        myApp.modal({
            title: 'Title',
            text,
            buttons: [{
                text: 'No'
            },{
                text: 'Yes',
                onClick(){
                    callback && callback();
                }
            }]
        });
    }
};