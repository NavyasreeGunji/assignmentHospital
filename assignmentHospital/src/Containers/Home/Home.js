import React, { useEffect, useState } from "react";

import { btnWrapper, layout } from "./Home.style";
import { users as usersMock, headItems } from "../../Mocks/userMock";
import { Button } from "@mui/material";
import CustomTable from "./CustomTable/CustomTable";
import AddUserModal from "./AddUserModal/AddUserModal";
import { enterNewEntryInputs } from "../../Utils/inputUtils";
import Loader from "../../Components/Loader/Loader";
import MoreDetailModal from "./MoreDetailModal/MoreDetailModal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [openMoreDetailsModal, setOpenMoreDetailsModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [editable, setEditable] = useState(false);
  const [inputs, setInputs] = useState({ ...enterNewEntryInputs });

  useEffect(() => {
    setUsers(usersMock);
  }, [usersMock]);

  const createData = (user) => {
    return {
      patientId: user.patientId,
      name: user.name,
      surname: user.surname,
      age: user.age,
      disease: user.disease,
    };
  };

  const closeAllModals = () => {
    setOpenAddUserModal(false);
    setOpenMoreDetailsModal(false);
    setEditable(false);
  };

  const rows = users.map((user) => createData(user));

  const onClickCell = (row) => {
    const selUser = users.find((user) => user.patientId === row.patientId);
    setOpenMoreDetailsModal(true);
    setSelectedUser(selUser);
  };

  const saveHandler = () => {
    let updatedUsers = [];
    const newUser = {id: Math.random()};
    Object.keys(inputs).forEach((key) => {
      newUser[key] = inputs[key].value;
    });
    debugger

    if (editable) {
      updatedUsers = users.map((user) => {
        if (user.id === selectedUser.id) {
          return { ...newUser };
        }
        return { ...user };
      });
    } else {
      updatedUsers = [...users, newUser];
    }
    setShowLoader(true);
    setOpenAddUserModal(false);

    setTimeout(() => {
      setShowLoader(false);
      setUsers(updatedUsers);
      closeAllModals();
      setInputs({ ...enterNewEntryInputs });
    }, 1000);
  };

  const createHeadItems = () => {
    return {
      patientId: headItems.patientId,
      name: headItems.name,
      surname: headItems.surname,
      age: headItems.age,
      disease: headItems.disease,
    };
  };

  const editHandler = () => {
    const oldInputs = { ...inputs };
    for (const key in inputs) {
      oldInputs[key] = { ...oldInputs[key], value: selectedUser[key] };
    }
    setEditable(true);
    setOpenMoreDetailsModal(false);
    setOpenAddUserModal(true);
    setInputs(oldInputs);
  };

  const deleteHandler = () => {
    setShowLoader(true);
    setOpenAddUserModal(false);
    setOpenMoreDetailsModal(false);

    const updatedUsres = users.filter(
      (user) => user.patientId !== selectedUser.patientId
    );

    setTimeout(() => {
      setShowLoader(false);
      setUsers(updatedUsres);
    }, 1000);
  };

  return (
    <div style={layout}>
      <Loader showLoader={showLoader} setShowLoader={setShowLoader} />
      <CustomTable
        rows={rows}
        headItems={createHeadItems()}
        onClickCell={onClickCell}
      />
      <AddUserModal
        openModal={openAddUserModal}
        setOpenModal={setOpenAddUserModal}
        setOpenMoreDetailsModal={setOpenMoreDetailsModal}
        saveHandler={saveHandler}
        inputs={inputs}
        setInputs={setInputs}
      />
      <MoreDetailModal
        openModal={openMoreDetailsModal}
        setOpenModal={setOpenMoreDetailsModal}
        selectedUser={selectedUser}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
      />
      <Button
        variant="contained"
        onClick={() => {
          setOpenAddUserModal(true);
        }}
        sx={btnWrapper}
      >
        Add Record
      </Button>
    </div>
  );
};

export default Home;
