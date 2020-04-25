import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";
import { routingStore } from "./stores";

const browserHistory = createBrowserHistory();

export const history = syncHistoryWithStore(browserHistory, routingStore);
