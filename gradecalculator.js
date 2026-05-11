export function getgrade(score){
    if (score < 0 || score > 100) {
        return "invalid score";
    }
    if (typeof score !== "number" || isNaN(score)){
        return "invalid score:score is not a number";
    }
    else if (score >= 75){
        return "A";
    }
    else if (score >= 60){
        return "B";
    }
   else if (score >= 50){
        return "C";
    }
    else if (score >= 40){
        return "D";
    }
   else if (score >= 30){
        return "E";
    }else{
        return "F";
    }

}