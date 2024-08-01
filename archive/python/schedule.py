import time 
import schedule
import asyncio

internal_time = 10

async def job_with_timer():
    print("Starting job with timer")
    # do action
    await asyncio.sleep(internal_time)
    # end action
    print("Job with timer finished")

j1 = schedule.every(3).seconds.do(job_with_timer)

# schedule.cancel_job(j1)

while True:
    schedule.run_pending()