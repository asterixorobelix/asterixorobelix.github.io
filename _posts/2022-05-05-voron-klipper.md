---
layout: post
title: voron
tags: CNC hardware electronics
category: Machines
---

### Klipper

for copying klipper.bin to your machine
nathan@Nathans-MacBook-Pro Desktop % scp pi@mainsailos.local:~/klipper/out/klipper.bin /Users/nathan/Desktop/klipper
pi@mainsailos.local's password: 
klipper.bin                                   100%   23KB 382.0KB/s   00:00    

For getting your serial number
pi@mainsailos:~ $ ls
gcode_files  klipper_config  klippy-env  mjpg-streamer  moonraker-env
klipper      klipper_logs    mainsail    moonraker
pi@mainsailos:~ $ cd klipper_config
pi@mainsailos:~/klipper_config $ ls
mainsail.cfg  moonraker.conf  webcam.txt
pi@mainsailos:~/klipper_config $ cd ..
pi@mainsailos:~ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Jan 28 02:37 usb-Klipper_stm32f103xe_39FFD9054247333142751557-if00 -> ../../ttyACM0