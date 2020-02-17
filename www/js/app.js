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

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/planning" component={Planningpage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);

// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import { BlockEvents } from "./components/scheduler";
// import PostAPI from "./services/postApi";

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const fetchCustomers = async () => {
//     try {
//       const data = await PostAPI.findAll();
//       setPosts(data);
//     } catch (error) {
//       toast.error("Impossible de charger les posts !");
//     }
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   return <BlockEvents />;
// };
// const domContainer = document.querySelector("#app");
// ReactDOM.render(<App />, domContainer);

// var app = {
//   // Application Constructor
//   initialize: function() {
//     document.addEventListener(
//       "deviceready",
//       this.onDeviceReady.bind(this),
//       false
//     );
//     // Disabling form submissions if there are invalid fields
//     this.disableFormSubmission();
//   },

//   // deviceready Event Handler
//   //
//   // Bind any cordova events here. Common events are:
//   // 'pause', 'resume', etc.
//   onDeviceReady: function() {
//     this.receivedEvent("deviceready");
//   },

//   // Update DOM on a Received Event
//   receivedEvent: function() {
//     if (this.hasGetUserMedia()) {
//       console.log("You are all set!");
//       this.takePicture();
//     } else {
//       alert("getUserMedia() is not supported by your browser :/");
//     }
//   },

//   disableFormSubmission: function() {
//     window.addEventListener(
//       "load",
//       function() {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         const forms = document.getElementsByClassName("needs-validation");
//         // Loop over them and prevent submission
//         Array.prototype.filter.call(forms, function(form) {
//           form.addEventListener(
//             "submit",
//             function(event) {
//               if (form.checkValidity() === false) {
//                 event.preventDefault();
//                 event.stopPropagation();
//               }
//               form.classList.add("was-validated");
//             },
//             false
//           );
//         });
//       },
//       false
//     );
//   },

//   hasGetUserMedia: function() {
//     return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
//   },

//   takePicture: function() {
//     const captureVideoButton = document.querySelector("#open-camera");
//     const screenshotButton = document.querySelector("#camera-capture");
//     const img = document.querySelector("#profile-image");
//     const video = document.querySelector("#video-container");

//     const canvas = document.createElement("canvas");

//     const constraints = {
//       video: { width: { exact: 200 }, height: { exact: 150 } }
//     };

//     captureVideoButton.onclick = function() {
//       navigator.mediaDevices
//         .getUserMedia(constraints)
//         .then(handleSuccess)
//         .catch(handleError);
//     };

//     screenshotButton.onclick = function() {
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       canvas.getContext("2d").drawImage(video, 0, 0);
//       // Other browsers will fall back to image/png
//       img.src = canvas.toDataURL("image/webp");
//       // If the video source Object is set, stop all tracks
//       if (video.srcObject) {
//         video.srcObject.getTracks().forEach(function(track) {
//           track.stop();
//         });
//       }
//     };

//     function handleSuccess(stream) {
//       screenshotButton.disabled = false;
//       video.srcObject = stream;
//     }

//     function handleError(error) {
//       console.log("Error: ", error);
//     }
//   }
// };

// app.initialize();
