import { Box } from "@chakra-ui/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetail from "./components/posts/PostDetail";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
      </div>
      <Box h="100%" minHeight={"100vh"} bg="gray.50">
        <Switch>
          <Route path="/:idPost" children={<PostDetail />} />
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
