#!/usr/bin/env node
const yargs = require('yargs');
const fun = require('./func');
let argv = yargs.option('reverse', {
    alias: 'v',
    desc: '是否反向代理'
})
.option('local', {
    alias: 'l',
    desc: '本地'
})
.option('remote', {
    alias: 'r',
    desc: '远程'
})
.option('username', {
    alias: 'u',
    desc: '用户名'
})
.argv;
if(!argv.remote) {
    console.log('请输入远程主机和端口号')
}
if(!argv.local) {
    console.log('请输入本地主机和端口号')
}
if(argv.remote && argv.local) {
    argv.username = argv.username || 'root';
    try {
        argv.reverse = JSON.parse(argv.reverse);
    } catch(e) {
        argv.reverse = false;
    }
    
    let locals = argv.local.split(":");
    let remotes = argv.remote.split(":");
    locals[0] = locals[0] || 'localhost';
    locals[1] = locals[1] || '22';
    remotes[0] = remotes[0] || 'localhost';
    remotes[1] = remotes[1] || '22';
    fun({
        reverse: argv.reverse,
        remotehost: remotes[0],
        remoteport: +remotes[1],
        localhost: locals[0],
        localport: +locals[1],
        username: argv.username
    })
}