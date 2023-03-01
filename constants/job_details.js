const JOBS_TIMINGS = require('./jobs_timings');
let d = new Date();
let currentYear = d.getUTCFullYear();
let currentMonth = d.getUTCMonth()
let currentDate = d.getUTCDate();

const jobsData = [
    {
        "scheduleID": "1000073",
        "jobID": 1301,
        "workerSNO": "S2615110",
        "job_description": "Job Description 1",
        "orderid": "000054286788",
        "start_time": 1676334600,
        "end_time": 1676340000,
        "job_status": "In Progress",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "90",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": 1676334600,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0011",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "90", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000074",
        "jobID": 1302,
        "workerSNO": "S2615110",
        "job_description": "Job Description 2",
        "orderid": "000054286788",
        "start_time": 1676341800,
        "end_time": 1676349000,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "150",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0011",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-122",
        "durationwithBreaks": "150", 
        "faultCode" : "FC001"
    },
    {
        "scheduleID": "1000075",
        "jobID": 1303,
        "workerSNO": "S2615110",
        "job_description": "Job Description 3",
        "orderid": "000054286788",
        "start_time": 1676349000,
        "end_time": 1676356200,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "105",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0012",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-123",
        "durationwithBreaks": "120", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000076",
        "jobID": 1304,
        "workerSNO": "S2615110",
        "job_description": "Job Description 4",
        "orderid": "000054286788",
        "start_time": 1676356200,
        "end_time": 1676363400,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "90",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0012",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-124",
        "durationwithBreaks": "120", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000077",
        "jobID": 1305,
        "workerSNO": "S2615111",
        "job_description": "Job Description 5",
        "orderid": "000054286788",
        "start_time": 1676363400,
        "end_time": 1676370600,
        "job_status": "In Progress",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "120",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": 1676363400,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0013",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "120", 
        "faultCode" : "FC001"
    },
    {
        "scheduleID": "1000078",
        "jobID": 1306,
        "workerSNO": "S2615111",
        "job_description": "Job Description 6",
        "orderid": "000054286788",
        "start_time": 1676370600,
        "end_time": 1676381400,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "180",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0013",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-125",
        "durationwithBreaks": "180", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000079",
        "jobID": 1307,
        "workerSNO": "S2615111",
        "job_description": "Job Description 7",
        "orderid": "000054286788",
        "start_time": 1676381400,
        "end_time": 1676390400,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "135",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0014",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "150", 
        "faultCode" : "FC001"
    },
    {
        "scheduleID": "1000080",
        "jobID": 1316,
        "workerSNO": "S2615111",
        "job_description": "Job Description 16",
        "orderid": "000054286788",
        "start_time": 1676390400,
        "end_time": 1676395800,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "60",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0014",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "90", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000081",
        "jobID": 1308,
        "workerSNO": "S2615112",
        "job_description": "Job Description 8",
        "orderid": "000054286788",
        "start_time": 1676363400,
        "end_time": 1676372400,
        "job_status": "In Progress",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "150",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": 1676363400,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0021",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "150", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000082",
        "jobID": 1309,
        "workerSNO": "S2615112",
        "job_description": "Job Description 9",
        "orderid": "000054286788",
        "start_time": 1676372400,
        "end_time": 1676379600,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "120",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0022",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-125",
        "durationwithBreaks": "120", 
        "faultCode" : "FC001"
 },
    {
        "scheduleID": "1000083",
        "jobID": 1310,
        "workerSNO": "S2615112",
        "job_description": "Job Description 10",
        "orderid": "000054286788",
        "start_time": 1676379600,
        "end_time": 1676390400,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "135",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0023",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "180", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000084",
        "jobID": 1311,
        "workerSNO": "S2615112",
        "job_description": "Job Description 11",
        "orderid": "000054286788",
        "start_time": 1676390400,
        "end_time": 1676395800,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "90",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0021",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "90", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000085",
        "jobID": 1312,
        "workerSNO": "S2615113",
        "job_description": "Job Description 12",
        "orderid": "000054286788",
        "start_time": 1676395800,
        "end_time": 1676403000,
        "job_status": "In Progress",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "120",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": 1676395800,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0021",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "120", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000086",
        "jobID": 1313,
        "workerSNO": "S2615113",
        "job_description": "Job Description 13",
        "orderid": "000054286788",
        "start_time": 1676403000,
        "end_time": 1676412000,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "135",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0021",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "150", 
        "faultCode" : "FC001"
    },
    {
        "scheduleID": "1000087",
        "jobID": 1314,
        "workerSNO": "S2615113",
        "job_description": "Job Description 14",
        "orderid": "000054286788",
        "start_time": 1676412000,
        "end_time": 1676415600,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "60",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0021",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-126",
        "durationwithBreaks": "60", 
        "faultCode" : "FC001"
},
    {
        "scheduleID": "1000088",
        "jobID": 1315,
        "workerSNO": "S2615113",
        "job_description": "Job Description 15",
        "orderid": "000054286788",
        "start_time": 1676415600,
        "end_time": 1676421000,
        "job_status": "Not Started",
        "isTravelled": false,
        "criticalRatio": null,
        "criticalPath": 0,
        "isConstrained": false,
        "machineID": null,
        "claim_dt": null,
        "end_dt": null,
        "jobType": "Fault Mitigation",
        "time_elapsed": "0",
        "estimated_duration": "60",
        "lineUnit": null,
        "lineNumber": "Line 1 (1 day)",
        "actualEndtime": null,
        "actualStarttime": null,
        "assigned_mechanics": 1,
        "required_mechanics": 1,
        "subarea": "SubArea0021",
        "si": "",
        "mechanic_claimTime": null,
        "mechanic_completeTime": null,
        "materialNumber": "314T4012-121",
        "durationwithBreaks": "90", 
        "faultCode" : "FC001"
    }  
];

