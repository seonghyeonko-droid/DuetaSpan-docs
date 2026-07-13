# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Iris",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Iris, I'm Doralo. It's lovely to meet you. I'm here to of
     6.33s  user  발화 시작: Um, what time is it right now in London?
     6.33s  agent 발화 끝
     9.34s  <ret> 발화 (turn2 첫 프레임)
     9.50s  agent 발화 시작: <ret> It is currently 3:17 PM in London, Iris. A peaceful af
     9.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.63s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Europe/London 
     9.50s  user  발화 끝
    15.13s  user  발화 시작: Yeah.
    15.13s  agent 발화 끝
    15.48s  user  발화 시작: I was just thinking about my trip to Kyoto last year…
    15.48s  user  발화 끝
    19.11s  <ret> 발화 (turn5 첫 프레임)
    19.35s  agent 발화 시작: <ret> I see you’ve noted your interest in home fermentation 
    19.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.92s]: [2026-05-07] User is into home fermentation.
    19.35s  user  발화 끝
    24.27s  user  발화 시작: Okay.
    24.27s  agent 발화 끝
    24.62s  user  발화 시작: No, not that one! The Kyoto trip… the one I told you about.
    24.62s  user  발화 끝
    28.96s  <ret> 발화 (turn8 첫 프레임)
    29.20s  agent 발화 시작: <ret> My apologies, Iris. That note details your car researc
    29.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: [2025-11-16] Past chat — Researching a used car: comparing hybrid mode
    29.20s  user  발화 끝
    36.23s  agent 발화 끝
