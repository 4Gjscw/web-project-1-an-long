const drawBtn = document.querySelector('.draw-btn');
const drawDiv = document.querySelector('.draw-btns-div');
const cupYes = document.querySelector('.cup-result-div-yes');
const cupLaugth = document.querySelector('.cup-result-div-laugh');
const cupNo = document.querySelector('.cup-result-div-no');
const loadingIcon = document.querySelector('.loading-icon');
const drawcup = [0, 1, 2];



drawBtn.addEventListener('click', function () {

    const randomNo = Math.floor(Math.random() * drawcup.length);
    drawDiv.style.display = 'none';
    loadingIcon.style.display = 'block';

    //loading effect
    setTimeout(function () {
        if (randomNo === 0) {
            cupYes.style.display = 'flex';
        } else if (randomNo === 1) {
            cupLaugth.style.display = 'flex';
            //automatically jump back to drawing animation after 10 sec
            countDown();
            setTimeout(function () {
                cupLaugth.style.display = 'none';
                drawDiv.style.display = 'flex';
            }, 10000);
        } else {
            cupNo.style.display = 'flex';
            //automatically jump back to drawing animation after 10 sec
            countDown();
            setTimeout(function () {
                cupNo.style.display = 'none';
                drawDiv.style.display = 'flex';
            }, 10000);
        };
        loadingIcon.style.display = 'none';
    }, 1000);

    //the sec display on the return button of a laugh or no cup will be extracted and displayed every second of change
    function countDown() {
        let timeleft = 10;
        let downloadTimer = setInterval(function () {
            timeleft--;
            const countTimer = document.querySelectorAll('#countdowntimer');
            countTimer.forEach(function (item) {
                item.textContent = timeleft;
                if (timeleft <= 0) {
                    item.textContent = '10';
                    clearInterval(downloadTimer);
                };
            });
        }, 1000);
    };



});


//when it's no or laugh cup click the button and let the drawing animation display again

const againBtn = document.querySelectorAll('.draw-again-btn');

againBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        cupLaugth.style.display = 'none';
        cupNo.style.display = 'none';
        drawDiv.style.display = 'flex';
    })
});




