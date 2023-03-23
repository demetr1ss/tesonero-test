import {Navigate, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';

export default function App() {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen />} />
      <Route path={AppRoute.NotFound} element={<Navigate to={AppRoute.Main} />} />
    </Routes>
  );
}
