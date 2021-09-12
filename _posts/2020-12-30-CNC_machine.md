---
layout: post
title: CNC machine
tags: CNC hardware electronics
category: Machines
---

### Wiring
I've been struggling to work out the wiring for the [TB6560 stepper motor driver](https://www.diyelectronics.co.za/store/stepper-motor-drivers/1393-tb6560-stepper-motor-driver.html) and the [Mach3 parallel port breakout board](http://www.communica.co.za/catalog/Details/P3942944907).

Now that I have figured it out, I figured that I would share a schematic for all posterity.
![Wiring diagram image](https://drive.google.com/uc?export=view&id=14QUk2w_1RywGVUqnTGJyKSLMWa8E6o1o)

![Mach3 breakout board](https://drive.google.com/uc?export=view&id=1zbJ_lkMZAB2Chat0t6-mVzk2WIW2ICWt)

How to wire up the extras
![extras](https://drive.google.com/uc?export=view&id=0B822K1X9crfFQUIzcGc1NFkzOFk)

How to wire up the TB6560 stepper driver
![TB6560](https://drive.google.com/uc?export=view&id=0B822K1X9crfFMjRSX0hLY0d1NEE)

<iframe width="560" height="315" src="https://www.youtube.com/embed/0D2uYMVrglw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

How to [test the parallel port](https://youtu.be/uglCm_qsojk)

#### Limit Switches
![Limit Switches wiring](https://wiki.shapeoko.com/images/1/1c/Generichomeswitches.png)

![Multiple limit Switches wiring](https://forum.shapeoko.com/download/file.php?id=1322)

### Linux CNC
[Linux CNC](https://linuxcnc.org/docs/2.8/html/) is great.

<iframe width="560" height="315" src="https://www.youtube.com/embed/F4xHCwtaS3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I got a result of 26125 ns on the base thread from the Linux latency test.

This [steps per mm calculator](https://blog.prusaprinters.org/calculator_3416/#stepspermmlead) is useful for configuring LinuxCnc.

### CAD
I use Solidworks, an alternative might be [freecad](https://www.freecadweb.org/), since it has CAM built in. Fusion360 also has built in CAM, apparently. 

[Onshape](https://www.onshape.com/en/products/free) looks like a good option, it has a free version for openSource hobbyists and integrates with [kiri](https://www.youtube.com/watch?v=AbbZjj5FMGE).

![Onshape example image](https://www.onshape.com/global-assets/img/approved-product-images/features/features_1800x1013.jpg)

### CAM
CAM programs take your CAD model and, together with information such as bit size, material being cut, etc, use it to create g-code. CAM is probably the biggest issue in this whole workflow. There is a distinct lack of options. There is a [wiki](https://wiki.shapeoko.com/index.php/CAM) which has some potential options. This [toolchain wizard](https://sienci.com/dmx-longmill/choosing-software/) is a helpful tool for some of the options.

From my reading, the options are, in order of preference below:

#### 2D 
* [CAMLAB](http://camlab.sienci.com/camlab) and [Kiri](https://grid.space/kiri/), a [starter tutorial](https://www.youtube.com/watch?v=KDhMujKX1QQ) - Free

Kiri is actually very cool and supports, 3d printing, laser cutting and cnc routing!

<iframe width="560" height="315" src="https://www.youtube.com/embed/KDhMujKX1QQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* [ESTLCAM](https://www.estlcam.de/index.php) - $59, but you can download an [older version](https://www.estlcam.de/changelog.php)
* [bCNC](https://github.com/vlachoudis/bCNC) - free
* [DXF2Gcode](https://sourceforge.net/projects/dxf2gcode/) - Free!
* [MakerCAM](https://wiki.shapeoko.com/index.php/MakerCAM), [Github](https://github.com/shapeoko/makercam), [basic tutorial](https://www.makercam.com/tutorial.html) - Free
* [Easel](https://www.inventables.com/technologies/easel) - Free, very basic but easy to use.
* [OpenBuildsCAM](https://cam.openbuilds.com/#) - Free, but doesnt work very well with DXF
* [Carbide Create](https://carbide3d.com/carbidecreate/) - Free, but doesnt work very well with DXF
* [Web based](https://cam.openbuilds.com/#) and [this](https://cnc.js.org/) - Free
* [PathCam](https://github.com/xenovacivus/PathCAM) - free, didnt work with solidworks STL

##### Recommendation
EstlCam or CamLab/Kiri.

#### 3D
* [MeshCam](http://www.grzsoftware.com/) - $250
* [VCarve](https://www.vectric.com/products) - $400
* [HSMWorks](https://www.autodesk.com/products/hsmworks/overview?plc=F360&term=1-YEAR&support=ADVANCED&quantity=1) CAM addon for Solidworks - $495 per year
* [Freemill plugin for Solidworks](https://mecsoft.com/freemill-for-solidworks-free-cam-software-in-solidworks/) - upwards of $600, depending on version
* [CamBam](http://www.cambam.info/downloads/) - $150, but you can download an older version
* [PyCam](http://pycam.sourceforge.net/) - linux only at the moment - Free

##### Recommendation
Cambam or meshcam, based on price.

### Alternatives

#### Buy
![bantam machine](https://cdn.shopify.com/s/files/1/0275/2361/products/BTCNC__DSC7637_1_1000x1500.jpg?v=1595869743)

Expensive, but at least they do the job, some include software for toolchain from CAD to gCode.

* [Bantam desktop machine](https://www.bantamtools.com/machines/desktop-cnc-milling-machine) - $3 600
* [evo One](https://makerdreams.it/product/evo-one-cnc-mill/) - $4 300
* [ShopBot desktop machine](https://www.shopbottools.com/products/desktop) - $7 600
* [Carbide3d Nomad desktop cnc](https://shop.carbide3d.com/products/nomad-3/?variant=32912906354749) - $2 800
* [ShapeokoPro3](https://shop.carbide3d.com/collections/machines/products/shapeoko-pro-cnc-router?variant=33007028797501) -$ 2600
* [Cheap milling machine](https://www.adendorff.co.za/product/mac-afric-mini-drillingmilling-machine/) and [CNC conversion kit](https://www.mbbilici.com/index.php?route=product/product&path=57&product_id=63), like [this](https://youtu.be/OY5VUsJ2Gu4) - approx $1 600
* [Openbuilds-c-beam-machine](https://openbuildspartstore.com/openbuilds-c-beam-machine/) - $700
* [Openbuilds mini mill](https://openbuildspartstore.com/openbuilds-minimill/) - $550
* [Bulkman mini mill rip off](https://bulkman3d.com/product/mn01/) - $200
* [Bulkman c-beam rip off](https://bulkman3d.com/product/cbxl01/) - $233

#### Build
Noise, dust, frustration! Not to be understestimated! Making something stiff, square and repeatable is not a small task. The smaller, the better here; both for stiffness and to build an enclosure. 

##### Fixed vs moving gantry

[Decide whether a fixed or moving gantry is better](https://www.cnczone.com/forums/diy-cnc-router-table-machines/209352-fixed-gantry-vs-moving-gantry.html), considering rigidity and squareness, as well as [size constraints](https://www.cnczone.com/forums/diy-cnc-router-table-machines/131290-cnc.html).

Fixed gantry [example](https://hackaday.io/project/7657-cnc-mill)

Another [example](https://openbuilds.com/builds/fixed-gantry-cnc-router.9779/)

![d](https://openbuilds.com/data/article_images/l/9/9779.jpg?t=1614473148)


<iframe width="560" height="315" src="https://www.youtube.com/embed/1GKhLaHbSNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Moving gantry option](https://openbuilds.com/builds/m4-1510ss-heavy-mk-i.9393/)

![sss](https://openbuilds.com/attachments/machine_-4_2020-aug-21_09-20-06pm-000_customizedview30844974911-jpg.47287/)

##### Construction methods
To be honest, unless you already have access to precision tools, it may be better to build your own lasercutter or plasma cutter instead. In order of preference:

* Cast from [epoxy granite](https://youtu.be/4aBVAbfxLJw?t=491) - at least this allows for taking your time making a mould and making sure its all square. Once its set, no take backsies though! [Here](https://youtu.be/2woA1BxZ7Pg) and [here](https://www.model-engineer.co.uk/forums/postings.asp?th=139042). Will also need quality components. Another [good example](https://www.model-engineer.co.uk/forums/postings.asp?th=139042)

![cast example](http://www.mediafire.com/file/9jpakhca88kghtg/750_11-12-2018_8-47-44_PM.jpg/file)

![Example cast one](https://forum.strojirenstvi.cz/download/file.php?id=33154&mode=view)

<iframe width="560" height="315" src="https://www.youtube.com/embed/4aBVAbfxLJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/-0Cn0WRXPKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* Weld a steel frame. You will need to spend much time grinding and lapping to make it flat and much time making it square. Will probably require [granite parallels](https://www.starrett.com/category/precision-measuring-tools/granite-parallels/130207#currentPage=1&displayMode=grid&itemsPerPage=12&sortBy=wp/asc)

<iframe width="560" height="315" src="https://www.youtube.com/embed/K9UA9ZRFwWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* Aluminium extrusion frame - these are the most accessible and there are [plenty designs](https://openbuilds.com/) out there. The few which I have tried have been almost commically flexible when milling material, so design needs to be bulletProof. Perhaps, these designs are worth considering: [here](https://wikifactory.com/+mekanika/mekanika-cnc-router) and [here](https://bulkman3d.com/product/queenbee-pro-cnc-machine-mechanical-kit-upgrade-kit/) or [here](https://gitlab.cba.mit.edu/jakeread/clank) or [here](https://openbuilds.com/builds/granite-1-0.7661/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/RDnGvhdGFEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/d6Sx95dOuvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Both options are available from his [store](https://ivanmiranda.com/products/3d-printed-cnc) and [here](https://ivanmiranda.com/products/large-3d-printed-cnc-plans)

[Another example](https://jeremyyoungdesign.com/2016/05/26/diy-cnc-router-final-assembly/)
![Jeremy Young design](https://jeremyyoungdesign.files.wordpress.com/2015/08/dscf0173.jpg?w=820)

![Granite cnc](https://openbuilds.com/attachments/dscn2266-jpg.35070/)

[CnC from openbuilds with rails](https://openbuilds.com/builds/sphinx-55-on-mgn12-linear-rails.8790/) and [here](https://openbuilds.com/builds/modified-sphinx-55-with-mgn12-linear-rails.9456/)

![x](https://openbuilds.com/attachments/20200712_111103-jpg.46975/)

![Mucho good](https://openbuilds.com/attachments/a0fd159e-3753-470d-982f-88031a916942-jpeg.41859/)

[Another good design](http://www.mycncuk.com/threads/10658-El-Beast-Initial-design-phase-comments-and-critique-welcomed%21)

![El Beast](http://i.imgur.com/oXFql8m.png)

One which uses some [3d printed add ons](https://openbuilds.com/builds/sphinx-55-with-3d-printed-addons.7923/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/pKPKe19Dh9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/nd19IBllD2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This one below has been filled with epoxy granite.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bX2Eg18AzTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

More [info](https://www.cnczone.com/forums/uncategorised-metalworking-machines/327914-gantry-mill-precise-milling-aluminium.html) in the build log.

![Filled with epoxy](https://www.cnczone.com/forums/attachment.php?attachmentid=354352&d=1489189948&thumb=1)

<iframe width="560" height="315" src="https://www.youtube.com/embed/LiQaFeTy_eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

With more details [here](http://maxmali.com/ripper-the-different-cnc/)

* Full Granite

<iframe width="560" height="315" src="https://www.youtube.com/embed/ewU8zWnuE3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Some more info [here](https://www.cnczone.com/forums/epoxy-granite/394174-granite-base-router.html)

### Flatness
It is important to get everything as flat as possible. [Epoxy levelling](https://www.cnczone.com/forums/diy-cnc-router-table-machines/349506-cnc.html) seems like a potential approach in a diy setting, although it also has [problems](https://www.cnczone.com/forums/diy-cnc-router-table-machines/341596-cnc.html), with [uneven temperatures and a meniscus](https://www.cnczone.com/forums/diy-cnc-router-table-machines/338054-forum.html) at each edge being some of the problems, you also cant move it, since twisting could [distort the epoxy](https://www.cnczone.com/forums/epoxy-granite/317156-linear-rails-bolted-steel-members-hard-epoxy.html). 

<iframe width="560" height="315" src="https://www.youtube.com/embed/FDrcpnVUcEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ebc7tiAAEZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Alternatively, use granite.
<iframe width="560" height="315" src="https://www.youtube.com/embed/sFrVdoOhu1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Lapping is probably a better option, but time consuming.

Explanation of how to make your own lapping plate below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/rHmsQEAx16o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Explanation of the [whitworth method](https://ericweinhoffer.com/blog/2017/7/30/the-whitworth-three-plates-method)

[Commercial lapping](http://metrolap.co.za/lapping_machines_accessories_equipment_polishing_machines_precision_grinding.htm#FlatLappingPlates) operation in SA.

Alternatively, buy or [build a surface grinder](https://www.youtube.com/watch?v=jMmCgQFCXj8&list=RDCMUCzu3cLKzKqEX1JjEqwjuHYw&index=12).

<iframe width="560" height="315" src="https://www.youtube.com/embed/jMmCgQFCXj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Squareness
[granite parallels](https://www.starrett.com/category/precision-measuring-tools/granite-parallels/130207#currentPage=1&displayMode=grid&itemsPerPage=12&sortBy=wp/asc) or granite table top offcuts in a pinch.

![Granite parallel](https://images.starrett.com/is/image/Starrett/Parallels_ecUSp1)

### Rigidity

<iframe width="560" height="315" src="https://www.youtube.com/embed/EeEhS3zmnDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Filling aluminium profiles with steel bar and epoxy granite](http://diycnc.com.au/part-5-behemoth-x-axis/) also seems like a good solution.

![diy cnc example](http://diycnc.com.au/wp-content/uploads/2017/10/20170930_160032-768x1032.jpg)

### Leadscrew vs ballscrew
[Hackaday discussion](https://hackaday.com/2018/11/13/mechanisms-lead-screws-and-ball-screws/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/iX00YX6wYsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Dust Shoe
Milling is extremely messy. A dust shoe is a necessity and a split one seems like a good idea.
![Split dust shoe example design](https://static.wixstatic.com/media/bdcd45_a70767520fc2499bbd0daf5a66e4c5bb~mv2.png/v1/fill/w_551,h_551,al_c,q_90,usm_0.66_1.00_0.01/bdcd45_a70767520fc2499bbd0daf5a66e4c5bb~mv2.webp)

### Aluminium extrusion suppliers (SA)
* [Neotronics](https://neotronics.co.za/index.php?route=product/product&path=113_138&product_id=635)
* [3dPrintingStore](https://www.3dprintingstore.co.za/centurionstore/product-categories/aluminium-t-slot-extrusions/v-slot-profiles.html)
* [Hobbytronics](https://www.hobbytronics.co.za/c/776/aluminium-profiles)
* [DiyGeeks](https://www.diygeek.co.za/product-category/aluminium-profiles-online-south-africa/v-slot-profiles-online-south-africa/) && [here](https://www.diygeek.co.za/product-category/aluminium-profiles-online-south-africa/)
* [DiyElectronics](https://www.diyelectronics.co.za/store/404-modular-extrusions?id_category=404&n=43)
* [CNCDirect](http://www.cncdirect.co.za/htm/profile.html)
* [Fatbob](http://fatbob.co.za/index.php?route=product/category&path=60)

### Spindle suppliers (SA)
* [Neotronics](https://neotronics.co.za/index.php?route=product/category&path=113_115)
* [3dPrintingStore](https://www.3dprintingstore.co.za/centurionstore/product-categories/cnc/cnc-spindles.html?)
* [Hobbytronics](https://www.hobbytronics.co.za/c/827/cnc-spindle-motors)
* [DiyGeeks](https://www.diygeek.co.za/product-category/diy-cnc-online-south-africa/motors/spindle-motors-online-south-africa/)
* [CncDirect](http://www.cncdirect.co.za/htm/control.html)

### Ball Screw suppliers (SA)
* [DiyGeek](https://www.diygeek.co.za/product-category/diy-cnc-online-south-africa/ball-screws-online-south-africa/)
* [3dPrintingStore](https://www.3dprintingstore.co.za/centurionstore/product-categories/mechanics/ball-screws.html?)
* [CNCDirect](http://www.cncdirect.co.za/htm/linear.html)
* [RSComponents](https://za.rs-online.com/web/c/mechanical-power-transmission/lead-screws-ball-screws-ball-splines/)

### Stepper motor suppliers (SA)
* [Netram](https://www.netram.co.za/1580-stepper-motors)
* [DIYElectronics](https://www.diyelectronics.co.za/store/97-stepper-motors)

### Stepper motor drivers suppliers (SA)
* [CNCDirect](http://www.cncdirect.co.za/htm/stepper.html)

### Belts suppliers (SA)
* [Fatbob](http://fatbob.co.za/index.php?route=product/category&path=61)

### Linear slides suppliers (SA)
* [RSComponents](https://za.rs-online.com/web/c/bearings-seals/linear-motion/)
* [DiyGeeks](https://www.diygeek.co.za/product-category/diy-cnc-online-south-africa/guide-rails-online-south-africa/)
* [3dprintingStore](https://www.3dprintingstore.co.za/centurionstore/product-categories/mechanics/linear-rails.html?)