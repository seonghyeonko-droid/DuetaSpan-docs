# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Andrea · Location: London, United Kingdom · Nationality: British · Gender: non-binary · Age: early 30s · TZ: Europe/London (GMT, UTC+0) · Currency: GBP (£)
#   B. 저장 메모리:
#      [2026-08-04] User's home address is 148 Elm Street.
#      [2026-06-19] User is vegetarian.
#      [2026-03-14] User is planning a trip to Vietnam in May.
#      [2026-03-06] User works as a graduate student.
#      [2026-01-25] User is allergic to pollen.
#   B. 과거 대화 요약:
#      [2026-07-05] Setting up a home network — asked about mesh routers; coverage for a 3-story house
#      [2026-04-18] Researching a used car — comparing hybrid models; wants under 30k miles

# EXAMINER(FDB-v2) 단계: S1 어디서 “빅 브라더”라는 말이 나왔는지 궁금했는데… 왠지 익숙 | S2 와, 일천구백사십구 년이라니. 생각보다 훨씬 옛날이네요! 그럼 | S3 …그렇군요. 그래서 요즘 그걸 비판하는 데 쓰는 말이 된 거군 | S4 “이중 사고”… 그거 전에 들어본 것 같아요. 서로 모순되는 

     0.00s  user  발화 시작: 어디서 “빅 브라더”라는 말이 나왔는지 궁금했는데… 왠지 익숙한 것 같기도 하고, 딱 떠오르진 않네요.
     6.71s  user  발화 끝
     6.91s  agent 발화 시작: 이야, 그거 진짜 흥미로운 질문이고, 사실 흔히 물어보는 거거든. 요즘 너무 많이 쓰이니까.
    12.32s  agent 발화 끝
    12.37s  user  발화 시작: …감시하고, 통제하고…
    14.45s  user  발화 끝
    15.21s  user  발화 시작: …근데 그게 원래 어떻게 시작된 건지 잘 모르겠어요.
    18.12s  <ret> 발화 (turn4 첫 프레임)
    18.45s  user  발화 끝
    18.52s  agent 발화 시작: <ret> 그 기원을 알아볼게. “빅 브라더”라는 말은 조지 오웰의 소설 *1984*에서 유래됐어. 천구백사
    20.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: <Nineteen Eighty-Four is a dystopian novel published in 1949 by Englis
    26.00s  user  발화 시작: 맞아요.
    26.64s  user  발화 끝
    28.36s  agent 발화 끝
    28.53s  user  발화 시작: 와, 일천구백사십구 년이라니. 생각보다 훨씬 옛날이네요! 그럼 비교적 최근에 생긴 말인 건가요?
    35.16s  user  발화 끝
    35.72s  agent 발화 시작: 그래, 뭐. 근데 권력 관계를 이해하는 데 큰 영향을 줬어.
    37.06s  user  발화 시작: 아.
    37.70s  user  발화 끝
    39.29s  agent 발화 끝
    39.41s  user  발화 시작: 그런가 보네요. 책에서 “빅 브라더”는 좋은 편인가요, 아니면 나쁜 편인가요?
    42.83s  <ret> 발화 (turn10 첫 프레임)
    43.14s  agent 발화 시작: <ret> 그게 중요한 부분이야. *1984*에서 빅 브라더는 오세아니아의 독재자고, 끊임없는 정부 감시와 
    43.16s  user  발화 끝
    44.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.42s]: <In the novel, Big Brother is the enigmatic dictator of Oceania, repre
    46.41s  user  발화 시작: 네.
    46.91s  user  발화 끝
    50.23s  user  발화 시작: 아. 그럼 절대 좋은 사람이 아니군요…
    50.56s  agent 발화 끝
    53.47s  user  발화 끝
    53.83s  user  발화 시작: …그렇군요. 그래서 요즘 그걸 비판하는 데 쓰는 말이 된 거군요.
    58.32s  user  발화 끝
    58.40s  agent 발화 시작: 맞아. 빅 브라더의 이미지는 억압적인 권위와 동의어가 됐어.
    60.18s  user  발화 시작: 그렇죠.
    60.81s  user  발화 끝
    62.79s  agent 발화 끝
    62.89s  user  발화 시작: 음. 오웰이 이걸 이렇게 널리 퍼질 거라고 생각했을까 궁금하네요.
    67.74s  user  발화 끝
    67.79s  agent 발화 시작: 허구적인 개념이 현실처럼 살아 움직이는 게 얼마나 신기한지, 그렇지 않아?
    73.08s  agent 발화 끝
    73.88s  user  발화 시작: [laugh] 정말 그렇네요. 혹시 이 책에 또 우리가 오늘날 생각하는 데 영향을 주는 중요한 게 있나요?
    79.68s  <ret> 발화 (turn19 첫 프레임)
    80.00s  agent 발화 시작: <ret> *1984*는 엄청난 유산을 남겼어. 이 책은 “이중 사고”나 “사상 범죄” 같은 개념을 소개했는
    80.04s  user  발화 끝
    81.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.85s]: <The novel introduced concepts like “doublethink” and “thoughtcrime”, 
    87.72s  user  발화 시작: 네네.
    88.35s  user  발화 끝
    90.99s  agent 발화 끝
    91.13s  user  발화 시작: “이중 사고”… 그거 전에 들어본 것 같아요. 서로 모순되는 두 가지 믿음을 동시에 갖는 거 맞죠?
    97.89s  user  발화 끝
    98.02s  agent 발화 시작: 맞아. 모순되는 생각을 동시에 받아들일 수 있는 능력을 말하는 거야. 소설 속 세계의 핵심 요소지.
   100.50s  user  발화 시작: 아.
   100.99s  user  발화 끝
   104.51s  agent 발화 끝
   105.56s  user  발화 시작: 그거… 끔찍하네요. 솔직히 요즘 세상에도 너무 관련 있는 것 같아서 무서워요.
   110.29s  user  발화 끝
   110.45s  agent 발화 시작: 이념과 사고 통제에 대한 영원한 우려를 보여주는 거겠지. 혹시 비판적 사고 전략에 대해 이야기해 볼까?
   117.68s  agent 발화 끝
