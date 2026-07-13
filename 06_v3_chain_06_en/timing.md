# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Jordan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I'm really struggling to get started on this play. I have id
     6.23s  agent 발화 시작: Mm-hmm.
     6.23s  user  발화 끝
     6.62s  agent 발화 시작: [happy] It's totally normal to feel stuck, especially at the
     6.62s  agent 발화 끝
    15.19s  user  발화 시작: Outlining always feels so… rigid. Like it kills the creativi
    15.19s  agent 발화 끝
    18.55s  <ret> 발화 (turn4 첫 프레임)
    18.95s  ⚡SPAN 주입 [d'=0.40s / d_lead=13.63s]: Spaced repetition involves reviewing material at increasing intervals,
    19.08s  agent 발화 시작: <ret> I understand! A strict outline isn’t for everyone. We 
    19.08s  user  발화 끝
    32.71s  user  발화 시작: Yeah.
    32.71s  agent 발화 끝
    33.10s  user  발화 시작: The Pomodoro Technique sounds interesting. Could you tell me
    33.10s  user  발화 끝
    38.55s  agent 발화 시작: Yeah.
    38.55s  user  발화 끝
    38.94s  agent 발화 시작: [curious] Absolutely! It's a really simple method. You work 
    38.94s  agent 발화 끝
    55.29s  agent 발화 끝
