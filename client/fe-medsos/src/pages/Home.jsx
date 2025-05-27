import {
  Box,
  Typography,
  List,
  ListItem,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Grid,
  TextField,
  IconButton,
  InputBase,
  Paper,
  Divider,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";

const Home = () => {
  const contacts = ["Alice", "Bob", "Charlie"];

  return (
    <Box sx={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Left Icon Sidebar */}
      <Box
        sx={{
          width: 60,
          backgroundColor: "#f0f0f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        <Box>
          <IconButton><ChatIcon /></IconButton>
          <IconButton><DonutLargeIcon /></IconButton>
        </Box>
        <Box>
          <IconButton><SettingsIcon /></IconButton>
          <IconButton><AccountCircleIcon /></IconButton>
        </Box>
      </Box>

      {/* Contact List Sidebar */}
      <Box
        sx={{
          width: 250,
          borderRight: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
        }}
      >
        {/* Search */}
        <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>

        {/* Contact List */}
        <List disablePadding sx={{ flexGrow: 1, overflowY: "auto" }}>
          {contacts.map((contact, index) => (
            <ListItem
              key={index}
              button
              sx={{
                px: 2,
                py: 1.5,
                "&:hover": { backgroundColor: "#f5f5f5" },
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {contact}
            </ListItem>
          ))}
        </List>

        {/* Settings and Profile */}
        <Box
          sx={{
            borderTop: "1px solid #eee",
            display: "flex",
            justifyContent: "space-around",
            py: 1,
          }}
        >
          
        </Box>
      </Box>

      {/* Main Chat Area */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
          >
            <Typography variant="h6">ChatSpace</Typography>
            <Typography variant="body1" color="text.secondary">
              User: You
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Chat Window */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            backgroundColor: "#f9f9f9",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item alignSelf="flex-start">
              <Card sx={{ maxWidth: 300, bgcolor: "#e0e0e0" }}>
                <CardContent>
                  <Typography variant="body1">Hello!</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item alignSelf="flex-end">
              <Card sx={{ maxWidth: 300, bgcolor: "#1976d2", color: "#fff" }}>
                <CardContent>
                  <Typography variant="body1">Hi! How are you?</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Typing Area */}
        <Paper
          component="form"
          sx={{
            p: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid #ccc',
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type a message"
          />
          <IconButton type="submit" sx={{ p: '10px' }} color="primary">
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
