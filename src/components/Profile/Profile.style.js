import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  Profile: {
    width: "30vw",
    height: "90vh",
    color: "#393030",
    textAlign: "center",
  },

  close: {
    display: "block",
    marginLeft: "auto",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
    "&:active": {
      color: "#ece6e6",
    },
  },

  photo: {
    height: "200px",
    width: "200px",
    backgroundColor: "#635d5d",
    margin: "30px auto",
  },
  download: {
    width: "0",
  },

  nameForm: {
    width: "100%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  "@media (max-width:767px)": {
    Profile: {
      width: "100%",
      height: "100%",
    },
    nameForm: {
      height: "250px",
    },
  },
});

export default useStyle;
