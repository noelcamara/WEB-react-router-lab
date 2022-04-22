import React, { Fragment } from 'react';

import './display-data.styles.css';

const TableDisplay = ({ data }) => {
  console.log({ data });
  return (
    <Fragment>
      <table >
        <thead>
          <tr>
            <th>Historique: </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((x) => { return <tr><td className='bordureTab'> {x}&deg; </td></tr> })
          }
        </tbody>
      </table>
    </Fragment>
  );
};

export default TableDisplay;
