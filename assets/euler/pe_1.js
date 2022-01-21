//project euler - ex 1

total = 0
for (i = 0; i < 1000; i++) {
      if (i % 5 == 0 || i % 3 == 0){
          console.log(i);
          total += i;
      }
  }
  console.log(total);