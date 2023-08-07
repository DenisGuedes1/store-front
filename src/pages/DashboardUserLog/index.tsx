import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { HeaderUserLog } from "../../components/HeaderUserLog";
import { Modal } from "../../components/Modal";
import { ProductsList } from "../../components/Products";

export const DashUserLog = () => {
    const { isModalOpen } = useContext(UserContext);
    return (
        <>
            <HeaderUserLog />
            {isModalOpen ? <Modal /> : null}
            <ProductsList />
        </>
    );
};
