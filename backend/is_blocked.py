import openai
import os
import requests
import re

openai.api_key = os.environ['OPENAI_KEY']

def is_a_blocked_categories(categories, url):
    # Get the website content
    response = requests.get(url)
    content = response.content.decode('utf-8')

    matches = re.search('(?<=<title>)(.*)(?=</title>)', content)

    title = matches[0]
    
    # Get the title of the website



    for category in categories:
        response = openai.Completion.create(
            model='text-davinci-003',
            prompt=f'''{title}

Is this about {category}? Yes or No?
''',
            temperature=0.0
        )

        output = 

        print()

# TEST CODE BELOW
'''
from is_blocked import is_a_blocked_categories
is_a_blocked_categories(['games'], 'https://www.roblox.com/')
'''