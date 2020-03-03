import React from "react";
import { loadTheme, initializeIcons } from 'office-ui-fabric-react';
import { theme } from "./theme";
import Default from "./layouts/default";
import "./styles/app.css";

loadTheme(theme);
initializeIcons();

// const stackTokens = { childrenGap: 40 };

class App extends React.Component {
    render () {
        return (
            <Default/>
        );
    }
}

export default App;
