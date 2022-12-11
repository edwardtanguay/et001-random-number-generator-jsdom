/**
 * removes a random item from an array and returns that item
 * 
 * const colors = ['red', 'blue', 'green'];
 * const color = tools.removeRandomItemFromArray(colors)
 * 
 * color is 'red'
 * colors is ['blue', 'green']
 */
export const removeRandomItemFromArray = (arr) => {
	if (arr.length === 0) {
		return null;
	}
	const index = Math.trunc(Math.random() * arr.length);
	const selectedItem = arr[index];
	arr.splice(index, 1);
	return selectedItem;
};