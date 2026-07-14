# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Sam",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to pay the Electric Company one hundred fifty dollars
     4.94s  <ret> 발화 (turn1 첫 프레임)
     5.30s  agent 발화 시작: <ret> [happy] Okay, I’ve requested a payment of one hundred 
     5.30s  user  발화 끝
     5.89s  ⚡SPAN 주입 [d'=0.94s / d_lead=10.98s]: (tool result) Payment request submitted. Reference ID: 9287451.
    16.28s  user  발화 시작: Great. Can you remind me to check if it went through tomorro
    16.28s  agent 발화 끝
    22.01s  <ret> 발화 (turn3 첫 프레임)
    22.33s  agent 발화 시작: <ret> [curious] Absolutely. I’ve set an alarm for tomorrow a
    22.33s  user  발화 끝
    22.81s  ⚡SPAN 주입 [d'=0.80s / d_lead=7.95s]: (tool result) Alarm set for tomorrow at 9:00 AM with message "Check El
    30.28s  user  발화 시작: Actually, yes. What's the weather like in Busan right now?
    30.28s  agent 발화 끝
    33.71s  <ret> 발화 (turn5 첫 프레임)
    34.01s  ⚡SPAN 주입 [d'=0.30s / d_lead=11.36s]: The current weather in Busan is 26.1°C, humidity is 68%, and the wind 
    34.07s  agent 발화 시작: <ret> [sigh] Right now in Busan, it's twenty-six point one d
    34.07s  user  발화 끝
    45.43s  agent 발화 끝
