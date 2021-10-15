function whoIsOnCall(pStartDate, pDate, pPattern, pGroup) {

    let maxTotalDay = 28;
    let newDate = new Date(pStartDate);
    let maxDate = new Date(pStartDate);
    let cgroup = 0;
    let group = pGroup.length;
    let pattern = pPattern.length;
    let cpattern = 0;
    let result = '';
    let newArr = [];
    let c = 0;

    maxDate = new Date(maxDate.setDate(maxDate.getDate() + maxTotalDay));
    do {

        if (c > 0) {
            newDate = new Date(newDate.setDate(newDate.getDate() + pPattern[cpattern]));
        }

        newArr.push({
            pattern: pPattern[cpattern],
            worker: pGroup[cgroup],
            date: new Date(newDate).toLocaleDateString()
        });

        cgroup = cgroup >= (group - 1) ? 0 : cgroup + 1;
        cpattern = cpattern >= (pattern - 1) ? 0 : cpattern + 1;
        c++;
    } while (new Date(newDate) <= new Date(maxDate));

    newArr.pop();
    let f = new Date(pDate).toLocaleDateString();
    result = newArr.filter(x => x.date == f);
    return result[0]?.worker;
}

//Main program 
// *****do no modify anything below this line
let vStartDate = new Date(2021, 7, 16);

//myPattern variable is a dynamic variable. We will be testing
//different rotation patterns. Your code should be generic and should
//be able to handle any rotation pattern passed in
let myPattern = [2, 2, 3];

//myGroup variable is a dynamic variable. We will be testing
//different groups, with variable group size. Your code should be generic 
//and should be able to handle any group passed in

let myGroup = ['Max', 'Paula', 'Roger', 'Daniela'];
let vTestDateArr = [new Date(2021, 7, 16), new Date(2021, 7, 23), new Date(2021, 7, 28), new Date(2021, 8, 8), new Date(2021, 8, 11)];

for (let i = 0; i < vTestDateArr.length; i++) {
    const onCallName = whoIsOnCall(vStartDate, vTestDateArr[i], myPattern, myGroup);
    console.log(vTestDateArr[i].toLocaleDateString('en-US') + ' On call: ' + onCallName);
}
