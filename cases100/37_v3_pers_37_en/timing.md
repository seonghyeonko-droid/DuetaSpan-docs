# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Riley",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-15",
#       "category": "skill",
#       "text": "User is getting fairly good at alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 24°C."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-04-01",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-03-11",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Bonjour, Riley. I’m Mal, and I help people feel settled when
     9.31s  agent 발화 끝
    10.48s  user  발화 시작: Oh… a settling-in guide? That’s… specific. I just moved here
    16.03s  agent 발화 시작: It *is* specific! I find new arrivals often feel overwhelmed
    16.03s  user  발화 끝
    24.97s  user  발화 시작: Yeah.
    25.51s  user  발화 끝
    27.90s  agent 발화 끝
    27.90s  agent 발화 시작: Perhaps finding your way around? Or maybe connecting with pe
    32.94s  user  발화 시작: Uh-huh.
    33.43s  user  발화 끝
    39.20s  user  발화 시작: Definitely the people. I work from home, so it’s not like I 
    39.45s  agent 발화 끝
    43.13s  user  발화 끝
    43.27s  agent 발화 시작: That’s very common when you’re remote. Building a social lif
    53.84s  agent 발화 끝
    54.00s  user  발화 시작: I guess… I don’t even know where to *look* for those things.
    57.24s  user  발화 끝
    57.51s  agent 발화 시작: There are a few options! Atelier des Lumières offers art cla
    76.39s  agent 발화 끝
