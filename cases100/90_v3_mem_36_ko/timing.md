# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "윤아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "floor",
#       "text": "User lives on the 7th floor."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "commute",
#       "text": "User bikes to work."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "hobby",
#       "text": "User is into astrophotography."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "trip",
#       "text": "User is planning a trip to Hokkaido in August."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "learning",
#       "text": "User is taking pottery classes."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "car",
#       "text": "User drives no car — uses car-sharing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-05-04",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 좋아요. | S2 사실, 지난번에 호주 워킹홀리데이 비자 때문에 물어봤었잖아요. | S3 네, 맞아요. 근데 그때 잔고를 얼마나 준비해야 하는지 정확히 | S4 잠깐만요, 그런데 지금 환율이 계속 변동하잖아요?

     0.00s  agent 발화 시작: 안녕하세요, 윤아님! 저는 갤이에요. 편안하게 이야기 나누면서 창의적인 고민을 함께 풀어갈 수 있도록 돕는 
     9.50s  agent 발화 끝
     9.51s  user  발화 시작: 음, 좋아요.
    10.65s  user  발화 끝
    10.66s  agent 발화 시작: 혹시 요즘 어떤 생각으로 힘들어하고 계신가요?
    13.89s  agent 발화 끝
    14.04s  user  발화 시작: 사실, 지난번에 호주 워킹홀리데이 비자 때문에 물어봤었잖아요.
    17.92s  <ret> 발화 (turn4 첫 프레임)
    18.45s  agent 발화 시작: <ret> 아, 네, 워킹홀리데이 비자 준비를 하고 계셨군요. 그때 은행 잔고 요건에 대해 여쭤보셨었죠.
    18.56s  user  발화 끝
    18.94s  ⚡SPAN 주입 [d'=1.02s / d_lead=7.69s]: [2026-05-04] Past chat — Sorting out a visa: applying for a working-ho
    25.82s  user  발화 시작: 네, 맞아요. 근데 그때 잔고를 얼마나 준비해야 하는지 정확히 안 알려주셨잖아요.
    26.14s  agent 발화 끝
    28.21s  agent 발화 시작: 네.
    28.61s  agent 발화 끝
    30.32s  <ret> 발화 (turn7 첫 프레임)
    30.73s  agent 발화 시작: <ret> 호주 워킹홀리데이 비자 신청 시에는 이천이십육년 기준으로 에이 유 디 오천 한화로 약 사백팔십만 
    30.87s  user  발화 끝
    31.51s  ⚡SPAN 주입 [d'=1.19s / d_lead=9.04s]: (tool result) To apply for the Working Holiday visa (subclass 417) to 
    34.89s  user  발화 시작: 응.
    35.20s  user  발화 끝
    39.77s  agent 발화 끝
    39.77s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 워킹홀리데이 준비는 꽤 복잡하니까요. —
    44.83s  user  발화 시작: 잠깐만요, 그런데 지금 환율이 계속 변동하잖아요?
    45.43s  agent 발화 끝
    48.20s  user  발화 끝
    48.20s  agent 발화 시작: 아, 맞아요. 환율 변동 때문에 정확한 금액이 달라질 수 있다는 점을 고려해야겠네요. 현재 환율은 계속 변동
    63.27s  agent 발화 시작: 비자 신청 전에 꼭 다시 한번 환율을 확인해 보시는 게 좋겠어요.
    63.28s  agent 발화 끝
    67.85s  agent 발화 끝
