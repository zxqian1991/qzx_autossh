#!/usr/bin/env node
const yargs = require('yargs');
const fun = require('./func');
let {
  username = 'appadmin',
  _: [port = 48888, remotehost = '168.63.117.135', remoteport = 11221],
} = yargs.option('username', {
  alias: 'u',
  desc: '用户名',
}).argv;
fun({
  reverse: true,
  remotehost,
  remoteport,
  localhost: 'localhost',
  localport: port,
  username,
});
