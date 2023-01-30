import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { style, buttonStyle, btnWrapper, container, costomStack } from "./Style";
import { headItems } from "../../../Mocks/userMock";

const MoreDetailModal = ({ openModal, setOpenModal, selectedUser, deleteHandler, editHandler }) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
          <Box sx={container}>
            <Stack spacing={2}>
              <Item sx={{fontWeight: '600'}}>Patient Details</Item>
            </Stack>
          </Box>
          <Box sx={container}>
            {Object.keys(selectedUser).map((key) => {
              if (key === 'id') {
                return null
              }
              return (
                <Stack direction="row" spacing={2} sx={costomStack}>
                  <Item sx={{flexBasis: '50%', fontWeight: '600'}}>{headItems[key]}</Item>
                  <Item sx={{flexBasis: '50%', }}>{selectedUser[key]}</Item>
                </Stack>
              );
            })}
          </Box>

          <div style={btnWrapper}>
            <Button variant="outlined" color="error" onClick={deleteHandler}>
              Delete Entry
            </Button>
            <Button variant="outlined" onClick={editHandler}>
              Edit 
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MoreDetailModal;
