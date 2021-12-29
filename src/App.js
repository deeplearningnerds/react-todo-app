import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import TodosPage from "./pages/TodosPage";
import TodoPage from "./pages/TodoPage";

function App() {
    return (
        <Router>
            <div className="container dark">
                <div className={"app"}>
                    <Header/>
                    <Routes>
                        <Route element={<TodosPage/>} path="/" exact/>
                        <Route element={<TodoPage/>} path="/todo/:id"/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}

export default App;
