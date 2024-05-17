const array = [];
const check = (arr, num) => {
    if(!Array.isArray(arr)) console.log("invalid input");
    else
    {
        let totalEarn = 0;
        for(const earn of arr)
            {
                if(earn>=3000)
                    {
                        tax = earn*0.2;
                        const earnWithoutTax = earn - tax;
                        totalEarn += earnWithoutTax;          
                    }
                else totalEarn += earn;
            }
        if(totalEarn >= num) console.log(totalEarn-num);
        else console.log("earn more");
    }

  }

check([1000, 2000, 3000], 5400);
check([1000, 2000, 2500], 5000);
check([900, 2700, 3400], 10000);
check(100,[900,2700,3400]);
