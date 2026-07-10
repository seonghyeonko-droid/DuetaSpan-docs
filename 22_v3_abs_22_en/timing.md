# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Victor",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-29",
#       "category": "home",
#       "text": "User's home address is 336 Birch Road."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What three powers usually found in | S2 So, it was more about selecting th | S3 …Was that about land, too? | S4 That’s good to know. I'm trying to

     0.00s  user  발화 시작: What three powers usually found in government are held by th
     5.18s  <ret> 발화 (turn1 첫 프레임)
     5.33s  agent 발화 시작: <ret> But unfortunately, there’s no readily available inform
     5.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.52s]: (no information found)
     5.50s  user  발화 끝
    15.85s  agent 발화 끝
    16.06s  user  발화 시작: Hmm, that's disappointing. Is there anything about the histo
    21.11s  <ret> 발화 (turn3 첫 프레임)
    21.34s  agent 발화 시작: <ret> Historically, the Pope held quite a bit of power—the r
    21.35s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.96s]: The Pope historically held significant temporal power, including the r
    21.53s  user  발화 끝
    25.47s  user  발화 시작: Uh-huh.
    25.92s  user  발화 끝
    31.21s  agent 발화 시작: It's fascinating how much influence the papacy once had, isn
    31.30s  agent 발화 끝
    40.01s  user  발화 시작: What about the College of Cardinals? What was *their* role i
    40.11s  agent 발화 끝
    44.31s  <ret> 발화 (turn7 첫 프레임)
    44.54s  user  발화 끝
    44.62s  agent 발화 시작: <ret> The College of Cardinals primarily advised the Pope, a
    44.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: The College of Cardinals historically advised the Pope on matters of f
    50.25s  user  발화 시작: Oh.
    50.69s  user  발화 끝
    53.91s  user  발화 시작: So, it was more about selecting the leader than direct rule?
    54.31s  agent 발화 끝
    58.12s  user  발화 끝
    58.12s  agent 발화 시작: Exactly. They weren’t directly ruling, but choosing the Pope
    69.71s  user  발화 시작: What was the biggest dispute they ever had with a secular ru
    70.08s  agent 발화 끝
    73.03s  <ret> 발화 (turn12 첫 프레임)
    73.17s  agent 발화 시작: <ret> One of the biggest disputes was between Pope Gregory V
    73.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.62s]: Pope Gregory VII and Holy Roman Emperor Henry IV engaged in a major di
    73.31s  user  발화 끝
    83.10s  user  발화 시작: …Was that about land, too?
    83.79s  agent 발화 끝
    85.01s  agent 발화 시작: Yes, absolutely. The Investiture Controversy was deeply root
    85.03s  user  발화 끝
    92.46s  user  발화 시작: Mhm.
    92.96s  user  발화 끝
   101.70s  user  발화 시작: That sounds messy. Did it ever come to a battle?
   101.85s  agent 발화 끝
   104.64s  <ret> 발화 (turn17 첫 프레임)
   104.88s  agent 발화 시작: <ret> It absolutely did come to battle—there were sieges and
   104.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.30s]: The Investiture Controversy involved military conflicts, including sie
   104.94s  user  발화 끝
   113.01s  user  발화 시작: What kind of impact did that have on the power of the church
   113.18s  agent 발화 끝
   117.11s  agent 발화 시작: That conflict ultimately weakened the authority of the Holy 
   117.13s  user  발화 끝
   121.65s  user  발화 시작: Yeah.
   122.00s  user  발화 끝
   131.54s  agent 발화 끝
   132.62s  user  발화 시작: That’s good to know. I'm trying to understand how power shif
   137.33s  agent 발화 시작: Understanding those shifts is key to understanding history, 
   137.48s  user  발화 끝
   142.75s  user  발화 시작: Mm-hmm.
   143.29s  user  발화 끝
   148.93s  agent 발화 끝
   150.72s  user  발화 시작: It sounds exhausting. Thanks for explaining all of this, Ari
   154.14s  user  발화 끝
   154.57s  agent 발화 시작: You're very welcome. It's a fascinating topic, and I'm glad 
   159.75s  agent 발화 끝
