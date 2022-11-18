def monotonic(array):
  if(array==[]):
    return True
  else:
      first = array[0]
      last = array[len(array)-1]
      if first==last:
        for i in range(len(array)-1):
          if array[i]!=array[i+1]:
            return False
      elif first<last:
          for i in range(len(array)-1):
            if array[i]>array[i+1]:
              return False
      else:
        for i in range(len(array)-1):
          if array[i]<array[i+1]:
            return False
  return True

a = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9,1]
b = [98, 34, 23, 11, 11]
c = [12, 23, 45, 56, 76, 34, 32, 12]
d = []

print(monotonic(a))
print(monotonic(b))
print(monotonic(c))
print(monotonic(d))