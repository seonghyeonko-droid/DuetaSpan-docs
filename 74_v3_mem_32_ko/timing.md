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


     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로예요. 창의적인 고민이나 자신감 문제로 어려움을 겪고 계신 분들을 돕는 상담
     7.22s  user  발화 시작: 그러니까요.
     7.86s  user  발화 끝
     9.69s  agent 발화 끝
    10.37s  user  발화 시작: 아, 네. 투날로 씨. 얼마 전에 교토 여행 계획을 세우고 있다고 말씀드렸었죠?
    14.91s  <ret> 발화 (turn3 첫 프레임)
    14.98s  agent 발화 시작: <ret> 네, 기억하고 있어요. 교토에 3월에 가시는군요. 혹시 여행 날짜를 정하셨는지 여쭤봐도 될까요?
    15.18s  user  발화 끝
    15.79s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.65s]: [2026-07-25] User is planning a trip to Kyoto in March.
    17.36s  user  발화 시작: 그렇죠.
    17.95s  user  발화 끝
    21.60s  agent 발화 끝
    21.71s  user  발화 시작: 아직 정확한 날짜는 못 정했어요. 그런데 그때 날씨가 어떨지 궁금하네요.
    25.57s  <ret> 발화 (turn6 첫 프레임)
    25.88s  agent 발화 시작: <ret> [curious] 3월의 교토 날씨에 대해 알아봐 드릴까요?
    25.93s  user  발화 끝
    26.61s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.86s]: (tool result) Temperature: 10-18°C. Precipitation: 150mm. Conditions: 
    28.53s  agent 발화 시작: 3월의 교토는 평균 기온이 10도에서 18도 사이이고, 강수량은 150밀리미터 정도예요. 흐린 날씨에 비가 
    28.75s  agent 발화 끝
    38.23s  agent 발화 끝
    38.54s  user  발화 시작: 아, 그렇군요. 그럼 우산을 꼭 챙겨야겠네요.
    40.98s  user  발화 끝
    41.34s  agent 발화 시작: 네, 여행 준비하실 때 우산을 꼭 챙기시는 게 좋겠어요. 혹시 다른 궁금한 점이 있으신가요?
    47.64s  agent 발화 끝
