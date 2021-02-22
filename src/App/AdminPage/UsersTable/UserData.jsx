import React from "react";
import componentStyle from  "./UsersTable.module.scss";

export default ({ user, handleChange }) => {
  return (
    <tr>
      <td scope="row">{user.id}</td>
      <td scope="row" data-label="nickname">
        {user.nickname}
      </td>
      <td scope="row" data-label="age">
        {user.login}
      </td>
      <td scope="row" data-label="is_admin">
        <input
          type="checkbox"
          name="is_admin"
          checked={user.is_admin}
          className={componentStyle.checkbox}
          onChange={(event) => handleChange(event, user.id)}
        />
      </td>
      <td scope="row" data-label="read_only">
        <input
          type="checkbox"
          name="read_only"
          className={componentStyle.checkbox}
          checked={user.read_only}
          onChange={(event) => handleChange(event, user.id)}
        />
      </td>
      <td scope="row" data-label="is_blocked">
        <input
          type="checkbox"
          name="is_blocked"
          className={componentStyle.checkbox}
          checked={user.is_blocked}
          onChange={(event) => handleChange(event, user.id)}
        />
      </td>
      <td scope="row" data-label="email">
        {user.email}
      </td>
    </tr>
  );
};
