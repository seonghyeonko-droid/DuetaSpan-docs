# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Thomas",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "home",
#       "text": "User's home address is 62 Oak Avenue."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to find a good hospital, uh, a clinic actually, near 
     5.29s  agent 발화 시작: Mhm.
     5.29s  user  발화 끝
     5.40s  <ret> 발화 (turn2 첫 프레임)
     5.67s  agent 발화 시작: <ret> I see you're looking for a clinic near Seoul Station; 
     5.67s  agent 발화 끝
     5.81s  ⚡SPAN 주입 [d'=0.41s / d_lead=9.82s]: Seoul National University Hospital is located at 101, Bundang-gil, Jon
    15.49s  agent 발화 시작: It’s a very well-regarded institution, if you're seeking com
    15.49s  agent 발화 끝
    19.26s  user  발화 시작: That sounds good. Can you find me a nearby cafe then?
    19.26s  agent 발화 끝
    23.00s  <ret> 발화 (turn5 첫 프레임)
    23.36s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.29s]: (tool result) “스타벅스 서울대학교병원점”, “Starbucks Seoul National University Ho
    23.42s  agent 발화 시작: <ret> Starbucks Seoul National University Hospital Branch is
    23.42s  user  발화 끝
    28.71s  agent 발화 시작: It has a rating of 3.8 out of 5.
    28.71s  agent 발화 끝
    32.11s  user  발화 시작: Okay, that’s perfect. Could you get directions from the hosp
    32.11s  agent 발화 끝
    37.02s  agent 발화 시작: Right.
    37.02s  user  발화 끝
    37.38s  <ret> 발화 (turn9 첫 프레임)
    37.39s  agent 발화 시작: <ret> The directions are to walk approximately 170 meters; i
    37.39s  agent 발화 끝
    37.94s  ⚡SPAN 주입 [d'=0.56s / d_lead=5.29s]: (tool result) “Walk approximately 170 meters”, “1-2 minutes”
    42.68s  agent 발화 시작: Sometimes a short walk can be grounding, even amidst worry.
    42.68s  agent 발화 끝
    46.46s  agent 발화 끝
