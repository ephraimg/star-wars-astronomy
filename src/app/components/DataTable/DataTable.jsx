
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

        { data.results.map(row => 
            <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.population}</td>
                <td>{row.diameter}</td>
                <td>{row.rotation_period}</td>
                <td>{row.orbital_period}</td>
                <td>
                    { row.terrain.split(', ').map(terr =>
                        <div key={terr}>{terr[0].toUpperCase() + terr.slice(1)}</div>
                    )}
                </td>
                <td >
                    { row.films.length > 0
                        ? row.films.map(film => <div key={film}>"{film}"</div>)
                        : "none"
                    }
                </td>
            </tr>
        )}
    </tbody>
    </table>
