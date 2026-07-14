# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "Thomas",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is French."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "skill",
#       "text": "User is a complete beginner at beekeeping."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "child",
#       "text": "User has a child named Hana, age 8."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "employer",
#       "text": "User works at a research institute."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "airline",
#       "text": "User usually flies with Singapore Airlines."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-06-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I'd like to get four tickets to see the musical Chicago in S
     4.68s  <ret> 발화 (turn1 첫 프레임)
     5.03s  agent 발화 시작: <ret> [happy] Okay, I've got four tickets to see Chicago in 
     5.03s  user  발화 끝
     5.62s  ⚡SPAN 주입 [d'=0.94s / d_lead=8.50s]: (tool result) Confirmation: Chicago, Seattle, 2024-08-20, 4 tickets, o
    13.53s  user  발화 시작: Yeah, yeah.
    13.53s  agent 발화 끝
    14.16s  user  발화 시작: Yes, that's perfect! Thank you.
    14.16s  user  발화 끝
    15.73s  agent 발화 시작: You're very welcome! Planning something fun is a great way t
    15.73s  user  발화 끝
    22.97s  user  발화 시작: Yeah.
    22.97s  agent 발화 끝
    23.29s  user  발화 시작: Actually, yes, I am. I'm going to be there for a week.
    23.29s  user  발화 끝
    27.06s  agent 발화 시작: Mm-hmm.
    27.06s  user  발화 끝
    27.38s  agent 발화 시작: That sounds lovely! Seattle is a wonderful city. I can help 
    27.38s  agent 발화 끝
    37.13s  agent 발화 끝
