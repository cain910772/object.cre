
const jobsList = {}

jobsList.jobs =[]

const Navy = Object.create({}, {
    business: {
        value: "US Navy"
    },
    employmentStart: {
        value: "09-18-2003"
    },
    employmentEnd: {
        value: "10-21-2007"
    }
})
const advanceFinancial = Object.create({}, {
    business: {
        value: "Advance Financial"
    },
    employmentStart: {
        value: "05-22-2012"
    },
    employmentEnd: {
        value: "09-01-2016"
    }
})
const stThomas = Object.create({}, {
    business: {
        value: "St. Thomas Hospital"
    },
    employmentStart: {
        value: "02-01-1997"
    },
    employmentEnd: {
        value: "07-25-2002"
    }
})
jobsList.jobs.push(Navy , advanceFinancial , stThomas)

console.log(jobsList)


const jobFactory = function(business, employmentStart, employmentEnd){
   const job = Object.create({}, {
       business: {
           value:name
       },
       employmentStart:{
           value:employmentStart
       },
       employmentEnd: {
           value:employmentEnd
       },
       showValue: {
           value :function(business) {
               console.log(`hope this shows ${business.name}`);

           }
       }
    
       });
       return jobFactory;   
};
   const job0Factory = [];
job0Factory.push(jobFactory("dailys"),("11-22-2014"),("12-14-2017"));
console.log(job0Factory);