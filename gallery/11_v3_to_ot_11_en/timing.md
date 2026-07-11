# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Aiden",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "home",
#       "text": "User's home address is 505 Pine Court."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-10-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote the song “Sh | S2 Oh, interesting. What genre would  | S3 Wow, that’s quite a gap in time! W | S4 Oh, that’s okay. Maybe I can look 

     0.00s  user  발화 시작: Do you know who wrote the song “Show Me the Way to Amarillo”
     2.53s  <ret> 발화 (turn1 첫 프레임)
     2.91s  user  발화 끝
     2.92s  agent 발화 시작: <ret> That song was written by Howard Greenfield, along with
     2.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: Howard Greenfield co-wrote "Show Me the Way to Amarillo" with Burt Bac
     7.69s  user  발화 시작: …was it a big hit when it first came out?
     8.39s  agent 발화 끝
    10.04s  user  발화 끝
    10.05s  agent 발화 시작: It wasn't initially a major hit in 1968, but it gained popul
    16.07s  user  발화 시작: Oh, interesting. What genre would you classify it as?
    16.16s  agent 발화 끝
    19.52s  user  발화 끝
    19.93s  agent 발화 시작: It’s generally considered a pop song, with elements of count
    22.50s  user  발화 시작: Yeah.
    23.14s  user  발화 끝
    25.77s  user  발화 시작: I see. I’m trying to remember who covered it later on.
    25.91s  agent 발화 끝
    29.00s  <ret> 발화 (turn8 첫 프레임)
    29.05s  user  발화 끝
    29.32s  agent 발화 시작: <ret> Tony Christie had a very successful cover of that song
    29.32s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.56s]: Tony Christie released a successful cover of "Show Me the Way to Amari
    34.85s  user  발화 시작: Oh.
    35.44s  user  발화 끝
    36.88s  agent 발화 끝
    37.16s  user  발화 시작: Wow, that’s quite a gap in time! Was it different than the o
    41.12s  agent 발화 시작: It was a more upbeat, orchestral arrangement than the origin
    41.14s  user  발화 끝
    43.07s  user  발화 시작: Uh-huh.
    43.71s  user  발화 끝
    45.93s  user  발화 시작: That sounds nice. Do you know if he ever performed it live?
    45.98s  agent 발화 끝
    48.85s  <ret> 발화 (turn14 첫 프레임)
    49.08s  agent 발화 시작: <ret> I’m afraid I don’t have information about specific liv
    49.09s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.47s]: (no information found)
    49.30s  user  발화 끝
    54.55s  agent 발화 끝
    55.22s  user  발화 시작: Oh, that’s okay. Maybe I can look that up myself.
    57.81s  user  발화 끝
    57.93s  agent 발화 시작: It can be lovely to discover a song's history on your own. S
    65.30s  agent 발화 끝
    65.53s  user  발화 시작: That’s true. I appreciate your help, Laris.
    68.43s  user  발화 끝
    68.51s  agent 발화 시작: It’s my pleasure to offer what I can. Music often connects u
    75.22s  agent 발화 끝
