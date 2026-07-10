# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "우찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-23",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 중국 현대사에 관심이 좀 생겨서… 중국 내전 때 국민당을 | S2 마오쩌둥… 이름이 좀 낯설긴 한데. | S3 천구백이십칠년… 생각보다 훨씬 오래됐네. 그럼 그 내전은 얼마 | S4 대만으로 갔구나… 대만 정부를 세웠다는 건, 지금도 영향력이 

     0.00s  user  발화 시작: 요즘 중국 현대사에 관심이 좀 생겨서… 중국 내전 때 국민당을 이끌었던 사람이 누구였지?
     7.62s  <ret> 발화 (turn1 첫 프레임)
     7.68s  agent 발화 시작: <ret> 중국 공화국의 지도자였던 장제스는 천구백이십팔년부터 천구백칠십오년까지 중국의 정치 및 군사 지도자
     7.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: Chiang Kai-shek was a Chinese political and military leader who served
     7.79s  user  발화 끝
    15.89s  agent 발화 끝
    15.95s  user  발화 시작: 음, 장제스… 이름은 들어봤는데, 좀 더 자세히 알려줄 수 있어?
    21.61s  agent 발화 시작: 장제스는 중국 현대사에서 매우 중요한 인물입니다.
    21.64s  user  발화 끝
    23.51s  user  발화 시작: 응.
    24.01s  user  발화 끝
    24.92s  user  발화 시작: 그 사람이 뭘 그렇게 많이 했길래 중요한 건데?
    24.94s  agent 발화 끝
    27.89s  <ret> 발화 (turn6 첫 프레임)
    28.04s  agent 발화 시작: <ret> 그는 중국 공산당과의 투쟁에서 국민당 정부를 이끌었지만 결국 천구백사십구년 중국 내전에서 패배했습
    28.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: Chiang Kai-shek led the Nationalist government in a struggle against t
    28.25s  user  발화 끝
    35.27s  agent 발화 끝
    35.86s  user  발화 시작: 아, 그래서 내전에서 졌구나. 그럼 공산당은 누가 이끌었어?
    40.69s  <ret> 발화 (turn8 첫 프레임)
    40.84s  agent 발화 시작: <ret> 그건 또 다른 중요한 질문이네요.
    40.85s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.30s]: Mao Zedong was the chairman of the Communist Party of China and a key 
    41.04s  user  발화 끝
    42.99s  agent 발화 시작: 마오쩌둥은 중국 공산당의 주석이었고 중국 공산 혁명의 핵심 인물이었습니다.
    43.14s  agent 발화 끝
    46.00s  user  발화 시작: 응.
    46.63s  user  발화 끝
    48.13s  agent 발화 끝
    48.20s  user  발화 시작: 마오쩌둥… 이름이 좀 낯설긴 한데.
    52.36s  user  발화 끝
    52.54s  agent 발화 시작: 마오쩌둥은 장제스와는 완전히 다른 정치적 노선을 걸었습니다.
    56.28s  agent 발화 끝
    56.39s  user  발화 시작: 그 두 사람, 서로 엄청 대립했겠네?
    59.48s  user  발화 끝
    59.64s  agent 발화 시작: 네, 두 사람은 이념적으로나 전략적으로 매우 대립했습니다—
    62.89s  user  발화 시작: …근데 그 내전이 정확히 언제 시작된 거야?
    63.71s  agent 발화 끝
    65.43s  <ret> 발화 (turn16 첫 프레임)
    65.48s  user  발화 끝
    65.50s  agent 발화 시작: <ret> 중국 내전은 천구백이십칠년에 국민당 정부와 중국 공산당 간의 갈등으로 시작되었습니다.
    65.51s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.25s]: The Chinese Civil War began in 1927, with conflicts between the Kuomin
    71.75s  agent 발화 끝
    71.85s  user  발화 시작: 천구백이십칠년… 생각보다 훨씬 오래됐네. 그럼 그 내전은 얼마나 오래 계속됐어?
    78.59s  <ret> 발화 (turn18 첫 프레임)
    78.74s  agent 발화 시작: <ret> 중국 내전은 제2차 세계 대전 기간 동안 주요 중단이 있었지만, 천구백이십칠년부터 천구백사십구년까
    78.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.72s]: The Chinese Civil War lasted intermittently from 1927 to 1949, with a 
    78.93s  user  발화 끝
    83.77s  user  발화 시작: 응.
    84.41s  user  발화 끝
    87.18s  user  발화 시작: 세계 이차 대전 중에도 싸웠다니… 복잡하네.
    87.46s  agent 발화 끝
    90.88s  user  발화 끝
    90.97s  agent 발화 시작: 네, 역사는 복잡한 면이 많죠. 하지만 이해하려고 노력하는 것이 중요합니다.
    94.03s  user  발화 시작: 응.
    94.76s  user  발화 끝
    96.06s  user  발화 시작: 그럼 내전이 끝난 후에 장제스는 어떻게 됐어?
    96.15s  agent 발화 끝
    99.27s  <ret> 발화 (turn24 첫 프레임)
    99.43s  user  발화 끝
    99.66s  agent 발화 시작: <ret> 중국 내전에서 패배한 후 장제스는 대만으로 퇴각하여 천구백사십구년에 그곳에 정부를 세웠습니다.
    99.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: After losing the Chinese Civil War, Chiang Kai-shek retreated to Taiwa
   105.78s  agent 발화 끝
   106.08s  user  발화 시작: 대만으로 갔구나… 대만 정부를 세웠다는 건, 지금도 영향력이 있는 거야?
   112.04s  agent 발화 시작: 네, 대만은 여전히 중요한 정치적 존재감을 유지하고 있습니다.
   112.05s  user  발화 끝
   113.35s  user  발화 시작: 어.
   114.17s  user  발화 끝
   115.57s  user  발화 시작: 오늘 날씨가 어때?
   115.61s  agent 발화 끝
   117.16s  <ret> 발화 (turn29 첫 프레임)
   117.32s  user  발화 끝
   117.40s  agent 발화 시작: <ret> 현재 기온은 섭씨 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다.
   117.40s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.39s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
   120.49s  user  발화 시작: 음.
   121.22s  user  발화 끝
   123.71s  user  발화 시작: 꽤 덥겠네.
   123.80s  agent 발화 끝
   124.86s  agent 발화 시작: 네, 꽤 더운 날씨입니다.
   124.95s  user  발화 끝
   126.37s  agent 발화 끝
