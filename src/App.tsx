import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <CssBaseline />
      <Button variant="contained" onClick={() => console.log("Hello!")}>
        Hello world
      </Button>
    </>
  );
}

export default App;
