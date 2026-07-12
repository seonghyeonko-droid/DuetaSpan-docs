# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Sky",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "home",
#       "text": "User's home address is 515 Elm Street."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Uh, I was wondering… what’s the hi | S2 Wow. That’s… really high. | S3 Hmm, so, um, is he still competing | S4 That's good to hear. He sounds won

     0.00s  user  발화 시작: Uh, I was wondering… what’s the highest score ever in ice sk
     4.78s  <ret> 발화 (turn1 첫 프레임)
     5.02s  agent 발화 시작: <ret> Well, it seems Nathan Chen holds that record with a re
     5.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.95s]: The highest score in ice skating is 330.43, achieved by Nathan Chen at
     5.02s  user  발화 끝
    12.97s  user  발화 시작: Wow. That’s… really high.
    12.97s  agent 발화 끝
    14.65s  user  발화 시작: Yeah.
    14.65s  user  발화 끝
    14.98s  <ret> 발화 (turn4 첫 프레임)
    15.06s  agent 발화 시작: <ret> Speaking of incredible skaters, Yuzuru Hanyu is anothe
    15.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.37s]: Yuzuru Hanyu is a two-time Olympic champion and one of the most popula
    15.06s  user  발화 끝
    23.43s  user  발화 시작: Mm-hmm.
    23.43s  agent 발화 끝
    23.85s  user  발화 시작: Hmm, so, um, is he still competing?
    23.85s  user  발화 끝
    26.38s  <ret> 발화 (turn7 첫 프레임)
    26.78s  agent 발화 시작: <ret> He actually retired from competitive skating in July o
    26.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.21s]: Yuzuru Hanyu retired from competitive figure skating in July 2022 and 
    26.78s  user  발화 끝
    35.99s  user  발화 시작: That's good to hear. He sounds wonderful.
    35.99s  agent 발화 끝
    38.92s  user  발화 끝
