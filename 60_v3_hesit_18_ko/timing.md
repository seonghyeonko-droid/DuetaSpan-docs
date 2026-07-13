# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "소현",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요. 요즘 이스라엘 정부는 어떤 형태인가요?
     3.33s  <ret> 발화 (turn1 첫 프레임)
     3.65s  agent 발화 시작: <ret> 이스라엘은 의원내각제 국가입니다, 총리가 정부 수반을 맡고 대통령이 국가 원수 역할을 합니다.
     3.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.30s]: Israel has a parliamentary democracy, with a prime minister serving as
     3.65s  user  발화 끝
    10.95s  user  발화 시작: 네.
    10.95s  agent 발화 끝
    11.56s  user  발화 시작: 음… 혹시 대통령은 누가 맡고 있나요?
    11.56s  user  발화 끝
    15.13s  <ret> 발화 (turn4 첫 프레임)
    15.21s  agent 발화 시작: <ret> 이삭 헤르초크 대통령이 이천이십일년 칠월 일일부터 이스라엘 대통령직을 맡고 있으며, 그의 전임자는
    15.21s  ⚡SPAN 주입 [d'=0.96s / d_lead=9.13s]: (tool result) Isaac Herzog has been the president of Israel since July
    15.21s  user  발화 끝
    24.34s  user  발화 시작: 네네.
    24.34s  agent 발화 끝
    24.94s  user  발화 시작: 아, 이삭 헤르초크 대통령이군요.
    24.94s  user  발화 끝
    27.38s  agent 발화 시작: 네, 맞습니다.
    27.38s  user  발화 끝
    28.60s  agent 발화 끝
