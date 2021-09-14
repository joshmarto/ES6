def findPrime(num):
    limit = num - 1
    c = 1
    while(True):
        digits = 0
        n = num - c
        for i in range(1, n + 1):
            if n % i == 0:
                digits += 1
        if digits == 2:
            return n
            break
        else:
            c += 1
            continue

num = 10        
print(findPrime(num))