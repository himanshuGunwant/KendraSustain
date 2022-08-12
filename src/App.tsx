import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Error, Home, Onboarding, SignIn } from 'Pages';
import { Context } from 'Context';
import { Footer, Sidebar, Spinner, Topbar } from 'Components';
import routes from 'Routes';
import { MainScreen } from 'App.style';
const Main = () => {
  const { getAllScopeData, user, authToken, headText } = useContext(Context);

  const [close, setClose] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setClose((close) => !close);
  };

  const fetchData = async () => {
    setLoading(true);
    if (authToken.includes('null')) {
      navigate('/login');
      return;
    }
    await getAllScopeData?.();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainScreen>
      <main>
        <Sidebar close={close} user={user} onClose={handleClose} />
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <Topbar headtext={headText} />
            <Routes>
              {routes.map((route, index) => (
                <Route path={route.route} element={route.component} key={index} />
              ))}
            </Routes>
          </div>
        )}
      </main>
      <Footer />
    </MainScreen>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/error" element={<Error />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
