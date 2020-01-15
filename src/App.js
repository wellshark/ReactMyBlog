import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Sign in</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/signup">
                        <SignupPage />
                    </Route>
                    <Route path="/">
                        <SigninPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
