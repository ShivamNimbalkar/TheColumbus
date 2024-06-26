TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "cardboardMenu": {
   "selectedFontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "fontFamily": "Arial",
   "class": "Menu",
   "label": "Media",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "fontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "id": "Menu_695D67D8_6617_1612_41C1_833488C10011",
   "rollOverBackgroundColor": "#000000",
   "children": [
    {
     "class": "MenuItem",
     "label": "Space-Station_Columbus",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "Destiny-Lab",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "Harmony-Node",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "Kibo",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "Unity-Node",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "Zarya",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "Zvezda",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "Tranquility-Node",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    }
   ],
   "selectedBackgroundColor": "#202020"
  },
  "id": "panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Space-Station_Columbus",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8_t.jpg"
 },
 {
  "preloadEnabled": false,
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1400,
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
  "id": "panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Destiny-Lab",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1400,
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
  "id": "panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Harmony-Node",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
  "id": "panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Kibo",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
  "id": "panorama_6F35F280_6189_EA11_41CA_8A07685A7380",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_6F35F280_6189_EA11_41CA_8A07685A7380_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_6F35F280_6189_EA11_41CA_8A07685A7380.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6F35F280_6189_EA11_41CA_8A07685A7380_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Unity-Node",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6F35F280_6189_EA11_41CA_8A07685A7380_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6F35F280_6189_EA11_41CA_8A07685A7380_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
  "id": "panorama_71AF2517_6189_EE30_41BA_473EFD65570D",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_71AF2517_6189_EE30_41BA_473EFD65570D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_71AF2517_6189_EE30_41BA_473EFD65570D.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_71AF2517_6189_EE30_41BA_473EFD65570D_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Zarya",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_71AF2517_6189_EE30_41BA_473EFD65570D_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_71AF2517_6189_EE30_41BA_473EFD65570D_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
  "id": "panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519",
  "audios": [
   {
    "data": {
     "label": "Waves of Orta"
    },
    "autoplay": true,
    "id": "audio_710FC2B9_6189_2A70_41C9_6608578A3A33",
    "audio": {
     "mp3Url": "media/audio_710FC2B9_6189_2A70_41C9_6608578A3A33.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_710FC2B9_6189_2A70_41C9_6608578A3A33.ogg"
    },
    "class": "PanoramaAudio"
   }
  ],
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Zvezda",
  "thumbnailUrl": "media/panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
  "id": "panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63_t.jpg"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Tranquility-Node",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1400,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_6F35F280_6189_EA11_41CA_8A07685A7380",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6F35F280_6189_EA11_41CA_8A07685A7380_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_71AF2517_6189_EE30_41BA_473EFD65570D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_71AF2517_6189_EE30_41BA_473EFD65570D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_6B20F80C_6199_2610_41D6_A6395275E497",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 0, 1)",
    "media": "this.panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6F6F093A_6189_2671_41C5_6D6D55706EC8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 1, 2)",
    "media": "this.panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6C08660B_6189_6A10_41B6_FAD59A0FE757_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 2, 3)",
    "media": "this.panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_71E5A5E9_6189_2E10_419F_97CC79E44FCC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 3, 4)",
    "media": "this.panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E89F46F_6189_2E10_41D8_5C4547904CBD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 4, 5)",
    "media": "this.panorama_6F35F280_6189_EA11_41CA_8A07685A7380",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6F35F280_6189_EA11_41CA_8A07685A7380_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 5, 6)",
    "media": "this.panorama_71AF2517_6189_EE30_41BA_473EFD65570D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_71AF2517_6189_EE30_41BA_473EFD65570D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 6, 7)",
    "media": "this.panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6F08E7E4_6189_2A10_41A5_2FCA29987519_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6B20F80C_6199_2610_41D6_A6395275E497, 7, 0)",
    "media": "this.panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6CB9E9EE_6189_2610_4180_39D2E54C9F63_camera"
   }
  ]
 },
 "this.Menu_695D67D8_6617_1612_41C1_833488C10011",
 "this.audio_710FC2B9_6189_2A70_41C9_6608578A3A33",
 {
  "data": {
   "label": "Waves of Orta"
  },
  "autoplay": true,
  "id": "audio_6928ADF5_661B_3A1D_41BA_248324A00C6A",
  "audio": {
   "mp3Url": "media/audio_6928ADF5_661B_3A1D_41BA_248324A00C6A.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_6928ADF5_661B_3A1D_41BA_248324A00C6A.ogg"
  },
  "class": "MediaAudio"
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 0,
  "borderRadius": 0,
  "class": "ViewerArea",
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "minHeight": 50,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressBottom": 0,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "bottom": "0.27%",
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": 0,
  "progressBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "progressRight": 0,
  "toolTipBorderColor": "#767676"
 },
 {
  "children": [
   {
    "verticalAlign": "top",
    "minWidth": 0,
    "backgroundColorDirection": "vertical",
    "borderRadius": 5,
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 5,
    "paddingRight": 20,
    "backgroundColorRatios": [
     0
    ],
    "paddingLeft": 20,
    "itemThumbnailShadowBlurRadius": 4,
    "itemLabelFontFamily": "Arial",
    "backgroundColor": [
     "#000000"
    ],
    "gap": 10,
    "itemPaddingRight": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemBackgroundColorDirection": "vertical",
    "paddingTop": 10,
    "class": "ThumbnailList",
    "maxWidth": 800,
    "scrollBarWidth": 10,
    "itemLabelFontColor": "#FFFFFF",
    "horizontalAlign": "left",
    "itemThumbnailShadowColor": "#000000",
    "shadow": false,
    "itemMode": "normal",
    "itemLabelPosition": "bottom",
    "itemVerticalAlign": "middle",
    "scrollBarMargin": 2,
    "itemThumbnailBorderRadius": 5,
    "itemHorizontalAlign": "center",
    "itemThumbnailShadowOpacity": 0.8,
    "layout": "horizontal",
    "itemThumbnailShadow": true,
    "maxHeight": 600,
    "itemLabelTextDecoration": "none",
    "itemBorderRadius": 0,
    "itemThumbnailShadowVerticalLength": 3,
    "itemOpacity": 1,
    "itemThumbnailShadowHorizontalLength": 3,
    "backgroundOpacity": 0.2,
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "minHeight": 0,
    "itemThumbnailShadowSpread": 1,
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailWidth": 100,
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "itemPaddingLeft": 3,
    "paddingBottom": 10,
    "itemLabelFontStyle": "normal",
    "playList": "this.playList_6B20F80C_6199_2610_41D6_A6395275E497",
    "data": {
     "name": "ThumbnailList738"
    },
    "scrollBarOpacity": 0.5,
    "itemPaddingBottom": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "itemBackgroundColorRatios": []
   }
  ],
  "minWidth": 20,
  "verticalAlign": "bottom",
  "borderRadius": 0,
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "paddingLeft": 0,
  "height": 200,
  "paddingTop": 0,
  "gap": 10,
  "class": "Container",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "bottom": 0,
  "data": {
   "name": "Container737"
  },
  "backgroundOpacity": 0,
  "minHeight": 20,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "creationPolicy": "delayed",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "visible"
 },
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "class": "ViewerArea",
  "shadow": false,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "borderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "minHeight": 1,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "minWidth": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "40%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontColor": "#606060",
  "height": "30%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressBottom": 2,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": "0%",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "id": "MapViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": "0%",
  "progressBarBorderSize": 0,
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "progressRight": 0,
  "toolTipBorderColor": "#767676"
 },
 {
  "children": [
   {
    "minWidth": 1,
    "borderRadius": 0,
    "scrollBarColor": "#000000",
    "paddingRight": 20,
    "paddingLeft": 20,
    "width": "89.352%",
    "paddingTop": 20,
    "class": "HTMLText",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "height": "87.4%",
    "shadow": false,
    "scrollBarMargin": 2,
    "top": "3.35%",
    "id": "HTMLText_68F56D7C_65F9_3A12_41BF_076BC6BD5CC2",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>COLUMBUS</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Space Station</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The Columbus Laboratory Module is a cylindrical research facility on the International Space Station (ISS) that treats and purifies air of carbon dioxide. The European Space Agency (ESA) attached the module to the ISS's Harmony module on February 18, 2008, using the space shuttle Atlantis. Visit <SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://en.wikipedia.org/wiki/Columbus_(ISS_module)\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>https://en.wikipedia.org/wiki/Columbus</U></A></SPAN> For More Info</SPAN></DIV></div>",
    "data": {
     "name": "HTMLText53815"
    },
    "backgroundOpacity": 0,
    "minHeight": 1,
    "left": "4.4%",
    "paddingBottom": 20,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   },
   {
    "minWidth": 1,
    "iconURL": "skin/IconButton_6B4255D0_660B_6A12_41BC_507269452650.png",
    "verticalAlign": "middle",
    "borderRadius": 0,
    "mode": "push",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": 48.05,
    "width": 49.6,
    "paddingTop": 0,
    "class": "IconButton",
    "maxWidth": 360,
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_693C6F5B_65F8_F616_41CD_8EA861ED340E, false, 0, null, null, false)",
    "horizontalAlign": "center",
    "shadow": false,
    "top": "-0.03%",
    "cursor": "hand",
    "id": "IconButton_6B4255D0_660B_6A12_41BC_507269452650",
    "data": {
     "name": "IconButton5334"
    },
    "backgroundOpacity": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "maxHeight": 360,
    "transparencyActive": false,
    "right": "0%"
   }
  ],
  "minWidth": 1,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "width": "45.526%",
  "paddingTop": 0,
  "gap": 10,
  "class": "Container",
  "scrollBarWidth": 10,
  "height": "25.914%",
  "horizontalAlign": "left",
  "shadow": false,
  "borderSize": 0,
  "scrollBarMargin": 2,
  "top": "7.1%",
  "layout": "absolute",
  "id": "Container_693C6F5B_65F8_F616_41CD_8EA861ED340E",
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "data": {
   "name": "TextBoxContainer"
  },
  "minHeight": 1,
  "paddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "creationPolicy": "delayed",
  "scrollBarVisible": "rollOver",
  "right": "1.41%",
  "overflow": "scroll"
 }
], 
 "minWidth": 20,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingTop": 0,
 "gap": 10,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "vrPolyfillScale": 1,
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } }
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "id": "rootPlayer",
 "data": {
  "name": "Player735"
 },
 "desktopMipmappingEnabled": true,
 "minHeight": 20,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "start": "this.syncPlaylists([this.playList_6B20F80C_6199_2610_41D6_A6395275E497,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playAudioList([this.audio_6928ADF5_661B_3A1D_41BA_248324A00C6A])",
 "creationPolicy": "delayed",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "overflow": "visible"
})