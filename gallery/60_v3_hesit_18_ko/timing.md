# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "노경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 스타워즈 에피소드 사는 어디에서 벌어지는 영화야?
     2.81s  <ret> 발화 (turn1 첫 프레임)
     3.13s  agent 발화 시작: <ret> 스타워즈 에피소드 사는 원래 천구백칠십칠년에 개봉한 영화에서 두드러지게 등장하는 타투인이라는 사막
     3.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.78s]: Tatooine is a desert planet in the Star Wars universe, featured promin
     3.13s  user  발화 끝
     9.91s  user  발화 시작: 타투인이 어디 있는지 더 자세히 알려줘.
     9.91s  agent 발화 끝
    12.88s  <ret> 발화 (turn3 첫 프레임)
    13.04s  agent 발화 시작: <ret> 타투인은 쌍성인 타투 일과 타투 이를 공전하는 스타워즈 세계관의 가상 행성입니다.
    13.04s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.74s]: Tatooine is a fictional planet in the Star Wars universe, orbiting the
    13.04s  user  발화 끝
    18.78s  agent 발화 끝
