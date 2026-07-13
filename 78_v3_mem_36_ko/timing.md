# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "하민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네, 안녕하세요. 전에 제가 베트남 여행 계획 세우고 있 | S2 음… 호이안이 더 끌리네요. 혹시 호이안에 사진 찍기 좋은 곳 | S3 아, 좋네요. 그럼 호이안 근처에 괜찮은 호텔도 알아봐 주시겠 | S4 오, 괜찮네요. 감사합니다.

     0.00s  agent 발화 시작: 안녕하세요, 하민님. 저는 오리아입니다. 커리어 고민이나 직장 스트레스, 뭐든 편하게 말씀해주세요.
     5.45s  user  발화 시작: 아, 네, 안녕하세요. 전에 제가 베트남 여행 계획 세우고 있다고 말씀드렸었죠?
     5.45s  agent 발화 끝
    10.72s  <ret> 발화 (turn2 첫 프레임)
    10.91s  agent 발화 시작: <ret> 네, 십이월에 베트남 여행을 계획하고 계시다고 말씀해주셨어요.
    10.91s  user  발화 끝
    11.81s  ⚡SPAN 주입 [d'=1.09s / d_lead=3.47s]: [2026-05-03] User is planning a trip to Vietnam in December.
    14.38s  user  발화 시작: 그럼 혹시 하노이 말고 다른 도시도 추천해주실 수 있을까요? 좀 조용한 곳으로요.
    14.38s  agent 발화 끝
    20.33s  agent 발화 시작: 다낭이나 호이안은 어떠세요? 조용하고 아름다운 해변 도시예요.
    20.33s  user  발화 끝
    23.80s  user  발화 시작: 맞아요.
    23.80s  agent 발화 끝
    24.30s  user  발화 시작: 음… 호이안이 더 끌리네요. 혹시 호이안에 사진 찍기 좋은 곳이 있을까요? 제가 야생화 사진 찍는 걸 좋아하
    24.30s  user  발화 끝
    32.73s  agent 발화 시작: 네.
    32.73s  user  발화 끝
    33.20s  <ret> 발화 (turn8 첫 프레임)
    33.22s  agent 발화 시작: <ret> 호이안에 야생화 사진 찍기 좋은 곳이요? 음, 호이안 구시가지 주변의 정원이나 논밭에서 예쁜 꽃들
    33.22s  agent 발화 끝
    34.02s  ⚡SPAN 주입 [d'=0.82s / d_lead=8.93s]: [2026-03-13] User is into alpine wildflower photography.
    42.15s  user  발화 시작: 아, 좋네요. 그럼 호이안 근처에 괜찮은 호텔도 알아봐 주시겠어요? 수영장이 있으면 더 좋고요.
    42.15s  agent 발화 끝
    48.59s  agent 발화 시작: 음.
    48.59s  user  발화 끝
    48.80s  <ret> 발화 (turn11 첫 프레임)
    49.09s  agent 발화 시작: <ret> 호이안에 있는 아난타라 호이안 리조트는 어떠세요? 수영장과 스파, 레스토랑도 갖춰져 있고, 평점도
    49.09s  agent 발화 끝
    50.07s  ⚡SPAN 주입 [d'=1.27s / d_lead=8.93s]: (tool result) {"hotel name": "Anantara Hoi An Resort", "address": "1 P
    58.01s  user  발화 시작: 네.
    58.01s  agent 발화 끝
    58.51s  user  발화 시작: 오, 괜찮네요. 감사합니다.
    58.51s  user  발화 끝
    60.00s  agent 발화 시작: [happy] 도움이 되셨다니 다행이에요.
    60.00s  user  발화 끝
    61.98s  agent 발화 끝
