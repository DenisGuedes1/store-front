import { Headers } from "../Header";

import { ProductsList } from "../Products";

export const DashBoardNotLogin = () => {
    return (
        <>
            <Headers isLogin={true} />
            <ProductsList />
        </>
    );
};
