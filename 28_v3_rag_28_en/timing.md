# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Clara",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "home",
#       "text": "User's home address is 900 Elm Street."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm trying to plan a trip, and I'm | S2 Definitely relaxing. I just want t | S3 …and enjoy good food, maybe see so | S4 Okay, you’re right. Let’s focus. I

     0.00s  user  발화 시작: I'm trying to plan a trip, and I'm overwhelmed. Where should
     4.96s  agent 발화 시작: Planning can feel like a lot at once, but breaking it down m
     4.96s  user  발화 끝
    15.58s  user  발화 시작: Uh-huh.
    15.58s  agent 발화 끝
    15.93s  user  발화 시작: Hmm, maybe Italy? I’ve always wanted to go, but it seems…com
    15.93s  user  발화 끝
    19.83s  agent 발화 시작: Yeah.
    19.83s  user  발화 끝
    20.18s  agent 발화 시작: Italy is wonderful! It can seem daunting to plan, but we can
    20.18s  agent 발화 끝
    30.45s  user  발화 시작: Definitely relaxing. I just want to unwind…
    30.45s  agent 발화 끝
    32.93s  user  발화 시작: …and enjoy good food, maybe see some art.
    32.93s  user  발화 끝
    35.20s  <ret> 발화 (turn8 첫 프레임)
    35.50s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.44s]: The first commercially available infant formula, developed by German c
    35.76s  agent 발화 시작: <ret> Interestingly, the very first baby formula actually ca
    35.76s  user  발화 끝
    43.20s  user  발화 시작: Wow, 1867? That's… a long time ago! I didn't realize formula
    43.20s  agent 발화 끝
    48.86s  agent 발화 시작: It is quite a history! It’s amazing how much things have evo
    48.86s  user  발화 끝
    59.84s  user  발화 시작: Yeah, totally.
    59.84s  agent 발화 끝
    60.55s  user  발화 시작: Okay, you’re right. Let’s focus. I’ve heard Florence is beau
    60.55s  user  발화 끝
    65.51s  agent 발화 시작: Yeah, yeah.
    65.51s  user  발화 끝
    66.21s  agent 발화 시작: Florence is a fantastic choice! [happy] It's truly a treasur
    66.21s  agent 발화 끝
    76.13s  agent 발화 끝
