var PATH = require('path'),
    environ = require('../environ'),

    pjoin = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    environ = require('../environ'),

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = pjoin(PRJ_ROOT, '.bem/techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs'),
    BEM_GEN_DOC_TECHS = environ.getLibPath('bem-gen-doc', '.bem/techs');


exports.getTechs = function() {

    return {
        'deps.js'        : 'deps.js',
        'css'            : 'css',
        'ie.css'         : 'ie.css',
        'ie6.css'        : 'ie6.css',
        'ie7.css'        : 'ie7.css',
        'ie8.css'        : 'ie8.css',
        'ie9.css'        : 'ie9.css',

        'title.txt'      : 'title.txt',
        'desc.wiki'      : '',
        'i18n.title.txt' : pjoin(PRJ_TECHS, 'i18n.title.txt'),
        'i18n.desc.wiki' : pjoin(PRJ_TECHS, 'i18n.desc.wiki'),

        'bemhtml'        : pjoin(BEMBL_TECHS, 'bemhtml.js'),
        'js'             : pjoin(BEMBL_TECHS, 'js.js')
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
