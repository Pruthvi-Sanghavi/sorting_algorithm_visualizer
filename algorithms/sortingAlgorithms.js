export const bubble_sort = array => {
	//if (array.length === 1) return array;
	const p = 0;
	const unsorted = bubble_sort(array);
	//const sorted = [];
	for(let j = 0; j <= array.length; j++){
		for(let i = 1; i < array.length; i++){
			if(unsorted[i-1] > unsorted[i]){
				p = unsorted[i-1];
				unsorted[i-1] = unsorted[i];
				unsorted[i] = p;
			}
		}
	}
	return unsorted;
}