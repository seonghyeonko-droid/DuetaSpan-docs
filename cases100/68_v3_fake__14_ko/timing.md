# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "채재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "schedule",
#       "text": "User has a hybrid 3-days-in-office week."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "child",
#       "text": "User has a child named Mina, age 16."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 24°C."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "allergy",
#       "text": "User is allergic to bee stings."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "phone",
#       "text": "User uses an iPhone 15."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "emergency",
#       "text": "User's emergency contact is Kenji."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-03-08",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 켈라크스님. 요즘 좀 힘든 시간을 보내고 있어요. | S2 네, 저도 어릴 때 정말 재밌게 봤어요. 그래서 다시 보고 싶 | S3 음… 영화를 보는 것도 좋겠지만, 뭔가 좀 더… 활동적인 걸  | S4 오, 이건희 컬렉션이요? 한번 가봐야겠네요.

     0.00s  user  발화 시작: 안녕하세요, 켈라크스님. 요즘 좀 힘든 시간을 보내고 있어요.
     3.83s  user  발화 끝
     4.00s  agent 발화 시작: 안녕하세요. 힘든 시간을 보내고 계시다니 마음이 아픕니다. 어떤 점이 가장 힘드신가요?
     9.79s  agent 발화 끝
     9.89s  user  발화 시작: 글쎄요… 뭘 해야 할지, 뭘 하고 싶은지 잘 모르겠어요.
    13.46s  <ret> 발화 (turn3 첫 프레임)
    13.96s  agent 발화 시작: <ret> 영화 '오즈의 마법사'는 천구백삼십구년 팔월 이십오일 할리우드의 그라uman 극장에서 초연을 올렸
    13.96s  user  발화 끝
    14.43s  ⚡SPAN 주입 [d'=0.97s / d_lead=7.14s]: The Wizard of Oz premiered at Grauman's Chinese Theatre in Hollywood o
    17.48s  user  발화 시작: 네.
    18.20s  user  발화 끝
    21.10s  agent 발화 끝
    21.14s  user  발화 시작: 오즈의 마법사요? 갑자기 영화 얘기가 왜…
    25.03s  agent 발화 시작: [happy] 혹시 그 영화를 좋아하시나요? 어릴 때 정말 좋아했던 영화거든요.
    25.16s  user  발화 끝
    27.01s  user  발화 시작: 네.
    27.51s  user  발화 끝
    29.20s  agent 발화 끝
    29.32s  user  발화 시작: 네, 저도 어릴 때 정말 재밌게 봤어요. 그래서 다시 보고 싶은 마음이 드네요.
    32.26s  agent 발화 시작: 네.
    32.71s  agent 발화 끝
    33.70s  <ret> 발화 (turn10 첫 프레임)
    33.85s  user  발화 끝
    33.85s  agent 발화 시작: <ret> '오즈의 마법사'에서 도로시 게일 역을 맡은 주디 갈랜드는 그 역할로 큰 스타가 되었죠.
    34.88s  ⚡SPAN 주입 [d'=1.18s / d_lead=5.56s]: Judy Garland played Dorothy Gale in The Wizard of Oz, becoming a star 
    39.41s  agent 발화 끝
    39.54s  user  발화 시작: 주디 갈랜드… 노래도 정말 잘 부르던데.
    42.55s  user  발화 끝
    42.79s  agent 발화 시작: 맞아요. 그녀의 목소리는 정말 특별하죠.
    43.70s  user  발화 시작: 네.
    44.15s  user  발화 끝
    45.79s  agent 발화 끝
    45.81s  agent 발화 시작: 혹시 지금 기분 전환을 위해 영화를 보는 건 어떠세요?
    49.33s  agent 발화 끝
    49.37s  user  발화 시작: 음… 영화를 보는 것도 좋겠지만, 뭔가 좀 더… 활동적인 걸 하고 싶기도 해요.
    54.60s  user  발화 끝
    54.82s  agent 발화 시작: 활동적인 걸 좋아하시는군요. —
    56.08s  user  발화 시작: …혹시 요즘 서울에서 하는 재미있는 전시회 같은 거 없을까요?
    56.89s  agent 발화 끝
    57.90s  agent 발화 시작: 네.
    58.36s  agent 발화 끝
    59.47s  <ret> 발화 (turn19 첫 프레임)
    59.53s  agent 발화 시작: <ret> 서울시립미술관에서 '이건희 컬렉션 특별전'이 이천이십사년 구월 십오일까지 열린다고 합니다. 한국 
    59.64s  user  발화 끝
    60.74s  ⚡SPAN 주입 [d'=1.27s / d_lead=9.59s]: (tool result) "서울시립미술관에서 '이건희 컬렉션 특별전'이 2024년 9월 15일까지 열립니다. 다양한 한국 근현
    63.38s  user  발화 시작: 네.
    63.83s  user  발화 끝
    69.12s  agent 발화 끝
    69.18s  user  발화 시작: 오, 이건희 컬렉션이요? 한번 가봐야겠네요.
    72.08s  agent 발화 시작: [happy] 정말 멋진 전시회일 거예요. 기분 전환에 도움이 될 것 같네요.
    72.22s  user  발화 끝
    73.90s  user  발화 시작: 예.
    74.39s  user  발화 끝
    75.96s  agent 발화 끝
    76.09s  user  발화 시작: 네, 감사합니다. 켈라크스님 덕분에 좋은 아이디어를 얻었어요.
    79.87s  agent 발화 시작: 천만에요. 언제든지 힘든 일이 있으면 저에게 말씀하세요. 제가 곁에 있다는 것을 기억해주세요.
    79.94s  user  발화 끝
    85.74s  agent 발화 시작: 오늘 하루도 즐겁게 보내세요.
    85.84s  agent 발화 끝
    87.72s  agent 발화 끝
