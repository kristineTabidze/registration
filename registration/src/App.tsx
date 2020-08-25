import { History } from "history";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { SignUpInputs } from "./components";
import { MainPage } from "./components/second-assignment";
import { StartGame } from "./components/second-assignment/start-game";


export const HistoryContext = React.createContext<History>(
  (null as any) as History
);

export default function App({
  location,
  history,
  locale,
}: {
  location: History["location"];
  history: History;
  locale: string;
}) {
  return (
    <>
      <HistoryContext.Provider value={history}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/registration"
              component={SignUpInputs}
              location={location}
              exact={true}
            />
            <Route
              path="/"
              component={MainPage}
              location={location}
              exact={true}
            />
            <Route
              path="/start-game"
              component={StartGame}
              location={location}
              exact={true}
            />
          </Switch>
        </BrowserRouter>
      </HistoryContext.Provider>
    </>
  );
}

