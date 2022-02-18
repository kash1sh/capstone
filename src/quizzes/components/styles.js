import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
  container: {
    padding: "0.2rem 10%",
    // width: "80%",
    margin: 0,
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: "53vh",
    padding: "10%",
    borderRadius: 8,
    color: "white",
  },

  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
