import { FC } from 'react';
import { Button } from 'components/Button/Button';
import cls from './App.module.scss';

const App: FC = () => (
  <main className={cls.App}>
    REMOTE
    <Button />
  </main>
);
 
export default App;
