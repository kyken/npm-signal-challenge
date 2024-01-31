```
$ npm -v
10.3.0
```

```
$ npm run start
> npm10.3.0@1.0.0 start
> node index.js

[19080] loop start: 0
[19080] loop end
[19080] loop start: 
...
```
few seconds later...

I try it other terminal
```
$  npm run kill
> npm10.3.0@1.0.0 kill
> ps -ef | grep 'npm run start' | grep -v 'grep' | awk '{ print "kill -s INT", $2 }' | sh

[43170] loop end
[43170] loop start: 21
[43170] shutdown gracefully...
...
```
😎
