# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "Bruno",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-23",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "home",
#       "text": "User's home address is 263 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Send Mom a payment request for sev | S2 Oh, uh, that’s good. Is she…is she | S3 Hmm. Well, could you at least sear | S4 That's the first one. Good. Thanks

     0.00s  user  발화 시작: Send Mom a payment request for seven dollars and seventy-fiv
     3.88s  <ret> 발화 (turn1 첫 프레임)
     4.20s  agent 발화 시작: <ret> I’ve sent a payment request to Mom for seven dollars a
     4.20s  ⚡SPAN 주입 [d'=1.04s / d_lead=10.15s]: (tool result) Payment request sent to Mom for $7.75. Confirmation ID: 
     4.21s  user  발화 끝
    11.21s  user  발화 시작: Yeah.
    11.70s  user  발화 끝
    14.36s  agent 발화 끝
    15.11s  user  발화 시작: Oh, uh, that’s good. Is she…is she already showing as having
    20.09s  <ret> 발화 (turn4 첫 프레임)
    20.29s  user  발화 끝
    20.33s  agent 발화 시작: <ret> I don’t have access to whether Mom has seen the reques
    20.33s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.30s]: (no information found)
    26.63s  agent 발화 끝
    27.02s  user  발화 시작: Hmm. Well, could you at least search for her contact informa
    32.86s  <ret> 발화 (turn6 첫 프레임)
    32.94s  agent 발화 시작: <ret> I found two possible matches for “Mom’s phone number”:
    32.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.11s]: (tool result) Results: Eleanor Vance, (555) 123-4567 – Vance Family Di
    33.09s  user  발화 끝
    39.19s  user  발화 시작: Yeah.
    40.00s  user  발화 끝
    45.05s  agent 발화 끝
    46.63s  user  발화 시작: That's the first one. Good. Thanks, Laera.
    49.40s  agent 발화 시작: You’re very welcome. It’s often helpful to confirm details, 
    49.41s  user  발화 끝
    56.54s  agent 발화 끝
