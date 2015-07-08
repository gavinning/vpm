#VPM


安装  

```
npm install vpm --save
```

使用  

```
var aapm = require('vpm');

// 注册命令
aapm.cli.reg('install', 'vpm-command-install')

// 设置配置文件
aapm.config.set('dir.color', 'blue')

// 接收命令
aapm.cli.run(process.argv)
```
