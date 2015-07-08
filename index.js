var path = require('path');
var config = require('./config');

// 命令行模块
exports.cli = require('vpm-cli');

// 配置文件模块
exports.config = require('vpm-config');

// 设置配置文件路径
exports.config.set('config', config);

// 注册命令
exports.cli
    .reg('install', 'vpm-command-install', config)
    .reg('publish', 'vpm-command-publish', config)
