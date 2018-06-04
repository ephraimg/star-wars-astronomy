
import React from 'react';

export const DataTable = ({ data, sort }) =>
    <table>
    <tbody> 
      <tr>
        <th onClick={() => sort('name')}>NAME</th>
        <th onClick={() => sort('population')}>POPULATION</th>
        <th onClick={() => sort('diameter')}>DIAMETER</th>
        <th onClick={() => sort('rotation_period')}>ROTATION PERIOD</th>
        <th onClick={() => sort('orbital_period')}>ORBITAL PERIOD</th>
        <th className="no-sort">TERRAIN</th>
        <th className="no-sort">FILMS</th>
      </tr>
{ /* sample data for testing
      <tr>
        <td>Corellia</td>
        <td>3000000000</td>
        <td>11000</td>
        <td>25</td>
        <td>329</td>
        <td>
            { 'plains, urban, hills'.split(', ').map(terr => 
                <div key={terr}>{terr}</div>
            )}
        </td>
        <td>none</td>
      </tr>
*/ }
      { data.results.map(row => 
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.population}</td>
            <td>{row.diameter}</td>
            <td>{row.rotation_period}</td>
            <td>{row.orbital_period}</td>
            <td>
                { row.terrain.split(', ').map(terr =>
                    <div key={terr}>{terr}</div>
                )}
            </td>
            <td>
                { row.films.map(film =>
                    <div key={film}>{film}</div>
                )}
            </td>
          </tr>
        )}
    </tbody>
    </table>
