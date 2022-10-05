import _ from "lodash";

export function paginate(items, currentPage, pageSize) {
  // calculate the start index of each page
  const startIndex = (currentPage - 1) * pageSize;
  console.log('items', items, 'currentPage', currentPage, 'itemsToShow', pageSize);
  // _(data) = convert the array into lodash wrapper (makes it easier to chain all the lodash method)
  // _.slice = slice the array from the { start index }
  // _.take = take the specified amount from the array
  // _value() = turn lodash wrapper into array
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
};
