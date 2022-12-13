import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {
   return (
      <div>
         <Button variant="text">Text</Button>
         <Button
            startIcon={<SettingsIcon />}
            variant="contained"
            color="secondary"
         >
            Contained
         </Button>
         <Button variant="outlined" disabled>
            Outlined
         </Button>
      </div>
   );
}

export default App;
