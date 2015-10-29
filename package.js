Package.describe({
  name: 'universe:fixes-for-third-party-packages',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Fixes for integrations with third party packages',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vazco/universe-fixes-for-third-party-packages',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['aldeed:collection2@2.5.0'], {weak: true});
  api.use(['matb33:collection-hooks@0.8.1'], {weak: true});
});