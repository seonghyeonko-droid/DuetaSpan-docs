# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Rosa",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Rosa, I'm Velilo.
     1.31s  user  발화 시작: Um, I was just wondering if you remember anything about my d
     1.31s  agent 발화 끝
     4.75s  <ret> 발화 (turn2 첫 프레임)
     5.24s  agent 발화 시작: <ret> Yes, I do! You mentioned you have a Corgi named Mochi 
     5.24s  user  발화 끝
     5.76s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.92s]: [2026-05-05] User has a Corgi named Mochi.
    10.16s  user  발화 시작: Yeah, yeah.
    10.16s  agent 발화 끝
    10.82s  user  발화 시작: Oh, that's right! And I'm allergic to pollen, I recall telli
    10.82s  user  발화 끝
    14.75s  agent 발화 시작: Mhm.
    14.75s  user  발화 끝
    15.04s  <ret> 발화 (turn6 첫 프레임)
    15.08s  agent 발화 시작: <ret> That’s correct, Rosa. You also told me about your poll
    15.08s  agent 발화 끝
    15.87s  ⚡SPAN 주입 [d'=0.83s / d_lead=4.59s]: [2026-01-17] User is allergic to pollen.
    19.66s  user  발화 시작: Uh-huh.
    19.66s  agent 발화 끝
    19.99s  user  발화 시작: Right. I’m training for a marathon, so sleep is…challenging.
    19.99s  user  발화 끝
    22.94s  agent 발화 시작: Mm-hmm.
    22.94s  user  발화 끝
    23.27s  agent 발화 시작: I see. Marathon training and good sleep can be tough to bala
    23.27s  agent 발화 끝
    33.43s  agent 발화 끝
