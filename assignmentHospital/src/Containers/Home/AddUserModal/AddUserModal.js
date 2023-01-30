import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { style, buttonStyle, btnWrapper, inputWrapper } from "./Style";

const AddUserModal = ({
  openModal,
  setOpenModal,
  saveHandler,
  inputs,
  setInputs,
  setOpenMoreDetailsModal,
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const input = { ...inputs[name], value };
    setInputs({ ...inputs, [name]: input });
  };

  const handleClose = () => {
    setOpenModal(false);
    setOpenMoreDetailsModal(false);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="delete"
            onClick={handleClose}
            sx={buttonStyle}
          >
            <CloseIcon />
          </IconButton>
          <div style={inputWrapper}>
            {Object.keys(inputs).map((name) => {
              const input = inputs[name];
              return (
                <TextField
                  key={name}
                  name={name}
                  required={input.required}
                  id={input.id}
                  label={input.label}
                  value={input.value}
                  onChange={handleChange}
                  type={input.type}
                />
              );
            })}
          </div>
          <div style={btnWrapper}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={saveHandler} color="success">
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddUserModal;
