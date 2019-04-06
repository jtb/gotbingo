# Under root, `python util/list_characters.py`
from os import listdir
from os.path import isfile, join

f_path = 'characters'
files = [f for f in listdir(f_path) if isfile(join(f_path, f))]

for f in files:
    print('"{}/{}",'.format(f_path, f))