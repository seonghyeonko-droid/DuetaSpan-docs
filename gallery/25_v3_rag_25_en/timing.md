# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Jordan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "home",
#       "text": "User's home address is 57 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m curious—who led the Paris Oper | S2 1983 to 1989… that’s quite a run.… | S3 …Did he also elevate dancers withi | S4 Hmmm, 1978… before he was even dir

     0.00s  user  발화 시작: I’m curious—who led the Paris Opera Ballet for a while back 
     4.10s  <ret> 발화 (turn1 첫 프레임)
     4.26s  agent 발화 시작: <ret> Rudolf Nureyev directed the Paris Opera Ballet from 19
     4.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.36s]: Rudolf Nureyev directed the Paris Opera Ballet from 1983 to 1989 and s
     4.35s  user  발화 끝
    13.62s  agent 발화 끝
    13.75s  user  발화 시작: 1983 to 1989… that’s quite a run.…
    17.58s  user  발화 끝
    18.78s  user  발화 시작: …Did he also elevate dancers within the company?
    20.64s  <ret> 발화 (turn4 첫 프레임)
    20.79s  agent 발화 시작: <ret> He did, actually. Nureyev gave the title of étoile to 
    20.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.58s]: Nureyev gave the title of étoile—the highest rank—to a member of the P
    21.03s  user  발화 끝
    28.94s  user  발화 시작: Hmmm, 1978… before he was even director?
    29.37s  agent 발화 끝
    32.92s  user  발화 끝
    32.95s  agent 발화 시작: Yes, that’s right. He was already influencing the company an
    41.15s  agent 발화 끝
