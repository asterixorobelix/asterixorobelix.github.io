---
layout: post
title: voron/klipper/slicer
tags: CNC hardware electronics
category: Machines
---

### Klipper

for copying klipper.bin to your machine
```
nathan@Nathans-MacBook-Pro Desktop % scp pi@mainsailos.local:~/klipper/out/klipper.bin /Users/nathan/Desktop/klipper
pi@mainsailos.local's password: 
klipper.bin                                   100%   23KB 382.0KB/s   00:00  
```  

For getting your serial number
```
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
```

### Mainsail vs Fluidd
<iframe width="560" height="315" src="https://yewtu.be/embed/BHVVcjtWTyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

### Pressure Advance
 add to the custom g-code for a filament in prusaSlicer/SuperSlicer for your filament.
 `SET_PRESSURE_ADVANCE ADVANCE=0.043825`

## mods
There is a very nice website for checking out mods [here](https://voronregistry.com/mods?page=1)

* [Filament runout sensor](https://yewtu.be/watch?v=ThUvS-W7HMw)
* [LED control with klipper](https://yewtu.be/embed/9MewnxuZY1A)

### v0.1 part cooling
 [This](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/jappaj/FanSaver) fansaver mod was very helpful for preventing the v0.1 fans from overheating.
 However, I am still finding it to be insufficient.

Some interesting options are in this video below.
<iframe width="560" height="315" src="https://yewtu.be/embed/65FVQ1jArME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

and this is how you can make the berd-air system quieter
<iframe width="560" height="315" src="https://yewtu.be/embed/1tl-IxJJhd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Reddit discussion](https://www.reddit.com/r/VORONDesign/comments/u3go19/v01_berdair_part_cooling_work_in_progress/) about it.

![Berd air](https://external-preview.redd.it/kKMv1evjnB_VSB5eORMWul31ZhSoWS2fGg8wCPcqCrw.jpg?width=960&crop=smart&auto=webp&s=dee01c9a408db3564ccc6c719fbba20d6d267de4)

voron mod parts are [here](https://thangs.com/designer/kazolar/3d-model/Berd-Air-mod-for-Voron-24-any-afterburner-compatible--36833) and you can buy the parts from [aliexpress](https://www.aliexpress.com/item/1005001870469069.html?spm=a2g0s.9042311.0.0.27424c4dnHlhOq) or the [official store](https://the-makerhive.myshopify.com/collections/berd-air-products/products/berd-air-max)

An attachment mod is [here](https://www.thingiverse.com/thing:4912063) or [here](https://yewtu.be/watch?v=2ho0qIzUos8)

### Other v0 mods
 * [ZeroPanels - clippable enclosure design for the panels, without screws](https://github.com/zruncho3d/ZeroPanels)
 * [Belted z with automatic bed levelling](https://github.com/zruncho3d/tri-zero)
 * [Alternate hotend](https://github.com/PrintersForAnts/Mini-AfterSherpa)
 * [Alternate extruder](https://github.com/CroXY3D/Sailfin-Extruder)
 * [Flying gantry v0 mod](https://github.com/zruncho3d/f-zero)
 * [Hinged top hat](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/hartk1213/Voron0_Hinged_Top_Hat)
 * [Klicky probe](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/JosAr/Klicky-Probe) or [ZeroClick](https://github.com/zruncho3d/ZeroClick)
 * [V0 belt holder](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/TheSquiffy/V0_Belts_holder)
 * [Bondtech LGX lite](https://www.bondtech.se/2021/12/27/voron-v0-1-toolhead-setup-for-lgx-lite/) - I have been unimpressed with the stock extruder on the v0.1. Its very cramped, its also difficult to get the filament in a lot of times. [Install guide](https://yewtu.be/watch?v=0wKtsrJNYmE)
 * [v0.1 Belted z drive](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/MathematicalPotato/v0.1_belted_z_drive)
 * [Pulley z drive mod](https://github.com/nhchiu/VoronUsers/tree/pulley_z/printer_mods/nhchiu/V0.1_Movable_Pulley_Z)
 * There are a bunch more in the [legacy](https://github.com/VoronDesign/VoronUsers/tree/master/legacy_printers/printer_mods) and [user mods](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods) repos
 * [Motor panel mod](https://voronregistry.com/mods/cmrny-v01motorpanelmodification)
 * [Second x rail mod](https://voronregistry.com/mods/mikesmods-lgxmountforv01with2ndxrail)
 * [Improved after burner strain relief](https://voronregistry.com/mods/andre-miniafterburnerstrainrelief)
 * [Improved ADXL345 accelerometer sensor mount](https://voronregistry.com/mods/andre-miniafterburneradxl345mount)
 * [MGN9 rail mod](https://voronregistry.com/mods/hartk1213-voron0mgn9cxaxis)
 * [Electronics bay and enclosure seperator](https://voronregistry.com/mods/weaslus-electronicsbayandenclosureseperator)
 * [Orbiter extruder mod](https://yewtu.be/embed/Jv1z_7u9nVc)

### Switchwire mods
* [Big belt](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/consibonsi/Y-Mod_SW_9mm)

### Trident mods
* [bed fans](https://voronregistry.com/mods/cannedbass-tridentbedfans)

### v2.4 mods
* [LgxLite](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Mrgl-Mrgl/LGX_Lite_Mount)
* [DoomCube](https://github.com/FrankenVoron/DoomCube-2)
* [DirectZ -drive](https://github.com/FrankenVoron/DoomCube-2/tree/main/Mods/crag-h4k/direct-drive-z)
* [good doomcube mod example](https://github.com/FrankenVoron/DoomCube-2/tree/main/Mods/mvieleers/my_doomcube)
* [Magnetic corner panel mounts](https://github.com/FrankenVoron/DoomCube-2/tree/main/Mods/mvieleers/corner_panel_mounts)
* [Indicator mounts](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/teookie/AB_dial_indicator_mount)
* [Extrusion mounts](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/whoppingpochard/extrusion_backers)
* [Bed fans](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Ellis/Bed_Fans)
* [Shorter z joints](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Ellis/Short_Z_Joints)
* [Mantis dual toolhead](https://github.com/mandryd/VoronUsers/tree/master/printer_mods/Long/Mantis_Dual_5015)
* [Pull out electrical store](https://voronregistry.com/mods/zzp8202-pulloutelectricalstore)

<iframe width="560" height="315" src="https://yewtu.be/embed/eH0Dq1uTBVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://yewtu.be/embed/dVByvaQ3abs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### XY offset

<iframe width="560" height="315" src="https://yewtu.be/embed/r7xHNO10H_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>