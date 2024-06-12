import { Fragment } from "react/jsx-runtime";
import { Paths } from "./paths"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from "react";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          Paths.map(({path, element: Element}) => (
              <Fragment key={path}>
                <Route 
                  path={path}
                  element={
                    <Suspense>
                      <Element/>
                    </Suspense>
                  }
                />
              </Fragment>
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}