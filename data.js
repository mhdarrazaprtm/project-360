var APP_DATA = {
  "scenes": [
    {
      "id": "0-lapangan-basket",
      "name": "Lapangan Basket",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4287879936521044,
          "pitch": -0.11940243688645324,
          "rotation": 0,
          "target": "1-halaman-depan"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2072976644030007,
          "pitch": -0.11430113724765434,
          "title": "Gerbang Masuk",
          "text": "Gerbang Masuk ke Area Kampus, terdapat Pos Satpam juga 24 Jam"
        },
        {
          "yaw": 1.5974520672119485,
          "pitch": -0.6461661274572528,
          "title": "Kost-Kostan",
          "text": "Kost untuk m=Mahasiswa dan Mahasiswi Kampus"
        },
        {
          "yaw": 0.17949127746082638,
          "pitch": -0.14371216824116573,
          "title": "Gedung Tambahan",
          "text": "Gedung Tambahan Kampus, Saat Ini Sedang direnovasi"
        }
      ]
    },
    {
      "id": "1-halaman-depan",
      "name": "Halaman Depan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4079249999709944,
          "pitch": -0.11336876135165852,
          "rotation": 0,
          "target": "0-lapangan-basket"
        },
        {
          "yaw": -1.9426735372490178,
          "pitch": 0.11546086630309915,
          "rotation": 0,
          "target": "2-parkiran"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5995815299109637,
          "pitch": 0.026826935184157463,
          "title": "Lapangan",
          "text": "Biasanya digunakan Warga untuk Senam di Hari Tertentu, digunakan juga untuk Ibadah Sholat Eid, juga Digunakan Sebagai Parkiran"
        },
        {
          "yaw": -2.3335616536417376,
          "pitch": -0.34075568461632777,
          "title": "Gedung Utama",
          "text": "Gedung Utama Kampus, Pintu Masuk Utama terletak di Depan"
        }
      ]
    },
    {
      "id": "2-parkiran",
      "name": "Parkiran",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9052300690832062,
          "pitch": -0.22361481237167524,
          "rotation": 0,
          "target": "1-halaman-depan"
        },
        {
          "yaw": -2.4451562790348156,
          "pitch": -0.02828696932687791,
          "rotation": 0,
          "target": "3-halaman-belakang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4752595652746479,
          "pitch": -0.16484158049593134,
          "title": "Area Parkir Staff",
          "text": "Tempat Parkir Motor Staff Dosen dan Staff Akademik Kampus"
        },
        {
          "yaw": 0.6064000384599915,
          "pitch": -0.3293252234643198,
          "title": "Area Parkir Mahasiswa",
          "text": "Tempat Parkir Motor Mahasiswa Kampus"
        }
      ]
    },
    {
      "id": "3-halaman-belakang",
      "name": "Halaman Belakang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18873628704799827,
          "pitch": 0.051093255119887715,
          "rotation": 0,
          "target": "2-parkiran"
        },
        {
          "yaw": -2.421511437743007,
          "pitch": 0.01692178388858956,
          "rotation": 0,
          "target": "4-masjid-nurul-ilmi"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6002640875266891,
          "pitch": -0.12432288008500869,
          "title": "Pintu Masuk Belakang 1",
          "text": "Pintu Masuk Belakang Kampus"
        },
        {
          "yaw": 1.87995726019901,
          "pitch": -0.0681813147604764,
          "title": "Pintu Masuk Belakang 2",
          "text": "Pintu Masuk Belakang Kampus 2"
        },
        {
          "yaw": 1.216391560955909,
          "pitch": 0.13910967200672175,
          "title": "Kursi Istirahat",
          "text": "Tempat Duduk Mahasiswa"
        },
        {
          "yaw": -0.9280753530798389,
          "pitch": -0.2830459579379081,
          "title": "Pilar Masjid Nurul Ilmi",
          "text": "Pilar Bangunan menandakan Berdirinya Masjid"
        }
      ]
    },
    {
      "id": "4-masjid-nurul-ilmi",
      "name": "Masjid Nurul Ilmi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.17346153418307075,
          "pitch": 0.20878330083285945,
          "title": "Mimbar",
          "text": "Mimbar untuk Khatib Ceramah"
        },
        {
          "yaw": -0.4416382240875585,
          "pitch": 0.17144154789003707,
          "title": "Area Sholat Imam",
          "text": "Area Sholat Berjamaah untuk Imam"
        },
        {
          "yaw": -0.5507855464497045,
          "pitch": 0.7977578953555913,
          "title": "Area Sholat Makmum",
          "text": "Area Sholat Berjamaah untuk Pria"
        },
        {
          "yaw": 2.7272935244287293,
          "pitch": 0.381263422108427,
          "title": "Area Sholat Makmum",
          "text": "Area Sholat Berjamaah untuk Wanita"
        },
        {
          "yaw": -2.560524467735414,
          "pitch": 0.14044249058434133,
          "title": "Pintu Keluar",
          "text": "Pintu Keluar untuk ke Area Wudhu"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
