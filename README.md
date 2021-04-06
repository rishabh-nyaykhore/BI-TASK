# BI-TASK
### Live Link
# https://bi-task.herokuapp.com
# There are two routes - 
1. For Fething all task - 
  GET /api/v1/tasks/list
 2. For creating task - 
  POST /api/v1/tasks/add
  
  BODY {
    "name":string,
    "description":string,
    "creator":string,
    "duration": number in minutes
  }
