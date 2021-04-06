import React, { useState, createContext } from 'react';
import ReactDOM,  {render}from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

//Material Ui
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './components/styles/theme';

//Components
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";

export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Route path="/" component={App} />
          </BrowserRouter>
        </ThemeProvider>
      </UserContext.Provider>
    </Provider>
  )
}
export default render(<Root />, document.getElementById("root"));

