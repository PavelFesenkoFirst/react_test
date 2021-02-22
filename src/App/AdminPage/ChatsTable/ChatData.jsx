import React from "react";

export default ({ chat, openGroupUsers }) => {
  return (
    <tr onClick={() => openGroupUsers(chat.id)}>
      <td scope="row" data-label="id">
        {chat.id}
      </td>
      <td scope="row" data-label="title">
        {chat.title}
      </td>
      <td scope="row" data-label="owner_id">
        {chat.owner_id}
      </td>
      <td scope="row" data-label="created At">
        {chat.createdAt}
      </td>
    </tr>
  );
};
