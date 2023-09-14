import { FC } from "react";

export const Button: FC = () => <button onClick={() => console.log('from remote')}>From Remote</button>;

export default Button;