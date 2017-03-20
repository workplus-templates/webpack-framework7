import './main.less';

import Xhr from '../utils/xhr';
import mainHtml from './main.tpl.html';
import Tool from '../utils/tool';

import Modal from '../components/modal';
import {showActionSheet} from '../components/action-sheet';

export default {
    // initialization page
    init(){
        this.render();
        this.bindEvent();
    },
    render(){
        var tpl = Tool.renderTpl(mainHtml, {text: $t('main.title')});
        $('.home-page').html(tpl);
    },
    // modal
    showActionSheet(){
        var btns = [{
                text:'Alert',
                onClick(){
                    Modal.alert('hello Framework7');
                }
            },{
                text:'Confirm',
                onClick(){
                    Modal.confrim('Are you ok?');
                }
            }];
        showActionSheet(btns);
    },
    // bind events
    bindEvent(){
        var events = [{
                target: '.open-actionsheet',
                event: 'click',
                handler: this.showActionSheet
            }];
        Tool.bindEvents(events);
    }
};