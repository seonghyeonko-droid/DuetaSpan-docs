# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 투날로 씨. 혹시 제가 작년에 어디 여행을 가기로  | S2 맞아요, 교토! 그런데 그때 제가 특별히 요청했던 게 있었던  | S3 음… 글쎄요. 그냥 좀 더 자세히 알고 싶어서요. | S4 아, 네. 혹시 제가 그때 식단에 대해 특별히 언급했었나요?

     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로예요. 창의적인 고민이나 자신감 문제로 어려움을 겪고 계신 분들을 돕는 상담
     6.40s  user  발화 시작: 네.
     6.76s  user  발화 끝
     8.43s  agent 발화 끝
     9.08s  user  발화 시작: 아, 네. 투날로 씨. 혹시 제가 작년에 어디 여행을 가기로 계획했었죠? 기억하시나요?
    14.56s  <ret> 발화 (turn3 첫 프레임)
    14.63s  agent 발화 시작: <ret> 제가 기억하고 있어요. 내년 삼월에 교토로 여행을 가기로 하셨었죠. 즐거운 여행 되시길 바라요.
    14.87s  user  발화 끝
    15.44s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.59s]: [2026-07-25] User is planning a trip to Kyoto in March.
    19.45s  user  발화 시작: 음.
    19.95s  user  발화 끝
    21.53s  agent 발화 끝
    21.70s  user  발화 시작: 맞아요, 교토! 그런데 그때 제가 특별히 요청했던 게 있었던 것 같은데…
    26.31s  agent 발화 시작: 혹시 여행 일정이나 숙소 같은 특별한 요청을 하셨던 게 있으신가요?
    26.37s  user  발화 끝
    30.85s  agent 발화 끝
    31.75s  user  발화 시작: 음… 글쎄요. 그냥 좀 더 자세히 알고 싶어서요.
    34.66s  <ret> 발화 (turn8 첫 프레임)
    34.70s  user  발화 끝
    34.73s  agent 발화 시작: <ret> 내년 삼월에 교토 여행을 계획 중이시고, 특별한 요청 사항은 따로 없으셨던 것으로 기억해요. 혹시
    36.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: [2026-07-25] User is planning a trip to Kyoto in March.
    43.96s  agent 발화 끝
    44.12s  user  발화 시작: 아, 네. 혹시 제가 그때 식단에 대해 특별히 언급했었나요?
    47.49s  user  발화 끝
    47.67s  agent 발화 시작: 마농님께서는 글루텐 프리 식단을 선호하시는 것으로 기억하고 있어요.
    52.67s  agent 발화 끝
