import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";

export const Search = () => {

  const navigate = useNavigate(); // Navegación
  const location = useLocation(); // Loccalización actual

  const { q = '' } = queryString.parse(location.search); // Leer Query
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>

      <div className="row">

        <div className="col-5">
          <form onSubmit={onSearchSubmit} aria-label="form">
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

          {
            (q === '')
              ? <div className="alert alert-primary"> Search a Hero </div>
              : (heroes.length === 0)
            && <div className="alert alert-danger">No Hero with <b>{ q }</b></div>
          }

          

          

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  )
}
