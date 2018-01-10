Run:

```
meteor test-packages ./
```

Error:

```
W20180110-12:46:56.224(-8)? (STDERR) TypeError: Class constructor Foo cannot be invoked without 'new'
W20180110-12:46:56.224(-8)? (STDERR)     at new Bar (tests.coffee:5:5)
W20180110-12:46:56.225(-8)? (STDERR)     at tests.coffee (packages/local-test_meteor-coffeescript-issue/tests.coffee:5:1)
W20180110-12:46:56.225(-8)? (STDERR)     at fileEvaluate (packages/modules-runtime.js:343:9)
W20180110-12:46:56.225(-8)? (STDERR)     at require (packages/modules-runtime.js:238:16)
```
