Package.describe({
  name: 'meteor-coffeescript-issue',
  summary: "meteor-coffeescript-issue",
  version: '0.1.0',
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Core dependencies.
  api.use([
    'coffeescript@2.0.3_1',
    'ecmascript',
    'underscore'
  ], 'server');

  api.export('Foo', 'server');

  api.mainModule('server.coffee', 'server');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@1.4.4.5');

  api.use([
    'coffeescript@2.0.3_1',
    'ecmascript',
    'tinytest',
    'test-helpers',
    'insecure',
    'random',
    'underscore'
  ]);

  // Internal dependencies.
  api.use([
    'meteor-coffeescript-issue'
  ]);

  api.addFiles([
    'tests.coffee'
  ], 'server');
});
