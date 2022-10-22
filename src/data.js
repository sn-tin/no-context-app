const data = [
	{
		id: 0,
		plainText: "hi gusto kita matagal na. i really like your personality and your mindset. ipasa mo to sa 15 katao kung hindi magiging sasakyan ka. wag kang tumawa, yung kaibigan ko tricycle na",
		origText: "hi gusto kita matagal na. i rlly like ur personality and ur mindset. ipasa mo to sa 15 katao kung hindi magiging sasakyan ka. wag kang tumawa, yung kaibigan ko tricycle na",
		isFavorite: false,
	}, 
	{
		id: 1,
		plainText: "Beh, ano yung nalalaman kong tinatarayan mo kami beh? Famous ka? Tapang ka ah, kakasa ka ba? Ano beh palag square bati lang, ano beh? Beh, hoy bakit ka natatakot e ikaw ang nauna, pumalag ka kingina mo ouch aray ha /sinabunutan; kingina! Aray ah puta chemsi yung bato! /Pinukpok; oha kingina mo ka ah sakit aray beh, beh tulong Beh, ano yung nalalaman kong tinatarayan mo kami beh? Famous ka? Tapang ka ah, kakasa ka ba? Ano beh palag square bati lang, ano beh? Beh, hoy bakit ka natatakot e ikaw ang nauna, pumalag ka kingina mo ouch aray ha /sinabunutan; kingina! Aray ah puta chemsi yung bato! /Pinukpok; oha kingina mo ka ah sakit aray beh, beh tulong Beh, ano yung nalalaman kong tinatarayan mo kami beh? Famous ka? Tapang ka ah, kakasa ka ba? Ano beh palag square bati lang, ano beh? Beh, hoy bakit ka natatakot e ikaw ang nauna, pumalag ka kingina mo ouch aray ha /sinabunutan; kingina! Aray ah puta chemsi yung bato! /Pinukpok; oha kingina mo ka ah sakit aray beh, beh tulong.",
		origText: "Beh, ano yung nalalaman kong tinatarayan mo kami beh? Famous ka? Tapang ka ah, kakasa ka ba? Ano beh palag square bati lang, ano beh? Beh, hoy bakit ka natatakot e ikaw ang nauna, pumalag ka kingina mo ouch aray ha /sinabunutan; kingina! Aray ah puta chemsi yung bato! /Pinukpok; oha kingina mo ka ah sakit aray beh, beh tulong Beh, ano yung nalalaman kong tinatarayan mo kami beh? Famous ka? Tapang ka ah, kakasa ka ba? Ano beh palag square bati lang, ano beh? Beh, hoy bakit ka natatakot e ikaw ang nauna, pumalag ka kingina mo ouch aray ha /sinabunutan; kingina! Aray ah puta chemsi yung bato! /Pinukpok; oha kingina mo ka ah sakit aray beh, beh tulong Beh, ano yung nalalaman kong tinatarayan mo kami beh? Famous ka? Tapang ka ah, kakasa ka ba? Ano beh palag square bati lang, ano beh? Beh, hoy bakit ka natatakot e ikaw ang nauna, pumalag ka kingina mo ouch aray ha /sinabunutan; kingina! Aray ah puta chemsi yung bato! /Pinukpok; oha kingina mo ka ah sakit aray beh, beh tulong.",
		isFavorite: false,
	},
	{
		id: 2,
		plainText: "Tandaan mo, alalahanin mo yung mga ano na inano ko kahapon . Kapag nakalimutan mo yung ano, maaano yung ano. Ano ? Hindi mo mainitndihan yung sinasabi ko? Hindi ka kasi nakikinig sa mga ano ko eh. Kaya naaano ka tuloy.",
		origText: "Tandaan mo, alalahanin mo yung mga ano na inano ko kahapon . Kapag nakalimutan mo yung ano, maaano yung ano. Ano ? Hindi mo mainitndihan yung sinasabi ko? Hindi ka kasi nakikinig sa mga ano ko eh. Kaya naaano ka tuloy.",
		isFavorite: false,
	},
	{
		id: 3,
		plainText: "Huy, oo ikaw. amishu. oh, di mo ko miss gara mo naman. kamusta ka na? bat nakasimangot ka? hindi bagay sayo. ngumiti ka nga. tumingin ka saken. tumingin ka. titigan mo ko (2x)",
		origText: "Huy, 💫🚺 oo ikaw. 🖐💃 amishu. 😿😔😭 oh, di 🚫❌ mo ko miss❗️❓❔ gara 🔷💫 mo naman.✊👺 kamusta ka na? 👀🙈🙀bat nakasimangot 😞😕😟 ka? hindi 🚫bagay sayo. ✖️✖️ ngumiti ka nga. 😬☺😄 tumingin ka saken. 🙈👀 tumingin ka. 👀💀titigan mo ko (2x) 👁👄👁",
		isFavorite: false,	
	},
	{
		id: 4,
		plainText: "aljana eochapi swiun ireun eopjimanseodo nan nega isseoseo modu da gwaenchana sarangeun naege dareun ge anigo sajin sok uriui useumi daya",
		origText: "aljana eochapi swiun ireun eopjimanseodo nan nega isseoseo modu da gwaenchana sarangeun naege dareun ge anigo sajin sok uriui useumi daya",
		isFavorite: false,
	},
	{
		id: 5,
		plainText: "yeoboseyo ?? I mean hello >.< *chuckles lightly* oh arasso, i mean okay ah .... ne, i mean yes. jinjjayo i mean really ... eheh ..mianhaeyo !!! I'M SORRY *frustated sigh* aish...ottoke i mean what do we do ?? arasso, i mean okay :3 see you annyeong, i mean bye",
		origText: "yeoboseyo ?? I mean hello >.< *chuckles lightly* oh arasso, i mean okay ah .... ne, i mean yes. jinjjayo i mean really ... eheh ..mianhaeyo !!! I'M SORRY *frustated sigh* aish...ottoke i mean what do we do ?? arasso, i mean okay :3 see you annyeong, i mean bye",
		isFavorite: false,
	},
	{
		id: 6,
		plainText: "bagi bagi chadolbagi singibanggi bboongbboong banggi",
		origText: "bagi bagi chadolbagi singibanggi bboongbboong banggi",
		isFavorite: false,
	},
	{
		id: 7,
		plainText: "im so happy to meet u, and i realize once again, that u guys mean a lot to me. thank u for all ur love, and i promise u i will show u the best performances and music for your love! thank you guys",
		origText: "im so happy to meet u, and i realize once again, that u guys mean a lot to me. thank u for all ur love, and i promise u i will show u the best performances and music for your love! thank you guys",
		isFavorite: false,
	},
	{
		id: 8,
		plainText: "Hi Babeeee alam kong mayamaya makikita mo nato HEEHHE i just want to say thankyou dahil dumating ka sa buhay ko and ayun sorry sa lahat lahat MAHAL NA MAHALNA MAHAL NA MAHAL NA MHAL NA MAHAL NA MAHAL NA MAHAL NAMAHAL KITAA",
		origText: "Hi Babeeee alam kong mayamaya makikita mo nato HEEHHE 🥺❤️🥰🤩☺️🤩🤩😘😘🥰😘🥰😘😍😘😍i just want to say thankyou dahil dumating ka sa buhay ko and ayun sorry sa lahat lahat MAHAL NA MAHALNA MAHAL NA MAHAL NA MHAL NA MAHAL NA MAHAL NA MAHAL NAMAHAL KITAA🥺☺️😍☺️😍😚😚🤩😙😙🤩😍😚",
		isFavorite: false,
	},
	{
		id: 9,
		plainText: "wag kang magalala baby ko proprotektahan kita at ng Gang ko Kapag kami may kaaway Simple lang namang ang Gagawin namen Kakausapin lang sila sabay bulong ng Tatlong salita Distansiya, Ambulansya O Purinarya wag kang Maangas",
		origText: "wag🚫🚫❌ kang magalala baby ko❤️🧡💛💛💙💜 proprotektahan kita👊✊💪 at ng Gang ko 🔥 Kapag kami may kaaway Simple lang😎💦 namang ang Gagawin namen Kakausapin lang sila☠️ 😋 sabay bulong ng Tatlong salita 😕😤 Distansiya,🖕⚠️ Ambulansya🏥🚑 O Purinarya😱👿 wag kang Maangas 😕👊",
		isFavorite: false,
	},
	{
		id: 10,
		plainText: "walang signal sa bukid pero nung nalaman ko na nag post ka dali dali akong bumaba ng bukid tumawid akong tatlong ilog at umutang ako ng pera pamasahe papuntang syudad namalimos pa ako para may panghulog sa pisonet para lang makareact",
		origText: "walang signal❌sa bukid😓🗾pero nung nalaman ko😊❤️na nag post ka😱🙈dali dali🏃‍♂️🏃‍♂️akong bumaba ng bukid😊😉tumawid akong tatlong ilog🏊‍♂️🚣‍♂️🚣‍♂️at umutang ako ng pera💰💴💲pamasahe papuntang syudad🚞🏭🏢💢namalimos pa ako😢😞para may panghulog sa pisonet💰📞☎️para lang makareact😊",
		isFavorite: false,
	},
	{
		id: 11,
		plainText: "aba ginoong selecta, macapuno ka ng matcha ang rocky road ay sumasa-oreo bukod kang pinag-vanilla sa babaeng yogurt at pinag-banana naman ang iyong anak na si butterscotch.",
		origText: "aba ginoong selecta, macapuno ka ng matcha ang rocky road ay sumasa-oreo bukod kang pinag-vanilla sa babaeng yogurt at pinag-banana naman ang iyong anak na si butterscotch.",
		isFavorite: false,
	},
	{
		id: 12,
		plainText: "Allen kalbo, Allen kalbo. Okay sino yung nag-Aallen kalbo? Gusto mong tanggalin kita sa section na to? Di pa tayo nagsisimula kung ano-ano nang ginagawa mo ha, sinabi ko na dati pa respeto. Sino yon? Si ano po yun si Justine Carl Argana nakita ko po siya. Ako? Justine Carl Argana? Opo. Hindi ako yun tang in- o sige mura pa. Yong mga kabastusan niyo itago niyo muna ha, 'di ko pinapalampas yung mga ganyan. 'Di pa tayo nagsisimula e nagagalit na naman ako. Respeto okay.",
		origText: "Allen kalbo, Allen kalbo. Okay sino yung nag-Aallen kalbo? Gusto mong tanggalin kita sa section na to? Di pa tayo nagsisimula kung ano-ano nang ginagawa mo ha, sinabi ko na dati pa respeto. Sino yon? Si ano po yun si Justine Carl Argana nakita ko po siya. Ako? Justine Carl Argana? Opo. Hindi ako yun tang in- o sige mura pa. Yong mga kabastusan niyo itago niyo muna ha, 'di ko pinapalampas yung mga ganyan. 'Di pa tayo nagsisimula e nagagalit na naman ako. Respeto okay.",
		isFavorite: false,
	},
	{
		id: 13,
		plainText: "ouch pain hurt disease illness sickness disorder stich ache sting wrench sorrow grief sadness loneliness unhappiness dissatisfaction resentment grudge pique displeasure awts pein pighati lumbay hinagpis kirot sakit pagtangis iyak lungkot siphayo dalamhati sama ng loob bigat sa damdamin ha",
		origText: "ouch pain hurt disease illness sickness disorder stich ache sting wrench sorrow grief sadness loneliness unhappiness dissatisfaction resentment grudge pique displeasure awts pein pighati lumbay hinagpis kirot sakit pagtangis iyak lungkot siphayo dalamhati sama ng loob bigat sa damdamin ha",
		isFavorite: false,
	},
	{
		id: 14,
		plainText: "palibhasa kasi alam na alam mo kung paano ako kunin eh isang ngiti mo lang wala umiikot na ulit yung mundo ko tangina ang talino kong tao pero pag dating sa'yo? ewan ko natatanga ako. haha ems",
		origText: "palibhasa kasi 🤡⁉️ alam na alam 🧠🧠🧠 mo kung 😭😭👉🏻 paano ako kunin eh 💔😔 isang ngiti mo lang 😎😎😎 wala umiikot ↪️↩️🔂 na ulit yung mundo ko 🌍🌏 tangina‼️ ang talino kong 👩🏻‍🏫👀 tao❔ pero pag dating 👇🏻👇🏻 sa'yo? 👁👁👁 ewan ko 🌀 natatanga ako. 🥺🥺 haha ems",
		isFavorite: false,
	},
	{
		id: 15,
		origText: "sabi ng mama mo, tita nalang daw ang tawag ko sayo, o sa kanya. tapos. ngayon, mama ko na sya. ang tita mo noon, ngayon. kaya pwede na tayo magsama. kasi aksep–, aksip na tayo nila. ng mama mo. sa tita ko noon.",
		isFavorite: false,
	},
	{
		id: 16,
		plainText: 
		`Mga rules ni GBF :
		1. Kapag sinaktan ka ng girlfriend mo sa'kin ka na lang
		2. Dapat pumapayag ka sa mga couple icon
		3. Dapat updated ako sa lahat ng mga ginagawa mo
		4. Dapat nagsasayaw din tayo ng Heartbreak Anniversary with titig
		5. Dapat ako lang GBF mo`,
		origText: 
		`Mga rules ni GBF :
		1. Kapag sinaktan ka ng girlfriend mo sa'kin ka na lang😩
		2. Dapat pumapayag ka sa mga couple icon
		3. Dapat updated ako sa lahat ng mga ginagawa mo😡
		4. Dapat nagsasayaw din tayo ng Heartbreak Anniversary with titig🥺❤️
		5. Dapat ako lang GBF mo`,
		isFavorite: false,
	},
	{
		id: 17,
		plainText: 
		`
		Mga rules ni boy best friend 
		1.Ayukong lalabas ka nang nakasando na kita ang bra mo bikini
		2.Ayukong magagala na nang subrang igsi ng short mo at wala ka pang cycling. jeans
		3. Wag na wag kang magbibisyo.
		4.Ayukong lage kang nagpupuyat nang walang dahilan
		`,
		origText:
		`
		Mga rules ni boy best friend
		1.Ayukong lalabas ka nang nakasando na kita ang bra mo bikini ❌
		2.Ayukong magagala na nang subrang igsi ng short mo at wala ka pang cycling. jeans✅
		3. Wag na wag kang magbibisyo.❌
		4.Ayukong lage kang nagpupuyat nang walang dahilan
		`,
		isFavorite: false,
	},
	{
		id: 18,
		plainText: "DURUGIN DURUGIN SILANG LAHAT ANO YON? ANG KANILANG PUSO WASAKIN WASAKIN SILANG LAHAT ANO YON? GAMIT ANG BLOCK? ANG PAGASA NILA",
		origText: "DURUGIN 🙌 DURUGIN 🙌 SILANG 👉 LAHAT 👀 ANO 🗣YON? 🏐 ANG 🧚🏻‍♂️ KANILANG 👺 PUSO ❤️🔫 WASAKIN 🤬💪WASAKIN 🤬💪 SILANG 👉 LAHAT 👀👥 ANO 🗣 YON? 🏐 GAMIT 🤨 ANG 🧐 BLOCK? 🏐🙌 ANG 🧚🏻‍♂️ PAGASA 💗💔 NILA 👥",
		isFavorite: false,
		},
		{
		id: 19,
		plainText: 
		`
		PUBLIC ADVISORY

		mag iingat po tayo sa pagbili ng mga low quality na christmas light this year, may mga tao po ksi na bigla nalang magbibigay ng liwanag sa buhay natin tapos bigla rin mawawala.
		`
		,
		origText: 
		`
		⚠️PUBLIC ADVISORY⚠️ 

		mag iingat po tayo sa pagbili ng mga low quality na christmas light this year, may mga tao po ksi na bigla nalang magbibigay ng liwanag sa buhay natin tapos bigla rin mawawala.
		`,
		isFavorite: false,
	},
	{
		id: 20,
		plainText: "Isa sa mga pinakabagong rides dito sa Enchanted Kingdom yung tinatawag na, TwiN SPIN! ISANG URI NG ROLLERCOASTER, NA UMIIKOT, BUMUBULUSOK, at winawasiwas ka nang napakabiLIS! PERO BUKOD DITO, UMIIKOT DIN YUNG MISMONG BAGON, KUNG SAN KA NAKASAKAY! KAYA NAPAKAEXCITING, NAPAKABILIS!",
		origText: "Isa sa mga pinakabagong rides dito sa Enchanted Kingdom yung tinatawag na, TwiN SPIN! ISANG URI NG ROLLERCOASTER, NA UMIIKOT, BUMUBULUSOK, at winawasiwas ka nang napakabiLIS! PERO BUKOD DITO, UMIIKOT DIN YUNG MISMONG BAGON, KUNG SAN KA NAKASAKAY! KAYA NAPAKAEXCITING, NAPAKABILIS!",
		isFavorite: false,
	},
	{
		id: 21,
		origText: "sAbI NiLa👄🗣💬 kApAg iNlOvE kA 😍👨‍❤️‍👨👩‍❤️‍👨🥰👨‍❤️‍👨😘👩‍❤️‍👩 tUmItiGiL ✋🚧‼️ aNg MuNdO mO 🌐 bUmIbiLis 🏃‍♂️ aNg tiBoK nG pUsO mO 🙊💓 aT 😳 aT 😳 tABi! 🛹💨💥 aY‼️😮🤕 hMmph! 😡😠💨📙 gAnGsTer! ☠️",
		isFavorite: false,
	},
	{
		id: 23,
		origText: "walang signal sa bukid pero noong nalaman kong nag-post ka eh dali-dali akong tumakbo sa pilapil.Tumawid ako ng tatlong ilog.Tinumbok ko ang pitong bundok at umutang ng pamasahe papuntang syudad namalimos pa ako para may pang hulog sa piso net para lang makareact sa post mo",
		isFavorite: false
	},
	{
		id: 24,
		origText: "you're the laman 😋 of my passenger seat💺empty road🛣️4-seater😱para we have space🚀 sa back let's make sulit🥰the hamog💨 it will serve as our taklob😶‍🌫️ wishing 🙏 na hindi ma-caught 🧐 inside ng aking BMW🚨sedan 🚗",
		isFavorite: false
	},
	{
		id: 25,
		origText: "I love you 💞 사랑해요  💖 i love you 💞 사랑해요 💓 i love you 💓 사랑해요 💗 i love you 💝 사랑해요  💖 i love you 💘 사랑해요 💝 i love you 💖 사랑해요 💝 i love you 💞 사랑해요 💖 i love you 💕 사랑해요 💞 i love you 💓 사랑해요 💓  i love you 💝 사랑해요 💖 i love you 💗",
		isFavorite: false
	},
	{
		id: 26,
		origText: "pagsisilbihan, seseryosohin, tititigan,iiyakan, liligawan, hihintayin, ipagluluto, ipaglalaba, pakikinggan, jojowain, papakasalan, papasayahin, patatawanin, papaligayahin, ipagmamalaki, aalagaan, iingatan, at mamahalin habang buhay.",
		isFavorite: false
	},
	{
		id: 27,
		origText: "sabi nila...pag inlove ka, tumitigil ang mundo mo. bumibilis ang tibok ng puso mo. 에... 에-타비! 에이!!! 흠!! 갱스터! 소년, 답을 찾으려고 ... 갱스터? 갱스터 앙 대디 코? 소녀, 상황을 바로 잡으려고 하는... 어-허! at si athena dizon ang Great love niya!",
		isFavorite: false
	},
	{
		id: 28,
		origText: "UEE😭🥺💧Eu💧E E😭😭 E EUE🥺🥺😭UUUUE😭🥺💧🥺😭 ue 💧ee😭🥺💧ue 🥺e e e😭. e 💧🥺😭Uueuuue. 💧💧ue 😭🥺ee e🥺🥺😭eUEE  💧E E😭😭 E EUE🥺🥺😭UUUUE😭🥺💧🥺😭 ue 💧ee😭🥺💧ue 🥺e e e😭. e 💧🥺😭Uueuuue. 💧💧ue 😭🥺ee e🥺🥺😭eUEE",
		isFavorite: false
	},
	{
		id: 29,
		origText: "Kasalanan ko ba? Kung na-inlove ako sayo? Im sorry if i fell this hard and it affected our friendship. Sorry. Pero masisisi mo ba ko? Hindi ko rin alam kung bakit ikaw pa eh? Pero wag ka sanang magalit sakin. I swear hindi ko sinsadya. Nagmahal lang talaga ako. Pero katangahan eh",
		isFavorite: false
	},
	{
		id: 30,
		origText: "hi👋may👉lighter💥ka?🚶actually🤫I 🍃don't❌smoke💨gusto👀ko🙏lang🌟malaman‼️kung 🚗nagiismoke📣ka🎽ayoko🙅‍♂️kasi🔱sa🔔mga🧹smoker🚬",
		isFavorite: false
	},
	{
		id: 31,
		origText: "BARK🐶 WOOF🔊 BARK🐕‍🦺 RUFF🐺 BARK BARK🤬 GRRR🐕 BARK 🔊 WOOF🐕 WOOF🤬 RUFF 🐩 RUFF🐩 GRRRRR🐕‍🦺 BARK 🤒 BARK🐺 WOOF😡 WOOF🔊 GRRRR 🐕 RUFF🐺 RUFF🔊 BARK🤬 WOOF 🦮 RUFF 🐕 GRRRR🤒 BARK🐕‍🦺 BARK🐩 BARK BARK🥵 WOOF WOOF🐕📣 BARK BARK🐶 WOOF🐺 WOOF🐩 GRRRRRRRRR🔊 SNARL ARF 🔊ARF",
		isFavorite: false
	},
	{
		id: 32,
		origText: "mhal e2 muna gamit kung pangchat, naki-text lang muna aq, miss q na kayo jan, uwi naq sa 17. gwpo mo tlaga, pkiss nga :*",
		isFavorite: false
	},
	{
		id: 33,
		origText: "screaming, crying, shitting, sliding down the wall, violently throwing up, hitting my pillow, eating grass, having an allergic reaction",
		isFavorite: false
	},
	{
		id: 34,
		origText: "poide ba kta maging shota? edi wag, haha sensya na ha gnito lng kc aq ih, walng kwenta, sna hinde nlng aq penanganak haha, sorry hnde mu aq poide epag mlake kc ampanget q haha, im just a simple person kc, lowkey, im just nobody, wlng nagkakgsto sa wlang kwentang taong katulad ko",
		isFavorite: false
	},
	{
		id: 35,
		origText: "baliktarin mo yung salitang “YEHEY” oh diba walang nagbago ikaw parin gusto ko",
		isFavorite: false
	},
	{
		id: 36,
		origText: "crush🤩 na😭👍🏻 crush💞 kita😩😩💦 di🙁 mo😞😞 ba🤪 nadarama😒😒😒 crush😱 mo💋💋 rin😄🤞🏻 kaya😍🤣 ako😋😋",
		isFavorite: false
	},
	{
		id: 37,
		origText: "shoutout📣din💥sayo👉cute🥰mo🌟pa🚗din😊kahawig👀mo🤫si👻joao🤩bagay🦠naman🍃sayo🌐lods🎊",
		isFavorite: false
	},
	{
		id: 38,
		origText: "Baby 👶 ko 🙋🏻‍♀️ si 🥰 kulot 🎊inaalis 😵 nya 😽 na 🧚 aking 👉😚 lungkot 😭 sa 🤩 mga ✨ ngiti 😄 mo 🥰 ako'y 🥺 parang 💖 hinihigop 😘 hindi 🙅🏻‍♀️ ko 😤 na 🥵 talaga 💚 'to 🔥 kaya 💔 na 🥺 malimot 😭",
		isFavorite: false
	},
	{
		id: 39,
		origText: "good morning the loml 🥰💖 my honeybunch 🤩 sugarplum 🥰😍😍 Pumpy-umpy-umpkin 🎃 🧡 you're my sweetiepie 🥧💗 you're my cupcake 🧁😋💛 Gumdrop Snoogums-Boogums 🥵😍💋💘 You're the Apple of my Eye 👀💝 And I love you so and I want you to know 😚😳💖💖 That I'll always be right",
		isFavorite: false
	},
	{
		id: 40,
		origText: "Nakakakaba 😳 nakakaaliw 😄 Nakakakilig ☺️ nakakabaliw 😵‍💫 Napapakanta 😲 napapaisip 🤔 Napapangiti 😁 nakakabaliw 😵‍💫",
		isFavorite: false
	},
	{
		id: 41,
		origText: "kung ang tagalog ng ink ay tinta kailan moko ipapakilala kay tita?",
		isFavorite: false
	},
	{
		id: 42,
		origText: "after seeing this picture, i felt so motivated. it changed my whole life, now i’m a successfull person. i got 10 olympic gold medals, 6 oscars, 7 padma shree awards. next year i’m planning to buy moon",
		isFavorite: false
	},
	{
		id: 43,
		origText: "hello, single ka ba? ahhh wala lang gusto ko lang itanong. uhm btw kumain kana? ahhh wala lang din ayoko kasing nagugutom ka hahaha. wag mo sana akong mamasamain concerned lang naman ako sayo eh. uhm, anyway, pwede ka bang ligawan? ayaw mo? hahahaha okay tanggap ko naman sorry.",
		isFavorite: false
	},
	{
		id: 44,
		origText: "gusto mo ba ng space? ha? ganito na lang ba? space agad ang hinihingi mo? haha, nagkamali lang ako pero hindi mo kailangang lumayo sa akin. mahal kita, bakit mo ginagawa 'to sa'kin? anong space? walang space na mangyayari, aayusin natin 'to. sorry na.",
		isFavorite: false
	},
	{
		id: 45,
		origText: "Cong nDe KA Pra xakin , Kawawa k nmn . haixxttt...!! ☹️😭☹️😭☹️😭☹️😭",
		isFavorite: false
	},
	{
		id: 46,
		origText: `GRABE LORD, KAIBIGAN LANG HANAP KO. BAKIT PINAKITA MO AGAD SI "THE ONE"???`,
		isFavorite: false
	},
	{
		id: 47,
		origText: "i know you’re not aware of this but you have to be careful with what you post because my asthma isn’t okay with the way you take my breath",
		isFavorite: false,
	},
	{
		id: 48,
		origText: "Pag ako UMIBIG.,. Pag ako UMIBIG😍💘 Malinaw pa sa TUBIG💦😋 Pag akoy NABIGO 💔😭💔Malabo pa Sa DUGO👊Matamis akong mag MAHAL💏💑Sweet parang ASUKAL😍😘💞Pero pag may KARIBAL😡👊💔para akong KRIMINAL👿🔫(99 percent) ka sa buhay ko 😘💓 (100 percent) ka sa puso ko😍😘💘",
		isFavorite: false,
	},
	{
		id: 49,
		origText: "Baby 🤱baby🤱baby 🤱oh😯 Like 👍baby🤱baby🤱baby 🤱no❌ Like 👍baby🤱baby🤱baby 🤱no 😯oh🙅‍♀️ Thought 😩you’d🧍‍♂️always🤞 be 🐝mine😞mine👉😞 Baby🤱baby🤱baby🤱 oh😯 Like 👍baby🤱baby🤱baby🤱no❌ Like 👍baby🤱baby🤱baby🤱 no ❌oh😯 Thought 😩you’d 🧍‍♂️always 🤞be 🐝mine😞mine👉😞",
		isFavorite: false,
	},
	{
		id: 50,
		origText: "It😞 reALly 😭huRts😘 AnG😨m@gm4h4l😨 ng gAni2 🤫🤭kUnG cno🤭😰 phAng pInili kø 😰😯hiñdi 😳😳mhAkUha😤 Ng buø 😤hAngG@Ng g@nUn n4😰😰 l4ng ng4😞😞k@ilANg4n kØ tØng🤜✊ t@nGg4pin n@ s4 phUxxo 😤mHø😭😘👍 mhErhØn 😤nA 😍😰ngh@ng 😤ib4ng UmA4ngkin😃😆",
		isFavorite: false,
	},
	{
		id: 51,
		origText: "★BASTA POST NI IDOL ⓛⓘⓚⓔ KO YAN.!!★ SANA LAGi KANG ACTiVE AH... para my #LiKEkana my #COMMENT kapa.. BASTA WAG MONG KAKALIMUTAN MAG #LiKE_BACK AH..  Sinu dito Gusto #ACTIVE_LiKER & #ACTiVE_COMMENTOR.?? #PM_muko para #ADD kita. #CF_TO_CF TAU.! 👍ⓛⓘⓚⓔ👍",
		isFavorite: false,
	},
	{
		id: 52,
		origText: "#ACCETPED…√√√ Ung #HONESTLang na #TULAD_KO ah. >ACTiVE AKO sa ACTiVE SAKiN< HONEST PA.! PROMiSE!",
		isFavorite: false,
	},
	{
		id: 53,
		origText: "Sorry sa lahat. Sorry sa istorbo haha. Ayaw talaga saakin ng mundo. life is so unfair. Sana hindi nalang ako nabuhay haha. Sensya na ah eto lang kasi ako. Sorry wala akong kwenta. Sana di nalang ako ipinanganak haha.",
		isFavorite: false,
	},
	{
		id: 54,
		origText: "awts pain, hapdi, siphayo, kalungkutan, dalamhati, hinagpis, pighati, lumbay, pagtangis, iyak, lungkot, unhappiness, sorrow, dejection, regret, depression, misery, cheerlessness, downheartedness, despondency, despair, desolation, wretchedness, broken-heartedness, heartache, grief",
		isFavorite: false,
	},
	{
		id: 55,
		origText: "4kø😎 ay👀 pin4gpalįt💏 p3ro😀 d1🙅 y0n👎 mAs4k3t🔪 al4M kô😉 s4🅰️ s4řIl1😎 K0👌 n4 4kO💪 mA$ higit🖖",
		isFavorite: false,
	},
	{
		id: 56,
		origText: "i just ascended, descended, evaporated, and elevated on 1000 different levels in 1000 different ways",
		isFavorite: false,
	},
	{
		id: 57,
		origText: "🐱 pu$a ✨ k,,, b ❤️😺 kse 💚😽 ang araw 🌞 ay ndi 🚫⛔ sumisikat ☀️🌥️pag ang 💛😻 motor 🏍️🏍️ay 💯💗 walang 😭👀🥴 gasul ⛽🛢️",
		isFavorite: false,
	},
	{
		id: 58,
		origText: "kuya 👱‍♂️ bat 🦇 parang 🏃🏻‍♀️ may ✋🏻 kamukha 🤭 ka 👊🏻 parang 🙈 kamukha 😋 mo 🤩 future 😳 jowa 👻 and 👐 husband 🥰 ko 🤯 mahal 💑 na 💆🏻‍♀️ ata 😏 kita 😔 kuya 🤪",
		isFavorite: false,
	},
	{
		id: 59,
		origText: "pwede🙏 ba❓kitang ayain? 😁 saan? 😅 sa 🚶‍♀️ pasyalan 😉 sige😄 ba😉pagkatapos😮 ituloy🙈💚na 🎤sa kasalan 👰🥰 ha?? 🙀😪 baliw🤬 ka😵 ba 🌝🤔 eto😤 naman 🤒hindi 🔥mabiro 👁️😬 parang ✨💥gago 😡🤬ka 🤦kasi 🤸‍♀️😜 hehez🧖 halika dito 🥵😋",
		isFavorite: false,
	},
	{
		id: 60,
		origText: "ipaglalaban kita 🔫💯😍 kahit ✋masama pa ang tingin😠😤nila👀😠 sa pag mamahalan 💙🧡🖤💛natin💖💞💗💌💓 akoy sayo👉 at ikaw 👈ay sakin just think possitive 💭🤔 vibes 😔😟 ayokong tayong dalawa’y magkahiwalay 🙅🙅💏💑👨‍❤️‍👨👩‍👩‍👧‍👧👥 mahal kita💏❣️💘 makaka asa kang mag pakailanman😮🤪",
		isFavorite: false,
	},
	{
		id: 61,
		origText: `🤩parang🎈 na 🧐feel ko ang toxic 🤢bakit 💙may😞 certain 💅requirements🥶 ba😧 meron🏀 bang 💥ginawang 🙌rule ang💦  svt na 😵"oh I 🔊need to memorize or ☔recite🐧 this🍟 thing bago 👖ka 👗makapasok sa ⛱️fandom"🌭`,
		isFavorite: false,
	},
	{
		id: 62,
		origText: "nice joke 10/10 maganda yung construction ng joke, gumamit siya ng matalinhagang salita para impactful yung joke niya, yung delivery at timing ay on point, madaling magets at higit sa lahat relatable siya, in short, it's the perfect joke, natawa ako 3 times",
		isFavorite: false
	},
	{
		id: 63,
		origText: "People never change. Science tells us that our genetic imprint predetermined your faith, your character, your choices. Pinanganak kang bobo, lalaki kang bobo, mamamatay kang bobo.",
		isFavorite: false
	},
	{
		id: 64,
		origText: "Get 1GB data with access to ALL sites, valid for 1 day for only 10 Rewards points! It's the best time to be with Globe with exciting rewards available via the New GlobeOne app at http://glbe.co/NewGlobeONE.",
		isFavorite: false
	},
	{
		id: 65,
		origText: "sPAGHETTING 😩 PABABA ⬇️PABABA 🥵 NANG 🤩 PABABA 😤 SPAGHETTING 💀 PATAAS😭 PATAAS ⏫ NANG 👁️ PATAAS ☝️",
		isFavorite: false
	},
	{
		id: 66,
		origText: "Sa taas ⬆️Sa baba⬇️yan ay wap 🙈Kuha ka balde at mop🛢️🧹Yan ay wap 🔫Sabi ko ✂️wap 📌wap🔖 wap🥤Yan ay wap ✨Sopas sa caldero🍵Yan ay wap 😆😆😆",
		isFavorite: false
	},
	{
		id: 67,
		origText: "[closed] hello tl, this will be my last tweet. i'm really thankful for everything and for everyone that i have met here. i will be leaving twitter now kasi magchacharge lang ako. i wanted to say thanks each and every one of you, for making my twitter life happy.",
		isFavorite: false
	},
	{
		id: 68,
		origText: "TARA TARA MISS Q NA KAU ^3^❤️🧡💛💚💙💜🖤🤍🤎🤎💔❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💘💝💟🖕🖕🖕🖕🖕",
		isFavorite: false
	},
	{
		id: 69,
		origText: `NEED KO RIN PO PERA PANG SPOTIFY PREMIUM LANG KAHIT ₱7 LANG GUSTO KO LANG PAKINGGAN ANG AKING PLAYLIST NG WALANG BIGLANG MAGSASABI NG "CHICKEN JOY"`,
		isFavorite: false
	},
	{
		id: 70,
		origText: "TELELET 📞📳📞TELELET📞📳📞CAN I HALP U?👀🧐😈TELELET📞📳📞TELELET📞📳📞 BORK🐶🐶BORK🐶🐶BORK🐶🐶AYAYAY🎶🎶 AYM🤭🤪 YOR LITOL😝😍😍BATIRPLAY🦋🦋AYAYAY🎶🎶🎶AYM😅😅🤩YOR LITOL😘😘😍BATERPLAY🦋🦋AYAYAY🎶🎶AYM🤩😅🤩YOR LITOL😍🤩😍 BATIRPLAY🦋",
		isFavorite: false
	},
	{
		id: 71,
		origText: "kikiam🥐 lima🖐🏻 fishball🍡 lima🖐🏻 palamig🍹 lima🖐🏻 bayad💵 bente🖐🏻🖐🏻🖐🏻🖐🏻 sukli💸 lima🖐🏻 kung d k bibili❌💰 umalis kna🚶🏻‍♀🚶🏻‍♂🤨 ehh😜🎤 ohh😲🎤ice pop🧊🍧 lollipop🍭 pag na2naw🧊🥵 palpak😰😰 yelo🧊 malamig🥶🥶 pag na2naw🧊🥵 2big💧💧😮",
		isFavorite: false
	},
	{
		id: 72,
		origText: "Dahil dyan meron ka ng hanabishi appliances at meron ka pang libreng semento mula sa Republic cement (tibay mula sa loob) pwede ka pang mag karoon ng bahay mula sa lumina homes at meron ka pang bagong suzuki raider galing sa motor trade",
		isFavorite: false
	},
	{
		id: 73,
		origText: "it sobrang hurts 🔪💉 ang maglove 😍💔 ng like this 😖 kung sino 👱‍♂️ pang nichoose 👉👱‍♂️ ko i cant makuha 💫👎 ng whole 💔✨💔 hanggang like that 😭 na lang nga 👉👀 need ko 😪 tong i accept 🤝 na sa heart 💓 mo 👱🏻‍♂️ meron na ngang other 👩🏻 umaangkin ⛔ 😭😭",
		isFavorite: false
	},
	{
		id: 74,
		origText: "\"beh, cr lang ako.\" no be. don't say that. youre more than just a cr. everytime na maiisip mo na \"cr lang ako\" no. youre a wonderful person and we appreciate you so much. hindi biro maging cr. it must've been tough pero you did it. yuore so strong kaya sobrang proud kami sayo.",
		isFavorite: false
	},
	{
		id: 75,
		origText: "i think dapat bigyan din po natin ng chance yung mga itlog na maitorta kasi lagi po sila yung ginagamit natin pag nagtotorta tayo ng ibang mga foods diba so why can't we give them a chance diba",
		isFavorite: false
	},
	{
		id: 76,
		origText: "bat 😔😓 mo 😭☹️ako 👉🧝 hinalikan 😙👩‍❤️‍💋‍👩 di 🤮🤬 naman 😫🤧 ako 😢😰 kagandahan 🙍‍♀️💁‍♀️bigay 🤝💞 mo 👯🚶 sweater 👚🗯 gawa 😳🤳 polyester😔pero gusto👍👍mo siya👉👐sanaol🙀😿si heather🤪✨",
		isFavorite: false
	},
	{
		id: 77,
		origText: "haha sorry. sorry sa lahat haha. ayaw talaga sakin ng mundo, life is so unfair. sensya na ah eto lang kasi ako. walang kwenta sana di nalang ako pinanganak haha, im just simple person kasi, lowkey.",
		isFavorite: false
	},
	{
		id: 78,
		origText: "call me old fashioned, but i was born to serve ji. i do the laundry, cook dinner, clean dishes. i live to serve & carry out every demand of her on the slightest whim, its what i was put on this earth to do. if she cheats on me then its my fault! she caught me slipping.",
		isFavorite: false
	},
	{
		id: 79,
		origText: "hindi man ako kasing cute ng ex mo😉❤🙊at hindi man ako kasing lupit ng crush mo😘😍✌hindi man ako kasing tindi ng pinapangarap mo😊😧💋pero pag ako minahal mo ng totoo😯😉💖mamahalin kita hangang mag yelo ang impyerno💕😘at baka kiligin pati ang demonyo❤💖😈",
		isFavorite: false
	},
	{
		id: 80,
		origText: "Paul🥡🧍‍♂️, be carePAUL⚠️⚠️, you might PAUL🍂🍃🥀 in the swimming PAUL🏊‍♀️🏊‍♂️🏊‍♀️, you might hab a pimPAUL 🔴🔴, color purPAUL🖍🟪🟪, lasang apPAUL🍎🍏🍎",
		isFavorite: false
	},
	{
		id: 81,
		origText: "Pasensiya na, tropa, ako'y nalate. Si Jokjok, aking ka-date. Jokjok, ‘wag ka mag-alala. ‘Pag ako kasama mo, safe na safe. Good morning.",
		isFavorite: false
	},
	{
		id: 82,
		origText: "ang hirap talaga maging maganda tsaka maging sobrang hot  kasi nga talagang gusto nila agawin lahat ng nasayo ang yummy pa ng boyfriend ko diba package d lahat na nasakanya so ganon talaga minsan may mang aagaw sa boyfriend mo",
		isFavorite: false
	},
	{
		id: 83,
		origText: "Sa classroom may batas😏🤞 bawal⛔lumabas🚪oh bawal⛔lumabas🚪 pero😶 kung sinabi😏 na bawal⛔lumabas🚪 at nag-comply ka👈😤😎 ayy👁️👄👁️ pwede✅ na Pala ikaw👇 lumabas🚪",
		isFavorite: false
	},
	{
		id: 84,
		origText: "Alam mo naman na crush kita👉👈🥺☺️😳 cute😫mo pag nagagalit😤ka👇lika nga i-huhug kita🫂🤗wag ka nang magtatampo🤞☹️😘",
		isFavorite: false
	},
	{
		id: 85,
		origText: "Kala mo😤 hinde🙅🏻‍♀️masakit💔 yung😝 pinag sasabi mo😫 sakin?😳Na patay gutom ak0hh? Bakit?🤨Hindi bayun masakit😔E ikaw nga🙄 hinuhuli😟mo😤yung kalapati E, sabi nya tara joela kung huliin natin yung kalapati🤭🤫kuhanin natin masama yon oh🤨 sya yon sya😤😤 pag sabihan m0 sya🤬 🤬 pa na ninis hati na nga kami sa pag kain😤😤hindi naman sya ang bumili😔💔, hinde nya na lang hingiin🙄😔0 wag mona anohin wag mona sya anohin🤬😤 B4KIT nakikisali ka dito🧐 🤨🤨kahit hindi ka naman kasal😩😌 o bakit?Mo inaano pinsan k0🤔🤔iiyak na nga diba😒🙄 tapos un na nga wag mona anohin iiyak na nga diba😠😤 tapos yun na nga wag mona anuhin😒iiyak na nga eeyeyey🤪0h bakit🤨 oh bakit den😒😒 umalis kna aalis ako di naman ako dito e😠🙄bobo ka pala🤬😤 E bakit ka nag sasabi ng bobo bakit ka na namamangga??😠🤬🤬 Oy dondundunggn.",
		isFavorite: false
	},
	{
		id: 86,
		origText: "araw🌞 at🤣 gabi🌚🌚 hawak🤝🤝hawak🤫🤫ka sa😅😅magdamag sa dami👯🧑‍🤝‍🧑👭dami ng😆😆😆pag pipilian👍🌈💔❌ ikaw👉👈 lng ang naibigan💗🥰🥰💗🥰😘 ko na mahalin😝😇😇😝😇",
		isFavorite: false
	},
	{
		id: 87,
		origText: "alam😏mo naman🏃‍♀na👿love🙊kita😵cute😁😁mo👾pag😍nagagalit💀ka👹lika👦nga🤥ihuhug kta👯‍♂wg😅k👨‍🔧na💏mag😍💗tatampo🥺🥰 Anong pagkain ang di natutuwa pag may nag joke?🤪🤪😆😆🤣🤣 Ano?🤔🤔😏🤩 Edi Nuggets 🤣🤣🤣🤪🤪🥰🥰😍😍 Kasi di nya nug gets 🤣🤣🤣🤣🤣✌️✌️✌️🙏🙏🤘👌",
		isFavorite: false
	},
	{
		id: 88,
		origText: "tamang paggamit ng “ng” at “nang” ng — ay ginagamit kapag sinasagot nito ang salitang “kailan” nang — mainlab ako sa ‘yo akala ko’y pag-ibig mo ay tunay pero hindi nagtagal lumabas din ang tunay na kulay",
		isFavorite: false
	},
	{
		id: 89,
		origText: "Alam mo naman na crush kita👉👈🥺☺️😳 cute😫mo pag nagagalit😤ka👇lika nga i-huhug kita🫂🤗wag ka nang magtatampo🤞☹️😘",
		isFavorite: false
	},
	{
		id: 90,
		origText: ". byE. . tnx sa Lht. . ingAt ka lage :(( kunG maii prob kA. . lapit ka Lng sakiN. . huh ????. . . byE. . . ayw na kitanG makitA. . makauxap maka cHat. . . . .tama na unG nakita na kitA. . na naging mag kaibigan tau ... tnx for everythinGx. . malayA k nA. . :((",
		isFavorite: false
	},
]

export default data;