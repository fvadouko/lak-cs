/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
"use strict";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import Homepage from "./pages/HomePage";
import Planningpage from "./pages/PlanningPage";
import Pointeusepage from "./pages/PointeusePage";
import Paiepage from "./pages/PaiePage";
import EmployePage from "./pages/EmployePage";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/planning" component={Planningpage} />
        <Route path="/pointeuse" component={Pointeusepage} />
        <Route path="/paies" component={Paiepage} />
        <Route path="/employe" component={EmployePage} />
        {/*<Route path="/detail" component={EmployePage} />*/}
        <Route path="/" component={Homepage} />
      </Switch>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
