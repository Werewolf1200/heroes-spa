import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"

export const Search = () => {

  const navigate = useNavigate(); // Navegación
  const location = useLocation(); // Loccalización actual

  const { q = '' } = queryString.parse(location.search); // Leer Query

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>

      <div className="row">

        <div className="col-5">
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              name="searchText"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>

          <div className="alert alert-primary">
            Search a Hero
          </div>

          <div className="alert alert-danger">
            No Hero with <b>{ q }</b>
          </div>

          <HeroCard />
        </div>
      </div>
    </>
  )
}
