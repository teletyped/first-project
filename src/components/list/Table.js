import React from 'react';
import PropTypes from 'prop-types';
const Table = ({currencies,renderChangePercent}) => {
    return (
        <div className="Table-container">
    <table className="Table">
      <thead className="Table-head">
        <tr>
          <th>Cryptocurrency</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>24H Change</th>
        </tr>
      </thead>
      <tbody className="Table-body">
      {currencies.map((currency) => (
        <tr
        key={currency.id}
        >
          <td>
            <span className="Table-rank">
              <img
              style={{width:'50px',height:'50px'}}
              src={currency.image}
              alt=""
              />
              </span>
            {currency.name}
          </td>
          <td>
            <span className="Table-dollar">$ {currency.current_price}</span>
          </td>
          <td>
            <span className="Table-dollar">$ {currency.market_cap}</span>
          </td>
          <td>
            {renderChangePercent(currency.market_cap_change_percentage_24h)}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
        )
}

Table.propTypes = {
currencies : PropTypes.array.isRequired,
renderChangePercent : PropTypes.func.isRequired
}
export default Table;