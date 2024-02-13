export interface TaskModel{
    id:number;
    task: string;
    startDate: string;
    endDate:string;
    frequency:TaskFrequencyENUM;  
    taskType:TaskTypeENUM;
    estimatedTime: TimeEstimateENUM;
    actualTime:number;
}

export interface TaskStatusModel{
    taskId: number;
    taskDate: string;
    timePlanned: number;
    timeActual: number;
    notes: string;
    taskStatus: TaskStatusENUM;
}

export enum TimeEstimateENUM{    
    ONE_HOUR="1",
    TWO_HOUR="2",
    FOUR_HOUR="4"
}

export enum TaskFrequencyENUM{
        ONEDAY="ONEDAY",
        DAILY="DAILY",
        WEEKDAYS="WEEKDAYS",
        WEEKEND="WEEKEND"
}

export enum TaskStatusENUM{
    NOT_STARTED="NOT_STARTED",
    IN_PROGRESS="IN_PROGRESS",
    COMPLETED="COMPLETED",
    ABANDONED="ABANDONED",
    NO_MORE_REQUIRED="NO_MORE_REQUIRED"
}
export interface TaskTypeIconModel{
    taskType:TaskTypeENUM;
    iconName:string;
    cssClass:string;
}

export enum TaskTypeENUM{
    WORK="WORK",
    HEALTH="HEALTH",
    FAMILY="FAMILY",
    MISCELLANEOUS="MISCELLANEOUS",
    CERTIFICATIONS="CERTIFICATIONS",
    INTERVIEW_PREP="INTERVIEW_PREP", 
    SELF_IMPROVEMENT="SELF_IMPROVEMENT", 
    JOB_SEARCH="JOB_SEARCH"
}

export const TaskModelList: TaskModel[] =[
    {id:1, task:'Read 30 pages of "FEEL GOOD PRODUCTIVITY" book', startDate: '02/07/2024', 
    endDate: '02/15/2024', frequency: TaskFrequencyENUM.DAILY, 
    taskType: TaskTypeENUM.SELF_IMPROVEMENT, estimatedTime:TimeEstimateENUM.ONE_HOUR,
    actualTime:0 }, 
    {id:2, task:'Read 60 pages of certifications - Microsoft Azure (showing intent)', startDate: '02/07/2024', 
    endDate: '03/10/2024', frequency: TaskFrequencyENUM.DAILY, 
    taskType: TaskTypeENUM.CERTIFICATIONS, estimatedTime:TimeEstimateENUM.FOUR_HOUR,
    actualTime:0 }, 
    {id:3, task:'Apply 10 jobs and maintain history and check tsc email as well as gmail', startDate: '02/07/2024', 
    endDate: '03/10/2024', frequency: TaskFrequencyENUM.DAILY,  
    taskType: TaskTypeENUM.JOB_SEARCH, estimatedTime:TimeEstimateENUM.ONE_HOUR,
    actualTime:0 }, 
    {id:4, task:'Walk 10K steps at the bare minimum', startDate: '02/07/2024', 
    endDate: '04/10/2024', frequency: TaskFrequencyENUM.DAILY, 
    taskType: TaskTypeENUM.HEALTH, estimatedTime:TimeEstimateENUM.TWO_HOUR,
    actualTime:0 }, 
    {id:5, task:'Learn latest industry skills from youtube understand', startDate: '02/07/2024', 
    endDate: '04/10/2024', frequency: TaskFrequencyENUM.DAILY, 
    taskType: TaskTypeENUM.INTERVIEW_PREP, estimatedTime:TimeEstimateENUM.TWO_HOUR,
    actualTime:0 }, 
    {id:6, task:'Do Coding or Algorithm or Machine Learning or AI', startDate: '02/07/2024', 
    endDate: '04/10/2024', frequency: TaskFrequencyENUM.DAILY,
    taskType: TaskTypeENUM.INTERVIEW_PREP, estimatedTime:TimeEstimateENUM.TWO_HOUR,
    actualTime:0 },
    {id:6, task:'Microsoft Cloud Study', startDate: '02/15/2024', 
    endDate: '04/10/2024', frequency: TaskFrequencyENUM.DAILY,
    taskType: TaskTypeENUM.CERTIFICATIONS, estimatedTime:TimeEstimateENUM.FOUR_HOUR,
    actualTime:0 },
    {id:7, task:'Microsoft Cloud Study test logic future', startDate: '02/17/2024', 
    endDate: '04/10/2024', frequency: TaskFrequencyENUM.DAILY,
    taskType: TaskTypeENUM.CERTIFICATIONS, estimatedTime:TimeEstimateENUM.FOUR_HOUR,
    actualTime:0 },
    {id:8, task:'Microsoft Cloud Study test logic past', startDate: '02/07/2024', 
    endDate: '02/10/2024', frequency: TaskFrequencyENUM.DAILY,
    taskType: TaskTypeENUM.CERTIFICATIONS, estimatedTime:TimeEstimateENUM.FOUR_HOUR,
    actualTime:0 }
];

export const TaskStatusModelList: TaskStatusModel[] = [
    {
        taskId: 1, notes: 'Started but distracted, the symptoms needs to be addressed', taskDate: '02/04/2024', taskStatus: TaskStatusENUM.IN_PROGRESS, 
        timePlanned: 4, timeActual:1
    }, 
    {
        taskId: 1, notes: 'Started but distracted, the symptoms needs to be addressed', taskDate: '02/05/2024', taskStatus: TaskStatusENUM.IN_PROGRESS, 
        timePlanned: 4, timeActual:1
    }, 
    {
        taskId: 1, notes: 'Started but distracted, the symptoms needs to be addressed', taskDate: '02/06/2024', taskStatus: TaskStatusENUM.IN_PROGRESS, 
        timePlanned: 4, timeActual:1
    }, 
    {
        taskId: 1, notes: 'Started but distracted, the symptoms needs to be addressed', taskDate: '02/07/2024', taskStatus: TaskStatusENUM.IN_PROGRESS, 
        timePlanned: 4, timeActual:1
    },   {
        taskId: 1, notes: 'Started but distracted, the symptoms needs to be addressed', taskDate: '02/08/2024', taskStatus: TaskStatusENUM.IN_PROGRESS, 
        timePlanned: 4, timeActual:1
    }
];

export const TaskTypeIconModelList: TaskTypeIconModel[] =[
    {
        taskType: TaskTypeENUM.CERTIFICATIONS,
        iconName: 'approval',
        cssClass: 'first-css'
    },
    {
        taskType: TaskTypeENUM.FAMILY,
        iconName: 'group',
        cssClass: 'first-css'
    },
    {
        taskType: TaskTypeENUM.HEALTH,
        iconName: 'health_and_safety',
        cssClass: 'first-css'
    },
    {
        taskType: TaskTypeENUM.INTERVIEW_PREP,
        iconName: 'interpreter_mode',
        cssClass: 'first-css'
    },
    {
        taskType: TaskTypeENUM.JOB_SEARCH,
        iconName: 'pageview',
        cssClass: 'first-css'
    },
    {
        taskType: TaskTypeENUM.MISCELLANEOUS,
        iconName: 'sunny',
        cssClass: 'first-css'
    },
    {
        taskType: TaskTypeENUM.SELF_IMPROVEMENT,
        iconName: 'self_improvement',
        cssClass: 'first-css'
    },
    {
        taskType: TaskTypeENUM.WORK,
        iconName: 'work',
        cssClass: 'first-css'
    },
]