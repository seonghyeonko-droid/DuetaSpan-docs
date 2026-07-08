# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오늘 기분은 어떠세요? 그 노래… 있잖아요, “Whoa-oh-oh” 하는 거요?
     4.77s  agent 발화 시작: 아, 명곡이죠! 하다가웨이의 “What Is Love”를 말씀하시는군요. 90년대에 엄청난 히트를 쳤었죠.
     4.77s  user  발화 끝
    10.59s  user  발화 시작: 맞아요! 하다가웨이… 그, 그 사람이 딱 그 노래 하나만 낸 건가요?
    10.59s  agent 발화 끝
    16.42s  agent 발화 시작: <ret> 전혀 그렇지 않아요. 그 사람은 1993년에 데뷔 앨범을 발표했는데, “What Is Love”와
    16.42s  <ret> 발화 (turn3 첫 프레임)
    16.42s  user  발화 끝
    17.42s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.59s]: Haddaway, born Dieter Form, released his debut album *Haddaway* in 199
    29.13s  user  발화 시작: “Life in the Fast Lane”… [chuckle] “What Is Love”랑은 좀 분위기가 다
    29.13s  agent 발화 끝
    36.02s  agent 발화 시작: 네, 분위기가 좀 다르죠. 좀 더 신나고, 덜… 내성적인 느낌이에요.
    36.02s  user  발화 끝
    41.31s  user  발화 시작: 내성적이라고 하니까 딱 맞는 표현이네요. 그래서, 음, 하다가웨이는 원래 어디 사람이에요?
    41.31s  agent 발화 끝
    47.14s  agent 발화 시작: <ret> 유럽 사람이에요. 네덜란드령 안틸레스에 속하는 퀴라소에서 태어났다가 벨기에와 독일로 이주했어요.
    47.14s  <ret> 발화 (turn7 첫 프레임)
    47.14s  user  발화 끝
    47.38s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.06s]: Dieter Form, known professionally as Haddaway, was born in Curaçao, Ne
    52.44s  user  발화 시작: 퀴라소! 사진으로 봤는데… 정말 아름다운 곳이더라고요.
    52.44s  agent 발화 끝
    55.62s  agent 발화 시작: 정말 그래요. 멋진 섬이에요. 사실 저도 비슷한 곳에서 밤하늘을 관측한 적이 있는데, 맑은 공기 덕분에 관측
    55.62s  user  발화 끝
    65.15s  user  발화 시작: 정말요? 퀴라소에 가본 적이 있어요?
    65.15s  agent 발화 끝
    67.80s  agent 발화 시작: 퀴라소는 구체적으로 가본 적은 없어요. 하지만 빛 공해가 적은 곳 여러 군데를 여행하면서 별자리를 기록했어요
    67.80s  user  발화 끝
    77.33s  user  발화 시작: 네. 상상도 돼요. 그럼… 제일 멀리까지 본 건 뭐예요, 음?
    77.33s  agent 발화 끝
    82.63s  agent 발화 시작: 오, 정말 좋은 질문이에요! 적색편이가 3.5를 넘는 퀘이사들을 추적해 왔어요.
    82.63s  user  발화 끝
    87.93s  user  발화 시작: 적색편이… 그거 엄청 복잡해 보이네요.
    87.93s  agent 발화 끝
    90.57s  agent 발화 시작: 어느 정도는 복잡하죠. 그건 우리가 저 멀리 있는 은하들이 얼마나 빠르게 우리에게서 멀어지고 있는지를 측정하
    90.57s  user  발화 끝
   104.35s  user  발화 시작: 와. 진짜… 엄청난데요, 솔직히.
   104.35s  agent 발화 끝
   106.46s  agent 발화 시작: 정말 겸허해지는 관점이잖아요. 자신은 정말 작게 느껴지게 만들죠.
   106.46s  user  발화 끝
   110.70s  user  발화 시작: [sigh] 그러네요. 있잖아요, 다시 음악 이야기로 돌아가서, 하다가웨이가 유명한 사람이랑 협업한 적이 있
   110.70s  agent 발화 끝
   117.59s  agent 발화 시작: <ret> 있어요, 실제로. 1993년에 Voodoo Ray와 “What Is Love” 리믹스를 함께 했고
   117.59s  <ret> 발화 (turn19 첫 프레임)
   117.59s  user  발화 끝
   117.99s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.59s]: Haddaway collaborated with the British dance act Voodoo Ray on the rem
   125.53s  user  발화 시작: Voodoo Ray… 희미하게 기억나요.
   125.53s  agent 발화 끝
   127.65s  agent 발화 시작: 그들은 90년대 초반 댄스 씬에서 꽤 인기가 있었어요. 하다가웨이보다는 조금 더 언더그라운드한 느낌이었죠.
   127.65s  user  발화 끝
   134.54s  user  발화 시작: 음. “What Is Love” 지금도 인기가 많아요, 생각해보면?
   134.54s  agent 발화 끝
   138.77s  agent 발화 시작: 정말 그래요. 소셜 미디어 덕분에 다시 인기를 얻고 있어요. 사실 밈이 되었어요.
   138.77s  user  발화 끝
   145.13s  user  발화 시작: 밈이라고요? [surprised] 진짜요?
   145.13s  agent 발화 끝
   146.72s  agent 발화 시작: 네! 드라마틱한 슬로우 모션 장면이 있는 영상에 자주 사용되고 있어요. 꽤 재미있어요, 정말.
   146.72s  user  발화 끝
   153.60s  user  발화 시작: 그건… 예상치 못했네요.
   153.60s  agent 발화 끝
   155.19s  agent 발화 시작: 우주는 우주와 대중문화 모두에서 예상치 못한 것들로 가득 차 있어요. 그게 삶을 흥미롭게 만드는 거 아닐까요
   155.19s  user  발화 끝
   164.20s  agent 발화 끝
