# Linux 

### To avoid entering sleep or suspend mode when the lid closed

To disable entering the sleep mode edit.
```sudo nano /etc/systemd/logind.conf```  file and modify the line:

`HandleLidSwitch=suspend`

to

`HandleLidSwitch=ignore`

Additionally, ensure that the file also has this line:

`LidSwitchIgnoreInhibited=no`

Then restart 

`sudo service systemd-logind restart`



_____________________________________________________



#### Tip 2 sample 

Sample text here 

-----------------------------------------------

#### Tip 3 sample 

================================================

## Icons and Emoji
:smile: 

:fontawesome-regular-face-laugh-wink:

:fontawesome-brands-twitter:{ .twitter }

:octicons-heart-fill-24:{ .heart }

#### With a title

``` py title="bubble_sort.py"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

#### Highlighting lines

``` py hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
