export function filterItems(items, query) {
  // 🏷️ .split(" ") split a string into an array of substrings based on a specified delimiter - the space character
  return items.filter(item => item.name.split(' ').some(word => word.toLowerCase().includes(query.toLowerCase())),
  )
}
