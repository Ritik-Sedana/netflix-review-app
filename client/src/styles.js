import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  heading: {
    textDecoration: "none",

    color: "#e50914",
    display: "inline-block",
    verticalAlign: "middle",
    cursor: "pointer",
    marginRight: "5px",
  },
  image: {
    marginLeft: "45px",
  },
  createbutton: {
    // fontSize: "35px",

    border: "1px",
    width: "100px",
    height: "100px",
    backgroundColor: "black",

    paddingBottom: "0.1%",
    paddingTop: "0.1%",
    paddingLeft: "0.1%",
    paddingRight: "0.1%",
    color: "red",
    marginLeft: "140px",
    marginTop: "80px",
    borderRadius: "175px",
  },
}));
