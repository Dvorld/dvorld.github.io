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

### Boot directly to tty1 in ubuntu.


 `sudo nano /etc/default/grub`
 
 and change it to ...

GRUB_CMDLINE_LINUX_DEFAULT="text"

and update grub with ...

`sudo update-grub`

Tell systemd to not load the desktop with ...

`sudo systemctl enable multi-user.target --force`

   `sudo systemctl set-default multi-user.target`


And the initial boot will end up on a tty. By default it will be tty1. You can still go to the desktop by using the command startx on commandline.

We can switch to the graphical desktop using ctrl +alt+f7 in case I need it.

Issue the sudo systemctl start lightdm command before using control+alt+f7. Probably impossible to get around that: if a desktop is loaded during boot it will take precedence.

______________________________________________

### GRUB sample 

```
GRUB_DEFAULT=0
GRUB_TIMEOUT_STYLE=hidden
GRUB_TIMEOUT=0
GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`
GRUB_CMDLINE_LINUX_DEFAULT="quiet consoleblank=40"
GRUB_CMDLINE_LINUX=""
GRUB_RECORDFAIL_TIMEOUT=0
```

______________________________________________
### change login screen to extended  monitor
```
sudo cp ~/.config/monitors.xml ~gdm/.config/monitors.xml
```

```
sudo chown gdm:gdm ~gdm/.config/monitors.xml
```
____________________________________________

### Samba in Ubuntu




`sudo apt-get install samba samba-common-bin`


after restarting server autostart

`sudo systemctl enable smbd`


`sudo systemctl --enable now smbd`



to add user to system or to group add users first

sudo adduser username (any)

to add user to samba share group add different users 

sudo usermod -aG sambashare $USER


to setup user account

sudo smbpasswd -a username (any)


`sudo nano /etc/samba/smb.conf`


[Amazon]
path = /mnt/Amazon/
writeable=Yes
create mask=0777
directory mask=0777
public=no
browseable = no
valid users = @user @new_user



to update firewall rules

`sudo ufw allow samba`



to restart the service

`sudo systemctl restart smbd.service nmbd.service`

`sudo smbcontrol smbd reload-config`



### Refer more:
https://linux.how2shout.com/install-samba-on-linux-mint-to-share-files-with-windows/

___________________________________________
