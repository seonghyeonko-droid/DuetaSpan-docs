# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 에이스팀이 노히트 게임을 당한 게 언제였는지 아 | S2 아, 그렇군요. 그 경기 결과는 어땠어요? 혹시 많이 졌어요? | S3 잠깐만, 김 대리님, 그 서류는 내일 아침에 보여주세요. | S4 혹시 그 경기 점수는요?

     0.00s  user  발화 시작: 혹시 오클랜드 에이스팀이 노히트 게임을 당한 게 언제였는지 아세요? 궁금하네요.
     5.14s  <ret> 발화 (turn1 첫 프레임)
     5.37s  agent 발화 시작: <ret> 에이스팀 관련 기록을 한번 찾아볼게요. 두천이십팔 년 사월 이십일, 디트로이트 타이거즈의 마이크 
     5.42s  user  발화 끝
     6.18s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.48s]: [source: Wikipedia] The Oakland Athletics were last no-hit on April 21
    11.87s  user  발화 시작: 맞아요.
    12.60s  user  발화 끝
    13.80s  agent 발화 끝
    14.26s  user  발화 시작: 아, 그렇군요. 그 경기 결과는 어땠어요? 혹시 많이 졌어요?
    18.87s  user  발화 시작: 잠깐만, 김 대리님, 그 서류는 내일 아침에 보여주세요.
    19.03s  user  발화 끝
    23.03s  user  발화 시작: 혹시 그 경기 점수는요?
    23.08s  user  발화 끝
    24.67s  agent 발화 시작: 그 경기는 타이거즈가 에이스팀을 오 대 제로로 이겼습니다.
    24.77s  user  발화 끝
    28.53s  agent 발화 시작: 혹시 다른 야구 관련 궁금한 점이 있으신가요?
    28.60s  agent 발화 끝
    31.91s  agent 발화 끝
