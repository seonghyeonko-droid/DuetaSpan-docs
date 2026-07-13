# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Anton",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 850 Birch Road."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been feeling…lost, lately. Ju | S2 …like I’m missing her guidance so  | S3 Kansas…didn’t that movie feature a | S4 1982… wow, that feels like a lifet

     0.00s  user  발화 시작: I’ve been feeling…lost, lately. Just adrift.
     2.44s  agent 발화 시작: It’s understandable to feel that way when life shifts unexpe
     2.44s  user  발화 끝
    10.56s  user  발화 시작: I guess so. My grandmother passed away last month.
    10.56s  agent 발화 끝
    14.21s  agent 발화 시작: Losing someone close is profoundly difficult. Grief isn't a 
    14.21s  user  발화 끝
    22.34s  user  발화 시작: It’s just…she always knew what to say. I feel…
    22.34s  agent 발화 끝
    25.99s  user  발화 시작: …like I’m missing her guidance so much.
    25.99s  user  발화 끝
    28.83s  agent 발화 시작: That’s a very common feeling. Her wisdom and presence shaped
    28.83s  user  발화 끝
    36.14s  user  발화 시작: Right.
    36.14s  agent 발화 끝
    36.55s  user  발화 시작: She loved old movies. I was trying to remember one she alway
    36.55s  user  발화 끝
    44.19s  <ret> 발화 (turn9 첫 프레임)
    44.27s  agent 발화 시작: <ret> She likely meant *The Day After*, a film originally ai
    44.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.34s]: The Day After is a 1983 American made-for-television post-apocalyptic 
    44.27s  user  발화 끝
    53.61s  user  발화 시작: Yeah.
    53.61s  agent 발화 끝
    54.01s  agent 발화 시작: It was quite impactful at the time, sparking a lot of conver
    54.01s  user  발화 끝
    58.89s  user  발화 시작: Kansas…didn’t that movie feature a highway? I seem to recall
    58.89s  agent 발화 끝
    64.74s  <ret> 발화 (turn13 첫 프레임)
    64.98s  agent 발화 시작: <ret> Yes, the film prominently features scenes along Kansas
    64.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: The film features scenes shot along Kansas State Highway K-10, which i
    64.98s  user  발화 끝
    71.88s  user  발화 시작: Wow.
    71.88s  agent 발화 끝
    72.29s  user  발화 시작: That's it! K-10. She always said it was a really powerful fi
    72.29s  user  발화 끝
    80.00s  agent 발화 시작: Yeah.
    80.00s  user  발화 끝
    80.33s  <ret> 발화 (turn17 첫 프레임)
    80.41s  agent 발화 시작: <ret> The film was originally made in 1982, but it was relea
    80.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: The Day After was released in 1983, but the film was originally made i
    80.41s  agent 발화 끝
    85.69s  user  발화 시작: Really?
    85.69s  agent 발화 끝
    86.10s  user  발화 시작: 1982… wow, that feels like a lifetime ago.
    86.10s  user  발화 끝
    89.34s  agent 발화 시작: Time can feel very different when we’re reflecting on memori
    89.34s  user  발화 끝
    97.47s  user  발화 시작: I suppose you’re right. It's good to remember.
    97.47s  agent 발화 끝
   100.72s  agent 발화 시작: Remembering is a beautiful way to honor her legacy and keep 
   100.72s  user  발화 끝
   109.65s  agent 발화 끝
