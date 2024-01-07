import React, { Suspense } from "react";
const Nav = React.lazy(() => import("app2/Nav"));
const Footer = React.lazy(() => import("app2/Footer"));
const Timer = React.lazy(() => import("timer/Timer"));

const App = () => {
  return (
    <div>
      <Suspense>
        <Nav />
      </Suspense>
      App1
      <Suspense>
        <Timer />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
