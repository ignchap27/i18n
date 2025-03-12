import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedMessage
            id="MillionMessage"
            values={{salary: props.offer.salary}}/>
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedNumber value={props.offer.visits} />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          weekday="long"
        />
      </td>
    </tr>
  );
};

export default Job;
