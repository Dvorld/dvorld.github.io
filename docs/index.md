# Linux 

### To avoid entering sleep or suspend mode when the lid closed

To disable entering the sleep mode edit the 
```sudo nano /etc/systemd/logind.conf```  file and modify the line:

```HandleLidSwitch=suspend```

to

```HandleLidSwitch=ignore```

Additionally, ensure that the file also has this line:

`LidSwitchIgnoreInhibited=no`

Then restart 

`sudo service systemd-logind restart`



_____________________________________________________



