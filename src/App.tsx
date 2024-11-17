import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavHeader from "./HEADER/NavHeader";
import WhoWeAre from "./SHENP/WhoWeAre";
import Header from "./HEADER/Header";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LoadingComponent from "./SHENP/LoadingComponents/LoadingComponent";

// LAZY
const Genres = lazy(() => import('./GENRES/Genres'));
const LostProyect = lazy(() => import('./LOST_PROJECTS/LostProyect'));
const Browse = lazy(() => import('./SEARCH/Browse'));
const Proyect = lazy(() => import('./PROJECT/Proyect'));
const Configuration = lazy(()=> import('./SHENP/Configuration'))

const AppContent = () => {
    const location = useLocation();
    const componentsWithoutNavbar = ['/proyecto/', '/configuracion'];
    const showNavHeader = !componentsWithoutNavbar.some(route => location.pathname.startsWith(route));

    return (
        <>
            <Header />
            {showNavHeader && <NavHeader />}

            <Routes>
                <Route path="*" element={'ERROR 404'} />
                <Route path="/" element={<WhoWeAre />} />
                <Route path="/generos" element={<Suspense fallback={<LoadingComponent/>}><Genres/></Suspense>} />
                <Route path="/proyectos-perdidos" element={<Suspense fallback={<LoadingComponent/>}><LostProyect /></Suspense>} />
                <Route path="/buscar/:query?" element={<Suspense fallback={<LoadingComponent/>}><Browse /></Suspense>} />
                <Route path="/:category?" element={<Suspense fallback={<LoadingComponent/>}><Browse /></Suspense>} />
                <Route path="/proyecto/:nameSection?" element={<Suspense fallback={<LoadingComponent/>}><Proyect /></Suspense>} />
                <Route path="/configuracion" element={<Suspense fallback={<LoadingComponent/>}><Configuration /></Suspense>} />
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
