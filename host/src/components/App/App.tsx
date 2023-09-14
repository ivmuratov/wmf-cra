import { FC, Suspense, lazy } from 'react';
import cls from './App.module.scss';

const Button = lazy(() =>
  //@ts-ignore
  import('remote/Button').then(module => ({
    default: module.Button,
  }))
);

const App: FC = () => (
  <div className={cls.App}>
    HOST
    <Suspense fallback={<div>...loading</div>}>
      <Button />
    </Suspense>
  </div>
);
 
export default App;
