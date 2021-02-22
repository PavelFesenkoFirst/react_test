import React, { useState } from "react";
import useStyle from "./Profile.style.js";
import { TextField, Button, Avatar } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Profile = ({ socket, closeFunc, user }) => {
  const classes = useStyle();
  const { email, nickname } = user;
  const token = localStorage.getItem("token");
  const [fields, setFields] = useState({
    email,
    token,
    nickname,
    password: "",
  });
  const updateChat = () => {
    socket.emit("updateProfile", fields);
    closeFunc();
  };

  return (
    <div className={classes.Profile}>
      <HighlightOffIcon
        onClick={closeFunc}
        fontSize={"large"}
        className={classes.close}
      />
      <h2>Your profile</h2>
      <Avatar className={classes.photo} src={user.img} />
      <form className={classes.nameForm} noValidate autoComplete="off">
        <TextField
          label="Nickname"
          variant="outlined"
          value={fields.nickname}
          onInput={(event) =>
            setFields({ ...fields, nickname: event.target["value"] })
          }
        />
        <TextField
          label="Email"
          variant="outlined"
          value={fields.email}
          onInput={(event) =>
            setFields({ ...fields, email: event.target["value"] })
          }
        />
        <TextField
          label="Password"
          type={"password"}
          variant="outlined"
          onInput={(event) =>
            setFields({ ...fields, password: event.target["value"] })
          }
        />
      </form>
      <Button
        size={"large"}
        variant="contained"
        color={"secondary"}
        onClick={updateChat}
      >
        Update profile
      </Button>
    </div>
  );
};

export default Profile;
