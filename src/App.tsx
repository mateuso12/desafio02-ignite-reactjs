import { lazy, Suspense } from "react";


import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { MoviesProvider } from "./hooks/useMoviesContext";

const Content = lazy(() => {
  return import('./components/Content')
})

const SideBar = lazy(() => {
  return import('./components/SideBar')
})

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <MoviesProvider>
        <Suspense fallback={<div>Carregando ...</div>}>
        <SideBar />
        <Content />
        </Suspense>
      </MoviesProvider>
    </div>
  );
}
