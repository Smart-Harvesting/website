#!/usr/bin/env python3

# Kudos to Jannik Molter (@jmolter)
# Minor modification by @neumannm to reduce unnecessary line breaks between tags
import requests
import os
import re

dirPath = 'publications/'
os.makedirs(dirPath, exist_ok=True)

tag = 'sh2'
base = 'https://www.bibsonomy.org/layout/publist-year-en/user/irgroup_thkoeln'
   
# get list of publications of the group with given tag
url = base + "/" + tag + '?resourcetype=publication&items=500&duplicates=merged'
page = requests.get(url)

html = page.content.decode('utf-8')
html = re.sub(r'(?<=>)\n+(?=<)', '\n', html)

with open(dirPath+tag+'.html', mode='w') as localfile:     
    localfile.write(html) 
