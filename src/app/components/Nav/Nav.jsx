
import React from 'react';

export class Nav extends React.Component {

    constructor(props) {
        super(props);
    }
    handleClick(page, e) {
        if (this.props.count !== undefined && page !== this.props.page) {
            // Send API request with same search term but specific page
            this.props.fetchPage(page);
        }
    }
    render() { 
        const last = Math.ceil(this.props.count / 10);
        const prev = Math.max(1, this.props.page - 1);
        const next = Math.min(last, this.props.page + 1);
        return (
            <div className="nav">  
                <div className="nav-opt" onClick={() => this.handleClick(1)}>
                    First
                </div>
                <div className="nav-opt" onClick={() => this.handleClick(prev)}>
                    {'\u25C0'/* left arrow */}
                </div>

                { pagination(this.props.page, last).map((num, idx) => {
                    const curr = this.props.page === num
                        ? ' nav-curr' : '';
                    const handler = typeof num === 'number'
                        ? () => this.handleClick(num) : () => {};
                    return (
                        <div className={'nav-opt' + curr} 
                            onClick={handler} 
                            key={'nav-opt-' + idx}
                        >
                            {num}
                        </div>
                    );                 
                })}

                <div className="nav-opt" onClick={() => this.handleClick(next)}>
                    {'\u25B6'/* right arrow */}
                </div>
                <div className="nav-opt" onClick={() => this.handleClick(last)}>
                    Last
                </div>
            </div> 
        );
    }
};

// Borrowed this to control numbers vs dots in nav
// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
function pagination(currentPage, nrOfPages) {
    var delta = 2,
        range = [],
        rangeWithDots = [],
        l;

    range.push(1);  

    if (nrOfPages <= 1){
    return range;
    }

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < nrOfPages && i > 1) {
            range.push(i);
        }
    }  
    range.push(nrOfPages);

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}
