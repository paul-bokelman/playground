import inquirer as iq

question = iq.List('choice', message='What do you want to do?', choices=['Create', 'Read', 'Update', 'Delete'])

answer = iq.prompt(question)

if answer:
    print(answer['choice'])