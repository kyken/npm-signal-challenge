```
$ npm run start
> signal-18@1.0.0 start
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