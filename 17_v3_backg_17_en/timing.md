# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Thomas",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "home",
#       "text": "User's home address is 772 Birch Road."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who guest starred on S | S2 I see… that sounds complicated. | S3 Did you hear… | S4 …about the traffic on Elm Street?

     0.00s  user  발화 시작: Do you know who guest starred on Sons of Anarchy, season fiv
     2.86s  <ret> 발화 (turn1 첫 프레임)
     3.23s  user  발화 끝
     3.25s  agent 발화 시작: <ret> It’s interesting how actors can bring such depth to a 
     3.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: Rachel Miner portrayed Maureen Ashby in three episodes of Sons of Anar
     8.27s  user  발화 시작: Okay.
     8.77s  user  발화 끝
    11.59s  agent 발화 끝
    11.63s  user  발화 시작: Oh, okay. Uh, what did she do on the show?
    14.22s  user  발화 끝
    14.34s  agent 발화 시작: Well, sometimes characters appear to really shake things up 
    16.83s  user  발화 시작: Yeah, yeah.
    17.65s  user  발화 끝
    18.45s  agent 발화 시작: Maureen Ashby, as portrayed by Rachel Miner, was involved in
    18.51s  agent 발화 끝
    26.84s  agent 발화 끝
    27.69s  user  발화 시작: I see… that sounds complicated.
    29.61s  agent 발화 시작: Difficult situations often bring out strong emotions, don’t 
    29.76s  user  발화 끝
    34.59s  user  발화 시작: Okay.
    35.09s  user  발화 끝
    37.53s  user  발화 시작: Did you hear…
    37.67s  agent 발화 끝
    38.58s  user  발화 끝
    40.13s  user  발화 시작: …about the traffic on Elm Street?
    41.60s  user  발화 끝
