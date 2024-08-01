import asyncio
import time
from enum import Enum

class State(Enum):
    IDLE = 0
    SEQUENCE = 1
    REQUIRES_CHARGING = 2
    CHARGING = 3

two_hours = 2

async def charge(state, remaining_charge_time): 
    if state == State.REQUIRES_CHARGING:
        print("Charging started")
        state = State.CHARGING

    if state == State.CHARGING:
        print(f"Charging...")
        remaining_charge_time -= 1
        return
    
    if state == State.SEQUENCE:
        print("Sequence started, exiting charge")
        return

    await asyncio.sleep(1) # check if state has changed every second

state = State.REQUIRES_CHARGING
loop = asyncio.get_event_loop()

remaining_charge_time = two_hours

asyncio.ensure_future(charge(state, remaining_charge_time))

loop.run_forever()
if loop.is_running() and remaining_charge_time == 0:
    print("Charging completed")
    state = State.SEQUENCE
    loop.stop()

print("Sequence started")

loop.close()