
import React from 'react';

export const DataTable = ({ data, sort }) =>
    <table>
    <thead>
        <tr>
            <th onClick={() => sort('name')}>NAME</th>
            <th onClick={() => sort('population')}>POPULATION</th>
            <th onClick={() => sort('diameter')}>DIAMETER</th>
            <th onClick={() => sort('rotation_period')}>ROTATION PERIOD</th>
            <th onClick={() => sort('orbital_period')}>ORBITAL PERIOD</th>
            <th className="no-sort">TERRAIN</th>
            <th className="no-sort">FILMS</th>
        </tr>
    </thead>
    <tbody>
        { data.results.map(row => 
            <tr key={row.name}>
                <td data-label="NAME">{row.name}</td>
                <td data-label="POPULATION">{row.population}</td>
                <td data-label="DIAMETER">{row.diameter}</td>
                <td data-label="ROTATION PERIOD">{row.rotation_period}</td>
                <td data-label="ORBITAL PERIOD">{row.orbital_period}</td>
                <td data-label="TERRAIN">
                    { row.terrain.split(', ').map(terr =>
                        <div key={terr}>{terr[0].toUpperCase() + terr.slice(1)}</div>
                    )}
                </td>
                <td data-label="FILMS">
                    { row.films.length > 0
                        ? row.films.map(film => <div key={film}>"{film}"</div>)
                        : "none"
                    }
                </td>
            </tr>
        )}
    </tbody>
    </table>
