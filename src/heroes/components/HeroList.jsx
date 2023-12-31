import { useMemo } from "react";
import { getHeroes } from "../helpers/getHeroes";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo( () => getHeroes(publisher), [publisher]);

  return (
    
      <div className="row rows-cols-1 row-cols-md-3 g3">
          {
              heroes.map(hero => (
                  <HeroCard key={hero.id}
                      {...hero}
                 /> 
              ))
          }
      </div>
  )
}
