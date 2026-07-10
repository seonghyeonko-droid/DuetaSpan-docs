# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Caleb",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Klean, I'm trying to remember a | S2 It's a duet, and I think it starts | S3 I need to book a doctor's appointm | S4 Yes, please book it.

     0.00s  user  발화 시작: Hi Klean, I'm trying to remember a song from a Salman Khan m
     4.62s  user  발화 끝
     4.81s  agent 발화 시작: Hello! It’s lovely to chat. I can certainly help with that. 
    11.16s  agent 발화 끝
    11.23s  user  발화 시작: Tumko Na Bhool Paayenge, I think. Do you know the songs?
    14.74s  <ret> 발화 (turn3 첫 프레임)
    15.13s  agent 발화 시작: <ret> That film’s music was composed by Himesh Reshammiya, a
    15.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: Tumko Na Bhool Paayenge's soundtrack features music composed by Himesh
    15.26s  user  발화 끝
    21.26s  user  발화 시작: Um, is there a really sad song in it?
    21.37s  agent 발화 끝
    23.76s  agent 발화 시작: There are several emotional tracks.
    23.85s  user  발화 끝
    25.54s  user  발화 시작: It's a duet, and I think it starts with something like… "Kya
    25.98s  agent 발화 끝
    30.39s  <ret> 발화 (turn7 첫 프레임)
    30.70s  agent 발화 시작: <ret> The song you’re thinking of is “Kya Hua Tujhe”, sung b
    30.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: "Kya Hua Tujhe" is a song from the 2002 Bollywood film Tumko Na Bhool 
    30.91s  user  발화 끝
    32.35s  user  발화 시작: Yeah.
    32.99s  user  발화 끝
    36.12s  agent 발화 끝
    36.18s  user  발화 시작: What's the weather like in Mumbai right now?
    38.82s  <ret> 발화 (turn10 첫 프레임)
    38.89s  agent 발화 시작: <ret> It’s currently 28.5 degrees Celsius in Mumbai, with pa
    38.90s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.69s]: (tool result) 28.5°C, humidity 82%, wind 11.2 km/h, partly cloudy.
    39.09s  user  발화 끝
    46.58s  agent 발화 끝
    48.65s  user  발화 시작: I need to book a doctor's appointment next week.
    51.45s  agent 발화 시작: I can help with that! Do you have a preferred doctor or spec
    51.61s  user  발화 끝
    54.30s  user  발화 시작: Mm-hmm.
    54.94s  user  발화 끝
    55.57s  agent 발화 끝
    57.33s  user  발화 시작: Just a general check-up is fine.
    59.55s  user  발화 끝
    59.65s  <ret> 발화 (turn15 첫 프레임)
    59.87s  agent 발화 시작: <ret> Dr. Anya Sharma has an opening next Tuesday at 10:00 A
    59.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: (tool result) Dr. Anya Sharma, General Practitioner, available Tuesday
    65.34s  agent 발화 끝
    65.55s  user  발화 시작: Yes, please book it.
    66.83s  <ret> 발화 (turn17 첫 프레임)
    66.91s  agent 발화 시작: <ret> Wonderful! Your appointment with Dr. Sharma is confirm
    66.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Appointment confirmed with Dr. Anya Sharma for Tuesday, 
    67.16s  user  발화 끝
    76.47s  agent 발화 끝
    78.07s  user  발화 시작: That's great. Thanks, Klean.
    80.42s  agent 발화 시작: You're very welcome! Prioritizing your health is a wonderful
    80.52s  user  발화 끝
    88.86s  agent 발화 끝
