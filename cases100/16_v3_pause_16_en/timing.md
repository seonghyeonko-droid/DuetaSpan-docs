# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Marie",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "partner",
#       "text": "User's partner is named Leo."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "emergency",
#       "text": "User's emergency contact is Rin."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "commute",
#       "text": "User takes a shuttle bus."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "skill",
#       "text": "User is quite experienced with pottery."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-01-03",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm trying to figure out who's run | S2 Oh, okay…… | S3 …and are there any others? … | S4 Hmm. Anyone else challenging him?

     0.00s  user  발화 시작: I'm trying to figure out who's running…
     2.05s  user  발화 끝
     3.35s  user  발화 시작: …for governor in Georgia… the Republican side…
     4.92s  agent 발화 시작: Right.
     5.50s  agent 발화 끝
     5.92s  <ret> 발화 (turn3 첫 프레임)
     6.29s  user  발화 끝
     6.51s  agent 발화 시작: <ret> Let's see who the Republican candidates are for Georgi
     6.52s  ⚡SPAN 주입 [d'=0.60s / d_lead=3.69s]: Michael Williams, a State Senator, has announced his candidacy for Geo
    10.20s  agent 발화 끝
    10.21s  agent 발화 시작: Well, one candidate who’s announced their run is Michael Wil
    18.64s  agent 발화 끝
    19.10s  user  발화 시작: Oh, okay……
    20.43s  user  발화 끝
    22.43s  user  발화 시작: …and are there any others? …
    23.35s  <ret> 발화 (turn7 첫 프레임)
    23.80s  agent 발화 시작: <ret> The current governor, Brian Kemp, is also running for 
    23.80s  user  발화 끝
    24.38s  ⚡SPAN 주입 [d'=1.03s / d_lead=7.78s]: Brian Kemp, the current governor, is running for re-election, emphasiz
    29.25s  user  발화 시작: Yeah.
    29.82s  user  발화 끝
    31.50s  agent 발화 시작: He’s really leaning into his accomplishments over the past f
    31.57s  agent 발화 끝
    35.21s  user  발화 시작: Hmm. Anyone else challenging him?
    35.33s  agent 발화 끝
    37.99s  <ret> 발화 (turn11 첫 프레임)
    38.04s  agent 발화 시작: <ret> Another contender is David Perdue, a former U.S. Senat
    38.12s  user  발화 끝
    39.30s  ⚡SPAN 주입 [d'=1.31s / d_lead=7.14s]: David Perdue, a former U.S. Senator, is also running, campaigning on a
    45.17s  agent 발화 끝
