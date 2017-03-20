'use strict';

import Polyglot from 'node-polyglot';

import enNls from '../../i18n/en.json';

const langs = {
    'en': enNls
};

export function initI18n(lng) {
    var polyglot = new Polyglot({
        phrases: langs[lng],
        locale: lng
    });

    return polyglot.t.bind(polyglot);
};