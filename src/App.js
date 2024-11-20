import React, { Fragment, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/default/DefaultComponent";
import axios from "axios";
import {useQuery} from '@tanstack/react-query'

function App() {

  // useEffect(() => {
    //   fetchApi();
    // }, []);
    
    // const fetchApi = async () => {
    //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
    //   return res.data
    // };
    // const query = useQuery({queryKey:['Todos'], queryFn: fetchApi})
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((e, i) => {
            const Layout = e.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                path={e.path}
                key={i}
                element={
                  <Layout>
                    <e.page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
