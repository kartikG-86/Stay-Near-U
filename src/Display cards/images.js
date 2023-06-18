const images = [
  {
    uniqueId: "1",
    bedroom:
      "https://media.istockphoto.com/id/1256466090/photo/modern-style-bedroom.jpg?s=612x612&w=0&k=20&c=0cU36zFlTfzGuWYu6SILY8aVk1V0JfLx0xKBBCsDSjo=",
    bathroom:
      "https://media.istockphoto.com/id/1126483599/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=32dvqH66YxT4bLJB0sqmJKKo7BhwiYMsTAORToJczCw=",
  },
  {
    uniqueId: "2",
    bedroom:
      "https://media.istockphoto.com/id/1060893930/photo/urban-jungle-in-bedroom-with-double-bed-lamp-and-carpet-real-photo-with-copy-space-one-the.jpg?s=612x612&w=0&k=20&c=yjunw3w8UbNN262lyB0szyEMg3z75aw5sDK-VjbyH5I=",
    bathroom:
      "https://media.istockphoto.com/id/1391943025/photo/dark-grey-bathroom-with-white-bathtub-and-two-sinks-with-square-mirrors-and-shower-area.jpg?s=612x612&w=0&k=20&c=_s182gWLZJ75xfJnM68Tmcu6RPfWoh4mlJ6z56xT9v8=",
  },
  {
    uniqueId: "3",
    bedroom:
      "https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?s=612x612&w=0&k=20&c=yxOoaz2IAd9zvtlXeS-Th-AiXhaCtMIxOONfGbtGeG8=",
    bathroom:
      "https://media.istockphoto.com/id/183857395/photo/luxury-bathroom-spa.jpg?s=612x612&w=0&k=20&c=2okI9tWw_c48N2vZrFcHxoU13u4mTotWruN3680IWXw=",
  },
  {
    uniqueId: "4",
    bedroom:
      "https://media.istockphoto.com/id/1357529828/photo/3d-rendering-of-an-elegant-bedroom-interior.jpg?s=612x612&w=0&k=20&c=YhHHNDhR8EIXn85FQnTNI31zPN_chiJWlfPIWklmffY=",
    bathroom:
      "https://media.istockphoto.com/id/473791162/photo/interior-of-bathroom-in-cool-tone.jpg?s=612x612&w=0&k=20&c=2xBYp0jq2480jbpCTPX_PSDXukYeLc0qQPnAZ6jxAMg=",
  },
  {
    uniqueId: "5",
    bedroom:
      "https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=",
    bathroom:
      "https://media.istockphoto.com/id/1172894166/photo/luxury-bathroom-with-black-marble-floor-and-white-marble-wall-3d-render.jpg?s=612x612&w=0&k=20&c=atPIaukTv8IFY8LRO-vLJ0W0-3NIuCtUdbfaNA3OlIA=",
  },
  {
    uniqueId: "6",
    bedroom:
      "https://media.istockphoto.com/id/1266155634/photo/luxurious-and-elegant-bedroom-interiors.jpg?s=612x612&w=0&k=20&c=5O3Lz-WyJv7GYh09rvf66nif1dUsibl01wrt9KrZaSs=",
    bathroom:
      "https://media.istockphoto.com/id/1302217420/photo/private-apartment-bathroom-interior.jpg?s=612x612&w=0&k=20&c=DpBV19YGLQCwTolTU3zYdmrf_lwHNISk1gEnekUya_8=",
  },
  {
    uniqueId: "7",
    bedroom:
      "https://media.istockphoto.com/id/957633616/photo/bedroom-in-a-minimalist-style.jpg?s=612x612&w=0&k=20&c=WfsKY4mxOFxSkBVWdo31wpcgOx3lu_KmKleGYInatLY=",
    bathroom:
      "https://media.istockphoto.com/id/1302217420/photo/private-apartment-bathroom-interior.jpg?s=612x612&w=0&k=20&c=DpBV19YGLQCwTolTU3zYdmrf_lwHNISk1gEnekUya_8=",
  },
  {
    uniqueId: "8",
    bedroom:
      "https://media.istockphoto.com/id/1191685303/photo/stylish-bedroom-interior-in-trendy-blue.jpg?s=612x612&w=0&k=20&c=mYOgUHAZoHQFpngkDNXExg9bLrEENlu7FrIv_EcQ7b4=",
    bathroom:
      "https://media.istockphoto.com/id/1063766860/photo/bathroom-interior-design-with-blue-towels-and-empty-wooden-floor.jpg?s=612x612&w=0&k=20&c=4Sckj6GriekxJchHcib9yhJL6OcNTKvWbKjH_ya1vgs=",
  },
  {
    uniqueId: "9",
    bedroom:
      "https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=",
    bathroom:
      "https://media.istockphoto.com/id/1297771529/photo/interior-design-architecture-computer-generated-image-of-bathroom-architectural-visualization.jpg?s=612x612&w=0&k=20&c=-M-69KDErUD5-jqfUUbgS4PHGxWE4yQ1JPaW3KiSdgs=",
  },
  {
    uniqueId: "10",
    bedroom:
      "https://media.istockphoto.com/id/1194686012/photo/bedroom-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=X6Ymu7p4GM7X_Su11DAZ_3WT8McL4xchV7ZLv6IMsM4=",
    bathroom:
      "https://media.istockphoto.com/id/826062300/photo/modern-contemporary-bathroom-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=ZudHhkployxSaUyBe_f-C-dWBT-ubHx8W2kNGSwAds4=",
  },
  {
    uniqueId: "11",
    bedroom:
      "https://media.istockphoto.com/id/1008574426/photo/scandi-boho-style-bedroom.jpg?s=612x612&w=0&k=20&c=nXRuG3YsTGNAfhmsyJP7aUJXTs_4DD5-kG4v5rGcJMI=",
    bathroom:
      "https://media.istockphoto.com/id/1053758452/photo/luxury-white-bathroom-3d-render.jpg?s=612x612&w=0&k=20&c=VkFKMZRaSzZpstJeg9E7GubTwGqZDkrtel7uSy2CqLg=",
  },
  {
    uniqueId: "12",
    bedroom:
      "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=",
    bathroom:
      "https://media.istockphoto.com/id/1414733249/photo/blank-white-table-top-for-copy-space-3d-render.jpg?s=612x612&w=0&k=20&c=p-2ZhUa9o8EKGCeFHRMdlR7s8NPjc6PdYxxkV1j2P7A=",
  },
  {
    uniqueId: "13",
    bedroom:
      "https://media.istockphoto.com/id/1303467304/photo/white-and-wooden-master-bedroom-corner.jpg?s=612x612&w=0&k=20&c=x36dZ0q5hSCzYDCrxVf7Zv7QyTMa3orhV7SERzJmE-M=",
    bathroom:
      "https://media.istockphoto.com/id/1073403366/photo/luxurious-minimalist-bathroom-with-slate-black-stone-wall.jpg?s=612x612&w=0&k=20&c=NpgscoGvIlNPyq9ylUWHTaUdC3YXu4hKcT52aCUeNZE=",
  },
  {
    uniqueId: "14",
    bedroom:
      "https://media.istockphoto.com/id/1303674434/photo/modern-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=IXXph9AqWrPH-5RAUMdrcFhuvMc8SqrFDoJfpL1-W0I=",
    bathroom:
      "https://media.istockphoto.com/id/1255173233/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=euRNCzOpUot9wP8zilW6fIrbpA2ksuzU2QbOsTR0oTg=",
  },
  {
    uniqueId: "15",
    bedroom:
      "https://media.istockphoto.com/id/1031419070/photo/an-elegant-appartment-real-photo-for-woman.jpg?s=612x612&w=0&k=20&c=3OZUVqKsNEuObez2nW_ESNoYUkv_pJ1-iqoqdj_tadE=",
    bathroom:
      "https://media.istockphoto.com/id/187222933/photo/white-bathroom.jpg?s=612x612&w=0&k=20&c=QQ0qJmcuHtriJT8Rj-9YPHbZkkVHMrcvNBOoLIq8V-A=",
  },
  {
    uniqueId: "16",
    bedroom:
      "https://media.istockphoto.com/id/1303467304/photo/white-and-wooden-master-bedroom-corner.jpg?s=612x612&w=0&k=20&c=x36dZ0q5hSCzYDCrxVf7Zv7QyTMa3orhV7SERzJmE-M=",
    bathroom:
      "https://media.istockphoto.com/id/1125656584/photo/modern-bathroom-interior.jpg?s=612x612&w=0&k=20&c=q1lyQTOcJl0elXL0kZ1MFbLgSZyNx2aeash0VsaaL6Y=",
  },
  {
    uniqueId: "17",
    bedroom:
      "https://media.istockphoto.com/id/1303674434/photo/modern-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=IXXph9AqWrPH-5RAUMdrcFhuvMc8SqrFDoJfpL1-W0I=",
    bathroom:
      "https://media.istockphoto.com/id/587815244/photo/3d-rendering-modern-loft-toilet-and-shower-with-wood-floor.jpg?s=612x612&w=0&k=20&c=JP1j32X9qrC5xCehoIJh7KdOCvhbXc6sqj_HPxWyUkM=",
  },

  {
    uniqueId: "18",
    bedroom:
      "https://media.istockphoto.com/id/1031419070/photo/an-elegant-appartment-real-photo-for-woman.jpg?s=612x612&w=0&k=20&c=3OZUVqKsNEuObez2nW_ESNoYUkv_pJ1-iqoqdj_tadE=",
    bathroom: "",
  },
  {
    uniqueId: "19",
    bedroom:
      "https://media.istockphoto.com/id/1082907946/photo/brown-and-orange-pillows-on-white-bed-in-natural-bedroom-interior-with-wicker-lamp-and-wooden.jpg?s=612x612&w=0&k=20&c=sw85EQJBPisYli3IaKh84ZKLjttL05jlPLKs9211zno=",
    bathroom:
      "https://media.istockphoto.com/id/1357529683/photo/computer-generated-image-of-bathroom-interior.jpg?s=612x612&w=0&k=20&c=GxtU6A9oprTtNcNCb2VEf9QjD298ayue_Kp-IQ4g2BY=",
  },
  {
    uniqueId: "20",
    bedroom:
      "https://media.istockphoto.com/id/1355535668/photo/scandinavian-bedroom-in-a-luxurious-cottage-house.jpg?s=612x612&w=0&k=20&c=4Y_sypzQntmCSKA52USGRsvH7QdLeL_0hszRhGFJjoY=",
    bathroom:
      "https://media.istockphoto.com/id/638082086/photo/3d-rendering-luxury-and-modern-style-wood-bathroom-near-window.jpg?s=612x612&w=0&k=20&c=C90RCMZreZd65GpAhM_tQmeJR3H1gVFohbMYv-G8MDs=",
  },
  {
    uniqueId: "21",
    bedroom:
      "https://media.istockphoto.com/id/1188452511/photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants.jpg?s=612x612&w=0&k=20&c=yK0GV6EuqXc09xBFMcNdd7ZjFephsGgSTjPBsvvv630=",
    bathroom:
      "https://media.istockphoto.com/id/1071647270/photo/minimal-style-white-bathroom-3d-render.jpg?s=612x612&w=0&k=20&c=_aXVJ9yq5dG2ENYQLa4YFmTOXytqCQtruB0L8ivQxhM=",
  },
  {
    uniqueId: "22",
    bedroom:
      "https://media.istockphoto.com/id/1284744586/photo/coastal-bedroom-interior-mockup-3d-render.jpg?s=612x612&w=0&k=20&c=WU-hnYGzAONyFSW_ZQKmTUktTf9nNYOXzCgqXN0pRTM=",
    bathroom:
      "https://media.istockphoto.com/id/1414953085/photo/modern-bathroom-interior-with-hot-tub.jpg?s=612x612&w=0&k=20&c=UjchFRynq2u9Wpsj4MLKp4wbDo_bHKdcKJqk11jGx5s=",
  },
  {
    uniqueId: "23",
    bedroom:
      "https://media.istockphoto.com/id/960624166/photo/spacious-furnished-bedroom-interior.jpg?s=612x612&w=0&k=20&c=3lknHVTv3RTsGMhN1oXHDMeClArLIm3dGkyg3f9K2YU=",
    bathroom:
      "https://media.istockphoto.com/id/1181472050/photo/elegant-attic-bathroom-with-bathtub.jpg?s=612x612&w=0&k=20&c=jYY_u4B-GPbk8BIH7iHYUrZUIPNmrpGXvc01YBrAolA=",
  },
  {
    uniqueId: "24",
    bedroom:
      "https://media.istockphoto.com/id/1299098384/photo/modern-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=2CBxhnIY7G6M5sHoYAwmNMvR3ft210JkY9cVSUQ7Rh8=",
    bathroom:
      "https://media.istockphoto.com/id/174494870/photo/interior-of-green-bathroom.jpg?s=612x612&w=0&k=20&c=JHtoC_hcSkhfTKNBIBXbfFzSvXHvtJ9twDcqnD-x6Bw=",
  },
  {
    uniqueId: "25",
    bedroom:
      "https://media.istockphoto.com/id/1222623857/photo/master-bedroom-in-new-luxury-home-with-chandelier-and-view-of-bathroom.jpg?s=612x612&w=0&k=20&c=ppfn49Pb99UFYjIxZ1bBlPs8s-XyUgpp_Lqh6g0RE4g=",
    bathroom:
      "https://media.istockphoto.com/id/1452562276/photo/a-farmhouse-bathroom-with-a-wood-cabinet-and-subway-tile-shower.jpg?s=612x612&w=0&k=20&c=Lp_-mxtu1ARc_QvP8RYjf7WZ7c8VueiyFTr-_htU2pM=",
  },

  {
    uniqueId: "26",
    bedroom:
      "https://media.istockphoto.com/id/1222623857/photo/master-bedroom-in-new-luxury-home-with-chandelier-and-view-of-bathroom.jpg?s=612x612&w=0&k=20&c=ppfn49Pb99UFYjIxZ1bBlPs8s-XyUgpp_Lqh6g0RE4g=",
    bathroom:
      "https://media.istockphoto.com/id/1176677912/photo/modern-bathroom-interior.jpg?s=612x612&w=0&k=20&c=swZsIQ4SLWoiTatc8tRmcZd_ndVhoXf2vAxYjYzRwCE=",
  },
  {
    uniqueId: "27",
    bedroom:
      "https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=",
    bathroom:
      "https://media.istockphoto.com/id/1334119015/photo/interior-of-a-luxurious-bathroom-with-shower-area-and-bathtub.jpg?s=612x612&w=0&k=20&c=V5vjZvqWevcmB9pNUYmgaf_vc-dS2wQSMCKvjDVVmSA=",
  },
  {
    uniqueId: "28",
    bedroom:
      "https://media.istockphoto.com/id/677106872/photo/spacious-interior-of-designer-master-bedroom-in-luxury-australian-home.jpg?s=612x612&w=0&k=20&c=AxPe6xiw56T1q9BHHc4oY6zDrYA3Gk2E1Ywj6ZQ8zr0=",
    bathroom:
      "https://media.istockphoto.com/id/1450445015/photo/a-bathroom-with-a-blue-cabinet-bathtub-and-tiled-shower.jpg?s=612x612&w=0&k=20&c=FBaQ5-zozaEAEVbdQehfO8yPsHzBJLLVET8hu9oqdVo=",
  },
  {
    uniqueId: "29",
    bedroom:
      "https://media.istockphoto.com/id/1051324642/photo/modern-bedroom-interior-with-blank-wall-for-copy-space.jpg?s=612x612&w=0&k=20&c=lQDxM7WNJwzH5bPHvIA5o8t_buL9NFFZxZXc_rqzBMs=",
    bathroom:
      "https://media.istockphoto.com/id/1186344255/photo/3d-rendering-modern-bathroom-with-luxury-tile-decor.jpg?s=612x612&w=0&k=20&c=ZdfnI2ieBeiKAVk7yQyDUlXb6BZsF4gl7u1J4RAbXjw=",
  },
  {
    uniqueId: "30",
    bedroom:
      "https://media.istockphoto.com/id/1189919856/photo/looks-inviting-doesnt-it.jpg?s=612x612&w=0&k=20&c=YHciGVCx_C9AR3x1fSLvmAqGHb9-vN8HWLVJt6C5y64=",
    bathroom:
      "https://media.istockphoto.com/id/1408740166/photo/contemporary-bathroom-design-with-freestanding-bathtub-and-shower-stall.jpg?s=612x612&w=0&k=20&c=lyW-AAq_Y7cNAwGrLEWMkzt0NKum75AVGG_Bd3ynwfA=",
  },
  {
    uniqueId: "31",
    bedroom:
      "https://media.istockphoto.com/id/940142926/photo/green-elegant-bedroom-interior.jpg?s=612x612&w=0&k=20&c=Wl-50UcoXD2WU1EYd4R7HXGZ_JW6hfTutL6iPOjhSh0=",
    bathroom: "",
  },
  {
    uniqueId: "32",
    bedroom:
      "https://media.istockphoto.com/id/1266344101/photo/digitally-generated-domestic-bedroom-interior.jpg?s=612x612&w=0&k=20&c=kbkiRlnTtfg1XjJqLKfntMNwyywgw5MfZi0CysIsZeI=",
    bathroom:
      "https://media.istockphoto.com/id/1158574749/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=uFgkC7dkhEcAt4fp0Z2yrgxlib0sHg2mfgIctwtq-9s=",
  },
  {
    uniqueId: "33",
    bedroom:
      "https://media.istockphoto.com/id/1289389505/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=uzEo9jWPH--NFeR1uZlFqYYQ5XE8vvtB5SQf1GDRf40=",
    bathroom:
      "https://media.istockphoto.com/id/486566054/photo/bathroom-with-fancy-shower.jpg?s=612x612&w=0&k=20&c=dZbRySDFF_CYrvGTam-h5S_ZvnZaX64PY9ibtly0VqI=",
  },
  {
    uniqueId: "34",
    bedroom:
      "https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0=",
    bathroom:
      "https://media.istockphoto.com/id/1168780480/photo/luxury-white-bathroom-in-modern-house.jpg?s=612x612&w=0&k=20&c=A_Gu4HzVzrgKtyUTaNvjBPSTSSzONFiThqUDDXmlv_E=",
  },
  {
    uniqueId: "35",
    bedroom:
      "https://media.istockphoto.com/id/1037673332/photo/bedroom-interior-for-mockup-3d-rendering.jpg?s=612x612&w=0&k=20&c=hpv9aHHURLNHXF4RI4NqJDpV2_GdZVmYcVrXvYnoCg8=",
    bathroom:
      "https://media.istockphoto.com/id/1380717443/photo/dark-blue-modern-luxury-bathroom.jpg?s=612x612&w=0&k=20&c=lNkSjjaHRV0qB1M0P23EXPC0owGBvqf7RoAU36mmo3Q=",
  },
  {
    uniqueId: "36",
    bedroom:
      "https://media.istockphoto.com/id/1269203377/photo/home-interior-mock-up-background-dark-green-bedroom-with-potted-palm.jpg?s=612x612&w=0&k=20&c=Krtvr0QwkFr3Bsz_9hPHyu2to2OV5H6xMOFtZkmwRgQ=",
    bathroom:
      "https://media.istockphoto.com/id/1332854650/photo/a-modern-bathroom-in-blue-tones-with-gold-fittings-a-bathrobe-next-to-the-shower-a-round.jpg?s=612x612&w=0&k=20&c=ce7Y69oiWO2h4mP-I-p77_gFQvhqDITTrTzJMLAVtI0=",
  },
  {
    uniqueId: "37",
    bedroom:
      "https://media.istockphoto.com/id/673826102/photo/modern-light-gray-bedroom-interior.jpg?s=612x612&w=0&k=20&c=ljew8zRtuGf1IjgZEHJT7rPxD4UB4MWMECa9FarxyAk=",
    bathroom:
      "https://media.istockphoto.com/id/1284025718/photo/contemporary-interior-of-a-luxury-bathroom.jpg?s=612x612&w=0&k=20&c=Oj6ur8tv6pEbaB8GNbblnLM7FAh3TAbj46rZkMqIWO4=",
  },
  {
    uniqueId: "38",
    bedroom:
      "https://media.istockphoto.com/id/1316508856/photo/3d-rendering-of-small-bedroom.jpg?s=612x612&w=0&k=20&c=m5EwV-f_vQMPNaTwxlkkwkkzI3bNTaU10TUZ_v-De7k=",
    bathroom:
      "https://media.istockphoto.com/id/1405855534/photo/modern-bathroom-with-rusty-tiles.jpg?s=612x612&w=0&k=20&c=LUbARFnNB80nqkRs1ijxNRvRJWg2x_Rm3PrsSBjeqeQ=",
  },
  {
    uniqueId: "39",
    bedroom:
      "https://media.istockphoto.com/id/1137518423/photo/minimal-bedroom-with-gray-wall-3d-render.jpg?s=612x612&w=0&k=20&c=9Mx5OhaJdMRv0txLCseCyFYaxCrbAuJsP3Gj0xHUuWs=",
    bathroom:
      "https://media.istockphoto.com/id/1405791841/photo/stylish-white-tub-and-green-houseplants-in-bathroom-interior-design.jpg?s=612x612&w=0&k=20&c=hSZhyvuHgwRET_Eg5iHrQqdZbDo4KrY4eb8O-qDL3Kk=",
  },
  {
    uniqueId: "40",
    bedroom:
      "https://media.istockphoto.com/id/1287759233/photo/bedroom-interior-with-green-blanket-on-the-bed-pendant-lights-parquet-floor-and-gray-color.jpg?s=612x612&w=0&k=20&c=FA5D-vWQgHf4aJXLhn7zkn4FDWxMeQDqDUJeJqMziss=",
    bathroom:
      "https://media.istockphoto.com/id/1404266465/photo/modern-luxury-bathroom-interior.jpg?s=612x612&w=0&k=20&c=4ZI3-BHT5c4uxX_df_-Fpu-iMKdPAzVaBkd0oYLLT7Q=",
  },
  {
    uniqueId: "41",
    bedroom:
      "https://media.istockphoto.com/id/1247979811/photo/nomadic-style-bedroom-interior-background.jpg?s=612x612&w=0&k=20&c=HOPIXF-WzwPeVnOCnLN6dQ1gUjc8K5QXqdUnYVxjjWE=",
    bathroom:
      "https://media.istockphoto.com/id/1152076563/photo/luxurious-bathroom.jpg?s=612x612&w=0&k=20&c=MQivd61YQOs2EprqgoBWIrP_Xw8qEmjhqI1xR0EjLhQ=",
  },
  {
    uniqueId: "42",
    bedroom:
      "https://media.istockphoto.com/id/1389577952/photo/3d-render-modern-bedroom-interior.jpg?s=612x612&w=0&k=20&c=gdjeuJsbsjttM1NZ7ZYpr7ClvmfHX1WcTukfjVkzXvo=",
    bathroom:
      "https://media.istockphoto.com/id/1434126129/photo/modern-bathroom-with-washing-machine-dryer-white-cabinets-and-drying-rack.jpg?s=612x612&w=0&k=20&c=qv2V2_x5ZxSARE0KQnvFzpMmyHuSHSwwC5bTaX102zk=",
  },

  {
    uniqueId: "43",
    bedroom:
      "https://media.istockphoto.com/id/1058365040/photo/beige-blanket-on-the-double-bed-in-stylish-wabi-sabi-bedroom-of-minimal-style-house-real.jpg?s=612x612&w=0&k=20&c=WQ8jttsKJ0nVHcGz0ItosMNzh5Aai8kmCRWxNxblZ-8=",
    bathroom:
      "https://media.istockphoto.com/id/1084656062/photo/interior-of-a-hotel-bathroom.jpg?s=612x612&w=0&k=20&c=rZxxHZ_QxV4SZtNwi1izI1jKLckdS9Uz0LZc_M41_OE=",
  },
  {
    uniqueId: "44",
    bedroom:
      "https://media.istockphoto.com/id/1058365040/photo/beige-blanket-on-the-double-bed-in-stylish-wabi-sabi-bedroom-of-minimal-style-house-real.jpg?s=612x612&w=0&k=20&c=WQ8jttsKJ0nVHcGz0ItosMNzh5Aai8kmCRWxNxblZ-8=",
    bathroom:
      "https://media.istockphoto.com/id/1453223696/photo/a-bathroom-with-a-grey-cabinet-and-tiled-shower.jpg?s=612x612&w=0&k=20&c=bZHjhi1JxANes4jFLOm1maxJYNmMnZmZG0NXP1p_v3I=",
  },
  {
    uniqueId: "45",
    bedroom:
      "https://media.istockphoto.com/id/524823701/photo/white-luxury-bedroom-interior.jpg?s=612x612&w=0&k=20&c=1XazcqFO0xzqc4qOo-53Fc-TTUYVEfdFTxf0SFEYGco=",
    bathroom:
      "https://media.istockphoto.com/id/950319064/photo/new-blue-bathroom-design-with-marble-shower-surround.jpg?s=612x612&w=0&k=20&c=ZRywga_zomntmPcuoxYKfaK5gaISpaRpsXdoDjvx_aA=",
  },
  {
    uniqueId: "46",
    bedroom:
      "https://media.istockphoto.com/id/886445288/photo/vintage-modern-interior-of-bed-room-wood-bed-with-wall-lamp-on-parguet-flooring-and-dark-blue.jpg?s=612x612&w=0&k=20&c=0ms7qFxDKjLgLgjTXKbsEASYVamo-zy8f39HixLS6WU=",
    bathroom:
      "https://media.istockphoto.com/id/1357529600/photo/interior-of-a-luxurious-bathroom-with-shower-area-and-bathtub-in-3d.jpg?s=612x612&w=0&k=20&c=b2yo58XaOt4L3DJMs7j92YuLrRr49FLeUsHiCk5RhxQ=",
  },
  {
    uniqueId: "47",
    bedroom:
      "https://media.istockphoto.com/id/1136552117/photo/modern-loft-bedroom-with-black-wood-plank-3d-render.jpg?s=612x612&w=0&k=20&c=FRhrvaCSAtja73t-YmwPQDcazq_cCZBfAnLfAHMVFa0=",
    bathroom:
      "https://media.istockphoto.com/id/626538158/photo/interior-of-modern-bathroom.jpg?s=612x612&w=0&k=20&c=eroToQVnAWzYo1ceWgGm-U15iGQIr5C9M5csRcqOZ7w=",
  },
  {
    uniqueId: "48",
    bedroom:
      "https://media.istockphoto.com/id/1326087360/photo/mockup-frame-in-luxury-hampton-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=8WuvmY0LRnFYGPiTXtK2SxNp0y3yLQfYzfFfM6-jSJg=",
    bathroom:
      "https://media.istockphoto.com/id/1178594188/photo/modern-interior-of-new-bathroom-in-house.jpg?s=612x612&w=0&k=20&c=7HSDLVtpwO8jbIjrvVmy8_Kxa_n88sM6ir92FdorO1o=",
  },

  {
    uniqueId: "49",
    bedroom:
      "https://media.istockphoto.com/id/1267058805/photo/wooden-panels-wall-in-luxurious-apartment-master-bedroom-interior.jpg?s=612x612&w=0&k=20&c=EQgqUITDSkY6aXS3D-ZxOcxVVHNgr-0lMrb08_4l7f0=",
    bathroom:
      "https://media.istockphoto.com/id/176864782/photo/a-tiled-bathroom-with-a-wood-counter-and-orange-towels.jpg?s=612x612&w=0&k=20&c=cBTUjNFwLUU4gWew6V13EM-PGLsyh6Lv5Mj5Xk-9_cQ=",
  },
  {
    uniqueId: "50",
    bedroom:
      "https://media.istockphoto.com/id/1160134403/photo/white-modern-lamp-in-cozy-bedroom-in-bedroom-interior.jpg?s=612x612&w=0&k=20&c=Q-JOfAd5hMgTz0AhAtwjj_BGn5lOKadojeZNa5RntHg=",
    bathroom:
      "https://media.istockphoto.com/id/1133604763/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=U4P402afSB_Q9ZTCx-3Q0o9EJinN0uWrGkoTMMwSONI=",
  },
  {
    uniqueId: "51",
    bedroom:
      "https://media.istockphoto.com/id/961902684/photo/comfortable-big-wooden-framed-bed-with-linen-pillows-and-blanket-nightstand-beside-and-round.jpg?s=612x612&w=0&k=20&c=kusSooDPN3BWVFXEWLr3qWVBckDhizpRXL5DMvp7utQ=",
    bathroom:
      "https://media.istockphoto.com/id/1330856760/photo/modern-bathroom-interior.jpg?s=612x612&w=0&k=20&c=vC8SV4Dv2dPwa3gFL2mOnzKwNf3q-jBck3Kp36fsRtY=",
  },
  {
    uniqueId: "52",
    bedroom:
      "https://media.istockphoto.com/id/961902684/photo/comfortable-big-wooden-framed-bed-with-linen-pillows-and-blanket-nightstand-beside-and-round.jpg?s=612x612&w=0&k=20&c=kusSooDPN3BWVFXEWLr3qWVBckDhizpRXL5DMvp7utQ=",
    bathroom:
      "https://media.istockphoto.com/id/1314417030/photo/gorgeous-master-bathroom-with-wood-tray-ceiling.jpg?s=612x612&w=0&k=20&c=yCsCxH-mLZwkLl0QOgQO2hOmjIWB3UmDZ-nqYu848P8=",
  },
  {
    uniqueId: "53",
    bedroom:
      "https://media.istockphoto.com/id/953800430/photo/loft-room.jpg?s=612x612&w=0&k=20&c=TcSwYNoNVbBBs-S6AexETbVaujJJqKCgKOwtOfdxeTU=",
    bathroom:
      "https://media.istockphoto.com/id/1256021286/photo/green-tile-gives-beauty-and-unique-charm-to-this-basement-bathroom.jpg?s=612x612&w=0&k=20&c=E2Spnp-pOay_-TJNWV5v2QZMyQCuaaDMR_Tgn0HkKBE=",
  },
  {
    uniqueId: "54",
    bedroom:
      "https://media.istockphoto.com/id/1152417220/photo/scandinavian-style-attic-bedroom-interior.jpg?s=612x612&w=0&k=20&c=qeltWbF0Qj4H6SoevJP8HpIstpTUd2-2MJMPhtdbMzs=",
    bathroom:
      "https://media.istockphoto.com/id/1218770985/photo/interior-of-bathroom-in-3d.jpg?s=612x612&w=0&k=20&c=2Ya7xDw7IwxrsgqYYDZLCcEH81NfdCobMdJW8v3_oA0=",
  },
  {
    uniqueId: "55",
    bedroom:
      "https://media.istockphoto.com/id/1175182781/photo/modern-luxury-bedroom-interior-design-3d-rendering.jpg?s=612x612&w=0&k=20&c=QpgGNcsKy3P5vDqdsQ8OvXXK6E-om2qCOa991zJonfY=",
    bathroom:
      "https://media.istockphoto.com/id/171575899/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=XLsEkFGtESlqKPHQrfZ_2Ux1D0YyYVuUgisaOWH14v4=",
  },
  {
    uniqueId: "56",
    bedroom:
      "https://media.istockphoto.com/id/1008574412/photo/ethnic-bedroom-interior.jpg?s=612x612&w=0&k=20&c=jI1_Q1pi4FS9XoqcnqZ5ELSAiHgH9Nes54fqqFO6H4w=",
    bathroom:
      "https://media.istockphoto.com/id/1255173732/photo/loft-bathroom.jpg?s=612x612&w=0&k=20&c=Rj8aqiI01ZgYd4vosoo05kcCLov_Z5XB1GFJTxcfVHI=",
  },
  {
    uniqueId: "57",
    bedroom:
      "https://media.istockphoto.com/id/1060148072/photo/modern-bedroom-interior-with-blank-wall-for-copy-space.jpg?s=612x612&w=0&k=20&c=adEQj-zXXlTowDDR7ippCfEq2HKRLn0tiJ96dCrSUHg=",
    bathroom:
      "https://media.istockphoto.com/id/1363383363/photo/luxury-bathroom-interior-with-shower-toilet-mirror-and-decorative-objects.jpg?s=612x612&w=0&k=20&c=tr0uiy32njv3xLDlCFnt9acUfQ7etF2zXwP1-zDAKlE=",
  },
  {
    uniqueId: "58",
    bedroom:
      "https://media.istockphoto.com/id/1143730639/photo/maltese-dog-on-bed-with-open-snout.jpg?s=612x612&w=0&k=20&c=8mIO4QuurUcaS-h9JTv9phXwhR3ZYOOg6fL5Is0arKQ=",
    bathroom:
      "https://media.istockphoto.com/id/1285631211/photo/before-and-after-bathroom-renovation.jpg?s=612x612&w=0&k=20&c=lPKCUy4V33_XNThfpUbIiEpXanUjzdifroOKiMnLmoo=",
  },
  {
    uniqueId: "59",
    bedroom:
      "https://media.istockphoto.com/id/1243187572/photo/bedroom-in-dark-blue-with-a-wide-bed-a-wooden-nightstand-and-a-golden-floor-lamp.jpg?s=612x612&w=0&k=20&c=WRLBgsNyerk_guJOkYzo0nzELmnkhlE_EmKGG0t8njU=",
    bathroom:
      "https://media.istockphoto.com/id/1364395304/photo/stylish-bathroom-interior-design-with-marble-panels-bathtub-towels-and-other-personal.jpg?s=612x612&w=0&k=20&c=ITCIaSw6fGhQCoXIi6BXzb2BdznwV8vPsozp4GdNn8s=",
  },
  {
    uniqueId: "60",
    bedroom:
      "https://media.istockphoto.com/id/1308427891/photo/modern-bedroom-interior-at-night-with-neon-light-messy-bed-clothes-in-closet-armchairs-and.jpg?s=612x612&w=0&k=20&c=nng4GzxehKZLPKW9jLHxWlLc4_hoZxrdg6qRpgXcYLE=",
    bathroom:
      "https://media.istockphoto.com/id/1340869268/photo/modern-bathroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=6WlOYPnPVF2znI_BynDFcTprrwhs1E192Bd6RlJSYoA=",
  },
  {
    uniqueId: "61",
    bedroom:
      "https://media.istockphoto.com/id/1208210864/photo/master-bathroom-interior-in-new-farmhouse-style-luxury-home-large-mirror-shower-and-bathtub.jpg?s=612x612&w=0&k=20&c=M8KDfVPxNNj1csVIhCS4wUWJzXHol8bVf5-HQOtbv5s=",
    bathroom:
      "https://media.istockphoto.com/id/1272146903/photo/master-bathroom-with-high-ceiling-and-big-shower.jpg?s=612x612&w=0&k=20&c=9gMdf8qAAX3OpknlDEsW4PTbaOx1PCjdWK_x6mIwOBc=",
  },
  {
    uniqueId: "62",
    bedroom:
      "https://media.istockphoto.com/id/991245820/photo/cozy-bedroom-interior.jpg?s=612x612&w=0&k=20&c=L5-fSWA2Od4Eutwa3Q0YjAtiG9YFU66LWy5Xuot4vAg=",
    bathroom:
      "https://media.istockphoto.com/id/483861324/photo/freestanding-bath-in-modern-bathroom.jpg?s=612x612&w=0&k=20&c=08oKh8CdTDdm31xyZbdd5gFMFh1rRut8l-UZPa3nS58=",
  },
  {
    uniqueId: "63",
    bedroom:
      "https://media.istockphoto.com/id/1221840397/photo/white-cozy-coastal-bedroom-interior.jpg?s=612x612&w=0&k=20&c=uJy9xc2VPZsIEIQE21nzWe8Ox5pF2ljj-ua_t6Me8Ik=",
    bathroom:
      "https://media.istockphoto.com/id/1308282338/photo/modern-bathroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=r6qXSudX7P7YOzYsuHsQ_6pjAekJOF4XnEpdrtfqmsg=",
  },
  {
    uniqueId: "64",
    bedroom:
      "https://media.istockphoto.com/id/1389329614/photo/mock-up-poster-frame-in-modern-bedroom-interior-background-bohemian-style-3d-render-3d.jpg?s=612x612&w=0&k=20&c=W-8KBZ7iwOykT6OKNpXIG4CCe60NoApqhZcdDsyc3vk=",
    bathroom:
      "https://media.istockphoto.com/id/1346631479/photo/empty-bathroom.jpg?s=612x612&w=0&k=20&c=rzFNGp9xO2_vbx66b80ND6NoN_akfqV6D65NjfoV_fU=",
  },
  {
    uniqueId: "65",
    bedroom:
      "https://media.istockphoto.com/id/1295025517/photo/coastal-boho-style-bedroom-interior-background-wall-mockup.jpg?s=612x612&w=0&k=20&c=94ZUcFmT_HH7gcpewvjFw1VvQ7Y3Jzk7yBGnnL_mYlM=",
    bathroom:
      "https://media.istockphoto.com/id/1151466737/photo/canadian-house-in-beaconsfield-montreal-quebec-canada.jpg?s=612x612&w=0&k=20&c=hXy3k8v_DzUfmmRa21aV-V9NTt603n0Ecu4ICGsFW5M=",
  },
  {
    uniqueId: "66",
    bedroom:
      "https://media.istockphoto.com/id/77932153/photo/modern-double-bed-with-bedside-tables.jpg?s=612x612&w=0&k=20&c=dcsgLpCZlFc9e65ICRlBEK77bI-gHMnscuGw1AJH65o=",
    bathroom:
      "https://media.istockphoto.com/id/184840769/photo/bright-orange-and-white-colorful-modern-bathroom.jpg?s=612x612&w=0&k=20&c=gyimTWgDqxO8oxt5JyUjCfr1ML0u3H2ko-VcUOvg1No=",
  },
  {
    uniqueId: "67",
    bedroom:
      "https://media.istockphoto.com/id/1454697447/photo/black-luxury-modern-retro-style-master-bedroom.jpg?s=612x612&w=0&k=20&c=zWXMq8oEAx5cSIF88bqiizwqAyeDmO9ihZyTlOFpHQQ=",
    bathroom:
      "https://media.istockphoto.com/id/1314091392/photo/modern-minimalist-bathroom.jpg?s=612x612&w=0&k=20&c=MDbynBTiU8czar3GHn0bUV84fUmS72NJMIZaD6iQNzs=",
  },
  {
    uniqueId: "68",
    bedroom:
      "https://media.istockphoto.com/id/1292268607/photo/mininal-contemporary-style-bedroom-3d-render.jpg?s=612x612&w=0&k=20&c=UHyVwLT925afQtk863zZMIgDYxYqIlo5UREc8LYVGbA=",
    bathroom:
      "https://media.istockphoto.com/id/1309074908/photo/luxury-bathroom-interior-with-hot-tub-and-beautiful-sea-view.jpg?s=612x612&w=0&k=20&c=yXIL9RMkdWthXsvCddeNexVxBCj16UNHBgckCTxF4PA=",
  },
  {
    uniqueId: "69",
    bedroom:
      "https://media.istockphoto.com/id/933425154/photo/bedroom-with-king-size-bed.jpg?s=612x612&w=0&k=20&c=nnzYMsKIC4n_lM2oPDZYYObnmfsOD6y0w3qoOYWOlJE=",
    bathroom:
      "https://media.istockphoto.com/id/171237652/photo/interior-of-bathroom-in-cold-tone.jpg?s=612x612&w=0&k=20&c=jtf44XxkshZD0I6TKwFryLBu2RF9yDTEyHeWMdKU-Tc=",
  },
  {
    uniqueId: "70",
    bedroom:
      "https://media.istockphoto.com/id/1181882546/photo/dark-cold-blue-bedroom-interior-with-linen-sheet-on-bed-wall-mock-up.jpg?s=612x612&w=0&k=20&c=HbduBvBUQCceWTT7VdrLUWj2QG04LKKYJvkK9gKkYKM=",
    bathroom:
      "https://media.istockphoto.com/id/874975774/photo/modern-contemporary-interior-bathroom-with-two-sinks-and-large-mirror.jpg?s=612x612&w=0&k=20&c=TxvH7DYYa4YBhnYpaENmjpYz_kseSInFjP5Uf3rLj48=",
  },
  {
    uniqueId: "71",
    bedroom:
      "https://media.istockphoto.com/id/1353440472/photo/elegant-bedroom-interior-with-double-bed-night-tables-armchair-and-seaview-through-window.jpg?s=612x612&w=0&k=20&c=ntz6FRYlNNoLcEjFDoxIFpQxVa-dLfjtUlZccqz58vU=",
    bathroom:
      "https://media.istockphoto.com/id/639779678/photo/3d-rendering-spacious-and-beautiful-toilet-with-white-wood-design.jpg?s=612x612&w=0&k=20&c=LyNeeYrk_LHIz0zcZRVVPkF29JBJl73o67MvQvE4pUk=",
  },
  {
    uniqueId: "72",
    bedroom:
      "https://media.istockphoto.com/id/1060147940/photo/modern-bedroom-interior-with-blank-wall-for-copy-space.jpg?s=612x612&w=0&k=20&c=l1aJiQrFnbGQfExzuZRuCF91BwWkkxLJklX1q2JS7Nk=",
    bathroom:
      "https://media.istockphoto.com/id/1292268646/photo/local-style-bathroom-with-blank-orange-wall-3d-render.jpg?s=612x612&w=0&k=20&c=hLRQr0rtQ2L0lh7X-SfkgXT5jcNkCt8JTm3cnB_1n1g=",
  },
  {
    uniqueId: "73",
    bedroom:
      "https://media.istockphoto.com/id/1077142666/photo/loft-bedroom.jpg?s=612x612&w=0&k=20&c=FeCweJA56IohZmLzRsj8bH4M6guKUh0Z4HK0ln0A_MU=",
    bathroom:
      "https://media.istockphoto.com/id/1330856174/photo/luxury-apartment-bathroom-interior.jpg?s=612x612&w=0&k=20&c=aFWRJaEaklPXUtSZCHlURMNNP0j1a_gAFeITqT4N1vM=",
  },
  {
    uniqueId: "74",
    bedroom:
      "https://media.istockphoto.com/id/904377554/photo/hammock-and-posters-in-bedroom.jpg?s=612x612&w=0&k=20&c=BVr3QblllMD_PdakIz9KW5sJLJgIfeOaE2udEfyTR6c=",
    bathroom:
      "https://media.istockphoto.com/id/169944004/photo/modern-compact-bathroom.jpg?s=612x612&w=0&k=20&c=FjiGlQG1jcdybhOahEMVrgCDpdLFuAFHk1FoOrx2oak=",
  },
  {
    uniqueId: "75",
    bedroom:
      "https://media.istockphoto.com/id/1202419936/photo/scandinavian-farmhouse-bedroom-interior-wall-mockup.jpg?s=612x612&w=0&k=20&c=Hr6lejpaBnrmypto_1p3v8q1F6hwQYq1y3yxTH0WJ4o=",
    bathroom:
      "https://media.istockphoto.com/id/637795150/photo/commercial-bathroom-for-washing-hands.jpg?s=612x612&w=0&k=20&c=t8h5kwowbmg_PkAO433vRzuAhR5t04f2wWxrRyJb9Go=",
  },
  {
    uniqueId: "76",
    bedroom:
      "https://media.istockphoto.com/id/1011962804/photo/desktop-computer-mock-up-on-an-industrial-desk-in-a-scandinavian-student-bedroom-interior.jpg?s=612x612&w=0&k=20&c=fRRPPQ45j6nL6KMDDOItbXiaundhgLOOsbETmX6Y59E=",
    bathroom:
      "https://media.istockphoto.com/id/516389862/photo/bathroom-in-luxury-home-bathtub-and-shower.jpg?s=612x612&w=0&k=20&c=zPCn0QP2siQiXXoTpH2iEgBAKSmoOm8Uh1mFW_E0m4I=",
  },
  {
    uniqueId: "77",
    bedroom:
      "https://media.istockphoto.com/id/835932468/photo/bedroom-in-soft-light-colors-big-comfortable-double-bed-in-elegant-classic-bedroom-at-home.jpg?s=612x612&w=0&k=20&c=YLoDlpDM4Cn1Vjhk46rz4YyXTnzHij5fwi8uVm4TKEc=",
    bathroom:
      "https://media.istockphoto.com/id/153639975/photo/colorful-children-bathroom-with-toilet.jpg?s=612x612&w=0&k=20&c=ZhgqESesuS0IFnSiqTdwSfD5o9kDXed2x9xbV3xyUQE=",
  },
  {
    uniqueId: "78",
    bedroom:
      "https://media.istockphoto.com/id/1295302080/photo/mockup-frame-in-contemporary-bedroom-design-bight-home-decor.jpg?s=612x612&w=0&k=20&c=dqdk4c-y57e7owsZ7eBW2dknCafk37o4jb4d9baca5I=",
    bathroom:
      "https://media.istockphoto.com/id/1454303048/photo/modern-dark-luxury-minimalist-bathroom.jpg?s=612x612&w=0&k=20&c=YSmUMMxsAhgD_W6EybLOjaswbR8d6BSDjjZjfCAGfDA=",
  },
  {
    uniqueId: "79",
    bedroom:
      "https://media.istockphoto.com/id/1295302080/photo/mockup-frame-in-contemporary-bedroom-design-bight-home-decor.jpg?s=612x612&w=0&k=20&c=dqdk4c-y57e7owsZ7eBW2dknCafk37o4jb4d9baca5I=",
    bathroom:
      "https://media.istockphoto.com/id/1414004145/photo/bathroom-in-the-villa.jpg?s=612x612&w=0&k=20&c=e0J-5j3JJq-JkLx1RYrsjsZutHxBBBiQoj7O8K9t_iU=",
  },
  {
    uniqueId: "80",
    bedroom:
      "https://media.istockphoto.com/id/1208657879/photo/abstract-black-oil-painting-in-frame-on-empty-beige-wall-of-cozy-bedroom.jpg?s=612x612&w=0&k=20&c=63RMsuduJ635xY-xwHJBX5F8uAYQFMRjihpJVVSCPXU=",
    bathroom:
      "https://media.istockphoto.com/id/1416964009/photo/modern-bathroom-interior.jpg?s=612x612&w=0&k=20&c=7VKNFHfDIT5-UtkjFSC2gusswAv7lZxcBlkmmaO5_tQ=",
  },
  {
    uniqueId: "81",
    bedroom:
      "https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=612x612&w=0&k=20&c=Xiu1ABy9iB9Ek13QWbsB7np0UgmnJKX56HsEAuCj-GY=",
    bathroom:
      "https://media.istockphoto.com/id/1367378067/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=VR1uhmqEJ6Q65-0yxYqaETAyisbveGsSur3CW8734Uw=",
  },
  {
    uniqueId: "82",
    bedroom:
      "https://media.istockphoto.com/id/834429368/photo/bedroom-with-large-wooden-mirror.jpg?s=612x612&w=0&k=20&c=7pnTwjvmwMgTzXF0cNiIPo2S1i8-OWi2aWJIpDvDujA=",
    bathroom:
      "https://media.istockphoto.com/id/820594010/photo/loft-bathroom.jpg?s=612x612&w=0&k=20&c=FIWJ1kUms4TP_f_82uc5pHMjcPvGRyOPxr8petWzQ9o=",
  },
  {
    uniqueId: "83",
    bedroom:
      "https://media.istockphoto.com/id/834429368/photo/bedroom-with-large-wooden-mirror.jpg?s=612x612&w=0&k=20&c=7pnTwjvmwMgTzXF0cNiIPo2S1i8-OWi2aWJIpDvDujA=",
    bathroom:
      "https://media.istockphoto.com/id/1275104046/photo/modern-bathroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=ztvVO5u7ZHiQU9KlQhl6ZZy_D-aXP-6ZhL4rg-q9fcA=",
  },
  {
    uniqueId: "84",
    bedroom:
      "https://media.istockphoto.com/id/1214719496/photo/mock-up-frame-in-cozy-home-interior-background-coastal-style-bedroom.jpg?s=612x612&w=0&k=20&c=isG8WaFO-TeyQPNrh0PNutaqFcCVWlOKJxm8xFIucOQ=",
    bathroom:
      "https://media.istockphoto.com/id/1082345206/photo/interior-design-of-a-bathroom-3d-illustration-in-a-scandinavian-style.jpg?s=612x612&w=0&k=20&c=MXLWLMZkrpNmildj3KD-cO2um3IO_A6_i5mKsJuzMPg=",
  },
  {
    uniqueId: "85",
    bedroom:
      "https://media.istockphoto.com/id/654289190/photo/four-poster-bed-with-mosquito-net-in-bright-hotel-room.jpg?s=612x612&w=0&k=20&c=2MD490P17mzRq3SmovQDXNHMVjM7gtTSEpnRfnwavck=",
    bathroom:
      "https://media.istockphoto.com/id/165866210/photo/elegant-bathroom-with-flowers.jpg?s=612x612&w=0&k=20&c=_tZTs8Vr0er04IhguKSvoYOkSCnjB_OvLxi4PcZeYVA=",
  },
  {
    uniqueId: "86",
    bedroom:
      "https://media.istockphoto.com/id/1195238344/photo/bedroom-architectural-3d-visualization.jpg?s=612x612&w=0&k=20&c=o98x-ZPEthqow8Hf2OwKWuyCwH3ibynH-0NVRGW8g-c=",
    bathroom:
      "https://media.istockphoto.com/id/501574788/photo/freestanding-bath-in-white-bathroom.jpg?s=612x612&w=0&k=20&c=vm69pmaeqnLGb5M5Gi3LMfAIAhicb7_nKc8NtUSBfe0=",
  },
  {
    uniqueId: "87",
    bedroom:
      "https://media.istockphoto.com/id/1127417417/photo/modern-luxurious-bedroom-in-a-seaside-villa-with-black-stone-wall.jpg?s=612x612&w=0&k=20&c=xmT4JSzLQtztPcVgQXI-3BX2BPBEutTi8RCt1f_suN0=",
    bathroom:
      "https://media.istockphoto.com/id/1251691687/photo/white-toilet.jpg?s=612x612&w=0&k=20&c=C4HQCpKZWfzXyslg9I8zE7I0CUOxlrmPZW9zkbQz9r0=",
  },
  {
    uniqueId: "88",
    bedroom:
      "https://media.istockphoto.com/id/1146763125/photo/black-chandelier-in-navy-blue-bedroom-in-tenement-house-floor-lamp-between-king-size-bed-and.jpg?s=612x612&w=0&k=20&c=DIkmtPKh5dGRPhrNvt-_jXqqRA2yrIJIFxwBV4jgRug=",
    bathroom:
      "https://media.istockphoto.com/id/1174942680/photo/childrens-bathroom-with-bath-and-window.jpg?s=612x612&w=0&k=20&c=LmZU8jwOCy8l0lErsZ2FXk609lIbup1t3AtkTRr7S5Q=",
  },

  {
    uniqueId: "89",
    bedroom:
      "https://media.istockphoto.com/id/1199704606/photo/modern-bedroom-interior.jpg?s=612x612&w=0&k=20&c=hEQC0Hgahlv3nIBcWCqrPPWtK42KXkOu7338_nFtVC8=",
    bathroom:
      "https://media.istockphoto.com/id/98844085/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=fPYof3nA47qO0pAQhGAM_aMxefzJ0-B3M4IM1_zFVgU=",
  },
  {
    uniqueId: "90",
    bedroom:
      "https://media.istockphoto.com/id/71925568/photo/bedroom.jpg?s=612x612&w=0&k=20&c=OgQwraci48oxgzFEeupYTk-B0VAoT5otGt80--71svw=",
    bathroom:
      "https://media.istockphoto.com/id/513952232/photo/interior-of-bathroom-in-cool-green-with-a-running-shower.jpg?s=612x612&w=0&k=20&c=DFeuHTFol62O07mJ7azPU-vmjEG4ibnrB-jZRaa7kCo=",
  },
  {
    uniqueId: "91",
    bedroom:
      "https://media.istockphoto.com/id/928431714/photo/3d-rendering-modern-luxury-bedroom-suite-and-bathroom.jpg?s=612x612&w=0&k=20&c=kYiupd-t22eEw5xSqHULuv6cjH_0kWkcX4nkooVQdUg=",
    bathroom:
      "https://media.istockphoto.com/id/1074729274/photo/luxury-villa-minimalist-black-bathroom.jpg?s=612x612&w=0&k=20&c=_9aKH-Q0Pmae2jDvwpb-eNjBW18XdVPU3o1SvOy7SfI=",
  },
  {
    uniqueId: "92",
    bedroom:
      "https://media.istockphoto.com/id/1270977686/photo/luxury-bedroom-with-walk-in-closet.jpg?s=612x612&w=0&k=20&c=xRmb09iIE83O1HT2vAmY4HrpIJJCGQ-Sx0ocycrtRF4=",
    bathroom:
      "https://media.istockphoto.com/id/866104130/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=m76EqmtulXuwFt_YRH6xg77fn9CTMdCbmGXx0KwlzYg=",
  },
  {
    uniqueId: "93",
    bedroom:
      "https://media.istockphoto.com/id/966925244/photo/loft-bedroom.jpg?s=612x612&w=0&k=20&c=PTbkADG8TB3ReAyEBRGuU1OAu10GE8yiqyS2mtjllB8=",
    bathroom:
      "https://media.istockphoto.com/id/1177306338/photo/boho-style-bathroom-interior.jpg?s=612x612&w=0&k=20&c=oTW5M1g-uLxcjeFl7-qFuJQDGLjhGQwwdkj3uKc1lPY=",
  },
  {
    uniqueId: "94",
    bedroom:
      "https://media.istockphoto.com/id/915711556/photo/pillow-with-houndstooth-pattern.jpg?s=612x612&w=0&k=20&c=1gNA4rm22lcBUeUEVePCzcXdwvu6NkxHaU6GL40Xbws=",
    bathroom:
      "https://media.istockphoto.com/id/941065234/photo/modern-3d-bathroom-render.jpg?s=612x612&w=0&k=20&c=5JZiVpsJEw_KLjLVxL7Z56Dq_7-5omagTyj2z-rF8MA=",
  },
  {
    uniqueId: "95",
    bedroom:
      "https://media.istockphoto.com/id/1330857814/photo/luxury-modern-bedroom-interior.jpg?s=612x612&w=0&k=20&c=vc1bBipMLOq5MAZO7WOUHHknmQFlxSxKR_Gf5r8vI_Y=",
    bathroom:
      "https://media.istockphoto.com/id/1287515220/photo/dark-and-modern-bathroom.jpg?s=612x612&w=0&k=20&c=zpSp6Uwtu2Dlg4rI2w_Zv5yf8xuQUwULcq_0v87os28=",
  },
  {
    uniqueId: "96",
    bedroom:
      "https://media.istockphoto.com/id/1133726697/photo/modern-bedroom-interior-with-nature-view.jpg?s=612x612&w=0&k=20&c=_1dT6UY_LNw5mLO7RaWLhiXLWcup8Nvl2pyymoo2gPY=",
    bathroom:
      "https://media.istockphoto.com/id/621572026/photo/modern-bathroom-interior-with-minimalistic-shower.jpg?s=612x612&w=0&k=20&c=ifcuVWjqXeKOB7St7HZUiZxp-48RIp7ahkHIvxKj_8s=",
  },
  {
    uniqueId: "97",
    bedroom:
      "https://media.istockphoto.com/id/1025287284/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=y2r9BLLq4AxFhLNLI0LW6THD-z8QJofWdbgWrZvq3nE=",
    bathroom:
      "https://media.istockphoto.com/id/1384808901/photo/luxury-style-bathroom-with-white-marble-tile-3d-render.jpg?s=612x612&w=0&k=20&c=-A3iCNPcP1OMUOLCrZN8d_FrXWku1zrniCl4DLg0-J0=",
  },

  {
    uniqueId: "98",
    bedroom:
      "https://media.istockphoto.com/id/1320932801/photo/modern-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=9MQhUtKAHxSmYHVFUDbQhpR5XFgP0-SGEALSs-rahVY=",
    bathroom:
      "https://media.istockphoto.com/id/168324184/photo/domestic-bathrooms.jpg?s=612x612&w=0&k=20&c=z6EarSfSeJDvvUjg4qPbIZfJWc2KICNBLORQr9P0Oe8=",
  },
  {
    uniqueId: "99",
    bedroom:
      "https://media.istockphoto.com/id/850262790/photo/classic-scandinavian-bedroom.jpg?s=612x612&w=0&k=20&c=T49FjRWmkRBybykN8qa3fjPhpgP5Y04s4FNodtCFW8s=",
    bathroom:
      "https://media.istockphoto.com/id/1024173540/photo/concept-of-modern-decoration-design-of-bathroom-for-luxury-hotel-residential.jpg?s=612x612&w=0&k=20&c=EF0NHlr9zGpfdb7NdHbRjKJOnW7U98Etj6XpuXFydps=",
  },
  {
    uniqueId: "100",
    bedroom:
      "https://media.istockphoto.com/id/1316509392/photo/3d-rendering-of-a-modern-bedroom-interiors.jpg?s=612x612&w=0&k=20&c=qe4Q_i5ZeTz7SYTgAptmtztNmp4jUV_3ZDcgAb4us-4=",
    bathroom:
      "https://media.istockphoto.com/id/1054756134/photo/stunning-master-bathroom-interior-in-luxury-home-with-bathtub-shower-and-fireplace.jpg?s=612x612&w=0&k=20&c=BtZrRK5gfOiFEp9JdhgWKx2YOMSzIlL0YTmrjbBxl7c=",
  },
];
