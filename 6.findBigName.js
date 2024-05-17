const checkBigName = (names) =>
    {
        let biggestName = names[0];
        for(let i=0;i<names.length;i++){
            const name = names[i];
            if(name.length>biggestName.length) biggestName = name;
        }
        return biggestName;
    }

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bigName = checkBigName(friends);
console.log(bigName);