# react-native-starter-kit
Build new app with React Native 

React Native Start Kit 

- Structure Folder
- React Navigation with Redux
- Redux ( Redux saga, thunk, persist)/ Actions, reducers
- Base Components
- Container : Push Notification, AlertDialog, NetInfo
- Default Style
- Default Utils
- Scaling, Debug, Config
- Define: assets, url, constants
- Code Push, Fabric 


## Folder structure

```
~/assets                project resource files
~/components            All related component
~/elements              Element can re-use 
~/constants             App constants
~/container             App screens
~/store                 App store
  /actions                Actions
  /api                    API
  /reducers               Reducers
~/theme                 theme: style can be re-use
../App.js                Root Cotainer
~/routes.js             Router configuration using react-navigation

index.js                AppRegistry (RN 0.49+)
```

# Install 
```
$ git clone https://github.com/yaraht17/react-native-starter-kit.git
$ cd react-native-starter-kit
$ npm install 
$ react-native link //if need)
$ react-native run-ios //(with ios)
$ react-native run-android //(with android)
```

Happy Coding!