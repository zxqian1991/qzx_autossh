# qzx_autossh

this plugin just use to instead of autossh or ssh.

with the plugin we can reverse or redirect the port or the host more simple.

**like this**:

```bash
qzx_autossh -u qianzhixiang -l 172.20.138.132:3000 -r www.loveqzx.com:9999 -v false
```
so , with this command we can use the `9999` port in `www.loveqzx.com` the same as  we use the port `3000` in `172.20.138.132`

## install

```bash
npm install -g qzx_autossh
```

## option

**-l**

specify the local host name and the local host's port. like: '172.20.138.132:3000'

**-r**

specify the remote host name and the remote host's port. like: 'www.loveqzx.com:9999'

**-v**

if reverse the ssh, default is false

**-u**

specify the usename of the remote host



