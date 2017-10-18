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
~/assets                Project resource files
~/components            All related component
~/constants             App constants
  /Assets.js            Define assets variables
  /Contants.js          Define constants value
~/container             App screens
~/elements              Element can re-use 
~/store                 App store
  /actions                Actions
  /api                    API
  /reducers               Reducers
  /saga                   Config redux-saga
  /thunk                  Config redux-thunk
  /index.js               Config store
~/theme                 Theme: style can be re-use
  /Scalling.js            Scale size value for multi screen
~/utils                 Handle logic static function
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
If you want change name project, please using https://github.com/junedomingo/react-native-rename, read document or follow below step
Install react-native-rename is global, skip step if installed   
```
yarn global add react-native-rename
or
npm install react-native-rename -g
```
Rename project 
```
react-native-rename ProjectName -b com.example.projectname (With custom Bundle Identifier (Android). iOS using Xcode)
```

# Happy Coding!