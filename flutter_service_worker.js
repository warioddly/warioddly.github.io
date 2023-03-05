'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d4697a527fb460c1ea2e4abbdf22e850",
"assets/assets/fonts/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/Inter.ttf": "ba8d154465f7fd15e2fc2ced6dceec90",
"assets/assets/fonts/UvedIcons.ttf": "f08bebeac1e5efc1a5cbea0524506cbc",
"assets/assets/images/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/assets/images/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/assets/images/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/assets/images/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/assets/images/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/assets/images/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/assets/images/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/assets/images/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/assets/images/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/assets/images/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/assets/images/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/assets/images/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/assets/images/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/assets/images/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/assets/images/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/assets/images/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/assets/images/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/assets/images/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/assets/images/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/assets/images/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/assets/images/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/assets/images/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/assets/images/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/assets/images/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/assets/images/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/assets/images/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/assets/images/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/assets/images/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/assets/images/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/assets/images/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/assets/images/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/assets/images/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/assets/images/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/assets/images/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/assets/images/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/images/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/assets/images/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/assets/images/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/assets/images/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/assets/images/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/assets/images/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/assets/images/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/assets/images/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/assets/images/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/assets/images/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/assets/images/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/assets/images/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/assets/images/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/assets/images/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/assets/images/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/assets/images/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/assets/images/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/assets/images/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/assets/images/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/assets/images/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/assets/images/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/assets/images/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/assets/images/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/assets/images/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/assets/images/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/assets/images/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/assets/images/flags/do.png": "ed35983a9263bb5713be37d9a52caddc",
"assets/assets/images/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/assets/images/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/assets/images/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/assets/images/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/assets/images/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/assets/images/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/assets/images/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/assets/images/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/assets/images/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/assets/images/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/assets/images/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/assets/images/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/assets/images/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/assets/images/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/assets/images/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/assets/images/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/assets/images/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/assets/images/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/assets/images/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/assets/images/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/assets/images/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/assets/images/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/assets/images/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/assets/images/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/assets/images/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/assets/images/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/assets/images/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/assets/images/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/assets/images/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/assets/images/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/assets/images/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/assets/images/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/assets/images/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/assets/images/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/assets/images/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/assets/images/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/assets/images/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/assets/images/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/assets/images/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/assets/images/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/assets/images/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/assets/images/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/assets/images/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/assets/images/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/assets/images/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/assets/images/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/assets/images/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/assets/images/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/assets/images/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/assets/images/flags/is.png": "907840430252c431518005b562707831",
"assets/assets/images/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/assets/images/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/assets/images/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/assets/images/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/assets/images/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/assets/images/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/assets/images/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/assets/images/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/assets/images/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/assets/images/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/assets/images/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/assets/images/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/assets/images/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/assets/images/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/assets/images/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/assets/images/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/assets/images/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/assets/images/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/assets/images/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/assets/images/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/assets/images/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/assets/images/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/assets/images/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/assets/images/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/assets/images/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/assets/images/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/assets/images/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/assets/images/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/assets/images/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/assets/images/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/assets/images/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/assets/images/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/assets/images/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/assets/images/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/assets/images/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/assets/images/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/assets/images/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/assets/images/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/assets/images/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/assets/images/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/assets/images/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/assets/images/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/assets/images/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/assets/images/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/assets/images/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/assets/images/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/assets/images/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/assets/images/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/assets/images/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/assets/images/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/assets/images/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/assets/images/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/assets/images/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/assets/images/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/assets/images/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/assets/images/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/images/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/assets/images/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/assets/images/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/assets/images/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/assets/images/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/assets/images/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/assets/images/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/assets/images/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/assets/images/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/assets/images/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/assets/images/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/assets/images/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/assets/images/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/assets/images/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/assets/images/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/assets/images/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/assets/images/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/assets/images/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/assets/images/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/assets/images/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/assets/images/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/assets/images/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/assets/images/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/assets/images/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/assets/images/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/assets/images/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/assets/images/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/assets/images/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/assets/images/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/assets/images/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/assets/images/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/assets/images/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/images/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/assets/images/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/assets/images/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/assets/images/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/assets/images/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/assets/images/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/assets/images/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/assets/images/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/assets/images/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/assets/images/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/assets/images/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/assets/images/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/assets/images/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/assets/images/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/assets/images/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/assets/images/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/assets/images/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/assets/images/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/assets/images/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/assets/images/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/assets/images/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/assets/images/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/assets/images/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/assets/images/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/assets/images/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/assets/images/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/assets/images/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/assets/images/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/assets/images/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/assets/images/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/assets/images/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/assets/images/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/assets/images/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/assets/images/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/assets/images/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/assets/images/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/assets/images/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/assets/images/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/assets/images/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/assets/images/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/assets/images/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/assets/images/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/assets/images/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/assets/images/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/assets/images/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/assets/images/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/images/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/assets/images/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/assets/images/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/assets/images/icons/checkmark.png": "885158f6f56ee4307140cce43429f4cc",
"assets/assets/images/logo/logo.png": "1392ead74808617bfc24a307a7080a78",
"assets/assets/images/logo/logo.svg": "6f3cf54615bd3d3b61f749f6d39cb598",
"assets/assets/images/pi-canceled.svg": "9b1ce5256f4cc8075d6c04710d591dfc",
"assets/assets/images/under-consideration.svg": "0ba0053bd044cdadb49f43af7f7197d1",
"assets/FontManifest.json": "1d28f0108a0dc40299da795808543096",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "df8e7900e2dd24a7a2d7e735df538bd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"data/arrival_location.json": "9ed38196689f1ac47c17b520310d3aab",
"data/country.json": "7584874e0792505951cca358fcc43554",
"data/pi.json": "71570033b3511b5545228ea6add06b7d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8260d2ff22029545225eca258e277524",
"/": "8260d2ff22029545225eca258e277524",
"main.dart.js": "43c35ca13d65d73de67ff3a70ed5f058",
"manifest.json": "a883052c509a103010f01543fb4d4f11",
"version.json": "81cda5ac7e74c2d5db2a067954fdea95"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
