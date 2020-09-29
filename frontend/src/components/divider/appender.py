import pprint
import re

with open('Divider.js') as f:
    k = f.readlines()
    match = re.search('state = {', str(k))
    updated = str(k)[:match.end()] + ' div5 ' + str(k)[match.end():]
    
    pprint.pprint(updated)
    endofstr = match.end()

    with open('Divider.js', 'w') as p:
        p.write(updated)

