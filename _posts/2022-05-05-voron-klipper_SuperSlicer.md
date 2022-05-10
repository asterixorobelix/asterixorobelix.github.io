---
layout: post
title: voron/klipper/slicer
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

### SuperSlicer
A profile to start with for [SuperSlicer](https://github.com/supermerill/SuperSlicer) is [here](https://github.com/AndrewEllis93/Ellis-PIF-Profile)

Add the following to the print_start of your printer.cfg
```
    M190 S{bedtemp}                ; set & wait for bed temp
    M109 S{hotendtemp}             ; set & wait for hotend temp

    G1 E5 F1000 ; de-retract and push ooze
    G91 G1 X-3 F6000 ; move x to the left
    G91 G1 Y-3 F6000; move y forward
    G1 Z-20.0 F1000             ; move nozzle down
    G1 X-50.0 E6  F800.0 ; fat 50mm intro line @ 0.30
    G1 X-50.0 E3.2  F1000.0 ; fat 50mm intro line @ 0.30
    G1 E-0.8 F3000; retract to avoid stringing
    G1 X30 E0 F1000.0 ; wipe action to avoid string
    G28 Z                          ; final z homing
```
[Here](https://github.com/th3fallen/voronConfig/blob/master/macros.cfg) and [here](https://docs.vorondesign.com/community/howto/alchemyEngine/chamber_temperature_exhaust_fan.html) are some more macros

You can also adjust the name of the output gcode file:
```
 [input_filename_base]_{printer_model}_{nozzle_diameter[0]}n_{filament_type[0]}_[temperature]C_[layer_height]mm_[fill_density]_[print_time].gcode
 ```

 or
 ```
 {input_filename_base}_{layer_height}mm_{filament_type[0]}_{nozzle_diameter}_{print_time}.gcode
 ```
 Discussed in more detail [here](https://help.prusa3d.com/article/macros_1775)

 ### Todo
 * [  ] Pressure advance
 * [  ] Input shaper
 * [  ] Switch lights on in print_start macro
 * [  ] Use thermistor to wait for chamber temp in print_start macro
 * [  ] Display chamber temp on display