<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe fixes-for-third-party-packages
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

This package contains fixes for third party packages.
That brings them back to be used with Universe 

## Please report any integration fixes with third party packages
It's very important to us that universe can be good integrated with other packages.
If is some issue let us know or report your fixes
  
## collection2
Package aldeed:collection2 changes the prototype of Mongo.Collection in that way 
that All Class inherited* from Mongo.Collection isn't anymore instance of Mongo.Collection 

(*inherited via Babel way: `class ExtendedCollection extends Meteor.Collection`)

## collection-hooks
collection hooks package works on universe collection 

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe fixes-for-third-party-packages is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
