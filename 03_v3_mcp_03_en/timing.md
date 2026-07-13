# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "Noa",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "home",
#       "text": "User's home address is 357 Maple Drive."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m hoping to book a therapy sessi | S2 Yeah, it is. Do you know any child | S3 Ms. Sharma sounds good. Can you se | S4 Perfect, thank you! That’s a huge 

     0.00s  user  발화 시작: I’m hoping to book a therapy session for my son, Leo. He’s b
     6.98s  agent 발화 시작: Yeah.
     6.98s  user  발화 끝
     7.32s  agent 발화 시작: [happy] I understand, that can be really hard on a little on
     7.32s  agent 발화 끝
    13.64s  user  발화 시작: Yeah, it is. Do you know any child psychologists who take ne
    13.64s  agent 발화 끝
    17.96s  agent 발화 시작: Uh-huh.
    17.96s  user  발화 끝
    17.97s  <ret> 발화 (turn5 첫 프레임)
    18.29s  agent 발화 시작: <ret> There are a couple of child psychologists with opening
    18.29s  agent 발화 끝
    18.33s  ⚡SPAN 주입 [d'=0.37s / d_lead=10.31s]: (tool result) {"providers": [{"name": "Dr. Evelyn Reed", "specialty": 
    28.60s  user  발화 시작: Mhm.
    28.60s  agent 발화 끝
    28.94s  agent 발화 시작: Ms. Sharma's availability might be easier to fit into a scho
    28.94s  user  발화 끝
    32.93s  user  발화 시작: Ms. Sharma sounds good. Can you see if she has anything open
    32.93s  agent 발화 끝
    37.24s  <ret> 발화 (turn9 첫 프레임)
    37.58s  agent 발화 시작: <ret> [curious] Absolutely. I’ve booked an appointment for L
    37.58s  user  발화 끝
    37.83s  ⚡SPAN 주입 [d'=0.60s / d_lead=9.65s]: (tool result) {"appointment id": "AS7892", "provider": "Ms. Anya Sharm
    47.23s  user  발화 시작: Mhm.
    47.23s  agent 발화 끝
    47.56s  user  발화 시작: Perfect, thank you! That’s a huge weight off my mind.
    47.56s  user  발화 끝
    50.89s  agent 발화 시작: [sigh] You’re very welcome. Remember, acknowledging Leo’s fe
    50.89s  user  발화 끝
    57.87s  agent 발화 끝
