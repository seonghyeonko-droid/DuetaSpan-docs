# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Bruno",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "employer",
#       "text": "User works at a biotech lab."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "allergy",
#       "text": "User is allergic to soy."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "diet",
#       "text": "User is keto."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "sibling",
#       "text": "User has a younger sibling named Haruto."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "work",
#       "text": "User works as a small-business owner."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Can you locate a family counselor  | S2 Northwest Healing sounds better si | S3 Wait, I just remembered I have a c | S4 Actually, just cancel it. I'll cal

     0.00s  user  발화 시작: Can you locate a family counselor in Seattle, Washington who
     5.00s  user  발화 끝
     5.35s  <ret> 발화 (turn1 첫 프레임)
     5.37s  agent 발화 시작: <ret> I searched for family counselors in Seattle who don't 
     6.44s  ⚡SPAN 주입 [d'=1.09s / d_lead=8.67s]: (tool result) (no information found)
     8.87s  user  발화 시작: Uh-huh.
     9.32s  user  발화 끝
    14.04s  agent 발화 끝
    15.87s  user  발화 시작: That's useless. Why can't you just find someone who's highly
    20.82s  <ret> 발화 (turn4 첫 프레임)
    21.17s  agent 발화 시작: <ret> I understand the frustration. Let's broaden the search
    21.19s  user  발화 끝
    22.46s  ⚡SPAN 주입 [d'=1.64s / d_lead=3.10s]: (tool result) Seattle Family Wellness: 4.8 stars, accepts most insuran
    27.16s  user  발화 시작: Nice.
    27.80s  user  발화 끝
    33.18s  agent 발화 끝
    33.25s  user  발화 시작: Northwest Healing sounds better since I'm paying out of pock
    36.12s  agent 발화 시작: Mm-hmm.
    36.94s  agent 발화 끝
    38.64s  <ret> 발화 (turn8 첫 프레임)
    38.96s  agent 발화 시작: <ret> Taking that first step is often the hardest part. You'
    39.04s  user  발화 끝
    39.53s  ⚡SPAN 주입 [d'=0.89s / d_lead=3.37s]: (tool result) Appointment confirmed for July 13, 2026, at 10:00 AM.
    48.70s  agent 발화 끝
    48.90s  user  발화 시작: Wait, I just remembered I have a conflict at ten. Can you mo
    53.19s  agent 발화 시작: Let me check if they can shift that for you—
    53.30s  user  발화 끝
    54.87s  user  발화 시작: Actually, just cancel it. I'll call them myself to be sure.
    55.63s  agent 발화 끝
    58.33s  user  발화 끝
    58.57s  agent 발화 시작: [happy] No problem at all. Sometimes a direct conversation i
    65.33s  agent 발화 끝
