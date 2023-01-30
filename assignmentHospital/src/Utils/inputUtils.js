export const enterNewEntryInputs = {
  patientId: {
    id: "patientId",
    label: "Patient ID",
    value: "",
    type: "text",
    required: true,
  },
  name: {
    id: "name",
    label: "Name",
    value: "",
    type: "text",
    required: true,
    endAdornment: true,
    showPassword: false,
  },
  surname: {
    id: "surname",
    label: "Sur Name",
    value: "",
    type: "text",
    required: true,
    endAdornment: true,
    showPassword: false,
  },
  age: {
    id: "age",
    label: "Age",
    value: "",
    type: "text",
    required: true,
    endAdornment: true,
    showPassword: false,
  },
  disease: {
    id: "disease",
    label: "Disease",
    value: "",
    type: "text",
    required: true,
  },
};

export const loginInputs = {
  userId: {
    id: "outlined-required",
    label: "User Id",
    value: "",
    type: "text",
    required: true,
  },
  password: {
    id: "outlined-password-input",
    label: "Password",
    value: "",
    type: "password",
    required: true,
    endAdornment: true,
    showPassword: false,
  },
};
