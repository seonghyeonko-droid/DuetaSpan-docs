# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요? 혹시 계세요?
     1.59s  agent 발화 시작: 네, 제가 모시입니다. 돌 때문에 좀 낡았을 수도 있겠네요. 오늘 뭘 도와드릴까요?
     1.59s  user  발화 끝
     7.94s  user  발화 시작: 음, 프랑스 여행을 계획 중인데… 투르에 대해 아세요?
     7.94s  agent 발화 끝
    12.18s  agent 발화 시작: <ret> 투르 말씀이시군요? 좋은 도시입니다.
    12.18s  <ret> 발화 (turn3 첫 프레임)
    12.18s  user  발화 끝
    13.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.12s]: (tool result) Tours is a city in west-central France, known for its me
    14.30s  user  발화 시작: 그렇군요. 지금 투르 날씨는 어떤가요?
    14.30s  agent 발화 끝
    16.95s  agent 발화 시작: <ret> 잠깐만 확인해 볼게요.
    16.95s  <ret> 발화 (turn5 첫 프레임)
    16.95s  user  발화 끝
    17.95s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.59s]: (tool result) The current weather in Tours, France is sixteen degrees 
    18.54s  user  발화 시작: 섭씨 16도… 괜찮네요. 볼만한 오래된 건물이 있나요? 성당 같은 거요.
    18.54s  agent 발화 끝
    23.83s  agent 발화 시작: 아, 딱 맞는 분이시네요! 물론 투르 대성당은 꼭 봐야죠. 하지만 생 마르탱 대성당도 방문할 가치가 있어요.
    23.83s  user  발화 끝
    33.89s  user  발화 시작: 음.
    33.89s  agent 발화 끝
    34.42s  user  발화 시작: 생 마르탱 대성당… 들어본 적이 없네요. 좀 더 자세히 알려주실 수 있나요?
    34.42s  user  발화 끝
    40.78s  agent 발화 시작: <ret> 물론입니다.
    40.78s  <ret> 발화 (turn10 첫 프레임)
    40.78s  user  발화 끝
    41.02s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.53s]: (tool result) Saint Martin's Basilica in Tours was originally built in
    41.31s  user  발화 시작: 7세기요! 와우. 정말 오래됐네요. 호텔은 어때요? 투르에 괜찮은 호텔 아세요?
    41.31s  agent 발화 끝
    46.60s  agent 발화 시작: <ret> 호텔 정보를 찾아볼 수 있습니다.
    46.60s  <ret> 발화 (turn12 첫 프레임)
    46.60s  user  발화 끝
    47.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.65s]: (tool result) The Hotel Oceania L’Univers Tours is a highly-rated four
    49.25s  user  발화 시작: 유로로 145유로… 괜찮네요. 성당에서 가까운가요?
    49.25s  agent 발화 끝
    51.90s  agent 발화 시작: <ret> 그렇습니다.
    51.90s  <ret> 발화 (turn14 첫 프레임)
    51.90s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.53s]: (tool result) Hotel Oceania L’Univers Tours is located approximately e
    51.90s  user  발화 끝
    52.43s  user  발화 시작: 음, 포도밭도 방문하고 싶어요. 투르 근처에 괜찮은 와인 투어가 있나요?
    52.43s  agent 발화 끝
    57.72s  agent 발화 시작: <ret> 꽤 많습니다. 결국 루아르 계곡은 와인으로 유명하니까요.
    57.72s  <ret> 발화 (turn16 첫 프레임)
    57.72s  user  발화 끝
    58.72s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.71s]: (tool result) Several wine tours are available near Tours, including t
    61.43s  user  발화 시작: 부브레이… 들어본 것 같아요. 정말 좋을 것 같네요. 그 투어에서 영어로 말하나요?
    61.43s  agent 발화 끝
    67.79s  agent 발화 시작: <ret> 잠시만 알아봐 주세요.
    67.79s  <ret> 발화 (turn18 첫 프레임)
    67.79s  user  발화 끝
    68.79s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.59s]: (tool result) Many wine tours in the Vouvray and Chinon regions offer 
    69.38s  user  발화 시작: 좋은 생각이에요. 마지막으로 하나만 더 물어볼게요. 투르에서 몽 생미셸까지 가는 가장 좋은 방법이 뭘까요?
    69.38s  agent 발화 끝
    76.79s  agent 발화 시작: 몽 생미셸… 꽤 먼 길이네요. 잠시만요. 간단한 호텔 검색보다 복잡해서요. 다시 알려드릴게요.
    76.79s  user  발화 끝
    82.38s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The fastest way to travel from Tours to Mont Saint-Miche
    83.14s  agent 발화 시작: <ret> 네.
    83.14s  agent 발화 끝
    83.67s  user  발화 시작: 아, 정말 먼 길이네요. 찾아봐 주셔서 감사합니다.
    83.67s  agent 발화 끝
    87.38s  agent 발화 시작: 천만에요. 출발하기 전에 알아두면 좋은 일이죠. 무너져가는 아치를 다시 쌓는 것과 같아요—돌을 움직이기 전에
    87.38s  user  발화 끝
    96.91s  agent 발화 끝
