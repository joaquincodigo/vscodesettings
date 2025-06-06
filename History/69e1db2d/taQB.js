/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  //Determinate shorter str
  const shorter_string_length = Math.min(...strs.map((str) => str.length));
  const max_pointer_moves = shorter_string_length;
  let current_prefix = "";

  //Set max_pointer_moves to the length of the shorter str
  //For each str, create a pointer at index 0 of that str
  //Compare counters:
  //  If all the pointed values are the same
  //    If pointer position < max_pointer_moves
  //  		Move pointer to the next position
  //    Else:
  //      Return pointer_move_count
  //  Else:
  //    Return pointer_move_count - 1
};
