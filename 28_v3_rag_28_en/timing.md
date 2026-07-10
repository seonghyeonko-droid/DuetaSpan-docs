# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I read somewhere the Department of | S2 Nineteen thirty? That seems… late. | S3 Okay, so eighteen eighty-five… but | S4 So, the nineteen thirty date is wh

     0.00s  user  발화 시작: I read somewhere the Department of Veterans Affairs was star
     4.11s  <ret> 발화 (turn1 첫 프레임)
     4.42s  agent 발화 시작: <ret> The Department of Veterans Affairs was formally establ
     4.44s  user  발화 끝
     5.47s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.46s]: The United States Department of Veterans Affairs was established on Ju
    11.88s  agent 발화 끝
    12.33s  user  발화 시작: Nineteen thirty? That seems… late. I thought it was around t
    17.62s  <ret> 발화 (turn3 첫 프레임)
    17.75s  user  발화 끝
    18.02s  agent 발화 시작: <ret> You are right to question that. Congress authorized th
    19.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: The precursor to the Department of Veterans Affairs, the National Home
    26.36s  user  발화 시작: Okay, so eighteen eighty-five… but that wasn’t the full depa
    26.37s  agent 발화 끝
    31.07s  <ret> 발화 (turn5 첫 프레임)
    31.18s  user  발화 끝
    31.47s  agent 발화 시작: <ret> Yes, that initial home provided care specifically for 
    33.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: The National Home for Disabled Soldiers provided domiciliary care for 
    35.48s  user  발화 시작: Yeah.
    35.97s  user  발화 끝
    38.50s  user  발화 시작: So, the nineteen thirty date is when it became a full depart
    38.52s  agent 발화 끝
    42.40s  agent 발화 시작: Precisely. It was then that it evolved into the department a
    42.47s  user  발화 끝
    50.42s  agent 발화 끝
