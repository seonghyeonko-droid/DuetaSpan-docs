# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Emil",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Uh, yeah, sometimes. I'm planning  | S2 That’s right! Any ideas? | S3 Seoul… hmm. Is there good climbing | S4 I remember, I told you I’m lactose

     0.00s  agent 발화 시작: Hi Emil, I'm Thoon. It's lovely to connect with you today. I
     7.38s  user  발화 시작: Yeah, yeah.
     7.38s  agent 발화 끝
     8.12s  user  발화 시작: Uh, yeah, sometimes. I'm planning a trip and just… can't dec
     8.12s  user  발화 끝
    13.29s  agent 발화 시작: That feeling of being overwhelmed is perfectly normal when f
    13.29s  user  발화 끝
    22.52s  user  발화 시작: Yeah.
    22.52s  agent 발화 끝
    22.89s  user  발화 시작: Welll… I really enjoy Korean food. And I’ve been wanting to 
    22.89s  user  발화 끝
    29.01s  <ret> 발화 (turn6 첫 프레임)
    29.17s  agent 발화 시작: <ret> It sounds like you're looking for a destination that c
    29.17s  ⚡SPAN 주입 [d'=1.92s / d_lead=9.23s]: [2025-06-26] User is into rock climbing.
    29.17s  user  발화 끝
    38.40s  user  발화 시작: Right.
    38.40s  agent 발화 끝
    38.77s  user  발화 시작: That’s right! Any ideas?
    38.77s  user  발화 끝
    40.09s  <ret> 발화 (turn9 첫 프레임)
    40.25s  agent 발화 시작: <ret> Considering your preference for Korean BBQ, I wonder i
    40.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.75s]: [2025-06-02] User's favorite cuisine is Korean BBQ.
    40.25s  user  발화 끝
    48.00s  user  발화 시작: Yeah.
    48.00s  agent 발화 끝
    48.37s  user  발화 시작: Seoul… hmm. Is there good climbing around there?
    48.37s  user  발화 끝
    51.08s  <ret> 발화 (turn12 첫 프레임)
    51.32s  agent 발화 시작: <ret> Bukhansan National Park, just north of Seoul, offers f
    51.32s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.54s]: (tool result) Bukhansan National Park offers excellent rock climbing w
    51.32s  user  발화 끝
    56.86s  user  발화 시작: Uh-huh.
    56.86s  agent 발화 끝
    57.23s  agent 발화 시작: It’s wonderful to hear you’re feeling excited about it. Expl
    57.23s  user  발화 끝
    63.14s  user  발화 시작: Mm-hmm.
    63.14s  agent 발화 끝
    63.51s  user  발화 시작: I remember, I told you I’m lactose intolerant, right?
    63.51s  user  발화 끝
    66.67s  <ret> 발화 (turn17 첫 프레임)
    66.83s  agent 발화 시작: <ret> Yes, you did. I recall you mentioning your lactose int
    66.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.91s]: [2025-10-12] User is lactose-intolerant.
    66.83s  user  발화 끝
    72.74s  agent 발화 시작: Knowing that, we can easily find restaurants in Seoul that c
    72.74s  agent 발화 끝
    80.86s  agent 발화 끝
