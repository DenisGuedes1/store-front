import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
export const Modal = () => {
    const { setIsModalOpen, userInfo } = useContext(UserContext);
    const [userData, setUserData] = useState(userInfo);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserData((prevUserData) => ({
    //         ...prevUserData,
    //         [name]: value,
    //     }));
    // };
    const handleUpdateUserInfo = async (event) => {
        event.preventDefault();

        // await updateUser(userData);
        setIsModalOpen(false);
    };
    return (
        <>
            <div>
                <h2>Informações</h2>
                <button onClick={() => setIsModalOpen(false)}>X</button>
                <form action="">
                    <input
                        type="text"
                        name="name"
                        value={userData?.name}
                        // onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={userData?.email}
                        // onChange={handleInputChange}
                    />
                    <input type="password" value={userData?.password} />
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </>
    );
};
