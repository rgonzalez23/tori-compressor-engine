# tori-compressor-engine

Imagine there is a group of people that work as compressor engine mechanics that need to be on call 24/7 to troubleshoot, maintain, and repair compressor station engines. If any engines fail or break down at the station, the station manager wants to immediately know who he needs to call to fix the problem.

This group of mechanics is also assigned a rotation pattern, to ensure that everyone is on call for the same amount of time on average. This rotation pattern is represented by a list of numbers, where each number represents how many days will be worked by the next person in the rotation. 

An example of a rotation pattern would be 2,2,3. In this case, the first person in the rotation would be on call 2 days, the following person in the rotation would be on call 2 days, the following person would be on call 3 days, and then the pattern would repeat, with the following person being on call for 2 days.

Below is an example scenario:

The group of mechanics is composed of 4 people: [Max, Paula, Roger, Daniela]

The rotation pattern assigned to them is a 2,2,3 rotation pattern.

This means that in the first week, Max is on call for the first 2 days, followed by Paula on call for 2 days and then Roger on call for 3 days. 

The second week starts with Daniela on call for 2 days, then Max for 2 days, Paula for 3 days

The third week starts with Roger on call for 2 days, then Daniela for 2 days and Max for 3 days

The fourth week starts with Paula on call 2 days, then Roger 2 days and Daniela 3 days.

After 4 weeks (28 days), the cycle repeats and all of the team members would have been on call the same amount of days. 

Here’s how the first 4 weeks’ on-call schedule looks like:

Week|Mon|Tue|Wed|Thu|Fri|Sat|Sun
----|---|---|---|---|---|---|---
1	|Max |Max	|Paula	|Paula	|Roger	|Roger	|Roger
2	|Daniela|	Daniela	|Max	|Max	|Paula	|Paula	|Paula
3	|Roger|	Roger	|Daniela	|Daniela	|Max	|Max	|Max
4	|Paula|	Paula|	Roger	|Roger	|Daniela	|Daniela	|Daniela


Your Task:
Complete the JavaScript code of the function whoIsOnCall, using the least number of lines of code, that returns the name of the person on call based on a date provided as argument to the function.

The full program template is this:

```
process.stdin.resume();
 process.stdin.setEncoding('utf8');
 
 function whoIsOnCall (pStartDate, pDate, pPattern, pGroup) {
    //
    // Your code goes here
    //
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
 let myGroup = ['Max','Paula','Roger','Daniela'];
 let vTestDateArr = [new Date(2021, 7, 16)',new Date(2021, 7, 23), new Date(2021, 7, 28),new Date(2021, 8, 8),new Date(2021, 8, 12)];

 for (let i = 0; i < vTestDateArr.length; i++){
        const onCallName = whoIsOnCall(vStartDate, vTestDateArr[i], myPattern, myGroup);
        console.log(myDate.toLocaleDateString('en-US') + ' On call: ' + onCallName);
 }
    
```

You must complete the whoIsOnCall() function and send us back the entire program with your function in it.

When the template program is executed with your whoIsOnCall function in it, the output should show the name of the person who is on call on the date that was passed to your function. The template program assumes a start date of august 16th, 2021 and it calls the function for a random set of 5 dates, a pattern of 2,2,3 and a group of 4 people. With such input, your program must output:

8/16/2021 On call: Max
8/23/2021 On call: Daniela
8/28/2021 On call: Paula
9/8/2021 On call: Roger
9/12/2021 On call: Daniela

Your function must work with any number of people in the group, any start date, any pattern, and any input date


## Rules and Evaluation Criteria

The program must run and produce the desired output to be considered for employment. If the program does not run or does not produce the right output, you will be disqualified.

A proper algorithm should be generic and support any combination of rotation patterns, start date and group of mechanics.

The algorithm should be efficient using the least lines of code (comment lines do not count).

All variables should be local variables. Global variables should not be used.

Variable names must be in English and use proper JavaScript notation (camel case)

When operating with dates and/or strings, must use JavaScript standard functions

The algorithm should only use native JavaScript, no external libraries.

You will gain extra points if you send the solution before the deadline.

You can use the CodeChef online IDE: https://www.codechef.com/ide to run and test your code using the NODEJS option.
