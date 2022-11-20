def shift(arr,k):
  l = len(arr)
  k=k%l
  temp = arr[l-k:l]
  print(temp)

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
b = 3
shift(a, b)