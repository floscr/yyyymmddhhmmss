# yyyymmddhhmmss
Super simple module that returns current date in yyyymmddhhmmss

## Examples

#### No divides
```
console.log( require('yyyymmddhhmmss')() )
```
For the 5th Jan 2018 @ 12:00:00 will print: `20180105120000`

#### With divides
```
console.log( require('yyyymmddhhmmss')('-', ' ', ':') )
```

For the 5th Jan 2018 @ 12:00:00 will print: `2018-01-05 12:00:00`