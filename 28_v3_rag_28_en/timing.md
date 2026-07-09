# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was just reading about the VA… when did that even get star
     3.90s  <ret> 발화 (turn1 첫 프레임)
     4.22s  agent 발화 시작: <ret> That’s a good question— understanding its history give
     4.25s  user  발화 끝
     4.94s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.39s]: [source: Wikipedia] The United States Department of Veterans Affairs w
     8.51s  agent 발화 시작: The Department of Veterans Affairs was established on July t
     8.62s  agent 발화 끝
    13.93s  user  발화 시작: Nineteen thirty? Really? I always thought it was much older,
    14.03s  agent 발화 끝
    18.40s  <ret> 발화 (turn4 첫 프레임)
    18.79s  agent 발화 시작: <ret> It’s understandable to think so, given the long histor
    18.93s  user  발화 끝
    20.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: [source: History.com] Prior to 1930, the administration of veterans’ b
    23.06s  agent 발화 시작: Before nineteen thirty, veterans’ benefits were handled by v
    23.19s  agent 발화 끝
    27.97s  user  발화 시작: So, it wasn’t a single department before then—just bits and 
    28.16s  agent 발화 끝
    31.99s  <ret> 발화 (turn7 첫 프레임)
    32.34s  agent 발화 시작: <ret> Exactly. It was a more decentralized approach initiall
    32.45s  user  발화 끝
    33.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: [source: VA.gov] The Veterans Bureau, founded in 1921, was a key precu
    36.08s  agent 발화 시작: The Veterans Bureau, founded in nineteen twenty-one, was a k
    36.22s  agent 발화 끝
    41.50s  agent 발화 끝
