
import React from 'react';
import ReactDOM from 'react-dom';
import { Banner } from '../components/Banner';
import { Search } from './Search';
import { Main } from './Main';

export const App = () =>
    <div>  
        <Banner />
        <Search />
        <Main />
    </div>;
