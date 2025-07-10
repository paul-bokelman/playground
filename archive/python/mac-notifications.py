from pync import Notifier
import os

Notifier.notify(
    'Hello World',
    title='Python',
    group=os.getpid(),
    activate='com.apple.Safari',
    open='http://github.com/',
    execute='say "OMG"'
)

Notifier.remove(os.getpid())

Notifier.list(os.getpid())