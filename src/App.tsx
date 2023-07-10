import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Contact from "./features/contact/contact";
import Home from "./features/home/home";
import NoMatch from "./features/no-match/no-match";
import "./styles/styles.scss";
import ProgressBarPage from "./features/progress-bar/progress-page";
import LoaderPage from "./features/loader/loader-page";
import SelectPage from "./features/select/select-page";
import Animals from "./features/animals/animals";
import AnimalCreate from "./features/animals/animal-create";
import AnimalEdit from "./features/animals/animal-edit";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressBarPage />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="calculator" element={<Calculator />} />

          <Route path="animals" element={<Animals />} />
          <Route path="animals/new" element={<AnimalCreate />} />
          <Route path="animals/:animalId" element={<AnimalEdit />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
