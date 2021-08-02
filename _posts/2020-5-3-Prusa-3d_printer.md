---
layout: post
title: Prusa Mk3 3d Printer
tags: 3dPrinting
category: Machines
---

## First Layer ##
I've been struggling with my prints where the first few layers have not been sticking to the bed very well. Thankfully, I came across these two helpful posts on the matter [Thomas Sanladerer](https://www.youtube.com/watch?v=AaF28dnDgKA) and [Maker's muse](https://www.youtube.com/watch?v=ShFaJ027pFs). Basically, use some glue on the print bed and reduce speed and increase filament flow for the first few layers of print.

I also discovered that I was orders of magnitude off how much the nozzle needs to be smooshed into the bed. [This post](https://forum.prusaprinters.org/forum/original-prusa-i3-mk3s-mk3-assembly-and-first-prints-troubleshooting/life-adjust-z-my-way/) made it clear that the live z offset setting should be around -0.5 and -0.7 mm, which is way off what I was doing!. For calibration, I found that [this pattern](https://www.thingiverse.com/thing:3055929) worked much better than the built in one.  Potentially, [this one](https://www.youmagine.com/designs/bed-leveling-tramming-paralleling-test) could also be useful. [This post](https://projects.ttlexceeded.com/3dprinting_mk3_live_z_calibration.html#mk3-live-z-calibration-procedure), [this Prusa post was also helpful](https://help.prusa3d.com/en/article/first-layer-calibration_112364).

In the end, what seemed to help the most was changing settings in the [PrusaSlicer](https://www.prusa3d.com/prusaslicer/). In the end, what seemed to help the most was simply changing the first layer height, width and print speed. I started with the 0.2mm Quality print settings, modified first layer height to be 0.4mm, made first layer speed 10 mm/s and first layer width of 0.72 mm.

![example first layers](https://forum.prusaprinters.org/wp-content/uploads/attachments/4570-22992-20170116-223130.jpg)

## Textured sheet ##
I got the [Textured powder coated sheet](https://help.prusa3d.com/en/article/textured-steel-sheet_196534), which can make the first layer look better. Advice on how to use it is [here](https://blog.prusaprinters.org/how-to-print-on-a-powder-coated-sheet_30178/). You shouldnt use a metal scraper, so a design can be printed from [PrusaPrinters](https://www.prusaprinters.org/prints/28337-scraper-for-build-plate-version-2)

## Octoprint ##
See this useful video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HBd0olxI-No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Upgrades ##
* [MK3s+ upgrade kit](https://shop.prusa3d.com/en/original-prusa-i3-mk3s/1390-original-prusa-i3-mk3-to-mk3s-upgrade-kit.html)
* A [titanium heatbreak](https://www.diyelectronics.co.za/store/heatbreaks/2545-e3d-v6-175mm-titanium-heat-break.html) made a big difference.
* [Nylock mod](https://www.reddit.com/r/prusa3d/comments/bp440f/full_guide_to_doing_nylock_mod_if_you_havent_you/), use [This](https://pcboy.github.io/g81_relative/) for working out the relative flatness. 
* It might be worthwhile adding other [bearings](https://www.igus.co.uk/product/1185?artNr=RJZM-01-05) for a quieter printer, as discussed [here](https://www.reddit.com/r/3Dprinting/comments/66je8v/prusa_i3_mk2_with_igus_drylin_bearings/), but you might need to print a [modified part](https://www.thingiverse.com/thing:2813978) for more clearance for the bearings. However, some [people disagree](https://toms3d.org/2016/06/07/should-you-be-using-igus-polymer-bushings/).
* [Reddit post](https://www.reddit.com/r/prusa3d/comments/bvk9kd/comprehensive_guide_on_how_to_modify_and_upgrade/) containing some upgrades.
* Printing [sideboxes](https://www.prusaprinters.org/prints/974-prusa-mk3-sideboxes-for-some-tools) and adding weight to them helped massively with the print quality too.
![sidebox](https://media.prusaprinters.org/media/prints/974/stls/6300_051c89d6-57d8-4850-ba19-3f354685f819/thumbs/inside/1280x960/png/mk3-sidebox_preview.webp)
* The [Bear upgrade](https://github.com/gregsaun/prusa_i3_bear_upgrade) seems well worth doing, more specifically, probably only the y axis mashup from ([1](https://www.thingiverse.com/thing:3576324), [2](https://www.prusaprinters.org/prints/22495-linear-rail-for-prusa-i3-bear-upgrade))
![Bear image](https://github.com/gregsaun/prusa_i3_bear_upgrade/blob/master/extra/photos/frame_01_900px.jpg?raw=true)
* My collection of [worthwhile mods on Prusa Printers](https://www.prusaprinters.org/social/144217-asterixorobelix/collections/63688) and others on [Thingiverse](https://www.thingiverse.com/asterixorobelix/collections/printer-mods)
* Epoxy levelling everywhere, just be careful of the miniscus which forms at the edges.
* [Voron 3d printer](https://docs.vorondesign.com/)

![voron](https://docs.vorondesign.com/images/Voron2.jpg)


### Voron switchwire
