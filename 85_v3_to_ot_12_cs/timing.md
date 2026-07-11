# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Ruby",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어떤 사람이 유명한 일기를 썼어… | S2 …런던 대화재에 대해서? | S3 오, 흥미롭네. 그 사람이 화재 현장에 실제로 있었어? | S4 …화재 원인에 대해서는 안 썼어? 그냥 화재가 뭐 했는지 쓴 

     0.00s  user  발화 시작: 어떤 사람이 유명한 일기를 썼어…
     3.10s  user  발화 끝
     4.28s  user  발화 시작: …런던 대화재에 대해서?
     5.65s  <ret> 발화 (turn2 첫 프레임)
     5.97s  agent 발화 시작: <ret> 아, 정말 흥미로운 이야기네요. 사무엘 피피스가 17세기 런던의 삶을 자세히 기록한 아주 유명한 
     5.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: Samuel Pepys was an English naval administrator and Member of Parliame
     6.12s  user  발화 끝
    10.74s  user  발화 시작: 응.
    11.23s  user  발화 끝
    14.11s  user  발화 시작: 오, 흥미롭네. 그 사람이 화재 현장에 실제로 있었어?
    14.17s  agent 발화 끝
    17.45s  <ret> 발화 (turn5 첫 프레임)
    17.85s  agent 발화 시작: <ret> 네, 그랬어요. 피피스는 일기에 대화재 당시의 상황을 기록했고, 화재가 어떻게 진행되었고 도시에는
    17.85s  ⚡SPAN 주입 [d'=1.68s / d_lead=9.36s]: Pepys recorded the events of the Great Fire of London in his diary, de
    18.05s  user  발화 끝
    26.82s  <ret> 발화 (turn6 첫 프레임)
    27.13s  agent 발화 시작: <ret> 정말 생생하게 경험을 담아낸 게 놀라워요. 일기는 천육백육십구 년부터 1669년까지의 기록을 담고
    27.21s  agent 발화 끝
    27.94s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.87s]: The diary covers the years 1660 to 1669, and provides a detailed and p
    39.22s  user  발화 시작: …화재 원인에 대해서는 안 썼어? 그냥 화재가 뭐 했는지 쓴 거야?
    39.93s  agent 발화 끝
    43.28s  <ret> 발화 (turn8 첫 프레임)
    43.44s  agent 발화 시작: <ret> 원인에 집중하지 않았고, 오히려 사건이 전개되는 과정, 사람들의 공포, 그리고 파괴에 대해 썼어요
    43.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.99s]: Pepys’s diary entries about the fire do not specifically detail its ca
    43.61s  user  발화 끝
    52.43s  agent 발화 끝
