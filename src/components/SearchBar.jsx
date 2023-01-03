import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";


const SearchBar = ({ searchTerm, handleSearchInputChange, handleSearchSubmit }) => {
  return (
    <Form 
      className="d-flex" 
      style={{ height: "60px", margin: "50px" }}
    >
      <input 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        value={searchTerm} 
        onChange={handleSearchInputChange} 
        className="form-control btn-outline-success"
      />
      <Button variant="outline-success" style={{ width: "100px" }} type="submit" onClick={handleSearchSubmit} >
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;