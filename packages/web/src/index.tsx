import { AppRegistry } from "react-native";

import { App } from "components/src/App";

AppRegistry.registerComponent("dmtfrontend", () => App);
AppRegistry.runApplication("dmtfrontend", {
  rootTag: document.getElementById("root"),
});
