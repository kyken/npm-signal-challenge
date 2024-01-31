```
$ npm -v
10.2.4
```

```
$ npm run start
> npm10.2.4@1.0.0 start
> node index.js

[19080] loop start: 0
[19080] loop end
[19080] loop start: 
...
```
few seconds later...

I try it other terminal
```
$ npm run kill
> ps -ef | grep 'npm run start' | grep -v 'grep' | awk '{ print "kill -s INT", $2 }' | sh
[19654] loop start: 7
[19654] loop end
[19654] loop start: 8
...
```
☠️

and then Ctrl + C

```
[20535] loop end
[20535] loop start: 9
^C[20535] shutdown gracefully...
```
🧐