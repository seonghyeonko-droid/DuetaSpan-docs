# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Iris",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-11-29",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hi Kuia, do you know who played Jack Snyder on As the World 
     3.17s  <ret> 발화 (turn1 첫 프레임)
     3.56s  agent 발화 시작: <ret> Michael Frank Park portrayed Jack Snyder on that show—
     3.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: Michael Frank Park played Jack Snyder on As the World Turns from 1997 
     3.66s  user  발화 끝
     7.18s  user  발화 시작: …did he play any other well-known roles?
     8.24s  agent 발화 끝
     9.67s  <ret> 발화 (turn3 첫 프레임)
     9.90s  agent 발화 시작: <ret> He’s also recognized for playing Detective Chris LaSal
     9.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: Michael Frank Park is also known for his roles as Detective Chris LaSa
    10.09s  user  발화 끝
    13.53s  user  발화 시작: Yeah, yeah.
    14.76s  user  발화 끝
    17.08s  agent 발화 시작: It’s wonderful to discover more about actors we enjoy, isn’t
    17.27s  agent 발화 끝
    20.29s  user  발화 시작: Yeah.
    20.74s  user  발화 끝
    23.65s  agent 발화 끝
    23.76s  user  발화 시작: That’s really interesting, thanks Kuia.
    26.30s  user  발화 끝
