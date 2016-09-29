'use strict';

import './detail.less';
import detailTpl from './detail.tpl.html';

export default {
    init(page){
        console.log('id: ' + page.query.id);
    }
};