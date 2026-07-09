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


     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로입니다. 창의적인 막힘이나 자신감 문제로 고민하시는 분들을 돕는 상담사예요.
     6.21s  user  발화 시작: Yeah.
     6.75s  user  발화 끝
     8.12s  agent 발화 끝
     8.84s  user  발화 시작: 아, 네. 투날로님. 지난번에 교토 여행 계획에 대해 이야기했었죠? 혹시 그때 제가 뭘 찾고 있었는지 기억하
    15.66s  <ret> 발화 (turn3 첫 프레임)
    15.72s  agent 발화 시작: <ret> 교토 여행 계획에 대해서요? 내년 삼월에 교토 여행을 계획하고 계셨어요. 그때 여행에 대해 논의했
    15.93s  user  발화 끝
    16.62s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.01s]: [2026-07-25] User is planning a trip to Kyoto in March.
    22.77s  agent 발화 끝
    22.78s  user  발화 시작: 맞아요, 맞고요. 삼월에 가려고 하는데, 혹시 그때 날씨가 어때요?
    26.97s  agent 발화 시작: 삼월의 교토 날씨는 변덕스러울 수 있지만, 보통은 벚꽃이 피기 시작해서 아주 아름다운 계절이에요. 평균 기온
    27.18s  user  발화 끝
    35.33s  user  발화 시작: Mm-hmm.
    35.82s  user  발화 끝
    38.44s  <ret> 발화 (turn7 첫 프레임)
    38.51s  agent 발화 시작: <ret> 혹시 교토에서 특별히 하고 싶은 활동이 있으신가요? 등반을 좋아하신다고 말씀하신 적이 있었던 것 
    38.71s  agent 발화 끝
    40.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: [2026-06-14] User is into rock climbing.
    45.63s  agent 발화 시작: 등반을 즐기신다고 하셨으니, 교토 근처에 암벽 등반을 할 수 있는 곳을 찾아볼까요?
    45.65s  agent 발화 끝
    51.48s  agent 발화 끝
    52.36s  user  발화 시작: 오, 좋아요! 암벽 등반할 수 있는 곳이 있다면 알려주세요.
    56.53s  user  발화 끝
