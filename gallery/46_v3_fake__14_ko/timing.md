# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 드류 브리스 선수가 프로 축구를 시작한 게 언제인지 궁금하네요.
     4.27s  agent 발화 시작: 아, 좋은 질문이세요. 선수들의 시작을 알아보는 건 정말 좋은 일인 것 같아요.
     4.49s  user  발화 끝
     9.19s  agent 발화 끝
     9.19s  user  발화 시작: 네, 그냥 궁금해서요. 저는 새로운 팬이거든요.
    11.85s  <ret> 발화 (turn3 첫 프레임)
    12.44s  agent 발화 시작: <ret> 음, 한번 찾아볼까요… 그는 이천일 년에 샌디에이고 차저스에서 NFL 경력을 시작했어요.
    12.70s  user  발화 끝
    12.85s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.63s]: Drew Brees entered the NFL in 2001, drafted by the San Diego Chargers.
    19.67s  agent 발화 끝
    19.91s  user  발화 시작: 알아두니 좋네요. 차저스에서 바로 주전으로 뛰었나요?
    24.07s  agent 발화 시작: 바로 그렇진 않았어요. 새로운 리그에서 리듬을 찾으려면 시간이 필요하거든요.
    24.26s  user  발화 끝
    28.98s  agent 발화 끝
    29.30s  user  발화 시작: 그럼… 그러니까, 잠시 백업이었던 건가요, 아니면…?
    32.54s  <ret> 발화 (turn7 첫 프레임)
    33.12s  agent 발화 시작: <ret> 사실 그랬어요. 브리스 선수는 차저스에서 처음 두 시즌 동안 백업 쿼터백이었어요.
    33.32s  user  발화 끝
    33.54s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.42s]: Brees served as the Chargers' backup quarterback for his first two sea
    38.44s  user  발화 시작: 두 시즌 동안 백업이었군요… 그러고 나서 무슨 일이 있었나요? 부상을 입었나요?
    38.49s  agent 발화 끝
    43.39s  <ret> 발화 (turn9 첫 프레임)
    43.98s  agent 발화 시작: <ret> 정말 날카로운 관찰이세요. 네, 부상이 그의 선수 생활에 영향을 미쳤어요.
    44.22s  user  발화 끝
    44.39s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=5.69s]: (tool result) Current time in Tokyo is 15:34:58 on February 29, 2024.
    49.63s  agent 발화 시작: 그는 이천오 년에 심각한 어깨 부상을 입었는데, 거의 선수 생활을 망칠 뻔했어요.
    49.67s  agent 발화 끝
    55.33s  agent 발화 끝
    55.50s  user  발화 시작: 와, 정말 힘들었겠네요. 그 부상이 투구 능력에 영향을 미쳤나요?
    59.71s  agent 발화 시작: 그랬어요. 심각한 관절와순 파열이었는데, 어떤 쿼터백에게나 어려운 일이에요.
    59.86s  user  발화 끝
    65.09s  <ret> 발화 (turn13 첫 프레임)
    65.67s  agent 발화 시작: <ret> 그의 헌신이 정말 대단하네요… 그는 회복해서 이천육 년에 뉴올리언스 세인츠에 합류했어요.
    66.06s  agent 발화 끝
    66.09s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.89s]: Brees underwent surgery and rehabilitation, returning to play in 2006 
    72.80s  agent 발화 끝
    73.08s  user  발화 시작: 그때부터 세인츠에서 정말 빛을 발하기 시작했죠?
    76.22s  user  발화 끝
    76.40s  agent 발화 시작: 맞아요. 뉴올리언스는 그의 재능과 리더십에 완벽하게 맞는 곳이었어요.
    82.00s  agent 발화 끝
