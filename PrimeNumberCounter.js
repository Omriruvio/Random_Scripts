const primeNumberFromOneToN = (n) => {
  var amount = 0;
  if (n <= 1)
    return amount;
  else
  {
    for (var i = 2; i < n; i++)
    {
      if (isPrime(i))
        amount++;
    }
  }
  return amount;
}

function isPrime( n)
{
  let is_prime = true;
  for (var i = 2; i <= (n / 2); i++)
  {
    if ((n % i) === 0)
      is_prime = false;
  }
  return is_prime;
}


// function primeNumberFromOneToN(n)
// {
//
// }