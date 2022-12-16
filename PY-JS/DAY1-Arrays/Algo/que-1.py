def sorted_array(array):
  left_most = 0
  right_most = len(array)-1
  new_array = [0]*len(array)
  for i in range(len(array)-1,-1,-1):
    left_most_squared= array[left_most]**2
    right_most_squared= array[right_most]**2
    if left_most_squared>right_most_squared:
      new_array[i]=left_most_squared
      left_most+=1
    else:
      new_array[i]=right_most_squared
      right_most-=1
  return new_array

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
b = [-9, -5, -2, 0, 1, 5, 8, 10];
c = [];

print(sorted_array(a))
print(sorted_array(b))
print(sorted_array(c))