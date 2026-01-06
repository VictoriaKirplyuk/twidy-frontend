import {ReactElement} from 'react';
import {router} from "../router/router";
import {Route, Routes} from "react-router";

const AppRouter = (): ReactElement => {
    return (
        <Routes>
            {router.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
        </Routes>
    );
};

export default AppRouter;