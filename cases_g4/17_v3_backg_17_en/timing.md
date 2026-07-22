# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Lily",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "home",
#       "text": "User's home address is 982 Poplar Street."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "commute",
#       "text": "User carpools with a colleague."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "child",
#       "text": "User has a child named Yuna, age 13."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "employer",
#       "text": "User works at a media company."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "skill",
#       "text": "User is just getting back into long-distance cycling."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "dislike",
#       "text": "User can't stand bell peppers."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-16",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Reas, I am studying Indian his | S2 I have tried that, but I usually g | S3 Wait, do you think I should focus  | S4 That makes sense. I'll start with 

     0.00s  user  발화 시작: Hey Reas, I am studying Indian history and I am stuck on a d
     5.94s  <ret> 발화 (turn1 첫 프레임)
     6.51s  agent 발화 시작: <ret> It was held on November fifth, fifteen fifty-six. That
     6.54s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.49s]: The Second Battle of Panipat was fought on November 5, 1556.
     6.62s  user  발화 끝
    12.99s  agent 발화 끝
    13.55s  user  발화 시작: Right, thanks. I have so much more to cover today and I am s
    18.23s  agent 발화 시작: [happy] I totally get that. Maybe try breaking your study ma
    18.27s  user  발화 끝
    22.90s  user  발화 시작: Mm-hmm.
    23.44s  user  발화 끝
    27.13s  agent 발화 끝
    27.14s  agent 발화 시작: You could even use the Pomodoro technique, where you focus f
    34.24s  user  발화 시작: I have tried that, but I usually get distracted during the b
    34.36s  agent 발화 끝
    37.32s  agent 발화 시작: That happens! The trick is to keep the break simple, like st
    37.48s  user  발화 끝
    43.68s  user  발화 시작: Wait, do you think I should focus on the battles first or th
    44.32s  agent 발화 끝
    45.55s  agent 발화 시작: Yeah.
    46.18s  agent 발화 끝
    47.56s  agent 발화 시작: [curious] I would suggest the political shifts. Understandin
    47.71s  user  발화 끝
    55.67s  agent 발화 끝
    56.69s  user  발화 시작: I can't believe they're out of almond milk again.
    59.04s  user  발화 끝
    59.50s  agent 발화 시작: It creates a better narrative in your head, which helps with
    62.01s  user  발화 시작: Yeah.
    62.70s  user  발화 끝
    64.18s  agent 발화 끝
    64.21s  user  발화 시작: That makes sense. I'll start with the politics then.
    66.57s  agent 발화 시작: Sounds like a solid plan. Just take it one step at a time, a
    66.79s  user  발화 끝
    72.73s  agent 발화 끝
