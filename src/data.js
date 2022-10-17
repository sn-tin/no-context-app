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
		plainText: "It’s me and my jowa wah uuwi na sya uuwi na sha wah maghahanap ng iba maghahanap ng ib- /tinakpan bibig/ niyakap (tumugtog ung coz you are the one the only thing) (740)",
		origText: "It’s me😡🤔🙄and😘🥰🤤my jowa💍🥳😱wah😂😱👩‍❤️‍💋‍👩uuwi na sya🥺🥺😄uuwi na sha😘🥳💘wah😄💍💘maghahanap ng iba💕🤤😊maghahanap ng ib-💓💓 /tinakpan bibig/ niyakap ( tumugtog ung coz you are the one the only thing 🥺💓💓 ) (740)",
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
		plainText: "sabi ng mama mo, tita na lang daw ang itawag ko sa'yo, oh sa kanya. tapos, ngayon, mama ko na sya, ang tita mo noon, ngayon. kaya, pwede na tayo mag sama kasi aksept, akcipt na tayo nila, ng mama mo, sa tita ko noon.",
		origText: "sabi ng mama mo, tita na lang daw ang itawag ko sa'yo, oh sa kanya. tapos, ngayon, mama ko na sya, ang tita mo noon, ngayon. kaya, pwede na tayo mag sama kasi aksept, akcipt na tayo nila, ng mama mo, sa tita ko noon.",
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
]

export default data;