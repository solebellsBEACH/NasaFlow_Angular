const app = {
  imageOfDay: {
    error: false,
    loading: false,
    data: {
      imageOfDayList: [
        {
          date: "2002-06-27",
          explanation: "Just as erosion from the Colorado River carved the Grand Canyon on Earth, a river of flood water may have carved Ma'adim Vallis, one of the largest canyons on Mars. Researchers have presented strong evidence for such a scenario based on elevation data recorded by the MOLA (Mars Orbiter Laser Altimeter) experiment on the Mars Global Surveyor spacecraft. This false-color, detailed, topographical map of MOLA data shows in blue the area of an enormous complex of lakes that are thought to have existed over three and a half billion years ago in the southern highlands of Mars. As the largest lake spilled over the low point in its boundary a torrential flood would have moved north, along the direction indicated by the arrow, carving the sinuous Ma'adim Vallis. At the north end of Ma'adim Vallis, the flood waters would have poured into large, round Gusev Crater. Since standing bodies of surface water are thought to be favorable for ancient martian microbial life, Gusev Crater has been suggested as a landing site for future Mars missions.",
          hdurl: "https://apod.nasa.gov/apod/image/0206/marslakes_topomap_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Carving Ma'adim Vallis",
          url: "https://apod.nasa.gov/apod/image/0206/marslakes_topomap_c.jpg"
        },
        {
          copyright: "D. Malin \n(AAO),\nAATB, \nUKS Telescope\n",
          date: "1998-09-07",
          explanation: "A variety of stars and nebulae can be found towards the constellation of Sagittarius.  Dense fields of stars laced with dark lanes of dust crowd this region only a few degrees from the center of our Galaxy.  Prominent nebulae include the red Lagoon Nebula (M8) in the lower right and the multicolored Trifid Nebula (M20) in the upper right.  Recent high-resolution images of these nebulae show unusual features such as funnel-shaped clouds and proplyds that are not well understood.",
          hdurl: "https://apod.nasa.gov/apod/image/9809/sag_uks026.jpg",
          media_type: "image",
          service_version: "v1",
          title: "The Sky Towards Sagittarius",
          url: "https://apod.nasa.gov/apod/image/9809/sag_uks026_big.jpg"
        },
        {
          date: "1998-12-24",
          explanation: "Looking down from atop a Delta II rocket blasting skyward, solid fuel boosters fall away (left) and the Earth's limb slides into view. These pictures from the launch of the Mars Climate Orbiter were taken as it climbed away from Cape Canaveral Air Station Space Launch Complex 17 on December 11. This spacecraft won't arrive at Mars in time for Christmas though, as its cruise to the red planet will require about 9 1/2 Earth months to complete. Once it does get there it will use aerobraking to help establish a polar science mapping orbit for studying the martian atmosphere. The orbiter is also scheduled to act as a communications relay for the soon to be launched Mars Polar Lander.",
          hdurl: "https://apod.nasa.gov/apod/image/9812/m98boost1.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Mars Climate Orbiter Launches",
          url: "https://apod.nasa.gov/apod/image/9812/m98boost1.jpg"
        },
        {
          copyright: "\n\nMikhail Abgarian, Konstantin Morozov,\nYuri Goryachko (Minsk, Belarus)\n\n",
          date: "2007-08-24",
          explanation: "Jupiter is an astronomer's planet -- its large size and contrasting global cloud belts and zones allow detailed studies with a range of earthbound telescopes. On the other hand, most telescopic views of Jupiter's moons usually show only featureless, tantalizing points of light hovering near the ruling gas giant. But this impressive picture from a small, ground-based telescope reveals a stunning amount of detail on Ganymede, a jovian moon about the same size as Earth's moon but at least 1,500 times farther away. The image was carefully constructed by combining and processing only the 409 sharpest frames from a total of 10,000 recorded at 30 frames per second by a digital camera. Ganymede's radius is about 2,600 kilometers indicating that the surface markings visible are as small as around 900 kilometers across.",
          hdurl: "https://apod.nasa.gov/apod/image/0708/Ganymede_20070630_2005UT.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Astronomer's Moon",
          url: "https://apod.nasa.gov/apod/image/0708/Ganymede_20070630_2005UT.jpg"
        },
        {
          copyright: "\nAmir H. Abolfath\n",
          date: "2020-10-14",
          explanation: "The many spectacular colors of the Rho Ophiuchi (oh'-fee-yu-kee) clouds highlight the many processes that occur there.  The blue regions shine primarily by reflected light.  Blue light from the  Rho Ophiuchi star system and nearby stars reflects more efficiently off this portion of the nebula than red light.  The Earth's daytime sky appears blue for the same reason.  The red and yellow regions shine primarily because of emission from the nebula's atomic and molecular gas.  Light from nearby blue stars - more energetic than the bright star  Antares - knocks electrons away from the gas, which then shines when the electrons recombine with the gas.  The dark brown regions are caused by dust grains - born in young stellar atmospheres - which effectively block light emitted behind them.  The Rho Ophiuchi star clouds, well in front of the globular cluster M4 visible here on the upper right, are even more colorful than humans can see - the clouds emits light in every wavelength band from the radio to the gamma-ray.   Astrophysicists: Browse 2,200+ codes in the Astrophysics Source Code Library",
          hdurl: "https://apod.nasa.gov/apod/image/2010/RhoAntares_Abolfath_3000.jpg",
          media_type: "image",
          service_version: "v1",
          title: "The Colorful Clouds of Rho Ophiuchi",
          url: "https://apod.nasa.gov/apod/image/2010/RhoAntares_Abolfath_1080.jpg"
        },
        {
          date: "1998-05-11",
          explanation: "Callisto's surface has many stories to tell.  The most distant of Jupiter's Galilean Moons, Callisto shows the highest density of impact craters in the Solar System, but harbors no volcanoes or even any large mountains.  Callisto's surface is laced with cracks and craters from billions of years of collisions with interplanetary debris. This image shows Callisto's true colors, and was taken in November 1997 by the robot spacecraft Galileo currently orbiting Jupiter.",
          hdurl: "https://apod.nasa.gov/apod/image/9805/callistotrue_gal_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Callisto in True Color",
          url: "https://apod.nasa.gov/apod/image/9805/callistotrue_gal.jpg"
        },
        {
          copyright: "\nTony Hallas\n",
          date: "2007-09-13",
          explanation: "This alluring telescopic image looks toward the constellation Cepheus and an intriguing visual pairing of dusty reflection nebula NGC 7129 (left) and open star cluster NGC 7142. The two appear separated by only half a degree on the sky, but they actually lie at quite different distances. In the foreground, dusty nebula NGC 7129 is about 3,000 light-years distant, while open cluster NGC 7142 is likely over 6,000 light-years away. In fact, the pervasive and clumpy foreground dust clouds in this region redden the light from NGC 7142, complicating astronomical studies of the cluster. Still, NGC 7142 is thought to be an older open star cluster, while the bright stars embedded in NGC 7129 are perhaps a million years young. The telltale reddish crescent shapes around NGC 7129 are associated with energetic jets streaming away from newborn stars. Surprisingly, despite the dust, far off background galaxies can be seen in the colorful cosmic vista.",
          hdurl: "https://apod.nasa.gov/apod/image/0709/n7129n7142_hallas.jpg",
          media_type: "image",
          service_version: "v1",
          title: "NGC 7129 and NGC 7142",
          url: "https://apod.nasa.gov/apod/image/0709/n7129n7142_hallas_c786.jpg"
        },
        {
          date: "2006-01-23",
          explanation: "What goes on inside of a galaxy? To help find out, astronomers from the Magellanic Cloud Emission Line Survey team imaged our neighboring LMC galaxy in spectacular detail and highlighted very specific colors of light emitted by glowing gas. The above mosaic of over 1,500 images of the Large Magellanic Cloud (LMC) is the result -- clicking on the image will bring up an image with much greater detail.  The colors highlighted on the mosaic are light emitted by hydrogen (red), oxygen (green), and sulfur (yellow), while light from individual stars has been subtracted. The mosaic shows what a busy and violent place the inside of the LMC really is. Visible in the above image are many small planetary nebulas pushed out by low mass stars, large emission nebula of ambient interstellar gas set aglow by massive stars, and huge gaseous supernova remnants cast off by massive stars exploding.  The extended connected filaments are mostly connected supernova remnants.  The LMC, a familiar sight to an unaided eye in the southern hemisphere, spans about 15,000 light years and lies only about 180,000 light years distant.",
          hdurl: "https://apod.nasa.gov/apod/image/0601/lmcgas_ctio_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "The LMC Galaxy in Glowing Gas",
          url: "https://apod.nasa.gov/apod/image/0601/lmcgas_ctio.jpg"
        },
        {
          date: "2012-06-17",
          explanation: "Why does Jupiter have rings?  Jupiter's rings were discovered in 1979 by the passing Voyager 1 spacecraft, but their origin was a mystery.  Data from the Galileo spacecraft that orbited Jupiter from 1995 to 2003 later confirmed that these rings were created by meteoroid impacts on small nearby moons.  As a small meteoroid strikes tiny Adrastea, for example, it will bore into the moon, vaporize, and explode dirt and dust off into a Jovian orbit.  Pictured above is an eclipse of the Sun by Jupiter, as viewed from Galileo.  Small dust particles high in Jupiter's atmosphere, as well as the dust particles that compose the rings, can be seen by reflected sunlight.   APOD Retrospective: Today and Every Day",
          hdurl: "https://apod.nasa.gov/apod/image/1206/jupiterrings_galileo_1370.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Jupiter's Rings Revealed",
          url: "https://apod.nasa.gov/apod/image/1206/jupiterrings_galileo_960.jpg"
        },
        {
          date: "2020-01-25",
          explanation: "In this Hubble Space Telescope image the bright, spiky stars lie in the foreground toward the heroic northern constellation Perseus and well within our own Milky Way galaxy. In sharp focus beyond is UGC 2885, a giant spiral galaxy about 232 million light-years distant. Some 800,000 light-years across compared to the Milky Way's diameter of 100,000 light-years or so, it has around 1 trillion stars. That's about 10 times as many stars as the Milky Way. Part of a current investigation to understand how galaxies can grow to such enormous sizes, UGC 2885 was also part of astronomer Vera Rubin's pioneering study of the rotation of spiral galaxies. Her work was the first to convincingly demonstrate the dominating presence of dark matter in our universe.",
          hdurl: "https://apod.nasa.gov/apod/image/2001/RubinsGalaxy_hst2000.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Rubin's Galaxy",
          url: "https://apod.nasa.gov/apod/image/2001/RubinsGalaxy_hst1024.jpg"
        }
      ],
      imageOfDay: {
        date: "2002-06-27",
        explanation: "Just as erosion from the Colorado River carved the Grand Canyon on Earth, a river of flood water may have carved Ma'adim Vallis, one of the largest canyons on Mars. Researchers have presented strong evidence for such a scenario based on elevation data recorded by the MOLA (Mars Orbiter Laser Altimeter) experiment on the Mars Global Surveyor spacecraft. This false-color, detailed, topographical map of MOLA data shows in blue the area of an enormous complex of lakes that are thought to have existed over three and a half billion years ago in the southern highlands of Mars. As the largest lake spilled over the low point in its boundary a torrential flood would have moved north, along the direction indicated by the arrow, carving the sinuous Ma'adim Vallis. At the north end of Ma'adim Vallis, the flood waters would have poured into large, round Gusev Crater. Since standing bodies of surface water are thought to be favorable for ancient martian microbial life, Gusev Crater has been suggested as a landing site for future Mars missions.",
        hdurl: "https://apod.nasa.gov/apod/image/0206/marslakes_topomap_big.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Carving Ma'adim Vallis",
        url: "https://apod.nasa.gov/apod/image/0206/marslakes_topomap_c.jpg"
      }
    }
  }
}

export default app;
