
import React from 'react';

export const DataTable = ({ data = [] }) =>
    <table>
    <tbody> 
      <tr>
        <th>NAME</th>
        <th>POPULATION</th>
        <th>DIAMETER</th>
        <th>ROTATION PERIOD</th>
        <th>ORBITAL PERIOD</th>
        <th>TERRAIN</th>
        <th>FILMS</th>
      </tr>
      <tr>
        <td>Corellia</td>
        <td>3000000000</td>
        <td>11000</td>
        <td>25</td>
        <td>329</td>
        <td>
            { 'plains, urban, hills'.split(', ').map(terr => 
                <div>{terr}</div>
            )}
        </td>
        <td>none</td>
      </tr>
      { data.map(row => 
          <tr>
            <td>{row.name}</td>
            <td>{row.population}</td>
            <td>{row.diameter}</td>
            <td>{row.rotation_period}</td>
            <td>{row.orbital_period}</td>
            <td>
                { row.terrain.split(', ').map(terr =>
                    <div>{terr}</div>
                )}
            </td>
            <td>{row.films}</td>
          </tr>
        )}
    </tbody>
    </table>
