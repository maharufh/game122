import React from 'react'
import { HeroDetails } from '../utils/HeroDetails'

function HeroList({ selectList }) {

  let details = HeroDetails(); // MUST return an ARRAY

  function handleCard(val) {
    selectList(val);
  }

  return (
    <>
      <table className="table text-center">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Place</th>
            <th>Movies</th>
          </tr>
        </thead>

        <tbody>
          {details.map((item) => {
            let { id, name, place, movies } = item;

            return (
              <tr key={id} onClick={() => handleCard(item)}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{place}</td>
                <td>{movies}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default HeroList;
