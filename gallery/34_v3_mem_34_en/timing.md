# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Ava",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "home",
#       "text": "User's home address is 30 Oak Avenue."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 welll… I need to get to a pottery  | S2 number 142. | S3 that's great, thank you. uhhh… is  | S4 no, that’s all, thank you Hia.

     0.00s  agent 발화 시작: Hi Ava, I'm Hia. It's lovely to connect with you.
     3.35s  user  발화 시작: welll… I need to get to a pottery class.
     3.38s  agent 발화 끝
     6.10s  <ret> 발화 (turn2 첫 프레임)
     6.18s  agent 발화 시작: <ret> Your home address is 30 Oak Avenue, so I can use that 
     6.21s  user  발화 끝
     7.54s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.14s]: [2025-08-06] User's home address is 30 Oak Avenue.
     9.75s  user  발화 시작: Yeah, yeah.
    10.90s  user  발화 시작: yes, that's right. It’s on Rue de Rivoli.
    11.03s  user  발화 끝
    11.32s  agent 발화 끝
    13.81s  user  발화 끝
    14.20s  agent 발화 시작: And the destination is Rue de Rivoli in Paris. Do you have a
    17.97s  user  발화 시작: Mm-hmm.
    18.46s  user  발화 끝
    21.14s  agent 발화 끝
    21.33s  user  발화 시작: number 142.
    22.79s  <ret> 발화 (turn8 첫 프레임)
    22.91s  agent 발화 시작: <ret> Driving to 142 Rue de Rivoli is six point eight kilome
    22.98s  user  발화 끝
    24.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) Driving directions: 6.8 km, estimated time 23 minutes.
    28.74s  user  발화 시작: Yeah.
    29.23s  user  발화 끝
    31.32s  agent 발화 시작: Would you like me to send those directions to your phone?
    31.35s  agent 발화 끝
    34.53s  user  발화 시작: please do.
    34.70s  agent 발화 끝
    35.31s  <ret> 발화 (turn12 첫 프레임)
    35.36s  user  발화 끝
    35.38s  agent 발화 시작: <ret> I've shared the location with you. Confirmation ID is 
    37.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: (tool result) Location shared successfully with Ava. Confirmation ID: 
    37.62s  user  발화 시작: Mhm.
    38.11s  user  발화 끝
    40.71s  agent 발화 끝
    41.69s  user  발화 시작: that's great, thank you. uhhh… is there traffic?
    45.14s  <ret> 발화 (turn15 첫 프레임)
    45.21s  user  발화 끝
    45.22s  agent 발화 시작: <ret> There’s moderate congestion on Boulevard Saint-Germain
    47.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: (tool result) Traffic: Moderate congestion on Boulevard Saint-Germain,
    48.68s  user  발화 시작: Right.
    49.08s  user  발화 끝
    50.38s  user  발화 시작: oh, okay. good to know.
    50.55s  agent 발화 끝
    51.87s  agent 발화 시작: It’s always helpful to be prepared for a little extra time, 
    52.12s  user  발화 끝
    53.46s  user  발화 시작: Yeah.
    54.04s  user  발화 끝
    56.51s  user  발화 시작: no, that’s all, thank you Hia.
    56.69s  agent 발화 끝
    58.11s  agent 발화 시작: You're very welcome, Ava. Enjoy your pottery class.
    58.26s  user  발화 끝
    61.21s  agent 발화 끝
