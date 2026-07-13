# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Adam",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "home",
#       "text": "User's home address is 868 Oak Avenue."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a good play… | S2 Great, something not too scary, sh | S3 We're in Seoul. | S4 …something a little less crowded, 

     0.00s  user  발화 시작: I need to find a good play…
     2.67s  user  발화 시작: …to take my daughter to next weekend.
     2.67s  user  발화 끝
     5.34s  agent 발화 시작: Uh-huh.
     5.34s  user  발화 끝
     5.72s  agent 발화 시작: That sounds like a lovely outing with your daughter! I can c
     5.72s  agent 발화 끝
    11.44s  user  발화 시작: Great, something not too scary, she's eight.
    11.44s  agent 발화 끝
    14.11s  agent 발화 시작: Finding something age-appropriate is key. What city are you 
    14.11s  user  발화 끝
    19.83s  user  발화 시작: Yeah.
    19.83s  agent 발화 끝
    20.21s  user  발화 시작: We're in Seoul.
    20.21s  user  발화 끝
    21.26s  <ret> 발화 (turn8 첫 프레임)
    21.35s  agent 발화 시작: <ret> There’s a production of Peter Pan at Lotte World Mall 
    21.35s  user  발화 끝
    21.56s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.15s]: (tool result) Event: “Peter Pan”, Lotte World Mall, July 18-19, 2026, 
    30.50s  user  발화 시작: Yeah.
    30.50s  agent 발화 끝
    30.89s  agent 발화 시작: Peter Pan is a classic! It's generally considered pretty mag
    30.89s  user  발화 끝
    36.22s  user  발화 시작: —But is there anything… smaller, maybe a puppet show?
    36.22s  agent 발화 끝
    39.66s  user  발화 시작: …something a little less crowded, perhaps?
    39.66s  user  발화 끝
    41.66s  <ret> 발화 (turn13 첫 프레임)
    41.94s  agent 발화 시작: <ret> There’s a puppet show of The Little Prince at the Sejo
    41.94s  user  발화 끝
    42.65s  ⚡SPAN 주입 [d'=1.41s / d_lead=12.58s]: Event: “The Little Prince Puppet Show”, Sejong Performing Arts Center,
    54.53s  agent 발화 끝
