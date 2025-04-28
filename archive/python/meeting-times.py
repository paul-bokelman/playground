from typing import Union, Optional, cast

schedule = {
    'ann': [
        {'start': (8, 0, 'am'), 'end': (9, 0, 'am')},
        {'start': (8, 0, 'pm'), 'end': (9, 0, 'pm')},
        {'start': (10, 0, 'am'), 'end': (11, 0, 'am')},
    ],
    'bob': [
        {'start': (7, 0, 'am'), 'end': (8, 30, 'am')},
        {'start': (11, 30, 'am'), 'end': (9, 0, 'pm')},
        {'start': (1, 30, 'am'), 'end': (6, 0, 'pm')},
        {'start': (10, 0, 'am'), 'end': (11, 0, 'am')},
    ],
    'carla': [
        {'start': (10, 0, 'am'), 'end': (10, 15, 'am')},
        {'start': (8, 0, 'am'), 'end': (9, 0, 'am')},
        {'start': (11, 0, 'am'), 'end': (8, 30, 'pm')}
    ]
}

people = ['ann', 'bob', 'carla']

def mins(time):
    hour, minute, period = time
    if period == 'pm' and hour != 12:
        hour += 12
    if period == 'am' and hour == 12:
        hour = 0
    return hour * 60 + minute

def intervals(person: str):
    return [(mins(t['start']), mins(t['end'])) for t in schedule[person]]

def find_overlaps_recursive(remaining: list[str], prev: Optional[list[tuple[int,int]]] = None):
    # no people remaining -> return computed prev
    if len(remaining) == 0:
        return prev

    # nobody processed yet -> process first person
    if prev is None:
        return find_overlaps_recursive(remaining[1:], intervals(remaining[0]))
    
    new_intervals = intervals(remaining[0])
    overlaps: list[tuple[int, int]] = []

    for interval in prev:
        for Bs, Be in new_intervals:
            As, Ae = interval
            # found intersection -> take and append intersected slice
            if (Ae > Bs and Be > As) or (Be > As and Ae > Bs):
                interval = (max(As, Bs), min(Ae, Be))
                print('intersection ->', interval)
            
        overlaps.append(interval)

    return find_overlaps_recursive(remaining[1:], overlaps)

print(find_overlaps_recursive(people, None)) # 8:00AM–8:30AM, 10:00AM–10:15AM, and 8:00PM–8:30PM