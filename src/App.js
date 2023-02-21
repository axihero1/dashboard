import React,{ lazy, Suspense } from "react";
import Loading from "./Companents/Loading";
import "./app.css";
const App = lazy(() => import("./Companents/App"))

function app() {
  return(
     <>
      <Suspense fallback = { <Loading /> }>
        <App />
    </Suspense>
     </>
  )
}

export default app;
