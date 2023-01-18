
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/Header/Header';
import PageWrapper from './components/layouts/PageWrapper/PageWrapper';
import About from './pages/about/About';
import Home from './pages/home/Home';
import RouteList from './routes/RouteList';

function App() {

  const routes = [
    {
      title: 'Главная',
      path: '/',
      component: <Home/>
    },
    {
      title: 'About',
      path: '/about',
      component: <About/>
    },
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <PageWrapper>
          <Header navList={routes}/>
          <RouteList routes={routes}/>
          <Footer/>
        </PageWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