for(let i=0; i<jobsData.length; i++){
    if(JOBS_TIMINGS[i]["start_time"] >= "00:00:01" && JOBS_TIMINGS[i]["start_time"] <= "06:01:00"){
        let currentDateStart = currentDate + 1;
        jobsData[i].start_time = new Date(currentYear, currentMonth, currentDateStart, JOBS_TIMINGS[i]["start_time"].split(':')[0],JOBS_TIMINGS[i]["start_time"].split(':')[1],JOBS_TIMINGS[i]["start_time"].split(':')[2]).getTime();
    }
    else{
        jobsData[i].start_time = new Date(currentYear, currentMonth, currentDate, JOBS_TIMINGS[i]["start_time"].split(':')[0],JOBS_TIMINGS[i]["start_time"].split(':')[1],JOBS_TIMINGS[i]["start_time"].split(':')[2]).getTime();
    }
    if(JOBS_TIMINGS[i]["end_time"] >= "00:00:01" && JOBS_TIMINGS[i]["end_time"] <= "06:01:00"){
        let currentDateEnd = currentDate + 1;
        jobsData[i].end_time = new Date(currentYear, currentMonth, currentDateEnd, JOBS_TIMINGS[i]["end_time"].split(':')[0],JOBS_TIMINGS[i]["end_time"].split(':')[1],JOBS_TIMINGS[i]["end_time"].split(':')[2]).getTime();
    }
    else{
        jobsData[i].end_time = new Date(currentYear, currentMonth, currentDate, JOBS_TIMINGS[i]["end_time"].split(':')[0],JOBS_TIMINGS[i]["end_time"].split(':')[1],JOBS_TIMINGS[i]["end_time"].split(':')[2]).getTime();
    }
    jobsData[i].estimated_duration = JOBS_TIMINGS[i]["estimated_duration"];
    jobsData[i].durationwithBreaks = JOBS_TIMINGS[i]["durationwithBreaks"];
    if( jobsData[i].job_status === "In Progress"){
        jobsData[i].actualStarttime = jobsData[i].start_time;
    }
};

module.exports = jobsData;

