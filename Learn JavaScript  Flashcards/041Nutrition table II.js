/**
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
  let html = "";
  rows.forEach(function (row) {
    console.log(row);
    html =
      html +
      `<tr>
    <td>${row[0]}</td>
    <td>${row[1]}</td>
</tr>`;
  });
  console.log(rows);
  return html;
}
