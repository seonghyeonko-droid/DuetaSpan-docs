# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Samuel",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "home",
#       "text": "User's home address is 725 Oak Avenue."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, who has the most three-po | S2 Hmm, so Curry is pretty close. | S3 …do you know how… | S4 …many LeBron James has made?

     0.00s  user  발화 시작: Hey, uh, who has the most three-pointers in NBA history? I a
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.19s  agent 발화 시작: <ret> That would be Ray Allen, who made a total of two thous
     5.19s  user  발화 끝
     5.33s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.99s]: Ray Allen holds the National Basketball Association record for most th
    15.18s  user  발화 시작: Uh-huh.
    15.18s  agent 발화 끝
    15.58s  user  발화 시작: Wow, that's a lot!
    15.58s  user  발화 끝
    16.65s  <ret> 발화 (turn4 첫 프레임)
    17.12s  ⚡SPAN 주입 [d'=0.81s / d_lead=9.19s]: Stephen Curry currently ranks second in NBA history with two thousand,
    17.18s  agent 발화 시작: <ret> Stephen Curry is right behind him, having made two tho
    17.18s  user  발화 끝
    26.36s  user  발화 시작: Wow.
    26.36s  agent 발화 끝
    26.76s  user  발화 시작: Hmm, so Curry is pretty close.
    26.76s  user  발화 끝
    29.16s  agent 발화 시작: It's fascinating to see how—
    29.16s  user  발화 끝
    31.16s  user  발화 시작: …do you know how…
    31.16s  agent 발화 끝
    32.75s  user  발화 시작: …many LeBron James has made?
    32.75s  user  발화 끝
    34.75s  agent 발화 시작: Yeah.
    34.75s  user  발화 끝
    35.02s  <ret> 발화 (turn11 첫 프레임)
    35.12s  ⚡SPAN 주입 [d'=0.99s / d_lead=8.79s]: LeBron James has made one thousand, nine hundred and seventy-eight thr
    35.15s  agent 발화 시작: <ret> LeBron James has made one thousand, nine hundred and s
    35.15s  agent 발화 끝
    43.94s  agent 발화 시작: It’s amazing how those top players continue to redefine the 
    43.94s  agent 발화 끝
    48.33s  agent 발화 끝
