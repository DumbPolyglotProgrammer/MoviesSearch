`expo-cli`
<br>
Adds in a ton of default config to use features common in apps, like icons, video, better camera use, etc.

`react-native-cli`
<br>
Default CLI to generate a project. Requires a lot of extra work to add in common features.

Good article on these two CLIs
<br>
https://levelup.gitconnected.com/expo-vs-react-native-cli-a-guide-to-bootstrapping-new-react-native-apps-6f0fcafee58f

---

Project Generation/Bootstrap

```
npx expo-cli init MoviesSearch
```

---

What's the difference between `npm` and `npx`?

- npm is a tool mainly used to install packages.
- npx is a tool to execute packages.

If you want to execute a package without installing it on your computer and then launch it you can use npx directly.
Speaking of react, `create-react-app` is an utility to bootstrap a react project: if you use it with npx (`npx create-react-app my-app`) you will have your `my-app` project in place without the need to install `create-react-app` itself (which will need another passage: `npm install create-react-app` and then `create-react-app my-app`).

---

What is this `.expo-shared` directory?
<br>
https://blog.expo.io/image-compression-with-expo-cli-d32d15cc8b73

---

React Navigation

- DrawerNavigator
- BottomTabNavigator
- StackNavigator

https://reactnavigation.org/docs/4.x/getting-started

Note: There is v5 version of React Navigation out there, this app uses v4.

```
npm install react-navigation
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-navigation-stack @react-native-community/masked-view
```

```
Todo: Migrate from v4 to v5
https://reactnavigation.org/docs/upgrading-from-4.x/
```

Links on React Navigation getting started.

- https://reactnavigation.org/docs/4.x/hello-react-navigation
- https://reactnavigation.org/docs/4.x/navigating
- https://reactnavigation.org/docs/4.x/params

---

Expo Vector Icons Directory
<br>
https://icons.expo.fyi

---

...
