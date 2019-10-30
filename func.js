const autossh = require('autossh');
function runHttps(opts) {
    let config = {
        host: opts.remotehost || 'www.loveqzx.com',
        username: opts.username || 'qianzhixiang',
        localPort: opts.localport,
        localHost: opts.localhost,
        remotePort: opts.remoteport,
        reverse: (opts.reverse === undefined || opts.reverse != opts.reverse) ? true : opts.reverse
    };
    console.log(config);
    const autosshClient = autossh(config);
    autosshClient.on('error', err => {
        console.error('发生了错误: ', err);
        autosshClient.kill();
        setTimeout(() => {
            runHttps(opts);
        }, 5000)
    });

    autosshClient.on('timeout', connection => {
        console.warn('连接到主机:' + connection.host + ' 超时了.');
    });

    autosshClient.on('connect', connection => {
        console.log('隧道已经建立 ' + connection.localPort);
        console.log('进程号是: ' + connection.pid);
    });
};
module.exports = runHttps;