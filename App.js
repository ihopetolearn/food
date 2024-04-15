import { createAppContainer } from "react-navigation";
import {createStackNavigation}from "react-navigation-stack";
import searchScreen from "./src/screen/searchScreen";

const navogator = createAppContainer(
  {
    serach: searchScreen
  };
  {
initialRoutName:'serach'
defaultNavigationOption:{
  title:'app'
}
  }
);