//riddle modal control
const riddles = [
    {
        img: './draw/0.gif',
        content: '&#91;籤首&#93;百事皆吉、求財大利、耕作大收、經商有利、家運平安、運途好、功名有望、婚姻可成'
    },
    {
        img: './draw/1.gif',
        content: '只要太陽一出來，一切就會雲散，只要光明一普照，世間便見清淨太平，前途是光明正大，只要努力前進，正是條條大路通心竅，只要您做事問心無愧，神明自會保佑您，萬事清吉平安。抽到此籤，表示謀望難成，但是不可灰心，只要鍥而不捨，繼續追求，認真努力，自然有成功的一天。求財交易：利潤輕微。問功名：有志竟成。問婚姻：有情人終成眷屬。問訴訟：若蒙冤終獲平反，如係民事以和為貴，大命平安。移居得安：疾病終會痊癒。凡事大吉昌．作事難成，成者大吉．家事無憂．家運平安大吉．求財先大進後小利．婚姻允成．求兒大吉．六甲頭胎男，二胎女．功名望後有成．尋人得回．遠信速至．失物在東急尋能還．歲君清吉．出外平安．經商如意．行舟有大財．移居得安．治病未日&#40;月半&#41;痊安．求雨尚未．官事理斷分明．耕作得利．築室清吉．墳墓地穴大吉．來人月光在．討海漸漸得利．作塭大吉利．魚苗不畏．月令遂意．六畜好．古人：包公請雷驚仁宗　包極審張世真'
    },
    {

        img: './draw/2.gif',
        content: '冬天到了，春天還會遠嗎？你看看周圍的景色多美，那百花正在含苞待放，嬌嬌欲滴，只要那春光一到，立刻會有一番氣象，正是春到碧桃之上，花放滿城錦繡，鶯歌綠椰樓前，春生大地文章。抽得此籤，表示目前正是艱困的時候，但如能突破，接著而來的，必須一番鴻圖大展，故謀事失敗不必灰心，東山再起，必獲成功。求財交易：眼光要放遠，不可只求近利。問功名：希望不大，好好充實自己，等待秋天再進。問婚姻：很有希望，好消息快到。問疾病：新春可癒。問訴訟：要求和，移居平平。外出旅行春天最好，遷移或變動職位，目前不宜。凡事春天到，作事春成美，冬不佳，家事必得進益，家運福祉茂盛，婚姻永偕伉儷，求兒適宜，六甲生男，求財如泉湧&#40;先有後無&#41;，功名二次成，秋進連中，歲君中和，治病老不好，少平安，出外春夏好，秋冬呆，經商大吉利市，來人南方，行舟有大財，移居平平&#40;不可&#41;，失物謹尋在，遲者無，求雨甲子日得有，官事完局，六畜興旺大利，耕作春季如意，築室大吉，墳墓光前裕後，討海春有冬無，作塭可慶獲利，魚苗大利，月令不畏，尋人南方，遠信春天到。古人：陳東初祭梅得救　趙子龍救阿斗　薛交薛癸旁州遇採樓得繡球'
    },
    {

        img: './draw/3.gif',
        content: '勸你不要再三心兩意了，姻緣天註定，是不能勉強的，所謂有緣千里來相會，無緣對面不相逢，天作之合，佳偶天成緣分一到，你一定會遇到你追尋的明珠。抽得此籤，若問婚姻，乃告訴當事人，情要專，自然有情人終成眷屬，問事業，告訴當事人要定性，不可換來換去，所謂十做九不成，即使受了一次挫折，要再接再厲，必獲成功，如果稍受挫折就放棄不做，就永遠沒有成功之時。問求財：外出有利，問功名：尚須努力，問疾病：情況不穩，問移居：可得平安。六甲先男後女。凡事吉，作事二次成，家事餘興且喜，家運和氣，後得祥瑞，婚姻大吉，求兒吉，六甲先男後女，求財後遇貴人大興，功名後科連登，尾有，歲君安和，治病命不畏，平安，出外向南方遇貴人，經商先利平，後大財，來人立即到，行舟漸得大財，移居得安，失物月光必在，求雨過日自有，官事不畏，破財，完局，六畜可納，耕作下冬好，築室大吉，墳墓永裕後崑，討海晚有大利，作塭和者必獲厚利，魚苗後得大利，月令漸得春風，尋人得回，遠信守候佳音。古人：朱德武入寺相分明　摧文德胡鳳嬌到家空成婚'
    },
    {

        img: './draw/4.gif',
        content: '風平浪靜，船行一帆風順，正像中秋明月，圓滿皎潔，凡事不必多憂慮，福祿自有不必求，時來運轉，自然喜氣盈門，這是一首很幸運的籤詩，表示一切如意順調，圓滿達成，如果是一位應考的人，抽到此籤，是金榜題名的好兆。這首籤詩問功名：功名有望，福祿全以外。問訴訟：表示得直。問疾病：可以痊癒。問婚姻：表示幸福美滿。問移居：一切安好。凡事成者大吉，作事有成，家事綿綿齊輝，家運大獲吉昌，婚姻和諧，月半成，求兒好，六甲先男後女，求財在家好，出外凶，功名顯祖榮宗，歲君平安，治病近日痊癒，出外求財求事如意，經商大吉利，來人即到，行舟風平，大吉，移居可慶，失物月光在，求雨月末即到，官事破財，求貴人解，六畜興盛，耕作有收，築室門庭興旺，墳墓可得瑞氣，討海有大財，作塭有望，魚苗月光好，月令好，尋人快遇，遠信遲到。古人：盧龍王次子招親 趙子龍救阿斗 '
    },
    {

        img: './draw/5.gif',
        content: ' 只恐怕前去途中命有變故，勸你莫著急，做事既然搶不著先機，就暫時守住長江，看看命內有太白金星保佑自然不會有什麼大事發生，這首籤詩暗示，做是要有先見之明，如果時機錯過了，就不宜妄動，譬如開工廠，當景氣好時，你才開始設廠，等到你生產時，景氣已經衰退，你就吃虧了。抽到此籤，表示求謀不宜過急，所謂欲速則不達，且須等待時機。問婚姻：對方可能有意中人，成功希望不大。問訴訟：則和解為宜。問疾病：則宜多禱告神佛保佑。問功名：有希望，但不可心躁。求財平平，做事葉宜按部就班，不可好高騖遠，才不至失敗。問移遷或變動職位不可，總之不可妄動，再正心修德，自然安泰。凡事待時機．作事顛倒．前凶後吉．家事有貴人，團圓．家運先被邪。後吉祥．婚姻多口舌，不吉．求兒不佳．六甲頭胎生女次生男．求財以待時來&#40;不吉&#41;．功名必遇，防徼．歲君平安．治病月光癒，暗不吉．出外下半年好．經商先利，後遇貴人．來人遲後到．行舟出外有風波災．移居不好．失物謹尋在，遲即無．求雨朝夕即有，官事宜和拖尾&#40;被官欺，后完明&#41;．六畜不祥．耕作內有不足．築室不吉．墳墓先平後得佳氣．討海邪病先輕後好．作塭先難後得．魚苗先無後有．月令淡淡．尋人待慢．遠信必阻遲至。古人：王剪戰袁達　韓文公過秦嶺遇霜雪凍 '
    },
    {

        img: './draw/6.gif',
        content: '風雲招來暴雨，一片汪洋，天災氣候造成了傷害，一個人命裡無時莫強求，既然沒有和合的希望，就不必再出外奔跑了，這首詩，告示當事人，命裡有時終是有，命內無時莫強求，強求也是沒有用的，就像那不測風雲造成的天災，乃是一種不可伉力的災害，是莫可奈何的呀，這首籤詩如果是占問合夥，乃是不吉之兆，因詩中有[命內此事難和合&#93;之句，據有人XX君說，他與人合夥設立工廠時曾到寺廟抽得此籤，當時想作罷，後因籌備已久，所費不少，乃勉強湊合，後來該工廠合夥人，竟將該廠帳款拐逃國外，正應了&#91;耕逢一足出外鄉&#93;之句，抽到此籤，問求財，不吉無利可圖。問婚姻，莫強求，宜另找對象。問謀事，只要平心靜氣，順其自然，不可強求，自然禍去福來。問訴訟，宜和解，莫信讒言。問遷移和變動職位，不可妄動，出外無貴人。凡事待望．作事不成局．家事家庭相爭．家運有怪必防．婚姻不宜．求兒不可．六甲男高貴，晚投枝．求財空有．功名難望．歲君破財．月令不吉．治病邪作病，險不吉．出外無貴人．經商財本耗散．來人月光即到．行舟不好．移居且慢．失物運如此．路難逢．求雨不到則久．官事賠錢，拖尾．六畜不佳．耕作無收．築室犯凶星．墳墓地運不佳．討海邪祟不利．作塭失利．魚苗失利了錢．月令不遂．尋人遲遇．遠信無望。古人：烏精亂宋朝 烏有作鳥'
    },
    {

        img: './draw/7.gif',
        content: '雲開月出，大放光明，不須再問進退，可以直奔向前程，婚姻皆由天註定好的，只要是天作之合，一定美滿，抽到此籤，如果問運途，可以說是&#91;否極泰來&#93;過去的烏雲已經散開了，被遮的月亮重放光明，就是壞運已過，現在已邁入好運了，如果問婚姻，表示佳偶天成，有情人終成眷屬，此籤做事可以成功，問求財，開始見利，問出外移居，則不利，問疾病，則有驚無險，問訴訟，和解最好，問功名，少年成就，老無，問失物，月光在，月暗難尋，六甲先男後女。凡事後成．作事月光成．家事冒險，平安．家運漸漸平安．婚姻月光成．暗不成．求兒好．六甲定必生女．求財有成．功名少有成，老無．歲君好．治病女平，男晚好，少險，老不畏．出外滿路異香．經商成者大吉．來人月中到．行舟須當先防．移居不吉．失物月光在，月暗無．求雨初無，月尾有．官事破財，完局．六畜興旺．耕作有收．築室月中好．墳墓地勢甚美．討海合和吉，不合凶．作塭須防風水．魚苗月中吉．月令淡淡．尋人月中遇．遠信可喜。古人：國公暗察白袍將．國察有作包訪．尉遲恭掛帥．'
    },
    {

        img: './draw/8.gif',
        content: '看看田裡結成了稻穗，知道今年又豐收了，辛勤的耕耘，必有豐盛的收穫，這事是兩相關的，看到好的收成，辛中多高興，回到家裡，來跟妻兒們同在一起，快快樂樂地跳舞一番，這首詩是很好的籤詩，昔日的流汗，今天總看到豐滿的收成了，如果沒有昔日的流汗，那有今天的收成呢。抽到此籤大抵先苦後甘，先否後泰。如果是問婚姻，表示有情人終成眷屬。問事業要腳踏實地去做，不可做投機，投機必失敗。問功名，在秋天有希望，如果是冬天就待明年，一再充實自己。出外不可，六甲先男後女，失物不日即歸，移居得安。凡事和者得，不和失．作事先難後興．家事進益團美．家運平安．婚姻成，大吉，兩全其美．求兒吉．六甲先男後女．求財下半年好．家利．功名二次得進．歲君和氣．治病少不畏，老不好．出外不可．經商有利必得．來人速到．行舟得財．移居大吉．失物速尋必在．求雨月尾即有．官事二次完明，破財．六畜大吉．耕作下半年有收成．築室居中．墳墓地運有合．討海好．作塭允收．魚苗大利．月令破財，下年不畏．尋人速至．遠信速至。古人：薛仁貴回家．朱并回家．'
    },
    {

        img: './draw/9.gif',
        content: '你我好比龍虎鬥，卻一起在那深山裏，沒有任何顧慮，卻不知這種相愛乃是一種錯誤的決定，恐怕他日會變成你我無干的局面，這首籤詩暗示當事人，如果兩個志趣不合的人，勉強湊合一定無法持久。所以如果問婚姻，是難偕白頭之兆。問合夥做生意，最後會拆夥，而且恐怕會鬧得不愉快。問謀事，因競爭的人太多，恐怕難遂意。問求財，問功名，都是一樣很難。移居出外旅行變換職位都不吉，宜靜守不宜妄動。'
    },
    {

        img: './draw/10.gif',
        content: '開花結果卻是一半落空，收獲不多，可惜妳今年的光陰算是虛度了，太陽漸漸西落去，俗語云：&#91;太陽雖好，近黃昏&#93;勸你呀？看開一點吧，還是不要在奔波了，這首籤詩暗示當事人徒勞無功，雖然過去有過一段輝煌的日子，但結果成就卻不多，有一半以上是虛度擲光陰了，所以籤詩勸你，還是腳踏實地，作一些實在的事，何必去空忙一場呢？抽到此籤，問出外正如籤詩所說往返空勞，所以不好也。問婚姻，因籤出有結子一半枯，今年汝虛度之句，恐怕難成。問移居變動職位，均不吉。求財無，失物難尋，六甲生男，女貴氣。凡事拖尾．難解難脫．作事難成．家事恐防短壽．家運難安．婚姻難成．求兒不可．六甲子難得．求財上半年空破財，九月過不畏．功名枉費，難得．歲君不順．治病月半安月尾死．出外不可．經商不好賠錢．來人月底間．行舟謹慎無害．移居不允．失物難尋．求雨朝夕即到．官事不好，破財。六畜不吉．耕作五分平平．築室有災星．墳墓地犯退敗，必遷．討海全無，不好．作塭無望，蝕本．魚苗得失．月令難通．尋人月尾回．遠信難至。古人：岳飛掠秦檜．奉吟受災。'
    },
    {

        img: './draw/11.gif',
        content: '靈雞一啼，天漸漸亮了，凡事就看明天吧，雲開月出，光照天下，你便可看到太平景象了，這首籤詩的寓意是，黑夜過去了，雞一啼黎明就接著來了，一個人一生，不會都是走霉運的，當時來運轉，正如雲開月去，會有一翻新氣象出現，抽到此籤，問做事、求財，可以說漸漸有希望了，靈雞&#91;酉&#93;可以當做八月解說，就是說八月以後漸漸好，子、丑、寅可做年尾十一月、十二月和明年正月解&#40;當然也可以當做子丑寅日解&#41;，這首籤詩是苦盡甘來之兆。問功名，表示你十寒窗有出頭的日子。問婚姻，表示有情人終成眷屬。問移居平安，出外可行。六甲先男貴氣，失物子丑寅日尋在。凡事作不和，子錢安．作事子丑寅日必成．家事平好．家運漸漸得居春風．婚姻終成．求兒不可．六甲先男，貴氣&#40;子媳缺&#41;．求財漸漸有收。功名費了工，八月好．歲君順吉．治病大命不好，子丑寅日過不畏．出外子丑寅日可行．經商不利．來人近日到．行舟不可．移居平安&#40;子丑寅日抽好&#41;．失物子丑寅日尋在．求雨近有．官事有人和吉，三月完局．六畜可納．耕作半收．築室好．墳墓平平．討海前呆后微．作塭小收微利．魚苗小利．月令不畏．尋人牛虎日．遠信牛虎日。古人：韓文公過秦嶺湘子掃霜雪．高求楊戩當權。'
    },
    {

        img: './draw/12.gif',
        content: '長江的風浪漸漸平靜了，現在船隻可以前進，並且可以安寧無事了，只要積極前進，一定會有貴人來相助，即使遇到困境也能逢凶化吉，化險為夷，抽得此籤，先凶後吉，逢凶化吉之兆，如有困難現在慢慢可以化解，不必憂慮，否極泰來，風浪終會過去的，一生多貴人相助，所以常能逢凶化吉。移居出外，旅行均吉。如問訴訟，可逢貴人而化平安。問功名，有貴人提拔。問婚姻，只要媒人出面，婚談可成。求財小有，大命不畏，失物要急尋。凡事月光好．作事進行有利．家事光耀門閭．家運漸安．婚姻可合成者吉． 求兒吉．六甲先男高貴．求財好運，得意．功名難得．歲君順吉．治病月光好，老不痊．出外有貴人扶．經商大吉．來人近日到．行舟大吉．移居平正．失物急尋在，遲難尋．求雨遠．官事了錢．求貴人脫．六畜可納．耕作平平．築室慢即可．墳墓地勢有合．討海微利后有．作塭漸得如意．魚苗中有利．月令破財不遂．尋人近日．遠信速至。古人：智遠戰瓜精　劉志遠戰瓜精&#40;劉志遠投軍&#41;桃花女流勿太歲'
    },
    {

        img: './draw/13.gif',
        content: '命中正遇到&#91;羅孛&#93;兇星的關頭，雖然你用盡心機也避免不了，就是問神祈福，還是躲不過去，正向船遇蹈沙灘，進退不得，抽到此籤，表示你目前正在進退維谷的時候，問出外移居，不吉，老人抽到此籤表示一生空費心機，老來已無甚希望，若年輕人抽到此籤，不必難過，正式考驗你的時候，只要你能克服困難，自有光明的前程。問功名，還要充實自己，目前希望不大。問婚姻，緣份未到，恐難成，不宜勉強。問疾病，須謹慎醫治，年輕人不畏，老人則恐有問題。問訴訟，恐會拖尾。問六甲，生男貴氣，失物未日再拖人尋有。凡事不吉．作事先難後興．家事門庭起風波．家運人不安，邪作祟．婚姻難合．求兒不可．六甲臨產危險．求財犯活鬼，下年無．功名費工，望後得進．歲君淡淡&#40;凶事不美&#41;．治病犯&#40;太歲&#41;必死，未不畏．外不可．經商失運．來人難望．行舟不順，失利．移居不可．失物錢難尋，未日&#40;半月&#41;在．求雨近日無．官事大呆．六畜不吉．耕作小收，不利．築室犯災星．墳墓地勢不吉．討海不好，無財，失利．作塭防風水，失，虧本．魚苗待機可以．月令正月至六月止．尋人難。免望．遠信音息魚沉。古人：撐渡伯行舟遇太歲　三藏被紅孩兒燒'
    },
    {

        img: './draw/14.gif',
        content: '財運來臨漸漸顯明，正向那花開花謝後，結成滿樹的果實，不必焦急，且寬心等待中秋節到來，你所等待的朗君將來與你共渡那太平的好日子，抽到此籤，如問事業，表示你的事業已有轉機，你的財運也將慢慢到來，即使目前財利不顯，但只要耕耘，必有收穫，只怕不肯用心隨世浮沉，就像那在花開花謝，月亮盈虧，得失相伴，功名也是一樣，如果不去充實自己，只相碰運氣，是難得有成就的。問婚姻，有情人終成眷屬之兆，婚談可成。問訴訟，只要出以至誠，必能平安無事，能破財消災是為上策，意氣之爭，得不償失。問失物，往西方尋，大命月半不畏，外出平平，移居平安。凡事大吉．作事決意成功．家事光前裕后，可喜．家運平安．婚姻成好．求兒平正．六甲先男後女，富貴．求財月光進，漸暗少．功名可喜．歲君中和．治病險，月光過不畏．出外不可&#40;必得貴人&#41;．經商漸得．來人月尾到．行舟月圓過大吉．移居吉&#40;不可&#41;．失物西方尋，月光在，月暗無．求雨月半無，月尾有．官事破財後，完明．六畜大吉．耕作早晚有收成．築室子孫永發其昌墳墓得其地，後大吉．討海月光過，大吉．作塭先微，後有大利．魚苗大利．月令頭破錢，後如意．尋人月中至．遠信速至。古人：桃園三結義　曹操賜雲祥馬袍贈金銀。'
    },
    {

        img: './draw/15.gif',
        content: '太公到八十歲，仍然懷才不遇，只好衣渭水河釣魚等待時機，一直等文主王他的賢名，來拜訪他，才時來運轉，受到文王的重用，你目前的情況，跟太公的遭遇一樣，請不必多問，還是勸你學姜太公的作法，等待運氣亨通時，抽到此籤，表示目前做事總不如意，但別灰心，這不是因你不努力，而是時機未到，目前最重要的是充實自己，只要真才實幹，必有重用你的時候，決不會被埋沒的，問功名，不必急躁，你是屬於大器晚成型。問移居，還是時機要等待，一動不如一靜。出外無利可圖。問訴訟，以和為策。問婚姻，是屬於晚婚命，問大命漸漸愈。凡事大破財，求解和．作事難成．家事平平．家運平平．婚姻配偶慢成．求兒不可．六甲先女後男&#40;先男後女&#41;．求財晚即發．功名難就．歲君先平後吉．治病求平安，十日險．出外慢日可行．經商漸且候時．來人月尾有．行舟不如意，有事．移居待時．失物緊尋得，遲者無．求雨不日到．官事不吉．求貴人和．六畜漸且退步．耕作無收．築室漸且退步．墳墓遲必發．討海無財和者吉．作塭無望．魚苗且守慢至．月令不遂．尋人不可急．遠信遲延。古人：渭水河太公釣魚　武吉挑柴打死人&#40;武吉遇師&#41;'
    },
    {

        img: './draw/16.gif',
        content: '福份不須去尋求，也不須去製造，你盡管用盡心機想去追求，結果還是失望，休想得到，因為陽世裡的人不知陰間善惡果報的事，一個人在陽世所作所為，到了陰間都要接受審判，作惡多端的人，須要下地獄受苦刑，任不得你自由，這首籤詩提示得籤的人，一切運氣好壞，不是你可以祈求製造，乃是上天的安排，用以報償你的心田好壞，所謂﹁積善之家必有餘慶﹂，積惡必有惡報，事時日未到不是天理不報，因此如果你目前未得好報，做事營謀未能遂意，求財沒有得到，不必強求，也不必怨嘆，只有多努力，積善因終必感動上天，賜給你好運氣。問目前運途，浮沉不定。問功名，難有進展。問婚姻，緣份未到，談婚難成。問移居，外出均不吉，一動不如一靜。問訴訟，須要修心，不可意氣用事，以和解為宜。問六甲，先男後女。問疾病，過辰未日不畏。問失物，難尋，如在辰未日可尋到。凡事恐防風波災．作事退步．家事恐防有變．家運陰邪，求神解決．婚姻不合，有鬼作怪．求兒不可．六甲先男後女&#40;子媳虛&#41;．求財春夏好秋冬呆．功名難得．歲君浮沉．治病必危，有陰公作祟．未日&#40;半月&#41;過不畏．出外防險．經商難就，了錢．來人遲慢．行舟不如意，惹失．移居不可．失物難尋，未日&#40;半月&#41;在．求雨不日到．官事緊防刑事．六畜不可納．耕作無收．築室不可．墳墓地勢不佳．討海有陰鬼，難得．作塭難如意，要忍耐．魚苗失利難如意．月令了錢．尋人遲慢．遠信必有失音。古人：李世民遊地府。'
    },
    {

        img: './draw/17.gif',
        content: '回憶往事心頭舊恨重重未消除，正如家中發生災禍，雖然沒有臨到本身，但此恨綿綿無盡期，你需要謹慎提訪再有事故發生，最好多作好事，只要有善因，必能逢凶化吉，而且在辰已交會的時刻，得到很圓滿的結果，此籤暗示抽籤的人，即使經歷了無數次的失敗，無數次的辛酸，無數次的恨事，但不必去記掛它，還是東山再起，再振作努力去幹，必有出人頭地的一天，此籤有貴人，但必須心田好，所以此籤詩說﹁須當謹防宜作福﹂只要心地善良必能逢凶化吉，化險為夷，並得天賦福運。問功名，只要充分準備，即使一次挫折，算不得什麼，再次必取。問婚姻，緣份已到，婚談可成。出外不吉，無利可圖。移居隨意。問訴訟，辰已日可完局，大命有貴人，六甲先男後女。凡事人害緊，和無事．作事先難後易．家事和為貴．家運居之則安．婚姻大吉．求兒不可．六甲先男後女．求財勤儉必得．功名修陰德必中．歲君淡淡．治病求神庇祐，辰未日&#40;半月&#41;過漸癒．出外辰巳日則可．經商平平．來人辰未日&#40;半月&#41;到．行舟平平，財輕．移居隨意，不可．失物辰巳日在，難尋．求雨初初到尾．官事和為貴，不和凶．六畜納者不可．耕作平平，少利．築室有犯陰邪．墳墓平平，小吉．討海微利運不辰．作塭運不合，求小利．魚苗微利。 27月令不畏。漸漸平安．尋人待時．遠信慢。古人：姜尚未卜吉凶事。'
    },
    {

        img: './draw/18.gif',
        content: '如果你問這中間的因果，請看看&#91;祿馬貴人&#93;幫助你前程的發展，就可領悟，如果你能得到&#91;貴人&#93;幫助，自然一切順利，一切都能圓滿和合，抽得此籤，表示你這個人心田好，善心自有報，做事求財自然會有&#91;貴人&#93;幫助，使你成功。問功名，這是大吉利之兆，可以積極去發揮，表現你的才能，你的前程是遠大光明的。問婚姻，是佳偶天成的好預兆，婚談可成，有情人終成眷屬可喜可賀。出外有貴人相助。移居均吉。此籤惟問疾病，拖而後須有貴人出現才會痊癒的希望。此籤求財不多。問訴訟，拖尾和解為策，不宜再拖，六甲生男，問失物月光在。凡事忍耐求和．作事貴人利，和氣成．家事圓滿進財．家運瑞氣盈庭．婚姻大吉．求兒月光好，月暗平．六甲先男．求財不多．&#40;萬金萬貫連得&#41;．功名有望．歲君得利．治病痊癒．出外有貴人提攜．經商大進利市．來人月光到．行舟得財．移居大吉．失物月光在．求雨不日即到．官事速和公判．六畜可好．耕作有收．築室祥氣盈庭．墳墓福人必得福地．討海和者得大財．作塭獲利三倍．魚苗大利．月令平安吉慶．尋人在．遠信佳音速報。古人：楊管醉玉仝坐馬　秦叔寶救李淵般家'
    },
    {

        img: './draw/19.gif',
        content: '俗云：&#91;生死由命富貴在天&#93;一個人的窮通福禍富貴貧賤，都是上天安排，命裡註定，所謂&#91;命裡有時終須有，命裡無時莫強求&#93;如果你期望太高，必定會大失所望，而且耽誤了你的佳期，既然此路不通，何不回頭走舊路，說不定還能雲開月出，見到光明的前途哩，一個人當然須要有開創局面的雄心，但野心太大超過了本身的能力，只想好大喜功，反會招致失敗的，還有&#91;謀事在人成事在天&#93;，同樣的才能，同樣的努力，並不一定就有同樣的成功，這裡面當然有&#91;命運&#93;的因素在作祟，所以明理的人，不要太奢求，此籤問事業，創新不吉，守舊安泰。問求財不多，若財多則身弱，反為不吉。問功名，難得。問婚姻，平正。問移居，外出都不吉。問失物月光在，六甲先女後男。問訴訟，事宜拖尾，大命險而月光就漸漸好。凡事被人害，理完&#40;終&#41;明．作事月光好．家事和而貴，犯相剋，望神佛．家運不佳，可住平安．婚姻不成，由天註定．求兒慢一步．六甲先女後男，得貴，作福出麟兒．求財守機而作．功名難得．歲君照舊．治病險，月光好，若暗不癒．出外不可．經商難如意，守待時．來人月頭到．行舟平平．移居可．失物月光在，暗難尋．求雨未有．官事命運犯刑相剋，拖尾．六畜不可．耕作不可依舊．築室不可．墳墓舊墳重興．討海運微不逢時．作塭守運心亦虧本．魚苗應月明．月令桂候．尋人暫待．遠信將近就至。古人：紅孩兒捷住路頭　范丹妻未出身殺九夫'
    },
    {

        img: './draw/20.gif',
        content: '前途功名未能得意發展，恐怕是因為命裡還有交錯坎坷的運氣，家庭不可分兩家，如果分兩家一定會有損失，必須防備，所以勸你還是退守本分，不必唉嘆氣，這首詩警告當事人，要注意家庭問題，不要只顧事業，而忽略了家庭，更不宜金屋藏嬌，以免家庭革命，這是走桃花運的預兆，故須謹慎防美人計，問財運，到目前都不能如願，若有亦是前手來後手空，不宜過份強求，須防破財或劫財。問婚姻或家庭運，均不吉，婚談如無感情不易成功，婚姻須防有變。問功名，待來年，今年恐無希望。問出外做事及移居，均不宜妄動。問官事，有拖尾的可能。問六甲先男後女，失物難尋。問疾病，險如未日過不畏。凡事了錢，拖尾，不合．作事無成．家事恐生孽物．家運防邪怪作之災．婚姻難合．求兒不可．六甲臨產危險．求財不得．功名科運無，難進中．歲君坎坷．治病大命險，未日&#40;半月&#41;好．出外無運，不可．經商不就．來人未日&#40;半月&#41;到．行舟失利．移居不可．失物不得了工．求雨無．官事拖尾破財．六畜不合．耕作難收．築室不得完美．墳墓不可葬，地不合．討海有陰公作祟．作塭命運蹉跎，無望．魚苗失了資本．月令陰邪作病，難遂．尋人延緩．遠信音信沉沒。'
    },
    {

        img: './draw/21.gif',
        content: '時方佛法無邊神通廣大，只要你信仰虔誠，即使遭遇大難禍患，結局自亦不同，所謂&#91;吉人天相&#93;自然逢凶化吉，化險為夷，何況陽光普照之下，又有&#91;貴人&#93;到家裡保佑你呢﹗這首籤詩，表示你有困難，但只要你能誠敬做事，自然會克服困難，但只看你的毅力和努力如何遭遇困難，人人都會有，只要有信心與努力才會成功。此籤問求財，表示先難後易。問功名，能修善自有神助。問婚姻，有誠心有媒人可成。問訴訟，先兇後吉。問外出平平，移居可行。問失物即尋可在。問疾病，有貴人。問六甲生男，家運中和。凡事貴人扶持．作事和大吉，散得失．家事門庭可恭可賀．家運必得吉昌．婚姻難成．求兒好．六甲先男後女．求財先無後有．功名望後科．歲君中和．治病大命險，貴人扶．出外緩有貴人．經商先難後吉．來人立即到．行舟無大利．移居適宜大吉．失物可在．求雨緩到．官事微殃，有貴人，脫．六畜納之可喜．耕作平平晚收．築室必有餘慶．墳墓顯裕後昆．討海先微，后有大利．作塭有利可得．魚苗慢則有財．月令平后，有貴人，吉，尋人在．遠信速至有喜。古人：朱壽昌尋母在長亭。'
    },
    {

        img: './draw/22.gif',
        content: '江泰公到八十歲才成家立業，你何必急呢﹗一個人的機會一到，就像那雲開月出一樣，光輝馬上普照天下，大放光明，命中時機若到，自然飛黃騰達，大吉大利，在時機未到前，就暫時隱守在家裡等候吧﹗這樣反可以百事順利呢﹗抽到此籤，表示時機未到，必須等待，一個人如果機會未到硬要強出頭，只有自尋煩惱，像那姜太公，雖是一位人才，但到了八十歲才遇到文王，才真正有表現的機會，你可能也是屬於大器晚成型。此籤問謀事，目前恐怕尚不如意，但只要持之有恆，努力充實自己，必有被重用的一天。問求財，財運尚不多。問婚姻，有情人終會成為眷屬。問出外，平平。問移居，吉。問訴訟，和解為宜。問疾病，會痊癒。問功名，晚成。問六甲生男。問失物，月光尋在。凡事先呆，得貴人吉．作事先呆後吉．家事門庭吉慶．家運安居春風．婚姻和合．求兒平正．六甲生男，子媳虛．求財先微後進．功名晚可有進．歲君順利．治病老不畏，少不好．出外平平．&#40;有貴人提攜，得利&#41;．經商有利益．來人月光到．行舟晚運可通．移居好．失物月光在，月暗無．求雨上下弦．官事和合好&#40;貴人了錢，完局&#41;．六畜納有利．耕作允好．築室百事吉慶．墳墓有餘裕哉．討海先無後利．作塭晚者大利．魚苗有利可得．月令不遂．尋人慢至．遠信音信慢至。古人：周文王為姜太公拖車。'
    },
    {

        img: './draw/23.gif',
        content: '要想到長江去垂釣，但只見汪洋一片，使人感到前途茫茫，不知何去何從，手拿著釣竿長線，痴痴的等待，只恐怕魚兒與水無緣不會來了，這是一首比喻的籤詩，魚水用來形容君臣之相得，也用來比喻夫婦的相愛，用垂釣象徵，求取名利，所以這首籤，如果問功名，有懷才不過之感，還要等待時機，目前恐怕難有被重用的機會。抽得此籤，余問&#40;有無對象？&#41;她答無，余曰&#40;就登報徵婚吧&#41;不垂釣哪來魚兒？某某照所示登報徵婚，果然不多久就接到，某某請喝喜酒帖子。問財利，目前尚欠理想。問出外，無利可圖。問移居不可。問婚姻，如果你有中意之對象，就鉤住吧﹗莫等待讓魚而都跑掉了， 某某某年屆不惑尚未成家，乃往媽祖廟求籤。問訴訟，先輸後勝。問疾病，平安。問六甲生男。凡事不可作，和者吉．作事遲緩．家事門庭失運，了錢．家運崎嶇不順．婚姻大吉．求兒不可．六甲生男&#40;子虛，先女後男&#41;．求財先失運，後有利．功名無望．歲君順利．治病了錢，尾過漸好．出外不可．經商顛倒．來人未日&#40;半月&#41;到．行舟運途不佳．移居不佳，等待，失物尋不見．求雨上下弦．官事尾勝吉&#40;了錢完局&#41;．六畜不可納．耕作不合時運，微利．築室不可，且慢．墳墓地氣不佳．討海運途不佳．作塭防魚失，求微利．魚苗後日可得小利．月令不遂．尋人緩．遠信音信無到。古人：周玉姊可遇陳春生　姜子牙送飯為武吉掩卦 '
    },
    {

        img: './draw/24.gif',
        content: '正如俗語云&#91;十年寒窗無人問，一舉成名天下知&#93;，錦繡前程，就如月出光輝四海皆明，人人仰望，那坎坷的過去，就像烏雲般被掃而光了，此去太平無事，可以不必再憂慮禍患臨身，這是一首苦盡甘來的籤詩，有一分耕耘，必有一分的收穫，過去對苦難的奮鬥，終得發出勝利的光輝，沒有過去的努力，哪來今日的成就？所以抽到此籤，表示有志者是竟成，天下沒有不勞而獲的事。此籤問功名，只要自己有時學，必可高中無憂，不愁沒有職位，只怕你不具有勝任職位得才能，不必東奔西跑。問移居，出外平平，無利可圖，移居平正。br>問求財，有是有，但不能發大財而想發大財，尚須靠機會。問婚姻，前困難曲折多，後來雙方家長均表示同意，喜出望外，即有情人終成眷屬。問疾病，不畏，問六甲先女後男。問訴訟，和解為吉。凡事緊和平，了錢工．作事月光即成．家事大進圓滿．家運平安．婚姻和合 06求兒好．六甲先男，&#40;先女後男&#41;．求財少有．功名顯榮祖宗，恐有變．歲君中和．治病陰邪祟．求神安．出外先少利，後可得．經商無利．來人月光到．行舟財輕，平平．移居后即可以．失物月光在，月暗無．求雨未有．官事冒險，有貴人．好．六畜可納．耕作平正．築室漸且候，待日期．墳墓后大吉．討海無大財，陰作祟．作塭途中防水微利．魚苗先微后有．月令不遂．尋人可回．遠信佳音速至。古人：秦叔寶救李淵　孟良焦讚救宗寶'
    },
    {

        img: './draw/25.gif',
        content: '前途有命運安排，你只要盡其在我去努力奮鬥，不必勞心去求神問卜，那只是多枉費精神，你要解決的事，只要等待&#91;酉戌&#93;日過了以後就會有消息的，不必再去祈福求神，這首籤詩明白告訴當事人，解決問題，唯有靠自己，光是求神問卜，是解決不了問題，雞為酉，犬為戌，故關鍵在酉戌日後，即能獲得答案。此籤表示一動不如一靜，故問出外移居均不好。問功名，唯有靠自己多用功，如果沒有充分的準備，只靠運氣或神佑是沒有希望，金榜題名的希望不大。問婚姻，要男女雙方是真誠相愛，雙方如果有真誠情投意合可成為眷屬，據說從前有人登報尋人，久無音訊，至媽祖廟求得此籤，而後果然於戌日尋獲。問求財，夏天比較好。問訴訟，宜和解。問功名，不就，六甲先男後女。問疾病，過秋不妨。凡事作可作，和者吉．作事慢成．家事平平．家運宅舍難居．婚姻不好難成．求兒不可．六甲謝良愿，求神佛．求財微利不吉．功名未就，歲君中和．治病運深，酉戌不畏．出外不可．經商新業差，舊業平．來人戌日到．行舟財輕微利．移居且慢．失物己丑卯戌日在．求雨甲子乙丑日，不久．官事宜和&#40;必受災殃&#41;．六畜不可．耕作只收半．築室不美，成者安．墳墓地勢不合．討海和者好，不和呆．作塭只求微利．魚苗小利．月令下半年平安．尋人慢至．遠信音信遲延。古人：鳳嬌觀音庵問籤中奸臣計　胡鳳嬌觀音寺行香求懺'
    },
    {

        img: './draw/26.gif',
        content: '詩云&#91;有花堪折直須折，莫待無花空折枝&#93;，已經評選出來的第一枝牡丹花，美麗動人，勸你不要遲疑，快把機會折取下來，如要詢問世間知音在何處，大地逢春是時機，一切行樂須及時，莫待春去空惆悵，這是一首比喻的籤詩，告訴當事人莫錯過了時機，有人說：&#91;製造機會的人，是第一流人才，把握機會的人，是第二流人才，喪失機會的人，是不入流人才。&#93;希望你抽到此籤時，快把握機會，最少也得做到第二流的人才，不要把機會錯失成了不入流的人才。此籤問求財，財運有，但須把握，以免錯過發財機會。出外移居均吉，營謀做事要積極主動，不可猶豫不決。問婚姻，是天賜良緣，問六甲生男貴氣女不然。問疾病，神佑不畏。問官事，必定和解，失物尋有。凡事春吉冬呆．作事春天可成．家事綿綿齊美．家運安居春風．婚姻成者好．求兒平平．六甲先男後女．求財財源廣進．功名朱衣點頭&#40;及第&#41;．歲君順吉．治病平安&#40;婦忌十一月男能十二月，老危少安&#41;．出外平安有，春滿載，經商逢春發無窮．來人月光到．行舟財利平平．移居平安．失物在東方，緊尋在．求雨必到．官事必和，必勝．六畜可納．耕作早冬好，下冬呆．築室逢春大吉．墳墓真龍正穴．討海春有冬無．作塭逢春利，外微利．魚苗三月吉四月小吉．月令不遂。逢春如意．尋人月前得回．遠信源源而來。古人：范丹洗浴遇賢妻　薛丁山破收飛刀'
    },
    {

        img: './draw/27.gif',
        content: '勸你不必為俗事操心，且寬心自由自在地生活，只要家裡平安無事，財利自然源源而來，凡事命裡有時終須有，命裡無時莫強求，俗語說：&#91;是福不必躲不過&#93;，任何事情，順其自然最好，此籤即告訴當事人，一切聽從命運安排，不必憂慮操心，問財利，憑各人財運不同，輕有就好，不必妄求，問功名，且寬心等待，如有真才實力不會讓你永遠埋沒，終有讓你發揮的一天，教你還是待價而沽，不必急於賤賣。問婚姻，平和之良緣，不必操之過急，誠懇與耐心，是成功的條件。出外可行。問疾病不畏。問失物自回。官事平和。凡事有財允成，不畏．作事成功．家事團圓且喜．家運可得興旺．婚姻大吉．求兒不可．六甲添得弄璋之喜．求財先輕後得．功名晚到．歲君淡淡，未安．治病得安．出外先呆後好．經商獲如意，後大利．來人難在．行舟先平安後大進．移居慢即吉．失物自回．求雨尚未有．官事有貴人，平安，六畜興旺．耕作早冬微，晚冬好．築室喜得瑞氣盈門．墳墓地運大進益．討海先無後有．作塭免介意，有利得．魚苗先微后有．月令平安．尋人不見，難尋．遠信佳音速至。古人：胡完救文氏母女　摧文德清胡鳳嬌'
    },
    {

        img: './draw/28.gif',
        content: '英雄好漢莫提當年勇，此一時彼一時，不要將現時仍與當年比，就像那老虎一落到平地裡，英雄無用武之地，連小犬都敢欺負他，世間上的事，有什麼難於決定的呢？就是千山萬水的困難，也不必遲疑，就決定勇往直前吧！抽到此籤問求財，應該積極進取，自然財源如&#91;千山萬水&#93;源源而來。但若問功名，此籤有懷才不遇&#91;虎落平洋&#93;英雄無用武之地的感嘆。問婚姻，恐阻礙重重難於談成，宜另找適當的對象。移居出外均不吉，如非緊急要事，宜暫緩行動，有趙某應聘出國臨行抽到此籤來問吉凶，余曰&#91;此去恐無發展，最好不應聘&#93;他說機票已訂，乃後天班機，不能變更，後來落魄返國，會當時未談妥條件，致被削而正應&#91;虎落平洋被犬欺&#93;。問訴訟，是難完成，失物緊尋在。問疾病，是過了寅辰日就不畏，六甲男女一樣貴氣。凡事後成吉．作事難成．家事恐防大害．家運人作怪，恐風波．婚姻不吉，女帶殺氣．求兒不可．六甲須防難產．求財不得．功名無．歲君平平．治病運犯劫，被邪欺，寅戌日過不畏．出外被人欺．經商呆人欺，難如意．來人難在．行舟無利可得，了財帛．移居大不好．失物難尋．求雨不日到．官事被官欺，大了錢．六畜不安．耕作半收．築室不可，犯殺．墳墓犯六十年，緊移．討海無利可得．作塭剋口舌，忍耐好．魚苗不利．月令九不畏，防人欺．尋人難得．遠信魚沉消息。古人：李存孝打虎　石存孝遇李克用收為誼子'
    },
    {

        img: './draw/29.gif',
        content: '雪萊西方頌名句，&#91;冬天來了春天還會遠嗎？&#93;目前雖然是寒冷的冬天，但轉眼間春天一到，枯木又逢春，自然生意盎然，但現在只有在暗中等待機會，你不必太心急，且寬心地等待，等到風霜退了，春天自然來到，你仍然有春光明媚的天下，抽到此籤，表示你即使目前遭遇困難，但不必灰心，這正是磨練你的機會，只要你克服了眼前的困難，接著展開的平坦的康莊大道。此籤問求財，利雖微薄仍有。問功名，時機未到，尚須埋頭讀書。問婚姻，成功的機會渺茫，只得暫時等待，至於這樁婚事的好壞乃先苦後甘之象。移居乃出外均不吉利。問訴訟，拖尾而宜和解。問疾病，可安，六甲生男後女。凡事待時．作事難成．家事平安．家運合家興旺，運滯．婚姻平平．求兒不吉．六甲先男後女．求財新業差，舊業平．功名不就．歲君平正．治病運暗，逢春出運，老凶．出外不可．經商須守安命不可．來人未日&#40;半月&#41;到．行舟無利可得．移居不吉．失物援尋&#40;必在&#41;．求雨久不至．官事拖尾．六畜不可．耕作無利半收．築室漸待開春．墳墓地運後必發．討海依舊吉，新不利．作塭返原運，暗無利．魚苗春有利，夏失時．月令不遂．尋人行人待．遠信音信速至。古人：古城會關公斬蔡陽'
    },
    {

        img: './draw/30.gif',
        content: '事情會慢慢變化，但這個月中還不致有太大的變化，然而過了這個月，就要防患未然，不可好高騖遠，以免失望，你要改變一下作法，再向前途邁進，否則徒勞無功，白費心機，此籤在警告，當事人要注意盛極必衰的預兆，不能不謹慎你的作法，以確保過去努力的成果，尤其不可因過去稍有成就，即擴張過速，會吃虧的。抽到此籤，問求財，微利可得，奢望大利，恐白費精神。問功名，成功希望渺茫。問婚姻，恐有變化難成功。出外移居一動不如一靜，均不宜。問訴訟，險象宜和解。問失物，援援尋。凡事了錢，甚不好．作事難成．家事門有險，了錢災．家運了錢難安．婚姻不成．求兒不可，且慢．六甲空孕，勿躁．求財無利．功名不成難進．歲君不遂．治病險，半月不癒，重．出外不可出．經商經營不就．來人月光到．行舟了工了本．移居不可．失物難尋．求雨久不至．官事枉費了錢．六畜不佳．耕作了工後，半年好．築室不安．墳墓地氣不佳．討海了工，無利．作塭枉費徒勞，失利．魚苗無望．月令不遂．尋人行人漸回．遠信音信有變。古人：豬哥過柿山　薛丁山三請樊梨花'
    },
    {

        img: './draw/31.gif',
        content: '正是楊柳椰蒼翠成蔭的時候，你應該把握時機，好好去闖天下，開展你的事業，好好耕種，自然會開花結果，天下是沒有不勞而獲的，一分耕耘，一分收穫，積善之家，必有餘慶，好好播種心田，福祿自然滿家門，這是一首有大收穫的吉籤。問事業，此籤只要埋頭苦幹，必能完成大業，此籤具有蓄財&#40;花果結實&#41;繁榮&#40;綠椰蒼蒼&#41;之吉家，應好好自己把握。問功名，有金榜題名之兆。出外移居均大吉。問訴訟，定然勝訴。問疾病，可平安。問婚姻，可成好。問失物，難尋。凡事得利．作事成功．家事瓜瓞綿綿．家運世世興旺．婚姻好結尾．求兒好．六甲先女後男&#40;生男&#41;．求財用心即有，春敗好，在家好．功名差人來報喜．歲君大吉．治病喜遇良醫．出外大吉可進．經商大發資財．來人立即到．行舟財發萬金．移居適其所哉．失物急尋可有．求雨及時．官事緊完局，了錢．六畜可納．耕作好．築室好．墳墓幸喜得遇其穴．討海財發萬金．作塭黃金萬貫可喜．魚苗見春可喜．月令不遂．尋人必在．遠信音信有回。古人：孟姜女招親　董永皇都市仙女送孩兒'
    },
    {

        img: './draw/32.gif',
        content: '&#91;訟則兇&#93;應記取此教訓，曾有某某人涉及傷害案件，至媽祖廟抽得此籤來問吉凶，余曰：&#91;此籤神明示意和解為宜，如果雙方再意氣用事，官司打下去雙方都得不到好處，原來該當事人借錢給對方，對方不還錢，該當事人一氣之下將對方打傷，後來言明返還借款一半，不再追究傷害，撤回告訴，一場風暴也就平息了。此籤問求財，門市生意有利。出外不吉移居亦不好。問功名，成績差，須再充實自己，龍為辰虎為寅，故此籤龍虎相交，又可解為寅辰相交的月份或日子，曾有一人於某年底持此籤來問一筆土地買賣可成否，余曰：照此籤亦須到明年正月&#40;寅&#41;至三月&#40;辰&#41;間才有可能而後證實了。問婚姻，不吉，六甲先女後男。問失物，寅辰日抽尋在。問疾病，寅辰日過會好。凡事退卻．作事難得成功．家事恐遇風波之災．家運多口舌之災．婚姻不吉．求兒不可．六甲防小產，子息虛．求財失利虧本．功名無望．歲君中和，不遂．治病有邪凶險，拖尾，少者好，寅辰日不畏．出外不可，犯災難．經商了錢．來人寅辰日到．行舟無利，了工．移居大不好．失物難尋．求雨不日到．官事了錢拖尾．六畜損失．耕作不可．築室必退敗．墳墓地氣漸失．討海徒勞．作塭失運虧本．魚苗不可．月令不遂．尋人寅辰日在．遠信音信遲至。古人：龍處交會　劉備入東吳進贅'
    },
    {

        img: './draw/33.gif',
        content: '要去外鄉，須經過水茫茫無際的長江，揚起帆來，卻無風助行，還是安守家裡用心經營，也許後福不錯，會遇到如魚得水的好機會哩。抽到此籤，表示一動不如一靜，尤其出外旅行，阻礙多，不達到目的，應於終止此行，諸事宜採取退守，言行嚴謹，處事謹慎，以為獲得安泰之計。問財運總會得到，但是不要操之過急。問移居不可，財運如門市生意比較好。問功名，恐須第二次科要再接再厲才有希望。br>問婚姻不吉，如無愛情宜早另找對象，某僑胞來台尋親，久無音訊，正失望欲回僑居地，有人勸至媽祖廟問卜，抽得此籤，余曰&#91;有希望因籤中有&#91;得相逢&#93;之句&#93;，惟是再&#91;用心&#93;一番，後來得某報記者發佈尋親消息，竟然獲得相逢。問疾病不畏，官事先兇後吉，問六甲先男後女。凡事不可急進．作事二次成功．家事門庭缺，後團圓．家運門庭興旺．婚姻大吉．求兒且慢，待後日．六甲先男後女．求財漸有．功名望後科．歲君平和．治病拖尾，破財，不畏．出外平安．經商安分待時．來人辰未日&#40;半月&#41;到．行舟恐防未日&#40;半月&#41;風波．移居二次成吉．失物用心再尋．求雨緩有．官事先呆後好．六畜小吉．耕作有收成．築室要把定，待後日．墳墓地運小吉．討海得財．作塭漸漸得財．魚苗好．月令不安．尋人未日&#40;半月&#41;在．遠信音信遲延。古人：銅銀買紙靴'
    },
    {

        img: './draw/34.gif',
        content: '走過危險的高山，此去已是平坦的康莊大道，這條道路大遠，慢慢的總會到達目的地，看看那蘭桂也是慢慢成長開花，只要有恆心，蛇也有修成龍的一天，此籤告訴當事人，有恆為成功之本，不要怕困難，不要嫌費力，尤其不可半途而廢，那是永遠沒有成功的希望，&#91;俗語云天下無難事，只怕有心人&#93;。抽到此籤，表示經過長久的艱辛萬苦，開始解運而邁向順利之大道，應把握良機，積極進取，向南方推進有利。問功名，這次成績不理想，繼續努力，下次可獲良好表現。問求職，暫時無法獲得理想職位，但熱誠奔跑，可獲成功。問婚姻，最初難免發生種種阻橈，但畢竟是良緣，成功與否全靠熱誠與勞力。此籤遷移居不可，而外出平平。問求財，頗重。問訴訟，會聖。問失物難尋，六甲男女都貴氣。問疾病，危險而求神得安。凡事勤勞徐進．作事先呆漸漸成圓．家事門戶進益．家運險後漸得吉慶．婚姻晚成好．求兒不可．六甲生女，先男后女．求財先呆後好．功名有望．歲君未年得宜．治病少平安，老不好．出外平順．經商後有大財．來人辰未日&#40;半月&#41;到．行舟漸漸有利可得．移居不可．失物七八月尋必在．求雨不日到．官事難完局，求貴人．六畜小吉．耕作平平有收．築室宅運漸發．墳墓得其所哉．討海春平平冬有財．作塭有利．魚苗慢即有．月令漸漸出運．尋人遠行待時回．遠信音信立至。古人：曹操潼關遇馬超'
    },
    {

        img: './draw/35.gif',
        content: '這首籤告訴你不必再用心機了，未來的變化自然會知道的，看以後情形當有和合的一天，從現在開始已有轉機，會漸漸脫出厄運，而看見太平的時光，詩中告示當事人，所煩惱的事情已有轉機，未來的變化是漸漸變好，不必再擔憂了。問求財，漸漸有。問婚姻，表示不用急，有恆地推進，就可得到成功，是逐漸發展而得的幸福良緣。問功名，有希望但要十分用功。問訴訟，有獲勝的希望，如受冤枉亦有平反的機會。移居可行，出外平常。問疾病，年輕人不畏老人不是。凡事臨機應變．作事辰未日&#40;半月&#41;成好，半吉，拖尾，了錢．家事寬守即好．家運風波漸消．婚姻難成，成大吉．求兒不可．六甲生產難，子媳虛．求財遇呆人，漸很利．功名有活鬼，難進，歲君未年得宜．治病鬼作祟，後拖尾．出外平正．經商難得如意．來人辰未日&#40;半月&#41;到．行舟先失後得．移居南面得宜．失物難尋．求雨不日到．官事命運蹉跎，破財．六畜顛倒．耕作早平，晚好．築室犯凶星，不可．墳墓運不佳，後能發．討海鬼作祟後微利．作塭鬼作怪後得利．魚苗先失時後得宜．月令不遂祈神．尋人久回．遠信守待可至。古人：吳漢殺妻為母救主'
    },
    {

        img: './draw/36.gif',
        content: '你的福祿東海那麼深大，你的壽命像南山那麼高，有這樣福壽雙全的命，還嘆什麼苦難呢！即是命裡已有，自然大吉大利，只要祈禱，就獲得平安，這是一首很幸運的籤詩，知足可以常樂，此籤表示福祿壽功名濟全外。問訴訟，得勝。問疾病，可痊癒。問婚姻，表示美滿。如問創新事業或外出經營則有考慮的必要，因為全籤的意思耀你知足常樂，曾有某一退休人員，家境富裕，但因無工作不好打發時間，乃與友人合夥經營餐廳，事前抽得此籤，以此即籤而未多考慮，後來被合夥人騙去鉅款，後悔莫及。問六甲男女都貴氣。問失物，尋可復得。凡事亨通得自安．作事成者甚好．家事光輝門庭．家運吉星拱照．婚姻美滿大吉．求兒好．六甲得添弄璋．求財黃金萬貫．功名祝神求佛可進．歲君平安．治病少者不畏，老險．出外不可&#40;滿載榮歸&#41;．經商萬商雲集．來人月光即到．行舟大好居中．移居兄弟和合者吉．失物尋在．求雨及時．官事了錢過後完局．六畜興旺．耕作早晚有收．築室福雙全，子孫旺．墳墓地勢套當．討海有大財．作塭神指示得大財．魚苗大利．月令不遂．尋人得至．遠信速報佳音。古人：薛仁貴救駕　李世民落海灘'
    },
    {

        img: './draw/37.gif',
        content: '人遇到得意的好運氣，身價也隨著變化，福至心靈，你身所從事的，都會是有益的事情，前途一向無難事，只要你有決斷，自然事事順利，這首籤詩表示你將有好運來臨，所以不要猶豫不決，應該當機立斷，從事你認為當做的事，決不會錯，此籤問財運雖無十分，也有六、七分，俗語云&#91;大富由天，小富由勤儉。&#93;只要努力工作，自有財利可求。問婚姻，要有堅定的愛情，終會成為美滿眷屬。問功名，只怕不用功，如用功多加充實，自定然會光明出現。出外移居平正可行。問訴訟，平順。問疾病，曲折多終後不畏。問失物，急尋可在，六甲先南後女。凡事有錢，拖尾，平安．作事可成，有口舌．家事克振家聲．家運居之平安．婚姻好．求兒好吉．六甲先男後女．求財漸有．功名望後科&#40;身顯&#41;．歲君平安．治病險不畏，祈平安．出外平正．經商峻發日新．來人立即到．行舟有利可得．移居好吉．失物難尋．求雨不日到．官事破財，結局．六畜適宜吉昌．耕作平平，有收．築室清吉．墳墓得其所哉．討海和大利，漸得進．作塭漸得利．魚苗漸好．月令漸好．尋人盡心得回．遠信佳音速至。古人：正德君看呼綠牡丹開正德君戲李鳳姐'
    },
    {

        img: './draw/38.gif',
        content: '堅守中正立場，不偏不倚，名位自然顯，不須向神祈求，心理自然安祥，看看那早晚太陽的升沉，就會領悟到，惟有堅守中間立場，才能即時得意起來，此籤原意乃告訴當事人，處世做人不宜太偏激，應該採取中庸的態度，這樣才能獲得心安理得，人家也自然會敬重起你來。問求財，宜守舊，不可貪求，心中存著正直，自然無憂，不可想要發大財。問謀事，雖有成功的希望，但時間上恐會久延。問婚姻，在時間上也是比較遲延，而會成功。問訴訟，則和解為宜，朋友張君報名參加高考，不知能否高中，乃赴媽祖廟抽得此籤，而後高中金榜，分發經濟部，經濟部屬中央級，正應了&#91;名顯有意在中央&#93;這句籤詩。而問移居出外可行。問失物可尋，六甲生男。凡事守己安分．作事晚成好，早無利．家事門庭光輝進益．家運恭順．婚姻成好．求兒好．六甲生男&#40;先女後男&#41;．求財晚來好．功名真可喜．歲君順利．治病平安痊癒．出外必得利．經商後有大財．來人三日後到．行舟平平得利．移居可有喜慶．失物尋必在．求雨尚未．官事祈神完明，了錢．六畜有利可得．耕作有收可以．築室得意平安．墳墓地勢可佳，速發，討海下半年有利．作塭可喜有利．魚苗五日內買得利．月令平平．尋人漸回．遠信急至。古人：劉備三顧孔明茅蘆'
    },
    {

        img: './draw/39.gif',
        content: '你心意如果想尋求神仙的道路，我勸你還是不要妄想，且退一步看看那高樓吧﹗&#40;好高騖遠，終究一事無成。&#41;還是寬心安分守己，寬心地等待一下機會，一定會有貴人來幫助你的，抽到此籤，表示運氣還不很理想，不宜挺進，宜退守以等待時運之解通，不要想一步登天，做任何事，要量力而為，自然會有貴人來提拔你，此籤表示一動不如一靜，故出外移居必須重新考慮。問求財，分外的要求無法達成。問功名，只有虛名，必須充實自己，才有希望。問訴訟，與人爭執不利，官司應和解為上策。問謀事，有長輩或貴人會提拔，宜多聽取或尊重他人之意見。問婚姻，不必心急，有緣自然結成夫婦。問移居，要你等待，出外不大好。問疾病，漸漸會出運。問失物，拖人可以尋得，六甲男女都有貴氣。凡事漸應．作事有貴人，好到尾．家事永獲吉慶．家運漸漸平安．婚姻成好&#40;二次者成好&#41;．求兒不可，有事．六甲男女貴氣&#40;子媳晚，得弄璋&#41;．求財漸有．功名望後科．歲君淡安．治病少貴人，老拖運．出外遇貴人．經商先平後利．來人難在．行舟先不利，後小利．移居平平．失物尋在．求雨未有．官事後有貴人．六畜不可．耕作照舊種，可收成．築室後好．墳墓地勢允好．討海先不利後小利．作塭先失利後有利．魚苗失在前利在後．月令不遂了財．尋人難在．遠信緩緩就至。古人：楊文廣被困柳州城'
    },
    {

        img: './draw/40.gif',
        content: '定能光耀門楣，家和萬事成，只要夫妻百年和合，夫唱婦隨，一定有好處而不會有損失，某君因其妻未生男，欲納偏房，乃至媽祖廟求卜抽到此籤，一見夫妻喜相隨，乃作罷，家庭因而免於破裂，其後竟得一男，正應了&#91;此中必定無損失&#93;這句，乃得順利達到目的。問功名，有金榜題名之吉兆，李君參加特種考試，夜夢乘金龍上天，不知主何吉凶，乃赴媽祖廟求籤，抽得此籤，果然高中金榜，正應了前二句&#91;平生富貴祿位&#93;，&#91;君家門戶定光輝&#93;。問婚姻，乃和順而幸福之良緣。問謀事，則要費一番功夫。問訴訟，以和解為宜。移居出外，平平。問疾病不畏。問失物，困難尋。問六甲先男後女。凡事拖尾，了錢，漸吉．作事難得成功．家事大吉進益．家運五世其昌．婚姻美滿．求兒好．六甲先男後女．求財有大進．功名指日高陞．歲君平順．治病少漸癒，老不安．出外平安．經商有成．來人月光到．行舟有利．移居暫緩．失物必在．求雨下旬到．官事了錢可安．六畜可喜有利．耕作平平，下半年好．築室壽命長，富貴至．墳墓綿綿齊美．討海後必大利．作塭有大利．魚苗大利．月令不遂．尋人得回．遠信將近就至。古人：三元會葛其量夫妻相會　三元會葛奇蔡坤買書'
    },
    {

        img: './draw/41.gif',
        content: '多年來辛苦經營，剛有了成果，但又有人求讓，實在不好推辭，心裏矛盾，借酒消愁，還是難取捨，其實這就有好消息了，所謂有緣千里來相會，何必猶豫不決呢？這是一首告訴當事人，不要猶豫的籤詩，做任何事都該當機立斷，總會有好消息的。此籤問求財，平和而已。問功名，有金榜題名之兆，曾有某君赴考抽得此籤，余曰：&#91;此籤指示八、九月間會有好消息&#93;雞為酉，即是八月，犬為戌，即是九月，而後果然高考及格。又有一對男女抽得此籤，來問婚姻，余曰：&#91;此籤指示婚姻可成&#93;，因為最後一句&#91;婚姻夙世結成&#93;都很明顯的指出，後果很幸福美滿的良緣。'
    },
    {

        img: './draw/42.gif',
        content: '這件事恐怕很難很難，有重重的阻礙，不是輕易可以衝破的，正是過了一重江水，又有一重山，此去路途崎嶇不平，確實難走，任你有辦法改變，也不能挽救，是非終究要發生，抽到此籤，表示氣運閉塞不通，艱難困苦重重，進退維谷，此時應堅定立場，確守正道，容忍自重，以等待時運的解通。此籤問求財，毛病百出，終至虧失，暫時罷手，以等待有利時機。問功名，遇到難題，尚須充實自己。問婚姻，阻礙重重，雙方無真正愛情，及早另找對象。問訴訟，不好有嚴重的麻煩，且拖延時間亦不能勝訴，罷手為妙。問疾病，嚴重危險，用心治療，望神庇祐或有奇蹟。問出外移居不吉。問失物，難尋。問六甲先女後男。凡事了錢，過運．作事難成．家事門庭難合．家運不安．婚姻無望．求兒不雅．六甲臨產險，先後男&#40;生女&#41;．求財無有益．功名不就．歲君浮沉．治病病險，未日&#40;半月&#41;不畏．出外不可．經商難有成就．來人未日&#40;半月&#41;到不到無．行舟防險．移居午年尾，抽此吉．失物難尋．求雨有小無大．官事不好，拖尾．六畜不佳．1耕作無收成．築室不吉．墳墓地運不佳，遷移．討海無利可得．作塭犯風水了錢．魚苗蝕本．月令多逢口舌．尋人難在．遠信雁杳魚沉。古人：姜女送寒衣哭倒萬里長城'
    },
    {

        img: './draw/43.gif',
        content: '做事要從容不迫，要果斷不要遲疑，過去一年你做事太心急，現在應該寬心，你會有貴人來幫助，不過目前還在千里外，你所希望的消息，大概在月中會慢慢知道的，此籤表示當事人，做事太魯莽，或太猶豫，都是&#91;過&#93;與&#91;不及&#93;應該避免的，才不會招致失敗，過去的讓他過去吧，現在起好好從容不迫，並且勇敢果斷地去下決定吧，也許過去因為沒有貴人幫助，做事不盡理想，雖然目前仍然沒有貴人，但靠自己努力，總會有好消息來的。問求財，目前尚欠理想，但將來很有財利。問功名，尚勞力充實自己才又希望。問婚姻，只要努力終會成功。問訴訟，終會獲勝。問移居出外均不好。問失物難尋。問六甲先女後男。問疾病慎防可安。凡事候時過&#40;月半&#41;，貴人成．作事月半好．家事喜遇貴人．家運光輝門庭．婚姻平平．求兒平正&#40;且候寬緩&#41;．六甲先女後男&#40;先男後女&#41;．求財未遇時，月半合．功名不就&#40;得意允進&#41;．歲君起倒．治病月半過，有貴人．出外不利．經商先無後有．來人月光到．行舟小有利益．移居不可．失物月光在．求雨小許．官事不畏．六畜緩日即好．耕作小有收獲．築室好．墳墓可得吉地吉穴．討海月半過大進．作塭後有大利．魚苗月半過有利．月令了錢．尋人月半過有人報．遠信中旬可至。古人：偶才母井邊相會　三嬸報喜　蘇秦回家假不第'
    },
    {

        img: './draw/44.gif',
        content: '客人來了，未來的發展，利益多多，你們為什麼要互相猜疑呢？雖然是進退維谷的時候，也不必灰心，雲開月出的時機馬上到來，抽到此籤，乃先兇後吉，先難後易之兆。問求財，目前浮沉不定，但未來利潤大有可觀。問功名，這科沒有希望，要充實自己將來定有希望。問婚姻，隨然有阻礙，但有情人終成眷屬，不要灰心。問訴訟，雖有冤枉，終得平反，曾有某僑生欲回僑居地，因簽證發生問題，進退兩難，抽得此籤余曰，&#91;月中可行&#93;而後果然於月中半過後，即獲解決，正應了第三、四句籤詩。此籤問謀事，雖有困難，如能克服終得成功。問出外可以，移居可要三思。問失物是月光可以，而月暗難尋。問疾病亦是月半才不畏。問六甲先女後男。凡事月光好．作事運至事成．家事志氣遠大．家運左右平安．婚姻中和．求兒不可．六甲先女後男&#40;弄瓦之慶&#41;．求財淡淡&#40;漸利益，亨可喜&#41;．功名必能得進．歲君起倒．治病月光安，運光彩．出外一路順風．經商大吉利市．來人月半到．行舟大吉有利．移居大吉．失物月光在，寅辰在，求雨未有．官事了錢，月光完局．六畜可納．耕作平平，有利可得．築室可居安樂．墳墓地氣漸發財．討海可能得利．作塭有獲大利．魚苗有利可得．月令待時可安．尋人月光在．遠信速報好音。古人：洪益春留傘愛陣三'
    },
    {

        img: './draw/45.gif',
        content: '你的運氣真好，正像盛開的花朵，現在已結成果實，是收穫的季節了，相信你到老都可以享受到榮華富貴，只要你待人真誠，君子、小人，你都可以跟他會合，萬事清吉順利，不必煩惱，此籤問求財，要看你過去勤勞，不必求神佛，神佛也會暗中保佑你，告訴當事人，過去的努力終於有成果了，一分耕耘一分收穫，現在你可以得到甜美的果實了，如果過去不肯多費功夫，目前就沒有財利可言。問功名，也是一樣，看你用功的程度，而定你的成就。問婚姻，是和好幸福的姻緣，談而可成。問疾病，可愈。問移居可行，出外需小心。問六甲，先男後女。問訴訟，和解為宜。凡事以禮待人．作事月光好&#40;難成&#41;．家事瓜瓞綿綿．家運福祉合亨．婚姻中和&#40;合姻緣，百年老&#41;求兒好．六甲先男後女&#40;先女後男&#41;．求財可得萬貫．功名晚成大器．歲君平和．治病老惡運，少不畏．出外平正&#40;不利&#41;．經商舊業俊發，後呆．來人未日&#40;半月&#41;到．行舟先無後有財．移居平平．失物歸，拖過未日&#40;半月&#41;在．求雨未有．官事難完局，拖尾．六畜興旺．耕作允順．築室居之即安．墳墓代代簪纓．討海先無後有．作塭後可得利．魚苗有利可求．月令平安．尋人慢回．遠信慢慢即至。古人：孔夫子過番逢小兒　薛仁貴固白虎關父子不相逢'
    },
    {

        img: './draw/46.gif',
        content: '好好用功充實自己，功名自然會得，而且會使你名顯天下，平步青雲，前途富貴可期，就像那十五團圓的一輪明月，普照天下到處光明，這是一首很幸運的籤詩，表示當事人目前的運氣，正邁入旺盛的境地，但須防盛極而衰，月圓而缺，尤其本籤詩，有滿招損的預兆，有某某建設公司，連做數比賺錢生意，業務蒸蒸日上，該主持人乃雄心萬丈，計劃蓋一棟十層大樓出售，事前抽得此籤，以為大吉兆，未料事後卻因經濟危機，而大虧其本，蓋以&#91;十五團圓照滿天&#93;，實有&#91;滿招損&#93;的暗示，籤意未明顯耳。此籤問功名，只要有實力，必有成功的希望。問婚姻是白頭偕老的佳兆。問訴訟，會勝訴。問疾病，安而可愈。問外出，有貴人幫助。移居可。問六甲，生男。問失物，月半抽籤可尋得。凡事大吉利．作事成好．家事福祉其昌．家運安居樂業．婚姻偕老．求兒好．六甲先男後女．求財平平．功名有．歲君吉．治病老拖尾，少立癒．出外有貴人好．經商利市三倍．來人月半有．行舟可喜吉利．移居好．失物月光有．求雨月半到．官事破財，完局．六畜平平．耕作平正．築室得其所居．墳墓得其吉地．討海月半過漸得利．作塭可得財利．魚苗利路亨通．月令漸平安．尋人月光在．遠信月半就至。古人：江中立欽賜狀元　江中立遇永祿君'
    },
    {

        img: './draw/47.gif',
        content: '凡事先凶後好．作事二次即成．家事門閭得宜．家運門庭小吉．婚姻正好．求兒好．六甲年頭生女年尾生男，月頭女月尾男．求財輕．功名有，後科得進．歲君淡安．治病逢未月平安，十二月不吉．出外先凶後吉．經商利市．來人月光到．行舟春夏好，秋冬平．移居正好．失物尋有，未日／半月在．求雨未久．官事先凶後吉，未日/半月完局．六畜平安．耕作中中．築室有合不畏．墳墓地勢套當．討海春夏大吉．作塭得利．魚苗先凶後吉．月令不遂．尋人慢回．遠信近日就至。凡事：先凶後好。作事：二次即成。家事：門閭得宜。家運：門庭小吉。婚姻：正好。求兒：好。求財：輕。功名：有。&#40;後科得進&#41;歲君：淡安。治病：逢未月平安。十二月不吉。出外：先凶後吉。經商：利市。來人：月光到。行舟：春夏好。秋冬平。移居：正好。失物：尋有。&#40;未日/半月在&#41;求雨：未久。官事：先凶後吉。&#40;未日/半月完局&#41;六畜：平安。耕作：中中。築室：有合不畏。墳墓：地勢套當。討海：春夏大吉。作塭：得利。魚苗：先凶後吉。月令：不遂。尋人：慢回。遠信：近日就至。六甲：年頭生女年尾生男。&#40;月頭女月尾男&#41;&#40;先男後女&#41;古人：劉永作官蔭妻兒　李三娘井邊會'
    },
    {

        img: './draw/48.gif',
        content: '凡事被人害，和者吉．作事難成，未日抽成．家事不合．家運有邪氣，不安．婚姻不好．求兒不可．六甲生男&#40;子媳虛，晚來得&#41;．求財輕，無利．功名無．歲君浮沉．治病鬼作祟，未日&#40;半月&#41;好，寅辰卯不畏．出外不可向前．經商無財．來人未日&#40;半月&#41;到．行舟了無利．移居不好．失物尋無望．求雨暴到．官事未可．六畜不可養．耕作不吉&#40;只半收&#41;築室不可決定．墳墓地氣不佳．討海有鬼作祟．作塭難得利．魚苗多端失利．月令失暗難通．尋人難至．遠信音息茫杳。命通：前途未運通。凡事：被人害。和者吉。作事：難成。未日抽成。家事：不合。家運：有邪氣。不安。婚姻：不好。求兒：不可。六甲：生男。&#40;子媳虛。晚來得&#41;求財：輕。無利。功名：無。歲君：浮沉。遠信：音息茫杳。出外：不可向前。經商：無財。來人：未日&#40;半月&#41;到。行舟：了無利。移居：不好。失物：尋無望。求雨：暴到。官事：未可。六畜：不可養。耕作：不吉。&#40;只半收&#41;築室：不可決定。墳墓：地氣不佳。討海：有鬼作祟。作塭：難得利。魚苗：多端失利。月令：失暗難通。治病：鬼作祟。未日&#40;半月&#41;好。寅辰卯不畏。尋人：難至。古人：蜻蜓誤入蜘蛛網，誤入陷阱，有翅難飛，掙扎或求神者，有一線生機，否則等死。凶象。運滯。烏雲蓋頂。凡事不吉。'
    },
    {

        img: './draw/49.gif',
        content: '凡事不和，有鬼作祟．作事未日辰日成好．家事門第大益．家運平常．婚姻口舌多難成，成者允吉．求兒不好，有呆人．六甲生男，後女．求財輕淡有利益．功名未遂，不可．歲君浮沉．治病老不好，少不畏．出外不可．經商夥不和者，無利．來人未日&#40;半月&#41;到．行舟先凶後吉．移居不可望．失物無．求雨尚未．官事平後，拖尾，了錢．六畜不好．耕作早好．築室好．墳墓地氣漸發吉．討海春夏不佳，冬平．作塭先無利，後有望．魚苗有利入手．月令有口舌．尋人慢回．遠信音信慢至。凡事：不和。有鬼作祟。作事：未日辰日成好。家事：門第大益。家運：平常。婚姻：口舌多難成&#40;成者允吉&#41;求兒：不好。有呆人。六甲：生男&#40;後女&#41;求財：輕淡有利益。功名：未遂。不可。歲君：浮沉。治病：老不好。少不畏。出外：不可。經商：夥不和者。無利。來人：未日&#40;半月&#41;到。行舟：先凶後吉。移居：不可望。失物：無。求雨：尚未。官事：平後，拖尾，了錢。六畜：不好。耕作：早好。築室：好。墳墓：地氣漸發吉。討海：春夏不佳。冬平。作塭：先無利。後有望。魚苗：有利入手。月令：有口舌。尋人：慢回。遠信：音信慢至。古人：佛印稍婆答歌詩　蘇小妹答佛印蘇東坡一次與佛印對坐殿中，問佛印道：「你看我坐態像個什麼？」佛印答道：「像一尊佛。你看我呢？」東坡回答他：「你像一堆牛糞。」因佛印穿著大袍，婆娑於地。佛印知他造口業，默然不語。東坡卻得意的笑了，以為自己占了上風，歸來告訴蘇小妹，說自己每次與佛印對辯都是輸給他，今天卻勝了，就把經過說給妹妹聽。小妹聽了，急忙說：「哥哥！又是你輸了！」東坡追問為什麼呢？小妹說：「佛印嘴裡走出一尊佛，你的嘴裡卻痾出一堆屎，你這臭嘴巴，還不是輸了嗎？」東坡聽了，頗有省悟。這便是討便宜失便宜，自己上了佛印的當，還睡在鼓裡摸不到鐘。真是聰明一世，糊塗一時了。'
    },
    {

        img: './draw/50.gif',
        content: '凡事有公人求完，吉．作事難成．家事家庭進益．家運瑞氣滿門．婚姻難成，成者大吉．求兒好，大吉．六甲男女貴氣，先男後女，男難養，生女好．求財大吉，寶樹開花．功名無．歲君吉．治病祝天地者平安，老拖尾．出外不可&#40;慢即有大財&#41;．經商先平平，後大吉．來人月光到．行舟早晚平平．移居好．失物急尋在&#40;西尋&#41;．求雨及時．官事拖尾&#40;去倒得失了錢&#41;．六畜平安大進．耕作早好晚平．築室慢吉．墳墓吉地吉穴．討海和者大吉．作塭先呆後有大利．魚苗後有大利．月令漸春風好．尋人速回．遠信音信速至。凡事：有公人求完。吉。作事：難成。家事：家庭進益。家運：瑞氣滿門。婚姻：難成。成者大吉。求兒：好。大吉。求財：大吉。寶樹開花。功名：無。歲君：吉。出外：不可。&#40;慢即有大財&#41;經商：先平平。後大吉。來人：月光到。行舟：早晚平平。移居：好。失物：急尋在。&#40;西尋&#41;求雨：及時。六畜：平安大進。遠信：音信速至。耕作：早好晚平。築室：慢吉。墳墓：吉地吉穴。討海：和者大吉。作塭：先呆後有大利。魚苗：後有大利。月令：漸春風好。尋人：速回。六甲：男女貴氣。&#40;先男後女&#41;&#40;男難養。生女好&#41;治病：祝天地者平安，老拖尾。官事：拖尾。&#40;去倒得失了錢&#41;古人：小兒路遇惡鬼　小兒遇三煞煞即殺。小兒煞有廿六關。于鬼有五鬼關和鬼門關。本屬凶象。有符可解。難關可過。諭人只要肯信。逢凶化吉。鐵可成金。信乎。'
    },
    {

        img: './draw/51.gif',
        content: '凡事自守待運．作事勤成．家事門庭大益．家運門庭永昌．婚姻成好．求兒平平．六甲先男後女，貴氣．求財冬天大吉&#40;依舊好&#41;．功名後科．歲君吉．治病命拖尾，老少安．出外不可．經商小利&#40;在家好&#41;．來人月光到．行舟了本．移居不可．失物尋有．求雨不日到．官事萬和．六畜有利．耕作早平晚好．築室平平．墳墓地勢適宜．討海無大財．作塭自守可得．魚苗小利益．月令不遂．尋人時到則回．遠信音信緩至。凡事：自守待運。作事：勤成。家事：門庭大益。家運：門庭永昌。婚姻：成好。求兒：平平。六甲：先男後女。貴氣。求財：冬天大吉&#40;依舊好&#41;功名：後科。歲君：吉。治病：命拖尾。老少安。出外：不可。經商：小利&#40;在家好&#41;來人：月光到。行舟：了本。移居：不可。失物：尋有。求雨：不日到。官事：萬和。六畜：有利。耕作：早平晚好。築室：平平。墳墓：地勢適宜。討海：無大財。作塭：自守可得。魚苗：小利益。月令：不遂。尋人：時到則回。遠信：音信緩至。古人：趙玄郎河東大戰龍虎關 宋朝趙匡胤困河東'
    },
    {

        img: './draw/52.gif',
        content: '凡事慢成，大險．作事難成&#40;急成，遲者了錢&#41;．家事家庭大吉．家運到處有貴人．婚姻成好．求兒好&#40;不好，有事&#41;．六甲添之弄璋．求財浮沉&#40;有大利&#41;．功名揚名在即．歲君起倒．治病三日過貴人好．出外行遇主公．經商萬商雲集．來人立即到．行舟有利可得．移居平正．失物難尋&#40;速尋在&#41;．求雨多風雨少．官事有虛&#40;破財完局&#41;．六畜有利．耕作平平有收．築室可以平安．墳墓穴場允吉．討海得財在三日過．作塭有大利．魚苗此近日得大財．月令平平，漸漸平安．尋人漸回．遠信音信立至。凡事：慢成。大險。作事：難成。&#40;急成。遲者了錢&#41;家事：家庭大吉。家運：到處有貴人。婚姻：成好。求兒：好。&#40;不好。有事&#41;六甲：添之弄璋。&#40;生男&#41;求財：浮沉。&#40;有大利&#41;功名：揚名在即。歲君：起倒。治病：三日過貴人好。出外：行遇主公。經商：萬商雲集。來人：立即到。行舟：有利可得。移居：平正。失物：難尋&#40;速尋在&#41;。求雨：多風雨少。官事：有虛&#40;破財完局&#41;。六畜：有利。耕作：平平有收。築室：可以平安。墳墓：穴場允吉。討海：得財在三日過。作塭：有大利。魚苗：此近日得大財。月令：平平。漸漸平安。尋人：漸回。遠信：音信立至。古人：薛仁貴回家遇丁山上帝公收龜蛇上帝公即北極玄天上帝&#40;北帝&#41;，又稱真武君，龜蛇于江中興波作浪，被北帝收服，其神像每見足踏龜蛇。'
    },
    {

        img: './draw/53.gif',
        content: '看你來問心裡所想的事，不知吉凶如何？我告訴你，積善之家必有餘慶，因為你心田良好，所以會有好的果報，運氣來時，求財得財，求子得子，財子雙雙而至，相信指日之間，喜氣將洋溢你家門，抽得此籤，正是好預兆，目下雖然未得亨通，但不必掛心，只要仍然一心向善，正是&#91;積善之家，必有餘慶&#93;好運馬上到來，此籤問財利，目前雖不很理想，但不久，財源級滾滾而來。問功名，目下雖未得際遇，只要多充實自己，而後就有機會。問婚姻，是美滿良緣，指日可喝到喜酒。問訴訟，能和解為上策，只要你合乎情理不必憂慮。問移居，平平。問出外，可行。問疾病，要急不可緩。問六甲生男。凡事大吉，有貴人．作事成好．家事進益無窮．家運禎祥福祉．婚姻成好&#40;益夫旺子&#41;．求兒大富貴．六甲先男後女&#40;雙生貴子&#41;．求財積善大利．功名無&#40;可得進&#41;．歲君中平．治病拖尾不畏，平安．出外好&#40;利路亨通&#41;經商萬利可得．來人月光到．行舟大吉利．移居平安．失物援尋．求雨月尾到．官事緊審和好&#40;完者大吉&#41;．六畜可納平安．耕作中平&#40;大利&#41;．築室可好&#40;瑞氣呈祥&#41;．墳墓大吉&#40;世代流芳&#41;．討海可得大進．作塭滿載而歸．魚苗有大利．月令平安．尋人得回．遠信速報佳音。古人：蘇秦夫妻相會　蘇秦回家假不第'
    },
    {

        img: './draw/54.gif',
        content: '在漆黑的晚上，寂寞的對著一盞孤燈，心裡期望著萬事清吉、萬事成功，如果你暗中有過行善的因果，平日又常燒好香，敬重神明，那麼你就能獲得神明的助力，完成你的願望，此籤明示當事人，要想結什麼的果，就必須先怎樣的栽，所謂&#91;種豆得豆，種瓜的瓜&#93;如果平日不行善，平時不燒好香，臨時抱佛腳，又有什麼用呢！平時不努力，而想萬事成功，乃就成了空思夢想。問財利，此籤告訴你，只要辛勤做事必能獲利，如果做等不勞而獲，那會失望的。問功名，平時善事多做，好香多燒，定會得著功名。問謀事，有困難，必須有毅力與恆心。出外可行，移居亦可。問訴訟，和為宜。問疾病，可安癒。問六甲，要有善心，而後才有男孩。問失物，緊尋會在。凡事清吉，不用財．作事難成&#40;必成&#41;．家事望神保佑．家運門庭興旺．婚姻大吉．求兒成好．六甲弄璋之慶．求財先無後有．功名善心有．歲君淡淡．治病不畏，拖尾，祈神．出外須靠自己．經商勿與人合夥．來人月尾到．行舟小利．移居好&#40;不可&#41;．失物緊尋在．求雨必來．官事和好&#40;拖尾，得勝&#41;．六畜小利．耕作允好．築室大吉．墳墓地運氣亨通．討海小利．作塭小得微利．魚苗自己有小利．月令平平，求神庇佑，尋人祈求，自回．遠信音信急至。古人：念月英相國寺　念月英求佛嫁良緣'
    },
    {

        img: './draw/55.gif',
        content: '俗云識時務為俊傑，知進退為英雄總之，虛言不實，成事不足，敗事有餘，看看那黯然無光，未必能成全的事吧！就像那深藏的珠玉還未有變化時，就患得患失，那是徒然枉費心機，此籤告訴當事人，做任何事情，都不可能有十全十美的事，一個人做事，不必患得患失，而且必須識時務、知進退才行，你只要有真才實學，就像深藏的珠玉，不會永遠被埋沒的，此籤問求財，目前仍不理想，所謂前手接錢後手空的境況。問功名，時運未到，必須再等待，但總會有機會的，只要你有才能。問婚姻，沒有緣分的婚事，是不容易談成功的，還是另求對象為妙。br>問訴訟，會拖延時間。出外移居均不是時候，不動為宜。問疾病，不要安心。問失物，難尋，六甲生男。凡事了工，無利益．作事難成．家事家庭多逢口舌．家運先凶後吉．婚姻不成．求兒不可．六甲先男後女&#40;生男，子媳晚得&#41;．求財輕．功名等後科．歲君安．治病不好，拖尾．出外無貴人．經商了錢．來人未日&#40;半月&#41;到．行舟無利．移居不宜．失物難尋．求雨未有．官事拖尾，了錢．六畜了工無利．耕作平平．築室難得平安．墳墓地勢不吉．討海費了工．作塭了資本．魚苗蝕本．月令不遂有口舌．尋人難．遠信漸且待望。古人：郭華醉酒誤佳期'
    },
    {

        img: './draw/56.gif',
        content: '人在病中若還要苦心操勞，那多痛苦，其實要找完全合乎理想的，本來就有人遭遇過，事情過了就算，不必回頭再去追問它，心中有事盡量打消它吧？這首籤詩，主要在安慰當事人，盡量把心放寬，注意身體健康，俗云&#91;留得青山在，不怕沒材燒&#93;，即使事情做失敗了，也必患得患失，盡把它掛在心上，結果於事無補，於己有損，何苦來哉，此籤問求財，表示財運未到，再操心也沒用，就順其自然吧！問功名，成績差，希望不大。問婚姻，恐不容易成功。問出外移居，均不好。問疾病，有險象而後安。問六甲先女後男。問訴訟，可能會拖延。凡事小心為要&#40;成者不好&#41;．作事難成．家事門庭小吉．家運平常罔居．婚姻不可．求兒不吉&#40;無根基&#41;．六甲先女後男&#40;生男，無求必得&#41;．求財空無．功名難望&#40;可望&#41;．歲君頗安．治病先凶後吉．出外在家待時．經商多勞辛苦．來人未日&#40;半月&#41;到．行舟無利益．移居不好．失物未日&#40;半月&#41;在&#40;無處可尋&#41;．求雨尚未．官事拖尾&#40;了錢&#41;．六畜不可．耕作平平&#40;無，半收&#41;．築室多逢疾病，不佳．墳墓淡淡平平．討海無利益．作塭失利無望．魚苗無利了錢．月令不遂．尋人信尚遠．遠信音信耐候。古人：楊戩得病在西軒。'
    },
    {

        img: './draw/57.gif',
        content: '勸你把心定下來，莫再虛慌時運得安，前途清吉，可以說這期中，並無什麼大事會發生，又有神明守護著，大可安居樂業，這首籤詩，告訴當事人，須先定下心來，不要慌慌張張，才能從容把事做好，同時安慰當事人，運氣安泰，不必擔憂，大可安心做事，此籤問求財，小錢可獲得，但大錢就不易成功，下次很有希望。問婚姻，立定主意，可以談成。問作事，以誠實態度，可以達成目的。問訴訟，以和解為上策。移居外出均可行。問疾病，有貴人不妨。問失物，難尋。問功名，要勞力充實自己，後科才有希望。問六甲月頭得女月尾得男 。凡事心意把定．作事成好．家事且喜進益．家運神仙扶持，平安．婚姻大吉．求兒大吉．六甲先女後男&#40;月頭女，月尾男，弄璋喜慶&#41;．求財輕得&#40;應手而得&#41;．功名必中．歲君淡淡．治病漸平安，貴人扶．出外遇貴人提攜&#40;在家好&#41;．經商小有成就&#40;永發其財&#41;．來人未日&#40;半月&#41;到．行舟平平有財．移居平安&#40;不宜&#41;．失物難尋&#40;謹尋有&#41;．求雨不日到．官事宜求和解．六畜平平．耕作平平有收．築室平安．墳墓地運如意．討海有利入手．作塭有利可得．魚苗有大利．月令破財，平安．尋人只近回．遠信且候佳音。古人：白蛇精遇許漢文'
    },
    {

        img: './draw/58.gif',
        content: '蛇身變成龍，只恐命裡運氣未通，那是不可能達成愿望，久病虛弱的身體，還是要放寬心情等待，不可自不量力，雖然意見很多，還是不要去聽從，此籤告訴當事人，運氣滯停未通，做事阻礙多，萬事不如意，不要悲觀，自暴自棄而墮落，忍耐奮鬥，以等待有利機會的到來。問求財，小錢有，大錢還是不能如願。問功名，成積欠理想，難達成願望。問婚姻，障礙多，不易成功，如果強求，反而得不到美滿姻緣。問訴訟，恐拖延時間，而且勝敗反覆。出外移居，一動不如一靜，均不吉利。問疾病，險而安。問失物，緊尋可復得。問六甲，要下愿使生男。凡事不好，難成．作事未日抽，成好．家事漸待，莫得．家運不順．婚姻不吉．求兒不可．六甲弄璋之喜．求財淡淡．功名未該得，不能進．歲君平平．治病拖尾，不痊癒．出外未日抽成．經商無利可求，來人己未日&#40;半月&#41;到．行舟可得小利&#40;無利&#41;．移居不可．失物尋在．求雨遠．官事反覆&#40;恐生尚端&#41;．六畜了錢不利．耕作中平．築室等待．墳墓穴地平安．討海可得小利．作塭無財利．魚苗不可採買．月令破財，多逢口舌．尋人辰日在．遠信音信且待。古人：白蛇精詐言往南海遇漢文　袁達入昭國關'
    },
    {

        img: './draw/59.gif',
        content: '你既然有心為善作福，就不要遲疑不決，趕緊去做，這時正是求取名聲的時候，相信這是一定能夠做得很適合，財利自然會喜歡隨你而來，這首籤詩明示，一個人只要有心向善，自然神佛庇祐之，此籤問求財，只要取之有道，財利自來，問功名加強努力，就可及格無疑，問求事，積極謀求就能成功，問婚姻，決心進行，即可成功，曾有一對男女，熱戀甚久，因雙方家人反對未能結合，乃至媽祖廟祈求卜，抽得此籤，求余解說，余曰&#91;在積極爭取，有情人終成眷屬&#93;後來雙方家人因受兒女專情感動，終於答應締結婚姻，蓋籤詩尚有&#91;此事必能成會&#93;句，故知決心進行必可成也，出外移居平安可行，問訴訟以和為貴，問疾病可安癒，問六甲生男育女都貴氣。凡事後吉得利．作事難成，成者好．家事百福百祿．家運門庭增輝．婚姻成好．求兒亦可得．六甲得添弄璋&#40;男女貴氣&#41;．求財慢好，有利益．功名有可得．歲君平和．治病子丑寅過不畏．出外平安&#40;後得財星拱照&#41;．經商先呆，後有利．來人未日&#40;半月&#41;到．行舟後吉．移居好．失物未日&#40;半月&#41;在．求雨不日到．官事中和，了錢，完局．六畜平平．耕作有收成．築室吉．墳墓地運參差．討海先失後得．作塭有利可得．魚苗且慢可得利．月令漸安．尋人有著．遠信佳音速報。古人：皇都市上有神仙　老鼠精鬧宋朝'
    },
    {
        img: './draw/60.gif',
        content: '月亮一出來，光輝本來很皎潔，只是浮雲一遮，總使那明月失色，你該再家裡在用心，為善作福，當官要事理分明，自然會有益處，此籤告訴當事人，人生不如意事十之八九，就像那光明的月亮，遇而也有被烏雲遮住光芒的時候，但不必因光芒被遮，就感到不平，更應該勤修其德，當那烏雲退去時，再度露出的光，將更明亮，更美麗動人，此籤問求財，只要辛勤工作，財利沒有問題。問功名，須再用心充實自己，自然有成功的希望。問謀事，只要積極努力，必能有成。問婚姻，有雲遮月的暗示，婚事不順利。出外旅行必須小心謹慎，最好打消此行。問移居也是要考慮。問訴訟不畏。問失物，再月光，抽得此籤可復得。問疾病，年輕比較危險，老人不畏。凡事拖尾，了錢．作事成無益，犯官事．家事門庭平安．家運小吉．婚姻難得．求兒慢即好．六甲臨產空孕&#40;生女，先男後女&#41;．求財淡有．功名望後科．歲君把方殺．治病拖尾，後痊癒&#40;男女犯魂必死&#41;．出外不可．經商後來有得．來人月光到．行舟有小利&#40;把定&#41;．移居不可．失物月光在．求雨不日到．官事不畏．六畜不得利，了錢．耕作平平．築室不合，按住．墳墓地運呆，後得吉．討海平平小利．作塭有小利．魚苗無利可得．月令不遂．尋人遠回．遠信音信慢至。古人：薛剛踢死太子驚崩聖駕 楊六婿斬子'
    },

];

const riddleBtn = document.querySelector('.go-to-riddle-btn');
const riddleModal = document.querySelector('.riddle-modal-bg');
const riddleImg = document.querySelector('.riddle-img');
const riddleContent = document.querySelector('.riddle-p');

riddleBtn.addEventListener('click', function () {
    const randomNo = Math.floor(Math.random() * riddles.length);
    riddleModal.style.visibility = 'visible';

    riddleImg.src = riddles[randomNo].img;
    riddleContent.innerHTML = riddles[randomNo].content;


});


//close the riddle modal close the yes cup and display the draw animation and draw btn
const closeRiddleBtn = document.querySelector('.close-riddle-btn');
closeRiddleBtn.addEventListener('click', function () {
    riddleModal.style.visibility = 'hidden';
    cupYes.style.display = 'none';
    drawDiv.style.display = 'flex';

});

