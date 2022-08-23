/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
  let html = `<option value="">Please select</option>`;
  countries.forEach(function (country) {
    html =
      html + `<option value="${country.toLowerCase()}">${country}</option>`;
    console.log(country);
  });
  return html;
  console.log(countries);
}
