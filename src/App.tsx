import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavHeader from "./HEADER/NavHeader";
import WhoWeAre from "./SHENP/WhoWeAre";
import Header from "./HEADER/Header";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// LAZY
const Genres = lazy(() => import('./GENRES/Genres'));
const LostProyect = lazy(() => import('./LOST_PROJECTS/LostProyect'));
const Browse = lazy(() => import('./SEARCH/Browse'));
const Proyect = lazy(() => import('./PROJECT/Proyect'));

const AppContent = () => {
    const location = useLocation();
    const componentsWithoutNavbar = ['/proyecto/'];
    const showNavHeader = !componentsWithoutNavbar.some(route => location.pathname.startsWith(route));

    return (
        <>
            <Header />
            {showNavHeader && <NavHeader />}

            <Routes>
                <Route path="*" element={'ERROR 404'} />
                <Route path="/" element={<WhoWeAre />} />
                <Route path="/generos" element={<Suspense fallback="Cargando componente: Genres"><Genres /></Suspense>} />
                <Route path="/proyectos-perdidos" element={<Suspense fallback="Cargando componente: LostProyect"><LostProyect /></Suspense>} />
                <Route path="/buscar/:query?" element={<Suspense fallback="Cargando componente: Browse"><Browse /></Suspense>} />
                <Route path="/proyecto/:nameSection?" element={<Suspense fallback="Cargando componente: Proyect"><Proyect /></Suspense>} />
            </Routes>
        </>
    );
};

export default function App() {
    const query = new QueryClient();

    return (
        <QueryClientProvider client={query}>
            <BrowserRouter>
                <AppContent /> 
            </BrowserRouter>
        </QueryClientProvider>
    );
}
