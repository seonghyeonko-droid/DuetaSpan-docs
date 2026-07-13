# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Charlotte",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "home",
#       "text": "User's home address is 679 Maple Drive."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, uh, Brioia… that’s a pretty na | S2 I guess… I’m worried about the fin | S3 I haven’t, no. It just feels… over | S4 Three seventeen… okay.

     0.00s  agent 발화 시작: Hello Charlotte, it’s lovely to connect with you. I’m Brioia
     8.78s  user  발화 시작: Oh, uh, Brioia… that’s a pretty name. I’m just… feeling real
     8.78s  agent 발화 끝
    14.04s  agent 발화 시작: It takes courage to admit when you’re feeling stuck, Charlot
    14.04s  user  발화 끝
    20.71s  user  발화 시작: Welll… I’m thinking about leaving my job. It’s just… a huge 
    20.71s  agent 발화 끝
    25.63s  agent 발화 시작: It absolutely is a huge step, and it’s natural to feel appre
    25.63s  user  발화 끝
    34.05s  user  발화 시작: I guess… I’m worried about the financial side of things. I d
    34.05s  agent 발화 끝
    41.42s  agent 발화 시작: That’s a very practical concern, Charlotte. It’s wise to con
    41.42s  user  발화 끝
    49.85s  user  발화 시작: I haven’t, no. It just feels… overwhelming. Like, where do I
    49.85s  agent 발화 끝
    55.12s  agent 발화 시작: It can feel that way, certainly. Sometimes breaking it down 
    55.12s  user  발화 끝
    63.54s  user  발화 시작: Actually, before that… could you tell me what the current ti
    63.54s  agent 발화 끝
    72.67s  agent 발화 시작: It is currently three seventeen in the afternoon in San Fran
    72.67s  user  발화 끝
    79.69s  user  발화 시작: Yeah.
    79.69s  agent 발화 끝
    80.04s  user  발화 시작: Three seventeen… okay.
    80.04s  user  발화 끝
    81.09s  agent 발화 시작: Remember, Charlotte, transitions aren’t linear. It’s okay to
    81.09s  user  발화 끝
    91.98s  agent 발화 끝
