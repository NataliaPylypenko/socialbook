import React from 'react';

import './App.module.scss';
import c from './App.module.scss';

import Header from "../header/Header";
import Aside from "../aside/Aside";
import Profile from "../profile/Profile";
import Dialogs from "../dialogs/Dialogs";
import Error from "../error/Error"
import Footer from "../footer/Footer"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = (props) => {

  let nav = props.nav;
  let dialogsData = props.dialogsData;
  let messagesData = props.messagesData;
  let postData = props.postData;

  return (
      <Router>
          <div className={c.app_wrapper}>

              <Header />

              <div className="container">
                  <div className="row">

                      <Aside nav={nav} />

                      <div className={c.main_content}>

                          <Routes>
                              <Route exact path="/socialbook" element={<Profile postData={postData} />} />
                              <Route exact path="/dialogs/*" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
                              <Route path="*" element={<Error />} />
                          </Routes>

                      </div>

                  </div>
              </div>

              <Footer />

          </div>
      </Router>
  );
}

export default App;


