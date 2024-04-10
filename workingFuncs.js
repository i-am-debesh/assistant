function getTime() {
    let date = new Date;
    
    let time = `${date.getHours()}:${date.getMinutes()}`;
    return time;
}

function getcurrentDate() {
    let date = new Date;
    let currentDay;
    let d = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    const dayList = ['Monday','Tuesday','wednesday','Thursday','Friday','saturday','sunday'];
    for(let i=1; i<=dayList.length; i++) {
        if(d === i) {
            currentDay = dayList[i];
        }
    }
    const res = `Today is ${currentDay} and Date is: ${month}/${day}/${year}`;
    
    return res;
}

function solve(problem) {
    let p ;
    if(problem.includes('x')) {
        p = problem.replace('x','*');
        
    }else {
        p = problem;
    }
    const result = eval(p);
    return result;
}

