# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "세빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-31",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 천칠백육십일년에 스페인과 협정을 맺은 사람이 누구였나요? | S2 그 시대 프랑스는 어땠나요? | S3 … 그 협정은 프랑스에 어떤 영향을 줬나요? | S4 칠년 전쟁은 왜 일어났나요?

     0.00s  user  발화 시작: 천칠백육십일년에 스페인과 협정을 맺은 사람이 누구였나요?
     3.68s  <ret> 발화 (turn1 첫 프레임)
     3.83s  agent 발화 시작: <ret> 천칠백육십일년에 스페인과 협정을 맺은 사람은 루이 십오세였습니다. 어려운 시기에 중요한 결정이었죠
     3.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: Louis XV.
     3.84s  user  발화 끝
    12.49s  user  발화 시작: 루이 십오세는 어떤 왕이었나요?
    12.50s  agent 발화 끝
    15.29s  <ret> 발화 (turn3 첫 프레임)
    15.44s  agent 발화 시작: <ret> 루이 십오세는 천칠백십오년 구월 일일부터 천칠백칠십사년 사망할 때까지 프랑스의 왕이었습니다.
    15.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: Louis XV was King of France from 1 September 1715 until his death in 1
    15.54s  user  발화 끝
    22.57s  agent 발화 끝
    22.60s  user  발화 시작: 그 시대 프랑스는 어땠나요?
    24.15s  <ret> 발화 (turn5 첫 프레임)
    24.15s  user  발화 끝
    24.53s  agent 발화 시작: <ret> 그 시대 프랑스는—
    24.55s  ⚡SPAN 주입(IRRELEVANT) [d'=1.28s / d_lead=1.61s]: The current temperature in Seoul is 28.5°C, with humidity at 65% and a
    25.43s  user  발화 시작: … 그 협정은 프랑스에 어떤 영향을 줬나요?
    26.13s  agent 발화 끝
    28.39s  user  발화 끝
    28.43s  agent 발화 시작: 그 협정은 프랑스에게 큰 영향을 미쳤습니다. 칠년 전쟁의 결과로 프랑스는 캐나다를 영국에 넘겨주어야 했습니다
    32.87s  user  발화 시작: 네.
    33.31s  user  발화 끝
    36.04s  user  발화 시작: 칠년 전쟁은 왜 일어났나요?
    36.49s  agent 발화 끝
    37.83s  agent 발화 시작: 칠년 전쟁은 여러 복잡한 이유로 일어났지만, 주로 식민지 지배권을 놓고 영국과 프랑스 사이에 벌어진 갈등이었
    37.88s  user  발화 끝
    48.45s  agent 발화 끝
