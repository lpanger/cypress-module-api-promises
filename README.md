# cypress-module-api bug?

![workflow](https://github.com/lpanger/cypress-module-api-promises/actions/workflows/node.js.yml/badge.svg)

```
git clone repo
run yarn to install packages
run yarn cypress:run to reproduce
```

Will create 3 promises. 3rd one resolves first, then 1st one, then 2nd one. On Linux, second one will always return no test result data.

This works fine on Windows 10 and Mac 10.15.7, but not Linux Ubuntu 20.04

Using node 10.23.2
